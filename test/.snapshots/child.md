# Snapshot child



## Input

### Options
```js
export default {
  mappers: {
    label: 'name',
    value: 'id',
    children: 'sub',
    childrenKey: 'child'
  }
}
```

### Data
```js
export default [
  {
    id: 1,
    name: 'Item 1'
  },
  {
    id: 2,
    name: 'Item 2'
  },
  {
    id: 3,
    name: 'Item 3',
    sub: [
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
    ident: 'id',
    $original: {
      id: 1,
      name: 'Item 1'
    },
    $mapper: {
      label: 'name',
      value: 'id',
      children: 'sub',
      childrenKey: 'child'
    }
  },
  {
    label: 'Item 2',
    value: 2,
    ident: 'id',
    $original: {
      id: 2,
      name: 'Item 2'
    },
    $mapper: {
      label: 'name',
      value: 'id',
      children: 'sub',
      childrenKey: 'child'
    }
  },
  {
    label: 'Item 3',
    value: 3,
    child: [
      {
        label: 'Item 4',
        value: 4,
        ident: 'id',
        $original: {
          id: 4,
          name: 'Item 4'
        },
        $mapper: {
          label: 'name',
          value: 'id',
          children: 'sub',
          childrenKey: 'child'
        }
      }
    ],
    ident: 'id',
    $original: {
      id: 3,
      name: 'Item 3',
      sub: [
        {
          id: 4,
          name: 'Item 4'
        }
      ]
    },
    $mapper: {
      label: 'name',
      value: 'id',
      children: 'sub',
      childrenKey: 'child'
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
    ident: 'id',
    $original: {
      id: 1,
      name: 'Item 1'
    },
    $mapper: {
      label: 'name',
      value: 'id',
      children: 'sub',
      childrenKey: 'child'
    }
  },
  {
    label: 'Item 2',
    value: 2,
    ident: 'id',
    $original: {
      id: 2,
      name: 'Item 2'
    },
    $mapper: {
      label: 'name',
      value: 'id',
      children: 'sub',
      childrenKey: 'child'
    }
  },
  {
    label: 'Item 3',
    value: 3,
    child: [
      {
        label: 'Item 4',
        value: 4,
        ident: 'id',
        $original: {
          id: 4,
          name: 'Item 4'
        },
        $mapper: {
          label: 'name',
          value: 'id',
          children: 'sub',
          childrenKey: 'child'
        }
      }
    ],
    ident: 'id',
    $original: {
      id: 3,
      name: 'Item 3',
      sub: [
        {
          id: 4,
          name: 'Item 4'
        }
      ]
    },
    $mapper: {
      label: 'name',
      value: 'id',
      children: 'sub',
      childrenKey: 'child'
    }
  }
]
```