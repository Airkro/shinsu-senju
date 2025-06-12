import { tableGrouping } from './table-grouping.ts';
import type { Groups } from './table-grouping.ts';
import { treeInfinity } from './tree-infinity.ts';
import { treeMapper } from './tree-mapper.ts';
import type { Mappers } from './tree-mapper.ts';
import type { DataRecord } from './utils.ts';

export { tableGrouping, treeInfinity, treeMapper };

type Options = {
  groups?: Groups;
  mapper?: Mappers;
};

export function grouping(data: DataRecord[], { groups, mapper }: Options = {}) {
  return treeMapper(tableGrouping(treeInfinity(data), groups), mapper);
}
