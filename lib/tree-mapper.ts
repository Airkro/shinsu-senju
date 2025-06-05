import { Table2Treed } from './table2tree.ts';
import type { GroupNode } from './table2tree.ts';
import { getBy } from './utils.ts';
import type { DataRecord } from './utils.ts';

export interface TreeNode {
  label: string;
  value: unknown;
  extra?: unknown;
  selectable?: boolean;
  children?: Tree;
}

export type Tree = TreeNode[];

export interface Options {
  label?: string;
  value?: string;
  extra?: string;
}

export function treeMapper(data: Table2Treed, options: Options = {}): Tree {
  const {
    label: labelPath = 'name',
    value: valuePath = 'id',
    extra = '',
  } = options;

  return data.map((node: GroupNode | DataRecord) => {
    const children =
      node.children && Array.isArray(node.children)
        ? treeMapper(node.children, { label: labelPath, value: valuePath })
        : undefined;

    if ('$meta' in node) {
      const io = node as GroupNode;

      const meta = io.$meta;

      return {
        label: ((meta.label || meta.value) as string) || meta.groupBy,
        value: meta.value,
        ...(extra && { extra: getBy(meta, extra) }),
        ...(children && { children }),
        selectable: false,
      };
    }

    const value = getBy(node, valuePath);

    return {
      label: (getBy(node, labelPath) || value) as string,
      value,
      ...(extra && { extra: getBy(node, extra) }),
      ...(children && { children }),
    };
  });
}
