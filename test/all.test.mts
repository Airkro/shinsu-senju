import { expect, it } from 'vitest';

import { table2tree, treeMapper } from '../lib/index.ts';

import * as fixtures from './fixtures/sample.ts';

for (const [name, { description, data, options }] of Object.entries(fixtures)) {
  it(`${name}. ${description}`, async () => {
    const { paths, ...rest } = options || {};

    const result1 = table2tree(data, paths);
    const result2 = treeMapper(result1, rest);

    await expect({
      $root: true,
      name,
      description,
      options,
      data,
      table2tree: result1,
      treeMapper: result2,
    }).toMatchFileSnapshot(`.snapshots/${name}.md`);
  });
}
