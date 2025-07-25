import arrayTreeFilter from 'array-tree-filter';

import type { DataRecord } from './utils.ts';

type Path = unknown[];

function findInNode(
  node: DataRecord,
  target: unknown,
  path: Path = [],
): Path | null {
  const currentPath = [...path, node.value];

  if (node.value === target) {
    return currentPath;
  }

  if (!node.children?.length) {
    return null;
  }

  for (const child of node.children) {
    const result = findInNode(child, target, currentPath);

    if (result) {
      return result;
    }
  }

  return null;
}

export function treeFinder(tree: DataRecord[], target: unknown): Path {
  for (const node of tree) {
    const path = findInNode(node, target);

    if (path) {
      return path;
    }
  }

  return [];
}

export function optionFinder(tree: DataRecord[], target: unknown) {
  const values = treeFinder(tree, target);

  return values?.length && tree?.length
    ? arrayTreeFilter(tree, (item, level) => item.value === values[level])
    : undefined;
}
