# Snapshot sort



## Input

### Data
```js
export default [
  {
    name: '1号'
  },
  {
    name: '01号'
  },
  {
    name: '2号'
  },
  {
    name: '02号'
  },
  {
    name: '9号'
  },
  {
    name: '11号'
  },
  {
    name: '100号'
  },
  {
    name: '房间1'
  },
  {
    name: '房间01'
  },
  {
    name: '房间9'
  },
  {
    name: '房间11'
  },
  {
    name: '房间100'
  },
  {
    name: '1'
  },
  {
    name: '01'
  },
  {
    name: '9'
  },
  {
    name: '11'
  },
  {
    name: '100'
  },
  {
    name: '房间'
  }
]
```

## Output

### treeMapper
```js
export default [
  {
    label: '01',
    value: undefined,
    $original: {
      name: '01'
    },
    $mapper: {}
  },
  {
    label: '1',
    value: undefined,
    $original: {
      name: '1'
    },
    $mapper: {}
  },
  {
    label: '9',
    value: undefined,
    $original: {
      name: '9'
    },
    $mapper: {}
  },
  {
    label: '11',
    value: undefined,
    $original: {
      name: '11'
    },
    $mapper: {}
  },
  {
    label: '100',
    value: undefined,
    $original: {
      name: '100'
    },
    $mapper: {}
  },
  {
    label: '01号',
    value: undefined,
    $original: {
      name: '01号'
    },
    $mapper: {}
  },
  {
    label: '02号',
    value: undefined,
    $original: {
      name: '02号'
    },
    $mapper: {}
  },
  {
    label: '1号',
    value: undefined,
    $original: {
      name: '1号'
    },
    $mapper: {}
  },
  {
    label: '2号',
    value: undefined,
    $original: {
      name: '2号'
    },
    $mapper: {}
  },
  {
    label: '9号',
    value: undefined,
    $original: {
      name: '9号'
    },
    $mapper: {}
  },
  {
    label: '11号',
    value: undefined,
    $original: {
      name: '11号'
    },
    $mapper: {}
  },
  {
    label: '100号',
    value: undefined,
    $original: {
      name: '100号'
    },
    $mapper: {}
  },
  {
    label: '房间01',
    value: undefined,
    $original: {
      name: '房间01'
    },
    $mapper: {}
  },
  {
    label: '房间1',
    value: undefined,
    $original: {
      name: '房间1'
    },
    $mapper: {}
  },
  {
    label: '房间9',
    value: undefined,
    $original: {
      name: '房间9'
    },
    $mapper: {}
  },
  {
    label: '房间11',
    value: undefined,
    $original: {
      name: '房间11'
    },
    $mapper: {}
  },
  {
    label: '房间100',
    value: undefined,
    $original: {
      name: '房间100'
    },
    $mapper: {}
  },
  {
    label: '房间',
    value: undefined,
    $original: {
      name: '房间'
    },
    $mapper: {}
  }
]
```

### tableGrouping
```js
export default [
  {
    label: '01',
    value: undefined,
    $original: {
      name: '01'
    },
    $mapper: {}
  },
  {
    label: '1',
    value: undefined,
    $original: {
      name: '1'
    },
    $mapper: {}
  },
  {
    label: '9',
    value: undefined,
    $original: {
      name: '9'
    },
    $mapper: {}
  },
  {
    label: '11',
    value: undefined,
    $original: {
      name: '11'
    },
    $mapper: {}
  },
  {
    label: '100',
    value: undefined,
    $original: {
      name: '100'
    },
    $mapper: {}
  },
  {
    label: '01号',
    value: undefined,
    $original: {
      name: '01号'
    },
    $mapper: {}
  },
  {
    label: '02号',
    value: undefined,
    $original: {
      name: '02号'
    },
    $mapper: {}
  },
  {
    label: '1号',
    value: undefined,
    $original: {
      name: '1号'
    },
    $mapper: {}
  },
  {
    label: '2号',
    value: undefined,
    $original: {
      name: '2号'
    },
    $mapper: {}
  },
  {
    label: '9号',
    value: undefined,
    $original: {
      name: '9号'
    },
    $mapper: {}
  },
  {
    label: '11号',
    value: undefined,
    $original: {
      name: '11号'
    },
    $mapper: {}
  },
  {
    label: '100号',
    value: undefined,
    $original: {
      name: '100号'
    },
    $mapper: {}
  },
  {
    label: '房间01',
    value: undefined,
    $original: {
      name: '房间01'
    },
    $mapper: {}
  },
  {
    label: '房间1',
    value: undefined,
    $original: {
      name: '房间1'
    },
    $mapper: {}
  },
  {
    label: '房间9',
    value: undefined,
    $original: {
      name: '房间9'
    },
    $mapper: {}
  },
  {
    label: '房间11',
    value: undefined,
    $original: {
      name: '房间11'
    },
    $mapper: {}
  },
  {
    label: '房间100',
    value: undefined,
    $original: {
      name: '房间100'
    },
    $mapper: {}
  },
  {
    label: '房间',
    value: undefined,
    $original: {
      name: '房间'
    },
    $mapper: {}
  }
]
```