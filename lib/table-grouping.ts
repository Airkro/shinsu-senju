import { getBy } from './utils.ts';
import type { DataRecord, UnknownObject } from './utils.ts';

// Types
// -----

/**
 * 字段值类型，表示从数据记录中提取的值
 * 可以是任何类型，但通常是字符串、数字或布尔值
 */
export type FieldValue = unknown;

/**
 * 元数据接口，描述分组节点的元信息
 */
export interface MetaData extends UnknownObject {
  /** 分组依据的字段名 */
  readonly groupBy: string;
  /** 分组的值 */
  readonly value: FieldValue;
  /** 分组的显示标签（可选） */
  readonly label?: FieldValue;
}

/**
 * 分组节点接口，表示树中的一个分组
 */
export interface GroupNode extends UnknownObject {
  /** 节点元数据 */
  readonly $meta: MetaData;
  /** 子节点列表 */
  readonly children: readonly TreeNode[];
}

/**
 * 树形节点类型，可以是数据记录或分组节点
 */
export type TreeNode = DataRecord | GroupNode;

/**
 * 树形结构数据类型
 */
export type Table2Treed = readonly TreeNode[];

/**
 * 分组配置接口，定义如何对数据进行分组
 */
export interface GroupConfig extends Record<string, unknown> {
  /** 分组依据的字段名 */
  readonly groupBy?: string;
  /** 分组标签的字段名，默认使用 groupBy 的值 */
  readonly labelBy?: string;
  /** 是否跳过单个子项的分组 */
  readonly skipSingle?: boolean;
}

/**
 * 分组配置类型，可以是单个配置或配置数组
 */
export type Groups = GroupConfig | readonly GroupConfig[];

/**
 * 分组处理配置接口
 */
interface GroupProcessConfig {
  /** 分组依据的字段名 */
  readonly groupBy: string;
  /** 分组标签的字段名 */
  readonly labelBy: string;
  /** 是否跳过单个子项的分组 */
  readonly skipSingle: boolean;
  /** 额外的元数据 */
  readonly additionalMetadata: Record<string, unknown>;
}

/**
 * 分组节点创建参数
 */
interface GroupNodeParams {
  /** 分组依据的字段名 */
  readonly groupBy: string;
  /** 分组的值 */
  readonly value: FieldValue;
  /** 子节点列表 */
  readonly children: readonly TreeNode[];
  /** 额外的元数据 */
  readonly rest?: Record<string, unknown>;
  /** 分组的显示标签 */
  readonly label?: FieldValue;
}

// Core Logic
// ---------

/**
 * 创建分组节点
 * @param params - 分组节点参数
 * @returns 分组节点
 */
function createGroupNode({
  groupBy,
  value,
  children,
  rest = {},
  label,
}: GroupNodeParams): GroupNode {
  const meta: MetaData = {
    ...rest,
    groupBy,
    value,
    ...(label !== undefined && { label }),
  };

  return { $meta: meta, children };
}

/**
 * 将数据项添加到分组映射中
 * @param groups - 分组映射
 * @param key - 分组键
 * @param item - 数据项
 */
function addToGroup(
  groups: Map<FieldValue, DataRecord[]>,
  key: FieldValue,
  item: DataRecord,
): void {
  if (!groups.has(key)) {
    groups.set(key, []);
  }

  const arr = groups.get(key);

  if (arr) {
    arr.push(item);
  }
}

/**
 * 按指定字段对数据进行分组
 * @param data - 数据记录数组
 * @param groupBy - 分组字段名
 * @returns 分组后的 Map 对象和未分组的数据项
 */
function groupByField(
  data: DataRecord[],
  groupBy: string,
): { groups: Map<FieldValue, DataRecord[]>; ungrouped: DataRecord[] } {
  const groups = new Map<FieldValue, DataRecord[]>();
  const ungrouped: DataRecord[] = [];

  for (const item of data) {
    const key = getBy(item, groupBy);

    if (key === undefined) {
      ungrouped.push(item);
    } else {
      addToGroup(groups, key, item);
    }
  }

  return { groups, ungrouped };
}

/**
 * 获取分组标签
 * @param firstItem - 分组中的第一个数据项
 * @param labelBy - 标签字段名
 * @returns 分组标签
 */
function getGroupLabel(
  firstItem: DataRecord | undefined,
  labelBy: string,
): FieldValue | undefined {
  return firstItem && labelBy ? getBy(firstItem, labelBy) : undefined;
}

function groupRecursive(
  data: DataRecord[],
  configs: readonly GroupProcessConfig[],
): Table2Treed {
  if (configs.length === 0) {
    return data;
  }

  const [current, ...rest] = configs;

  if (!current?.groupBy) {
    return groupRecursive(data, rest);
  }

  const { groupBy, labelBy, skipSingle, additionalMetadata } = current;
  const { groups, ungrouped } = groupByField(data, groupBy);
  const nodes: TreeNode[] = [];

  for (const [value, items] of groups) {
    if (items.length === 1 && skipSingle && items[0] !== undefined) {
      nodes.push(items[0]);
    } else {
      nodes.push(
        createGroupNode({
          groupBy,
          value,
          children: rest.length > 0 ? groupRecursive(items, rest) : items,
          rest: additionalMetadata,
          label: getGroupLabel(items[0], labelBy),
        }),
      );
    }
  }

  const processedUngrouped =
    rest.length > 0 ? groupRecursive(ungrouped, rest) : ungrouped;

  return [...nodes, ...processedUngrouped];
}

/**
 * 将表格数据转换为树形结构
 * @param data - 源数据记录数组
 * @param groupConfigs - 分组配置，可以是单个配置或配置数组
 * @returns 树形结构数据
 */
export function tableGrouping(
  data: DataRecord[] = [],
  groupConfigs: Groups = [],
): Table2Treed {
  if (data.length === 0) {
    return data;
  }

  const configs = (
    Array.isArray(groupConfigs) ? groupConfigs : [groupConfigs]
  ).map(
    ({
      skipSingle = false,
      groupBy,
      labelBy = groupBy,
      ...additionalMetadata
    }) => ({
      groupBy,
      labelBy,
      skipSingle,
      additionalMetadata,
    }),
  );

  return groupRecursive(data, configs);
}
