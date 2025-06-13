import { tableGrouping } from './table-grouping.ts';
import type { Groups } from './table-grouping.ts';
import { treeInfinity } from './tree-infinity.ts';
import { treeMapper } from './tree-mapper.ts';
import type { Mappers, Tree } from './tree-mapper.ts';
import type { DataRecord } from './utils.ts';

export { tableGrouping, treeInfinity, treeMapper };

export type Options = {
  groups?: Groups;
  mapper?: Mappers;
  parentKey?: string;
};

export function grouping(
  data: DataRecord[],
  { groups, mapper, parentKey }: Options = {},
) {
  return treeMapper(
    tableGrouping(treeInfinity(data, parentKey), groups),
    mapper,
  );
}

export type { DataRecord, Tree };
