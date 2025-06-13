import { getBy } from './utils.ts';
import type { DataRecord } from './utils.ts';

// Types
// -----

/** 元数据类型 */
export type MetaData = Record<string, unknown> & {
  /** 分组依据的字段名 */
  groupBy: string;
  /** 分组的值 */
  value: unknown;
  /** 分组的显示标签 */
  label?: unknown;
};

/** 分组节点类型 */
export type GroupNode = {
  /** 元数据 */
  $meta: MetaData;
  /** 子节点列表 */
  children: TreedNode[];
};

/** 树形节点类型 */
export type TreedNode = DataRecord | GroupNode;

/** 树形化后的数据类型 */
export type Table2Treed = TreedNode[];

/** 分组配置类型 */
export type GroupConfig = Record<string, unknown> & {
  /** 分组依据的字段名 */
  groupBy: string;
  /** 分组标签的字段名 */
  labelBy?: string;
};

/** 分组节点参数类型 */
type GroupNodeParams = {
  /** 分组依据的字段名 */
  groupBy: string;
  /** 分组的值 */
  value: unknown;
  /** 子节点列表 */
  children: TreedNode[];
  /** 额外的元数据 */
  rest?: Record<string, unknown>;
  /** 分组的显示标签 */
  label?: unknown;
};

// Utilities
// ---------

/**
 * 提取分组标签
 * @param items - 数据记录数组
 * @param labelBy - 标签字段名
 * @returns 分组标签值
 */
function getGroupLabel(firstItem: DataRecord, labelBy: string): unknown {
  return getBy(firstItem, labelBy);
}

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
  };

  if (label !== undefined) {
    meta.label = label;
  }

  return {
    $meta: meta,
    children,
  };
}

/**
 * 处理叶子分组
 * @param items - 数据记录数组
 * @param params - 分组节点参数
 * @returns 树形节点
 */
function handleLeafGroup(
  items: DataRecord[],
  params: GroupNodeParams,
): TreedNode {
  // 如果只有一个子项，直接返回该项，否则创建分组节点
  return items.length === 1
    ? (items[0] as DataRecord)
    : createGroupNode(params);
}

/**
 * 按指定字段对数据进行分组
 * @param data - 数据记录数组
 * @param groupBy - 分组字段名
 * @returns 分组后的Map对象和未分组的数据项
 */
function groupByField(
  data: DataRecord[],
  groupBy: string,
): { groups: Map<unknown, DataRecord[]>; ungrouped: DataRecord[] } {
  const groups = new Map<unknown, DataRecord[]>();
  const ungrouped: DataRecord[] = [];

  for (const item of data) {
    const key = getBy(item, groupBy);

    if (key === undefined) {
      ungrouped.push(item);
    } else {
      const group = groups.get(key) ?? [];
      group.push(item);
      groups.set(key, group);
    }
  }

  return { groups, ungrouped };
}

// Core Logic
// ---------

export type Groups = GroupConfig | GroupConfig[];

/**
 * 将表格数据转换为树形结构
 * @param data - 源数据记录数组
 * @param groups - 分组配置，可以是单个配置或配置数组
 * @returns 树形结构数据
 */
export function tableGrouping(
  data: DataRecord[] = [],
  groupConfigs: Groups = [],
): Table2Treed {
  // 处理空数据或空分组配置的情况
  if (!data?.length || !groupConfigs) {
    return data;
  }

  // 标准化分组配置为数组
  const paths = Array.isArray(groupConfigs) ? groupConfigs : [groupConfigs];

  if (paths.length === 0) {
    return data;
  }

  // 获取当前层级的分组配置
  const [current, ...nextPaths] = paths;

  // 确保 current 存在且为 GroupConfig 类型
  if (!current || typeof current !== 'object' || !('groupBy' in current)) {
    return tableGrouping(data, nextPaths);
  }

  const { groupBy, labelBy = groupBy, ...rest } = current;

  // 按分组字段对数据进行分组
  const { groups, ungrouped } = groupByField(data, groupBy);
  const result: TreedNode[] = [];

  // 处理每个分组
  for (const [value, items] of groups) {
    if (items.length > 0) {
      const label =
        items[0] && labelBy ? getGroupLabel(items[0], labelBy) : undefined;
      const children =
        nextPaths.length > 0 ? tableGrouping(items, nextPaths) : items;

      const groupParams: GroupNodeParams = {
        groupBy,
        value,
        children,
        rest,
        label,
      };

      // 如果还有下一级分组，创建分组节点；否则处理叶子分组
      const node =
        nextPaths.length > 0
          ? createGroupNode(groupParams)
          : handleLeafGroup(items, groupParams);

      result.push(node);
    }
  }

  // 处理未分组的数据项
  if (ungrouped.length > 0) {
    // 如果有下一级分组，递归处理未分组项
    const ungroupedItems =
      nextPaths.length > 0 ? tableGrouping(ungrouped, nextPaths) : ungrouped;

    // 直接将未分组数据项添加到结果列表中
    result.push(...ungroupedItems);
  }

  return result;
}
