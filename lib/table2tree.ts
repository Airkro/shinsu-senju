import { get } from 'lodash-es';

/**
 * 从对象中获取指定路径的值，支持点号分隔的路径
 * @param object - 源对象
 * @param path - 属性路径
 * @returns 属性值
 */
export function getBy(object: DataRecord, path: string): unknown {
  return path.includes('.') ? get(object, path) : object[path];
}

export type DataRecord = {
  [key: string]: unknown;
  children?: DataRecord[];
};

export interface GroupConfig {
  groupBy: string;
  label?: string;
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

// 创建分组节点
function createGroupNode(
  groupBy: string,
  value: unknown,
  children: TreedNode[],
  rest: Record<string, unknown> = {},
): GroupNode {
  return {
    $meta: { ...rest, groupBy, value },
    children,
  };
}

// 处理叶子分组
function handleLeafGroup(
  items: DataRecord[],
  groupBy: string,
  value: unknown,
  rest: Record<string, unknown>,
): TreedNode {
  if (items.length === 1) {
    return items[0];
  }

  return createGroupNode(groupBy, value, items, rest);
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
  const { groupBy, ...rest } = current;
  const groups = Map.groupBy(data, (item) => getBy(item, groupBy));

  return Array.from(groups, ([value, items]) => {
    if (nextPaths.length === 0) {
      return handleLeafGroup(items, groupBy, value, rest);
    }

    const children = table2tree(items, nextPaths);

    return createGroupNode(groupBy, value, children, rest);
  });
}
