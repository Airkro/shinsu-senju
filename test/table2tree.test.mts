import { expect, it } from 'vitest';

import { table2tree } from '../lib/index.ts';

it('should group data by column and return tree structure', () => {
  const data = [
    { id: 1, parent: 'A', name: 'Item 1' },
    { id: 2, parent: 'A', name: 'Item 2' },
    { id: 3, parent: 'B', name: 'Item 3' },
  ];

  const result = table2tree(data, { groupBy: 'parent' });

  expect(result).toMatchSnapshot();
});

it('should handle nested grouping', () => {
  const data = [
    { id: 1, level1: 'A', level2: 'X', level3: 'I', name: 'Item 1' },
    { id: 2, level1: 'A', level2: 'X', level3: 'I', name: 'Item 2' },
    { id: 3, level1: 'A', level2: 'X', level3: 'II', name: 'Item 3' },
    { id: 4, level1: 'A', level2: 'Y', level3: 'I', name: 'Item 4' },
    { id: 5, level1: 'A', level2: 'Y', level3: 'II', name: 'Item 5' },
    { id: 6, level1: 'B', level2: 'X', level3: 'I', name: 'Item 6' },
    { id: 7, level1: 'B', level2: 'X', level3: 'II', name: 'Item 7' },
    { id: 8, level1: 'B', level2: 'Y', level3: 'II', name: 'Item 8' },
    { id: 9, level1: 'B', level2: 'Y', level3: 'III', name: 'Item 9' },
    { id: 10, level1: 'B', level2: 'Y', level3: 'III', name: 'Item 10' },
  ];

  const result = table2tree(data, [
    { groupBy: 'level1' },
    { groupBy: 'level2' },
    { groupBy: 'level3' },
  ]);

  expect(result).toMatchSnapshot();
});

it('should handle empty data array', () => {
  const data: Record<string, unknown>[] = [];
  const result = table2tree(data, [{ groupBy: 'column' }]);
  expect(result).toEqual([]);
});

it('should handle single column grouping with one item', () => {
  const data = [{ id: 1, group: 'A', name: 'Single Item' }];
  const result = table2tree(data, [{ groupBy: 'group' }]);
  expect(result).toMatchSnapshot();
});

it('should handle deep groupBy key (dot notation)', () => {
  const data = [
    { id: 1, info: { type: { code: 'X' } }, name: 'Item 1' },
    { id: 2, info: { type: { code: 'Y' } }, name: 'Item 2' },
    { id: 3, info: { type: { code: 'X' } }, name: 'Item 3' },
    { id: 4, info: { type: { code: 'Z' } }, name: 'Item 4' },
  ];

  const result = table2tree(data, [{ groupBy: 'info.type.code' }]);
  expect(result).toMatchSnapshot();
});
