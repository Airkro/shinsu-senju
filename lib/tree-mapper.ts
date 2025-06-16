import { Table2Treed } from './table-grouping.ts';
import type { GroupNode } from './table-grouping.ts';
import { getBy } from './utils.ts';
import type { DataRecord } from './utils.ts';

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

interface Calc {
  when: string;
  const?: unknown;
  enum?: unknown[];
}

export interface Mappers {
  label?: string;
  value?: string;
  extra?: string;
  selectable?: Calc;
  disabled?: Calc;
}

function calcSelectable(node: DataRecord, matcher: Calc): undefined | boolean {
  return matcher.const
    ? getBy(node, matcher.when) === matcher.const
    : matcher.enum
      ? matcher.enum.includes(getBy(node, matcher.when))
      : Boolean(getBy(node, matcher.when));
}

export function treeMapper(data: Table2Treed, options: Mappers = {}): Tree {
  if (data.length === 0) {
    return data as Tree;
  }

  const {
    label: labelPath = 'name',
    value: valuePath = 'id',
    extra = '',
  } = options;

  return data.map((node: GroupNode | DataRecord) => {
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
      ...(options.selectable?.when && {
        selectable: calcSelectable(node, options.selectable),
      }),
      ...(options.disabled?.when && {
        disabled: calcSelectable(node, options.disabled),
      }),
      $original,
    };
  });
}
