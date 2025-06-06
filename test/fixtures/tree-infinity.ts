export const emptyArray = {
  description: 'should handle empty array',
  data: [],
};

export const onlyRootNodes = {
  description: 'should handle array with only root nodes',
  data: [{ id: 1 }, { id: 2 }, { id: 3 }],
};

export const simpleTreeStructure = {
  description: 'should organize flat array into tree structure',
  data: [
    { id: 4, parentId: 2 },
    { id: 5, parentId: 2 },
    { id: 1 },
    { id: 2, parentId: 1 },
    { id: 3, parentId: 1 },
    { id: 6 },
  ],
};

export const invalidParentReferences = {
  description: 'should handle invalid parent references',
  data: [
    { id: 1 },
    { id: 2, parentId: 999 }, // 引用不存在的父节点
  ],
};

export const infiniteLevelsNesting = {
  description: 'should support infinite levels of nesting',
  data: [
    { id: 7, parentId: 6 },
    { id: 8, parentId: 7 },
    { id: 9, parentId: 8 },
    { id: 10, parentId: 9 },
    { id: 1 },
    { id: 2, parentId: 1 },
    { id: 3, parentId: 2 },
    { id: 4, parentId: 3 },
    { id: 5, parentId: 4 },
    { id: 6, parentId: 5 },
  ],
};

export const complexMultiLevel = {
  description: 'should handle complex multi-level structure',
  data: [
    { id: 1 },
    { id: 2, parentId: 1 },
    { id: 3, parentId: 1 },
    { id: 4, parentId: 2 },
    { id: 5, parentId: 3 },
  ],
};

export const mixedRootAndChildren = {
  description: 'should handle mixed root nodes and children',
  data: [
    { id: 1 },
    { id: 2, parentId: 1 },
    { id: 3 },
    { id: 4, parentId: 2 },
    { id: 5 },
    { id: 6, parentId: 3 },
  ],
};
