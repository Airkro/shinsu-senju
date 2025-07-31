import { expect, it } from 'vitest';

import type { Groupeds } from '../lib/table-grouping.ts';
import { optionFinder, treeFinder } from '../lib/tree-finder.ts';

import * as fixtures from './fixtures/tree-finder.ts';

for (const [name, { data, description, options }] of Object.entries(fixtures)) {
  it(description, async () => {
    const result1 = treeFinder(data as Groupeds, options?.target);
    const result2 = optionFinder(data as Groupeds, options?.target);

    await expect({
      $root: true,
      name,
      description,
      options,
      data,
      treeFinder: result1,
      optionFinder: result2,
    }).toMatchFileSnapshot(`.snapshots/tree-finder/${name}.md`);
  });
}
