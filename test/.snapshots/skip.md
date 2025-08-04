# Snapshot skip



## Input

### Options
```js
export default {
  groups: [
    {},
    {
      groupBy: 'group',
      skipSingle: true
    }
  ]
}
```

### Data
```js
export default [
  {
    id: 1,
    group: 'A',
    name: 'Item'
  },
  {
    id: 2,
    group: 'A',
    name: 'Item'
  },
  {
    id: 3,
    group: 'B',
    name: 'Item'
  }
]
```

## Output

### treeMapper
```js
export default [
  {
    label: 'Item',
    value: 1,
    $original: {
      id: 1,
      group: 'A',
      name: 'Item'
    },
    $mapper: {}
  },
  {
    label: 'Item',
    value: 2,
    $original: {
      id: 2,
      group: 'A',
      name: 'Item'
    },
    $mapper: {}
  },
  {
    label: 'Item',
    value: 3,
    $original: {
      id: 3,
      group: 'B',
      name: 'Item'
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
      groupBy: 'group',
      labelBy: 'group',
      sortBy: 'group',
      extraBy: undefined,
      skipSingle: true
    },
    label: 'A',
    value: 'A',
    selectable: false,
    children: [
      {
        label: 'Item',
        value: 1,
        $original: {
          id: 1,
          group: 'A',
          name: 'Item'
        },
        $mapper: {}
      },
      {
        label: 'Item',
        value: 2,
        $original: {
          id: 2,
          group: 'A',
          name: 'Item'
        },
        $mapper: {}
      }
    ]
  },
  {
    label: 'Item',
    value: 3,
    $original: {
      id: 3,
      group: 'B',
      name: 'Item'
    },
    $mapper: {}
  }
]
```