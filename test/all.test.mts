import { expect, it } from 'vitest';

import { grouping, tableGrouping, treeMapper } from '../lib/index.ts';

import * as fixtures from './fixtures/sample.ts';

function deepEqual(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

for (const [name, { description, data, options }] of Object.entries(fixtures)) {
  it(`${name}. ${description}`, async () => {
    const { groups, mappers } = options || {};

    const result1 = treeMapper(data, mappers);
    const result2 = tableGrouping(result1, groups);
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
      treeMapper: result1,
      tableGrouping: result2,
      grouping: deepEqual(result3, result2) ? undefined : result3,
    }).toMatchFileSnapshot(`.snapshots/${name}.md`);
  });
}
