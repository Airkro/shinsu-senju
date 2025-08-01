import { customSort } from './sort.ts';
import { doCondition, getBy } from './utils.ts';
import type { Condition, Getter, UnknownObject } from './utils.ts';

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

export type Mapper = {
  label?: Getter;
  value?: Getter;
  extra?: Getter;
  children?: Getter;
  selectable?: Condition;
  disabled?: Condition;
  sortBy?: Getter;
};

export function treeMapper(data: UnknownObject[], options: Mapper = {}): Tree {
  if (data.length === 0) {
    return data as [];
  }

  const {
    label: labelPath = 'name',
    value: valuePath = 'id',
    extra,
    sortBy = labelPath,
    selectable,
    disabled,
  } = options;

  const $mapper = {
    label: labelPath,
    value: valuePath,
    extra,
    sortBy,
    selectable,
    disabled,
  };

  return data
    .map((node: UnknownObject) => {
      const children =
        node.children && Array.isArray(node.children)
          ? treeMapper(node.children, $mapper)
          : undefined;

      const value = getBy(node, valuePath);

      const { children: _, ...$original } = node;

      return {
        label: getBy(node, labelPath) || value,
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
        $mapper: options,
      };
    })
    .toSorted((a: TreeNode, b: TreeNode) =>
      customSort(getBy(a.$original, sortBy), getBy(b.$original, sortBy)),
    );
}
