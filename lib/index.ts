import { tableGrouping } from './table-grouping.ts';
import type { Groups } from './table-grouping.ts';
import { treeFilter } from './tree-filter.ts';
import type { FilterBy } from './tree-filter.ts';
import { treeInfinity } from './tree-infinity.ts';
import { treeMapper } from './tree-mapper.ts';
import type { Mappers, Tree } from './tree-mapper.ts';
import type { DataRecord } from './utils.ts';

export { tableGrouping, treeFilter, treeInfinity, treeMapper };

export type Options = {
  groups?: Groups;
  mapper?: Mappers;
  parentKey?: string;
  filterBy?: FilterBy;
};

export function grouping(
  data: DataRecord[],
  { groups, mapper, parentKey, filterBy }: Options = {},
) {
  return treeMapper(
    tableGrouping(
      parentKey
        ? treeInfinity(
            filterBy ? treeFilter(data, { filterBy, parentKey }) : data,
            parentKey,
          )
        : data,
      groups,
    ),
    mapper,
  );
}

export type { DataRecord, Tree };
