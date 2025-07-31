import { doCondition, getBy } from './utils.ts';
import type { Condition, UnknownObject } from './utils.ts';

type List = UnknownObject[];

function createIdToItemMap(items: List): Map<unknown, UnknownObject> {
  return new Map(items.map((item) => [item.id, item]));
}

function findParents(
  item: UnknownObject,
  idToItem: Map<unknown, UnknownObject>,
  result: Set<UnknownObject>,
  parentKey: string,
): void {
  const parentId = getBy(item, parentKey);

  if (parentId === null || parentId === undefined) {
    return;
  }

  const parent = idToItem.get(parentId);

  if (!parent) {
    return;
  }

  result.add(parent);
  findParents(parent, idToItem, result, parentKey);
}

export interface TreeFilterOptions {
  parentKey?: string;
  filterBy?: Condition;
}

export function treeFilter(list: List, options: TreeFilterOptions = {}): List {
  if (list.length === 0) {
    return list;
  }

  const { parentKey, filterBy } = options;

  const matchItems = filterBy
    ? list.filter((element) => doCondition(element, filterBy))
    : list;

  if (!parentKey) {
    return matchItems;
  }

  const idToItem = createIdToItemMap(matchItems);

  const allItems = new Set(matchItems);

  if (parentKey) {
    for (const item of matchItems) {
      findParents(item, idToItem, allItems, parentKey);
    }
  }

  return [...allItems];
}
