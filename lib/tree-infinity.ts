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
 * 判断节点是否为根节点
 * @param node 要判断的节点
 * @param nodeMap 节点映射表
 * @param parentKey 父节点字段名
 */
function isRoot(
  node: TreeNode,
  nodeMap: Map<unknown, TreeNode>,
  parentKey: string,
): boolean {
  const parentId = getBy(node, parentKey);

  return parentId == null || !nodeMap.has(parentId);
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

  // 创建节点映射，复制节点避免污染原始数据
  const nodeMap = new Map<unknown, TreeNode>();

  for (const node of data) {
    if (node && node.id != null) {
      nodeMap.set(node.id, { ...node });
    }
  }

  // 构建树结构
  for (const node of nodeMap.values()) {
    const parentId = getBy(node, parentKey);

    if (parentId != null && nodeMap.has(parentId)) {
      const parent = nodeMap.get(parentId);

      if (parent) {
        addToParent(node, parent);
      }
    }
  }

  // 返回所有根节点
  return nodeMap
    .values()
    .filter((node) => isRoot(node, nodeMap, parentKey))
    .toArray();
}
