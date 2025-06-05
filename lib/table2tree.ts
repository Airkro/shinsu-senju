import { getBy } from './utils.ts';
import type { DataRecord } from './utils.ts';

export interface GroupConfig {
  groupBy: string;
  labelBy?: string;
}

export interface GroupNode {
  $meta: {
    groupBy: string;
    value: unknown;
    label?: string;
    [key: string]: unknown;
  };
  children: TreedNode[];
}

type TreedNode = DataRecord | GroupNode;

export type Table2Treed = TreedNode[];

// 提取 label 获取逻辑
function getGroupLabel(
  items: DataRecord[],
  labelBy?: string,
): string | undefined {
  if (labelBy && items.length > 0) {
    const labelValue = getBy(items[0], labelBy);

    if (labelValue !== undefined) {
      return String(labelValue);
    }
  }

  return undefined;
}

// 创建分组节点
function createGroupNode(
  groupBy: string,
  value: unknown,
  children: TreedNode[],
  rest: Record<string, unknown> = {},
  label?: string,
): GroupNode {
  return {
    $meta: {
      ...rest,
      groupBy,
      value,
      ...(label ? { label } : {}),
    },
    children,
  };
}

// 处理叶子分组
function handleLeafGroup(
  items: DataRecord[],
  groupBy: string,
  value: unknown,
  rest: Record<string, unknown>,
  label?: string,
): TreedNode {
  if (items.length === 1) {
    return items[0];
  }

  return createGroupNode(groupBy, value, items, rest, label);
}

// 递归分组主逻辑
export function table2tree(
  data: DataRecord[] = [],
  path: GroupConfig | GroupConfig[] = [],
): Table2Treed {
  const paths = Array.isArray(path) ? path : [path];

  if (!data?.length || !paths?.length) {
    return data;
  }

  const [current, ...nextPaths] = paths;
  const { groupBy, labelBy, ...rest } = current;
  const groups = Map.groupBy(data, (item) => getBy(item, groupBy));

  return Array.from(groups, ([value, items]) => {
    const label = getGroupLabel(items, labelBy);

    if (nextPaths.length === 0) {
      return handleLeafGroup(items, groupBy, value, rest, label);
    }

    const children = table2tree(items, nextPaths);

    return createGroupNode(groupBy, value, children, rest, label);
  });
}
