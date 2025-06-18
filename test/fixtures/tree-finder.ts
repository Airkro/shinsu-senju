import type { Fixture } from './type.d.ts';

export const basic: Fixture = {
  description: '基本查找测试 - 在简单树中查找值',
  data: [
    {
      id: 1,
      value: 'a',
      children: [
        {
          id: 2,
          value: 'b',
          children: [
            { id: 3, value: 'c' },
            { id: 4, value: 'd' },
          ],
        },
      ],
    },
  ],
  options: {
    target: 'c',
  },
};

export const empty: Fixture = {
  description: '空树测试',
  data: [],
  options: {
    target: 'any',
  },
};

export const deep: Fixture = {
  description: '多层级树测试',
  data: [
    {
      id: 1,
      value: 'root',
      children: [
        {
          id: 2,
          value: 'level1',
          children: [
            {
              id: 3,
              value: 'level2',
              children: [{ id: 4, value: 'target' }],
            },
          ],
        },
      ],
    },
  ],
  options: {
    target: 'target',
  },
};

export const notFound: Fixture = {
  description: '找不到目标值的测试',
  data: [
    {
      id: 1,
      value: 'a',
      children: [
        { id: 2, value: 'b' },
        { id: 3, value: 'c' },
      ],
    },
  ],
  options: {
    target: 'nonexistent',
  },
};

export const multipleRoots: Fixture = {
  description: '多根节点树测试',
  data: [
    {
      id: 1,
      value: 'root1',
      children: [{ id: 2, value: 'child1' }],
    },
    {
      id: 3,
      value: 'root2',
      children: [{ id: 4, value: 'target' }],
    },
  ],
  options: {
    target: 'target',
  },
};

export const nullValues: Fixture = {
  description: '树中包含 null 值的测试',
  data: [
    {
      id: 1,
      value: null,
      children: [
        { id: 2, value: 'a' },
        { id: 3, value: null },
        {
          id: 4,
          value: 'target',
          children: [{ id: 5, value: null }],
        },
      ],
    },
  ],
  options: {
    target: 'target',
  },
};

export const undefinedValues: Fixture = {
  description: '树中包含 undefined 值的测试',
  data: [
    {
      id: 1,
      value: undefined,
      children: [
        { id: 2, value: 'a' },
        { id: 3, value: undefined },
        {
          id: 4,
          value: 'target',
          children: [{ id: 5, value: undefined }],
        },
      ],
    },
  ],
  options: {
    target: 'target',
  },
};

export const complexObjects: Fixture = {
  description: '目标值是复杂对象的测试',
  data: [
    {
      id: 1,
      value: { type: 'folder', name: 'root' },
      children: [
        {
          id: 2,
          value: { type: 'folder', name: 'subfolder' },
          children: [
            {
              id: 3,
              value: { type: 'file', name: 'target.txt', size: 1024 },
            },
          ],
        },
      ],
    },
  ],
  options: {
    target: { type: 'file', name: 'target.txt', size: 1024 },
  },
};

export const nestedArrays: Fixture = {
  description: '树中包含嵌套数组的测试',
  data: [
    {
      id: 1,
      value: ['root'],
      children: [
        {
          id: 2,
          value: ['branch', 'leaf'],
          children: [{ id: 3, value: ['target', 'found'] }],
        },
      ],
    },
  ],
  options: {
    target: ['target', 'found'],
  },
};
