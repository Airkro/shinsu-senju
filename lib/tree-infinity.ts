/**
 * 表示树节点的基本结构
 */
interface TreeNode {
  /** 节点唯一标识符 */
  id: unknown;
  /** 父节点的标识符 */
  parentId?: unknown;
  /** 子节点数组 */
  children?: Tree;
}

/** 树节点数组类型 */
type Tree = TreeNode[];

/**
 * 将扁平的节点数组转换为树形结构
 * 该函数能够处理乱序数据，即父节点可能出现在子节点之后的情况
 * @param data 扁平节点数组，可以是任意顺序
 * @returns 树形结构
 */
export function treeInfinity(data: Tree): Tree {
  const nodeMap = new Map<unknown, TreeNode>();
  const roots: Tree = [];

  // 第一阶段：复制节点，避免修改原始数据
  // 同时建立id到节点的映射，这使得我们可以处理乱序数据
  for (const node of data) {
    nodeMap.set(node.id, { ...node });
  }

  // 第二阶段：构建树结构
  // 由于所有节点都已在nodeMap中，所以可以正确处理父节点在子节点之后出现的情况
  for (const [, node] of nodeMap) {
    if (node.parentId == null || !nodeMap.has(node.parentId)) {
      // 如果节点没有父节点或父节点不存在，则作为根节点
      roots.push(node);
    } else {
      const parent = nodeMap.get(node.parentId);

      if (parent) {
        // 确保parent.children存在
        parent.children ??= [];
        parent.children.push(node);
      }
    }
  }

  return roots;
}
