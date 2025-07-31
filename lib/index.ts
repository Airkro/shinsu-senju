import { uniqBy } from 'lodash-es';

import { tableGrouping } from './table-grouping.ts';
import type { Groupeds, Groups } from './table-grouping.ts';
import { treeFilter } from './tree-filter.ts';
import { treeInfinity } from './tree-infinity.ts';
import { treeMapper } from './tree-mapper.ts';
import type { Mappers, Tree } from './tree-mapper.ts';
import { getBy } from './utils.ts';
import type { Condition, UnknownObject } from './utils.ts';

export { tableGrouping, treeFilter, treeInfinity, treeMapper };

export type Options = {
  groups?: Groups;
  mapper?: Mappers;
  parentKey?: string;
  filterBy?: Condition;
};

export function grouping(
  data: UnknownObject[],
  { groups, mapper, parentKey, filterBy }: Options = {},
) {
  const input =
    typeof mapper?.value === 'string'
      ? uniqBy(data, (io) => getBy(io, mapper.value as string))
      : data;

  const input2 = filterBy ? treeFilter(input, { filterBy, parentKey }) : input;

  return tableGrouping(
    treeMapper(parentKey ? treeInfinity(input2, parentKey) : input2, mapper),
    groups,
  );
}

export type { Groupeds, Tree };
