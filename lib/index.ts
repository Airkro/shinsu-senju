import { tableGrouping } from './table-grouping.ts';
import type { Groupeds, Groups } from './table-grouping.ts';
import { treeFilter } from './tree-filter.ts';
import { treeInfinity } from './tree-infinity.ts';
import { treeMapper } from './tree-mapper.ts';
import type { Mapper, Tree } from './tree-mapper.ts';
import type { Condition, Getter, UnknownObject } from './utils.ts';

export { tableGrouping, treeFilter, treeInfinity, treeMapper };

export type Options = {
  groups?: Groups;
  mapper?: Mapper;
  parentKey?: Getter;
  filterBy?: Condition;
};

export function grouping(
  data: UnknownObject[],
  { groups, mapper, parentKey, filterBy }: Options = {},
): Groupeds | Tree {
  if (data.length === 0) {
    return data as [];
  }

  const filtered = filterBy ? treeFilter(data, { filterBy, parentKey }) : data;

  const infinity = parentKey ? treeInfinity(filtered, parentKey) : filtered;

  const mapped = treeMapper(infinity, mapper);

  return groups === undefined || (Array.isArray(groups) && groups.length === 0)
    ? mapped
    : tableGrouping(mapped, groups);
}

export type { Groupeds, Tree, UnknownObject };
