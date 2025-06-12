import { getBy } from './utils.ts';
import type { DataRecord } from './utils.ts';

// Types
// -----

/** 元数据类型 */
export type MetaData = {
  /** 分组依据的字段名 */
  groupBy: string;
  /** 分组的值 */
  value: unknown;
  /** 分组的显示标签 */
  label?: unknown;
  /** 其他元数据 */
  [key: string]: unknown;
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
export type GroupConfig = {
  /** 分组依据的字段名 */
  groupBy: string;
  /** 分组标签的字段名 */
  labelBy?: string;
  /** 其他配置 */
  [key: string]: unknown;
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
 */
function getGroupLabel(items: DataRecord[], labelBy?: string): unknown {
  if (!items[0]) {
    return undefined;
  }

  return labelBy ? getBy(items[0], labelBy) : undefined;
}

/**
 * 创建分组节点
 */
function createGroupNode({
  groupBy,
  value,
  children,
  rest = {},
  label,
}: GroupNodeParams): GroupNode {
  return {
    $meta: {
      ...rest,
      groupBy,
      value,
      ...(label ? { label } : undefined),
    },
    children,
  };
}

/**
 * 处理叶子分组
 */
function handleLeafGroup(
  items: DataRecord[],
  params: GroupNodeParams,
): TreedNode {
  return items.length === 1 && items[0] ? items[0] : createGroupNode(params);
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
export function table2tree(
  data: DataRecord[] = [],
  groups: Groups = [],
): Table2Treed {
  const paths = Array.isArray(groups) ? groups : [groups];

  if (!data?.length || !paths?.length) {
    return data;
  }

  const [current, ...nextPaths] = paths;
  const { groupBy, labelBy = groupBy, ...rest } = current as GroupConfig;
  const configs = Map.groupBy(data, (item) => getBy(item, groupBy));

  return Array.from(configs, ([value, items]) => {
    const label = getGroupLabel(items, labelBy);
    const groupParams: GroupNodeParams = {
      groupBy,
      value,
      children: nextPaths.length > 0 ? table2tree(items, nextPaths) : items,
      rest,
      label,
    };

    return nextPaths.length > 0
      ? createGroupNode(groupParams)
      : handleLeafGroup(items, groupParams);
  });
}
