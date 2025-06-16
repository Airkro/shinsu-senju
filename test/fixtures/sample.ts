import type { Fixture } from './type.d.ts';

export const nogroup: Fixture = {
  description: 'should group data by column and return tree structure',
  data: [
    { id: 1, parent: 'A', name: 'Item 1' },
    { id: 2, parent: 'A', name: 'Item 2' },
    {
      id: 3,
      parent: 'B',
      name: 'Item 3',
      children: [
        {
          id: 4,
          name: 'Item 4',
        },
      ],
    },
  ],
  options: {},
};

export const simple: Fixture = {
  description: 'should group data by column and return tree structure',
  data: [
    { id: 1, parent: 'A', name: 'Item 1' },
    { id: 2, parent: 'A', name2: 'Item 2' },
    { id: 3, parent: 'B', name: 'Item 3' },
  ],
  options: { groups: { groupBy: 'parent' } },
};

export const nested: Fixture = {
  description: 'should handle nested grouping',
  data: [
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
    { id: 11, level2: 'Y', level3: 'III', name: 'Item 11' },
    { id: 12, level2: 'Y', level3: 'III', name: 'Item 12' },
    { id: 13, level2: 'Y', name: 'Item 13' },
  ],
  options: {
    groups: [
      { groupBy: 'level1' },
      { groupBy: 'level2' },
      { groupBy: 'level3' },
    ],
  },
};

export const single: Fixture = {
  description: 'should handle single column grouping with one item',
  data: [{ id: 1, group: 'A', name: 'Single Item' }],
  options: {
    groups: [{ groupBy: 'group' }],
  },
};

export const miss: Fixture = {
  description: '',
  data: [
    { id: 1, group: 'A', name: 'Item' },
    { id: 2, group: 'A', name: 'Item' },
    { id: 3, group: 'B', name: 'Item' },
  ],
  options: {
    groups: [{}, { groupBy: 'group' }],
  },
};

export const skip: Fixture = {
  description: '',
  data: [
    { id: 1, group: 'A', name: 'Item' },
    { id: 2, group: 'A', name: 'Item' },
    { id: 3, group: 'B', name: 'Item' },
  ],
  options: {
    groups: [{}, { groupBy: 'group', skipSingle: true }],
  },
};

export const deep: Fixture = {
  description: 'should handle deep groupBy key (dot notation)',
  data: [
    { id: 1, info: { type: { code: 'X', name: '联通' } }, name: 'Item 1' },
    { id: 2, info: { type: { code: 'Y', name: '电信' } }, name: 'Item 2' },
    { id: 3, info: { type: { code: 'X', name: '联通' } }, name: 'Item 3' },
    { id: 4, info: { type: { code: 'Z', name: '移动' } }, name: 'Item 4' },
  ],
  options: {
    groups: [
      {
        groupBy: 'info.type.code',
        labelBy: 'info.type.name',
      },
    ],
    mappers: {
      extra: 'info.type.name',
    },
  },
};

export const empty: Fixture = {
  description: 'should handle empty data array',
  data: [] as Record<string, unknown>[],
  options: {
    groups: [{ groupBy: 'group' }],
  },
};

export const matcher: Fixture = {
  description: 'matcher',
  data: [
    { id: 1, parent: 'A', name: 'Item 1' },
    { id: 2, parent: 'A', name: 'Item 2' },
    { id: 3, parent: 'B', name: 'Item 3' },
    { id: 4, parent: 'B', name: 'Item 4' },
    { id: 5, parent: 'C', name: 'Item 5' },
    { id: 6, parent: 'C', name: 'Item 6' },
    { id: 7, parent: 'D', name: 'Item 7' },
  ],
  options: {
    groups: { groupBy: 'parent' },
    mappers: {
      selectable: {
        when: 'parent',
        enum: ['A', 'B'],
      },
      disabled: {
        when: 'parent',
        const: 'C',
      },
    },
  },
};

export const matcher2: Fixture = {
  description: 'matcher',
  data: matcher.data,
  options: {
    groups: { groupBy: 'parent' },
    mappers: {
      disabled: {
        when: 'parent',
      },
    },
  },
};
