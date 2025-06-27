import { expect, it } from 'vitest';

import { grouping, tableGrouping, treeMapper } from '../lib/index.ts';

import * as fixtures from './fixtures/sample.ts';

function deepEqual(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

for (const [name, { description, data, options }] of Object.entries(fixtures)) {
  it(`${name}. ${description}`, async () => {
    const { groups, mappers } = options || {};

    const result1 = tableGrouping(data, groups);
    const result2 = treeMapper(result1, mappers);
    const result3 = grouping(data, {
      groups,
      mapper: mappers,
      parentKey: 'parentId',
    });

    await expect({
      $root: true,
      name,
      description,
      options,
      data,
      tableGrouping: result1,
      treeMapper: result2,
      grouping: deepEqual(result3, result2) ? undefined : result3,
    }).toMatchFileSnapshot(`.snapshots/${name}.md`);
  });
}
