import { uniqBy } from 'lodash-es';

import { tableGrouping } from './table-grouping.ts';
import type { Groups } from './table-grouping.ts';
import { treeFilter } from './tree-filter.ts';
import { treeInfinity } from './tree-infinity.ts';
import { treeMapper } from './tree-mapper.ts';
import type { Mappers, Tree } from './tree-mapper.ts';
import { getBy } from './utils.ts';
import type { Condition, DataRecord } from './utils.ts';

export { tableGrouping, treeFilter, treeInfinity, treeMapper };

export type Options = {
  groups?: Groups;
  mapper?: Mappers;
  parentKey?: string;
  filterBy?: Condition;
};

export function grouping(
  data: DataRecord[],
  { groups, mapper, parentKey, filterBy }: Options = {},
) {
  const input =
    typeof mapper?.value === 'string'
      ? uniqBy(data, (io) => getBy(io, mapper.value as string))
      : data;

  const input2 = filterBy ? treeFilter(input, { filterBy, parentKey }) : input;

  return treeMapper(
    tableGrouping(parentKey ? treeInfinity(input2, parentKey) : input2, groups),
    mapper,
  );
}

export type { DataRecord, Tree };
