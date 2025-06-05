import { Table2Treed } from './table2tree.ts';
import type { DataRecord, GroupNode } from './table2tree.ts';

export type TreeValue = string | number | boolean;

export interface TreeNode {
  label: string;
  value: TreeValue;
  selectable?: boolean;
  children?: Tree;
}

export type Tree = TreeNode[];

export interface Options {
  label?: string;
  value?: string;
}

export function treeMapper(
  data: Table2Treed,
  { label = 'name', value = 'id' }: Options = {},
): Tree {
  return data.map((node: GroupNode | DataRecord) => {
    if ('$meta' in node) {
      const io = node as GroupNode;

      return {
        label:
          ((io.$meta[label] || io.$meta[value]) as string) || io.$meta.groupBy,
        value: io.$meta.value as TreeValue,
        children: treeMapper(io.children, { label, value }),
        selectable: false,
      };
    }

    const children =
      node.children && Array.isArray(node.children)
        ? treeMapper(node.children, { label, value })
        : undefined;

    return {
      label: (node[label] || node[value]) as string,
      value: node[value] as TreeValue,
      ...(children ? { children } : undefined),
    };
  });
}
