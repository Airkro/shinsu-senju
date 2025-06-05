import { expect, it } from 'vitest';

import type { Table2Treed } from '../lib/table2tree.ts';
import { treeMapper } from '../lib/tree-mapper.ts';

it('should transform group nodes correctly', () => {
  const input: Table2Treed = [
    {
      $meta: {
        groupBy: 'category',
        value: 'A',
        label: 'Category A',
      },
      children: [
        { id: 1, name: 'Item 1', category: 'A' },
        { id: 2, name: 'Item 2', category: 'A' },
      ],
    },
  ];

  expect(treeMapper(input)).toMatchSnapshot();
});

// 数据记录节点转换的快照测试
it('should transform data records correctly', () => {
  const input: Table2Treed = [{ id: 1, name: 'Test Item', category: 'X' }];

  expect(treeMapper(input)).toMatchSnapshot();
});

// 嵌套分组的快照测试
it('should handle nested groups', () => {
  const input: Table2Treed = [
    {
      $meta: {
        groupBy: 'level1',
        value: 'A',
        label: 'Level 1',
      },
      children: [
        {
          $meta: {
            groupBy: 'level2',
            value: 'X',
            label: 'Level 2',
          },
          children: [{ id: 1, name: 'Item 1', level1: 'A', level2: 'X' }],
        },
      ],
    },
  ];

  expect(treeMapper(input)).toMatchSnapshot();
});

// 空输入的快照测试
it('should handle empty input', () => {
  const input: Table2Treed = [];
  expect(treeMapper(input)).toMatchSnapshot();
});

// 缺失属性的快照测试
it('should handle missing properties', () => {
  const input: Table2Treed = [
    { id: 1 }, // 缺少name
    {
      $meta: {
        groupBy: 'category',
        value: 'B',
        // 缺少label
      },
      children: [],
    },
  ];

  expect(treeMapper(input)).toMatchSnapshot();
});

// 复杂数据结构的快照测试
it('should handle complex data structures', () => {
  const input: Table2Treed = [
    {
      $meta: {
        groupBy: 'department',
        value: 'Engineering',
        label: 'Engineering Team',
      },
      children: [
        {
          $meta: {
            groupBy: 'team',
            value: 'Frontend',
            label: 'Frontend Team',
          },
          children: [
            { id: 1, name: 'Alice', role: 'Developer', level: 'Senior' },
            { id: 2, name: 'Bob', role: 'Designer', level: 'Mid' },
          ],
        },
        {
          $meta: {
            groupBy: 'team',
            value: 'Backend',
            label: 'Backend Team',
          },
          children: [
            { id: 3, name: 'Charlie', role: 'Developer', level: 'Lead' },
            { id: 4, name: 'David', role: 'DevOps', level: 'Senior' },
          ],
        },
      ],
    },
  ];

  expect(treeMapper(input)).toMatchSnapshot();
});
