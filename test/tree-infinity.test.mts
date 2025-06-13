import { expect, it } from 'vitest';

import { treeInfinity } from '../lib/index.ts';
import type { TreeNode } from '../lib/tree-infinity.ts';

import * as fixtures from './fixtures/tree-infinity.ts';

for (const [name, { data, description, options }] of Object.entries(fixtures)) {
  it(description, async () => {
    const result = treeInfinity(data as TreeNode[], options?.parentKey);

    await expect({
      $root: true,
      name,
      description,
      data,
      treeInfinity: result,
    }).toMatchFileSnapshot(`.snapshots/tree-infinity/${name}.md`);
  });
}
