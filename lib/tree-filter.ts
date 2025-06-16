import { getBy } from './utils.ts';
import type { DataRecord } from './utils.ts';

type List = DataRecord[];

function createIdToItemMap(items: List): Map<unknown, DataRecord> {
  return new Map(items.map((item) => [item.id, item]));
}

function findParents(
  item: DataRecord,
  idToItem: Map<unknown, DataRecord>,
  result: Set<DataRecord>,
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

export type FilterBy = (
  item: DataRecord,
  index?: number,
  array?: List,
) => boolean;

export interface TreeFilterOptions {
  parentKey?: string;
  filterBy?: FilterBy;
}

export function treeFilter(list: List, options: TreeFilterOptions = {}): List {
  if (list.length === 0) {
    return list;
  }

  const { parentKey, filterBy } = options;

  if (filterBy === undefined) {
    return list;
  }

  const idToItem = createIdToItemMap(list);
  const matchItems = list.filter((element, index, array) =>
    filterBy(element, index, array),
  );
  const allItems = new Set(matchItems);

  if (parentKey) {
    for (const item of matchItems) {
      findParents(item, idToItem, allItems, parentKey);
    }
  }

  return [...allItems];
}
