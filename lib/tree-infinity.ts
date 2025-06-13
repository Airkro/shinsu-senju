import { getBy } from './utils.ts';
import type { DataRecord } from './utils.ts';

/**
 * 表示树节点的基本结构
 */
export interface TreeNode extends DataRecord {
  /** 节点唯一标识符 */
  id?: unknown;
  /** 子节点数组 */
  children?: TreeNode[];
}

/**
 * 判断节点是否为根节点
 * @param node 要判断的节点
 * @param nodeMap 节点映射表
 */
function isRoot(
  node: TreeNode,
  nodeMap: Map<unknown, TreeNode>,
  parentKey: string,
): boolean {
  return getBy(node, parentKey) == null || !nodeMap.has(getBy(node, parentKey));
}

/**
 * 将节点添加到其父节点的children中
 * @param node 要添加的节点
 * @param parent 父节点
 */
function addToParent(node: TreeNode, parent: TreeNode): void {
  parent.children ??= [];
  parent.children.push(node);
}

/**
 * 将扁平的节点数组转换为树形结构
 * 该函数能够处理乱序数据，即父节点可能出现在子节点之后的情况
 * @param data 扁平节点数组，可以是任意顺序
 * @returns 树形结构
 */
export function treeInfinity(
  data: TreeNode[],
  parentKey: string = 'parentId',
): TreeNode[] {
  // 创建节点映射，同时复制节点以避免修改原始数据
  const nodeMap = new Map(data.map((node) => [node.id, { ...node }]));

  // 构建树结构
  for (const node of nodeMap.values()) {
    if (!isRoot(node, nodeMap, parentKey)) {
      const parent = nodeMap.get(getBy(node, parentKey));

      if (parent) {
        addToParent(node, parent);
      }
    }
  }

  // 返回根节点（没有父节点或父节点不存在的节点）
  return [...nodeMap.values()].filter((node) =>
    isRoot(node, nodeMap, parentKey),
  );
}
