import { table2tree } from './table2tree.ts';
import type { DataRecord, GroupConfig } from './table2tree.ts';
import { treeMapper } from './tree-mapper.ts';
import type { Options, Tree } from './tree-mapper.ts';

export { table2tree } from './table2tree.ts';
export { treeMapper } from './tree-mapper.ts';

export function shinsuSenju(
  data: DataRecord[],
  { paths, ...options }: { paths: GroupConfig[] } & Options,
): Tree {
  return treeMapper(table2tree(data, paths), options);
}
