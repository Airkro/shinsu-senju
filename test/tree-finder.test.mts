import { expect, it } from 'vitest';

import { treeFinder } from '../lib/tree-finder.ts';
import type { TreeNode } from '../lib/tree-infinity.ts';

import * as fixtures from './fixtures/tree-finder.ts';

for (const [name, { data, description, options }] of Object.entries(fixtures)) {
  it(description, async () => {
    const result = treeFinder(data as TreeNode[], options?.target);

    await expect({
      $root: true,
      name,
      description,
      options,
      data,
      treeFinder: result,
    }).toMatchFileSnapshot(`.snapshots/tree-finder/${name}.md`);
  });
}
