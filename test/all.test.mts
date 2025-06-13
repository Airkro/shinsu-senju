import { expect, it } from 'vitest';

import { tableGrouping, treeMapper } from '../lib/index.ts';

import * as fixtures from './fixtures/sample.ts';

for (const [name, { description, data, options }] of Object.entries(fixtures)) {
  it(`${name}. ${description}`, async () => {
    const { groups, mappers } = options || {};

    const result1 = tableGrouping(data, groups);
    const result2 = treeMapper(result1, mappers);

    await expect({
      $root: true,
      name,
      description,
      options,
      data,
      tableGrouping: result1,
      treeMapper: result2,
    }).toMatchFileSnapshot(`.snapshots/${name}.md`);
  });
}
