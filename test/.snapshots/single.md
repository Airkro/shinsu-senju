# Snapshot single

should handle single column grouping with one item

## Input

### Options
```js
export default {
  groups: [
    {
      groupBy: 'group'
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
    name: 'Single Item'
  }
]
```

## Output

### treeMapper
```js
export default [
  {
    label: 'Single Item',
    value: 1,
    $original: {
      id: 1,
      group: 'A',
      name: 'Single Item'
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
      skipSingle: false
    },
    label: 'A',
    value: 'A',
    selectable: false,
    children: [
      {
        label: 'Single Item',
        value: 1,
        $original: {
          id: 1,
          group: 'A',
          name: 'Single Item'
        },
        $mapper: {}
      }
    ]
  }
]
```