# Snapshot simple

should group data by column and return tree structure

## Input

### Options
```js
export default {
  groups: {
    groupBy: 'parent'
  }
}
```

### Data
```js
export default [
  {
    id: 1,
    parent: 'A',
    name: 'Item 1'
  },
  {
    id: 2,
    parent: 'A',
    name2: 'Item 2'
  },
  {
    id: 3,
    parent: 'B',
    name: 'Item 3'
  }
]
```

## Output

### treeMapper
```js
export default [
  {
    label: 'Item 1',
    value: 1,
    $original: {
      id: 1,
      parent: 'A',
      name: 'Item 1'
    },
    $mapper: {}
  },
  {
    label: 'Item 3',
    value: 3,
    $original: {
      id: 3,
      parent: 'B',
      name: 'Item 3'
    },
    $mapper: {}
  },
  {
    label: 2,
    value: 2,
    $original: {
      id: 2,
      parent: 'A',
      name2: 'Item 2'
    },
    $mapper: {}
  }
]
```

### tableGrouping
```js
export default [
  {
    $group: {
      groupBy: 'parent',
      labelBy: 'parent',
      sortBy: 'parent',
      extraBy: undefined,
      skipSingle: false
    },
    label: 'A',
    value: 'A',
    selectable: false,
    children: [
      {
        label: 'Item 1',
        value: 1,
        $original: {
          id: 1,
          parent: 'A',
          name: 'Item 1'
        },
        $mapper: {}
      },
      {
        label: 2,
        value: 2,
        $original: {
          id: 2,
          parent: 'A',
          name2: 'Item 2'
        },
        $mapper: {}
      }
    ]
  },
  {
    $group: {
      groupBy: 'parent',
      labelBy: 'parent',
      sortBy: 'parent',
      extraBy: undefined,
      skipSingle: false
    },
    label: 'B',
    value: 'B',
    selectable: false,
    children: [
      {
        label: 'Item 3',
        value: 3,
        $original: {
          id: 3,
          parent: 'B',
          name: 'Item 3'
        },
        $mapper: {}
      }
    ]
  }
]
```