import { expect, it } from 'vitest';

import { treeFilter } from '../lib/index.ts';
import type { TreeNode } from '../lib/tree-infinity.ts';

import * as fixtures from './fixtures/tree-filter.ts';

for (const [name, { data, description, options }] of Object.entries(fixtures)) {
  it(description, async () => {
    const result = treeFilter(data as TreeNode[], options);

    await expect({
      $root: true,
      name,
      description,
      options,
      data,
      treeFilter: result,
    }).toMatchFileSnapshot(`.snapshots/tree-filter/${name}.md`);
  });
}
