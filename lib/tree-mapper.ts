import { customSort } from './sort.ts';
import { doCondition, getBy } from './utils.ts';
import type { Condition, Getter, UnknownObject } from './utils.ts';

type TreeNodeBase = {
  disabled?: boolean;
  selectable?: boolean;
  children?: Tree;
  $original: UnknownObject;
  $mapper?: Mapper;
};

export type TreeNode = TreeNodeBase & {
  [key: string]: unknown;
};

export type Tree = TreeNode[];

export type Mapper = {
  [key: string]: Getter | Condition | undefined;
  selectable?: Condition;
  disabled?: Condition;
  sortBy?: Getter;
  children?: Getter;
  label?: Getter;
};

export function treeMapper(data: UnknownObject[], options: Mapper = {}): Tree {
  if (data.length === 0) {
    return data as [];
  }

  if (Object.values(options).filter(Boolean).length === 0) {
    return treeMapper(data, { label: 'name', value: 'id' });
  }

  const { sortBy = options.label, selectable, disabled, ...rest } = options;

  const tmp = data.map((node: UnknownObject): TreeNode => {
    const children =
      node.children && Array.isArray(node.children)
        ? treeMapper(node.children, options)
        : undefined;

    const { children: _, ...$original } = node;

    return {
      ...Object.fromEntries(
        Object.entries(rest).map(([key, getter]) => [
          key,
          getter && getBy(node, getter as Getter),
        ]),
      ),
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
  });

  return sortBy === undefined
    ? tmp
    : tmp.toSorted((a: TreeNode, b: TreeNode) =>
        customSort(getBy(a.$original, sortBy), getBy(b.$original, sortBy)),
      );
}
