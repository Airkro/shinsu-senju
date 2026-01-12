# Snapshot mapped

should group data by column and return tree structure

## Input

### Options
```js
export default {
  mappers: {
    value: 'name'
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
    value: 'Item 1',
    $original: {
      id: 1,
      parent: 'A',
      name: 'Item 1'
    },
    $mapper: {
      value: 'name'
    }
  },
  {
    value: undefined,
    $original: {
      id: 2,
      parent: 'A',
      name2: 'Item 2'
    },
    $mapper: {
      value: 'name'
    }
  },
  {
    value: 'Item 3',
    $original: {
      id: 3,
      parent: 'B',
      name: 'Item 3'
    },
    $mapper: {
      value: 'name'
    }
  }
]
```

### tableGrouping
```js
export default [
  {
    value: 'Item 1',
    $original: {
      id: 1,
      parent: 'A',
      name: 'Item 1'
    },
    $mapper: {
      value: 'name'
    }
  },
  {
    value: undefined,
    $original: {
      id: 2,
      parent: 'A',
      name2: 'Item 2'
    },
    $mapper: {
      value: 'name'
    }
  },
  {
    value: 'Item 3',
    $original: {
      id: 3,
      parent: 'B',
      name: 'Item 3'
    },
    $mapper: {
      value: 'name'
    }
  }
]
```