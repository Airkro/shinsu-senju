import { customSort } from './sort.ts';
import { doCondition, getBy } from './utils.ts';
import type { Condition, Getter, UnknownObject } from './utils.ts';

declare global {
  // eslint-disable-next-line vars-on-top
  var DEBUG: boolean | undefined;
}

type TreeNodeBase = {
  disabled?: boolean;
  selectable?: boolean;
  $original: UnknownObject;
  $mapper: Mapper;
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
  childrenKey?: string;
  label?: Getter;
};

export function treeMapper(data: UnknownObject[], options: Mapper = {}): Tree {
  if (data.length === 0) {
    return [] as Tree;
  }

  if (Object.values(options).filter(Boolean).length === 0) {
    return treeMapper(data, { label: 'name', value: 'id' });
  }

  const {
    sortBy = options.label,
    selectable,
    disabled,
    childrenKey = 'children',
    children: _children,
    ...rest
  } = options;

  const tmp = data.map((node: UnknownObject): TreeNode => {
    const childrenData = options.children
      ? getBy(node, options.children)
      : node.children;
    const children =
      childrenData && Array.isArray(childrenData)
        ? treeMapper(childrenData, options)
        : undefined;

    const mapped: TreeNodeBase = {
      ...Object.fromEntries(
        Object.entries(rest)
          .filter(([key]) => key !== options.children)
          .map(([key, getter]) => [
            key,
            getter && getBy(node, getter as Getter),
          ]),
      ),
      ...(children ? { [childrenKey]: children } : undefined),
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
      $original: node,
      $mapper: options,
    };

    if (!globalThis.DEBUG) {
      Object.defineProperty(mapped, '$original', {
        enumerable: false,
      });

      Object.defineProperty(mapped, '$mapper', {
        enumerable: false,
      });
    }

    return mapped;
  });

  return sortBy === undefined
    ? tmp
    : tmp.toSorted((a: TreeNode, b: TreeNode) =>
        customSort(getBy(a.$original, sortBy), getBy(b.$original, sortBy)),
      );
}
