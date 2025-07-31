import { getBy } from './utils.ts';
import type { UnknownObject } from './utils.ts';

/**
 * 表示树节点的基本结构
 */
export interface TreeNode extends UnknownObject {
  /** 节点唯一标识符 */
  id?: unknown;
  /** 子节点数组 */
  children?: TreeNode[];
}

/**
 * 将节点添加到其父节点的 children 数组中
 * @param node 要添加的节点
 * @param parent 父节点
 */
function addToParent(node: TreeNode, parent: TreeNode): void {
  const { children = [] } = parent;
  const newChildren = [...children, node];
  Object.assign(parent, { children: newChildren });
}

/**
 * 将扁平的节点数组转换为树形结构
 * 支持乱序数据，自动处理父节点在子节点后出现的情况
 * @param data 扁平节点数组
 * @param parentKey 父节点字段名，默认为 'parentId'
 * @returns 树形结构数组
 */
export function treeInfinity(
  data: TreeNode[],
  parentKey: string = 'parentId',
): TreeNode[] {
  if (!Array.isArray(data) || data.length === 0) {
    return [];
  }

  const nodeMap = new Map<unknown, TreeNode>();

  for (const item of data) {
    if (item && item.id != null) {
      const node = { ...item };
      nodeMap.set(node.id, node);
    }
  }

  const roots: TreeNode[] = [];

  for (const node of nodeMap.values()) {
    const parentId = getBy(node, parentKey);
    const parent: TreeNode | undefined =
      parentId == null ? undefined : nodeMap.get(parentId);

    if (parent) {
      addToParent(node, parent);
    } else {
      roots.push(node);
    }
  }

  return roots;
}
