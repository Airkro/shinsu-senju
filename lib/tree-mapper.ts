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
    const children =
      node.children && Array.isArray(node.children)
        ? treeMapper(node.children, { label, value })
        : undefined;

    if ('$meta' in node) {
      const meta = node.$meta as GroupNode['$meta'];

      return {
        label: meta.label || (meta.value as string) || meta.groupBy,
        value: meta.value as TreeValue,
        ...(children ? { children } : undefined),
        selectable: false,
      };
    }

    return {
      label: (node[label] || node[value]) as string,
      value: node[value] as TreeValue,
      ...(children ? { children } : undefined),
    };
  });
}
