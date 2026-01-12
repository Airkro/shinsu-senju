import type { Fixture } from './type.d.ts';

export const emptyArray: Fixture = {
  description: 'should handle empty array',
  data: [],
  options: {
    parentKey: 'parentId',
  },
};

export const emptyOptions: Fixture = {
  description: 'should handle empty options',
  data: [{ id: 1, name: 'Root' }],
  options: {},
};

export const basicTree: Fixture = {
  description: 'should filter basic tree structure',
  data: [
    { id: 1, name: 'Root' },
    { id: 2, parentId: 1, name: 'Child 1' },
    { id: 3, parentId: 1, name: 'Child 2' },
    { id: 4, parentId: 2, name: 'Grandchild' },
  ],
  options: {
    parentKey: 'parentId',
    filterBy: (item) => item.name === 'Grandchild',
  },
};

export const customParentKey: Fixture = {
  description: 'should work with custom parent key',
  data: [
    { id: 1, name: 'Root' },
    { id: 2, parent: 1, name: 'Child 1' },
    { id: 3, parent: 1, name: 'Child 2' },
  ],
  options: {
    parentKey: 'parent',
    filterBy: (item) => item.name === 'Child 1',
  },
};

export const deepTree: Fixture = {
  description: 'should handle deep tree structure',
  data: [
    { id: 1, name: 'Root' },
    { id: 2, parentId: 1, name: 'Level 1' },
    { id: 3, parentId: 2, name: 'Level 2' },
    { id: 4, parentId: 3, name: 'Level 3' },
    { id: 5, parentId: 4, name: 'Level 4' },
  ],
  options: {
    parentKey: 'parentId',
    filterBy: (item) => item.name === 'Level 4',
  },
};

export const invalidParentId: Fixture = {
  description: 'should handle invalid parent IDs',
  data: [
    { id: 1, name: 'Root' },
    { id: 2, parentId: 999, name: 'Invalid Parent' },
    { id: 3, parentId: null, name: 'Null Parent' },
    { id: 4, parentId: undefined, name: 'Undefined Parent' },
  ],
  options: {
    parentKey: 'parentId',
    filterBy: (item) =>
      typeof item.name === 'string' && item.name.includes('Parent'),
  },
};

export const multipleMatches: Fixture = {
  description: 'should handle multiple matches',
  data: [
    { id: 1, name: 'Root' },
    { id: 2, parentId: 1, name: 'Active 1' },
    { id: 3, parentId: 1, name: 'Active 2' },
    { id: 4, parentId: 2, name: 'Inactive' },
    { id: 5, parentId: 3, name: 'Active 3' },
  ],
  options: {
    parentKey: 'parentId',
    filterBy: (item) =>
      typeof item.name === 'string' && item.name.startsWith('Active'),
  },
};

export const zeroAsValidId: Fixture = {
  description: 'should handle zero as valid ID',
  data: [
    { id: 0, name: 'Root' },
    { id: 1, parentId: 0, name: 'Child of Zero' },
    { id: 2, parentId: 1, name: 'Target' },
  ],
  options: {
    parentKey: 'parentId',
    filterBy: (item) => item.name === 'Target',
  },
};
