import { customSort } from './sort.ts';
import { doCondition, getBy } from './utils.ts';
import type { Condition, UnknownObject } from './utils.ts';

export interface TreeNode extends UnknownObject {
  label: unknown;
  value: unknown;
  extra?: unknown;
  disabled?: boolean;
  selectable?: boolean;
  children?: Tree;
  $original: UnknownObject;
}

export type Tree = TreeNode[];

export interface Mappers {
  label?: string;
  value?: string;
  extra?: string;
  children?: string;
  selectable?: Condition;
  disabled?: Condition;
  sortBy?: string;
}

export function treeMapper(data: UnknownObject[], options: Mappers = {}): Tree {
  if (data.length === 0) {
    return data as [];
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
    .toSorted((a: UnknownObject, b: UnknownObject) =>
      customSort(getBy(a, sortBy), getBy(b, sortBy)),
    )
    .map((node: UnknownObject) => {
      const children =
        node.children && Array.isArray(node.children)
          ? treeMapper(node.children, options)
          : undefined;

      const value = getBy(node, valuePath);

      const { children: _, ...$original } = node;

      return {
        label: (getBy(node, labelPath) || value) as string,
        value,
        ...(extra ? { extra: getBy(node, extra) } : undefined),
        ...(children ? { children } : undefined),
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
    });
}
