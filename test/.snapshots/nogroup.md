# Snapshot nogroup

should group data by column and return tree structure

## Input

### Options
```js
export default {}
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
    name: 'Item 2'
  },
  {
    id: 3,
    parent: 'B',
    name: 'Item 3',
    children: [
      {
        id: 4,
        name: 'Item 4'
      }
    ]
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
    $mapper: {
      label: 'name',
      value: 'id'
    }
  },
  {
    label: 'Item 2',
    value: 2,
    $original: {
      id: 2,
      parent: 'A',
      name: 'Item 2'
    },
    $mapper: {
      label: 'name',
      value: 'id'
    }
  },
  {
    label: 'Item 3',
    value: 3,
    children: [
      {
        label: 'Item 4',
        value: 4,
        $original: {
          id: 4,
          name: 'Item 4'
        },
        $mapper: {
          label: 'name',
          value: 'id'
        }
      }
    ],
    $original: {
      id: 3,
      parent: 'B',
      name: 'Item 3'
    },
    $mapper: {
      label: 'name',
      value: 'id'
    }
  }
]
```

### tableGrouping
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
    $mapper: {
      label: 'name',
      value: 'id'
    }
  },
  {
    label: 'Item 2',
    value: 2,
    $original: {
      id: 2,
      parent: 'A',
      name: 'Item 2'
    },
    $mapper: {
      label: 'name',
      value: 'id'
    }
  },
  {
    label: 'Item 3',
    value: 3,
    children: [
      {
        label: 'Item 4',
        value: 4,
        $original: {
          id: 4,
          name: 'Item 4'
        },
        $mapper: {
          label: 'name',
          value: 'id'
        }
      }
    ],
    $original: {
      id: 3,
      parent: 'B',
      name: 'Item 3'
    },
    $mapper: {
      label: 'name',
      value: 'id'
    }
  }
]
```