import { get } from 'lodash-es';

import type {
  DataRecord,
  GroupConfig,
  GroupNode,
  TreeNode,
} from './types.d.ts';

/**
 * 从对象中获取指定路径的值，支持点号分隔的路径
 * @param object - 源对象
 * @param path - 属性路径
 * @returns 属性值
 */
export function getBy(object: DataRecord, path: string): unknown {
  if (!path) {
    return undefined;
  }

  return path.includes('.') ? get(object, path) : object[path];
}

// 创建分组节点
function createGroupNode(
  groupBy: string,
  value: unknown,
  children: TreeNode[],
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
): TreeNode {
  if (items.length === 1) {
    return items[0];
  }

  return createGroupNode(groupBy, value, items, rest);
}

// 递归分组主逻辑
export function table2tree(
  data: DataRecord[],
  paths: GroupConfig[],
): TreeNode[] {
  if (!data?.length || !paths?.length) {
    return [];
  }

  const [current, ...nextPaths] = paths;
  const { groupBy, ...rest } = current;
  const groups = Map.groupBy(data, (item) => getBy(item, groupBy));

  return Array.from(groups, ([value, items]) => {
    if (nextPaths.length === 0) {
      return handleLeafGroup(items, groupBy, value, rest);
    }

    const children = table2tree(items, nextPaths);

    if (children.length === 1) {
      return children[0];
    }

    return createGroupNode(groupBy, value, children, rest);
  });
}
