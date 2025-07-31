import { customSort } from './sort.ts';
import type { GroupNode, Table2Treed } from './table-grouping.ts';
import { doCondition, getBy } from './utils.ts';
import type { Condition, DataRecord } from './utils.ts';

export interface TreeNode {
  label: unknown;
  value: unknown;
  extra?: unknown;
  selectable?: boolean;
  children?: Tree;
  $meta?: GroupNode['$meta'];
  $original?: object;
}

export type Tree = TreeNode[];

export interface Mappers {
  label?: string;
  value?: string;
  extra?: string;
  selectable?: Condition;
  disabled?: Condition;
  sortBy?: string;
}

export function treeMapper(data: Table2Treed, options: Mappers = {}): Tree {
  if (data.length === 0) {
    return data as Tree;
  }

  const {
    label: labelPath = 'name',
    value: valuePath = 'id',
    extra = '',
    sortBy = labelPath,
    selectable,
    disabled,
  } = options;

  return data
    .map((node: GroupNode | DataRecord) => {
      const children =
        node.children && Array.isArray(node.children)
          ? treeMapper(node.children, options)
          : undefined;

      if ('$meta' in node) {
        const io = node as GroupNode;

        const meta = io.$meta;

        return {
          $meta: meta,
          label: ((meta.label || meta.value) as string) || meta.groupBy,
          value: meta.value,
          ...(extra && { extra: getBy(meta, extra) }),
          ...(children && { children }),
          selectable: false,
        };
      }

      const value = getBy(node, valuePath);

      const { children: _, ...$original } = node;

      return {
        label: (getBy(node, labelPath) || value) as string,
        value,
        ...(extra && { extra: getBy(node, extra) }),
        ...(children && { children }),
        ...(selectable
          ? {
              selectable: doCondition(node, selectable),
            }
          : undefined),
        ...(disabled
          ? {
              disabled: doCondition(node, disabled),
            }
          : undefined),
        $original,
      };
    })
    .sort((a, b) => customSort(getBy(a, sortBy), getBy(b, sortBy)));
}
