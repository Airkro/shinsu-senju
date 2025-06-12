import { table2tree } from './table2tree.ts';
import type { Groups } from './table2tree.ts';
import { treeInfinity } from './tree-infinity.ts';
import { treeMapper } from './tree-mapper.ts';
import type { Mappers } from './tree-mapper.ts';
import type { DataRecord } from './utils.ts';

export { table2tree, treeInfinity, treeMapper };

type Options = {
  groups?: Groups;
  mapper?: Mappers;
};

export function grouping(data: DataRecord[], { groups, mapper }: Options = {}) {
  return treeMapper(table2tree(treeInfinity(data), groups), mapper);
}
