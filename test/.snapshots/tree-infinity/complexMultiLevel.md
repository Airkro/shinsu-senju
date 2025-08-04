# Snapshot complexMultiLevel

should handle complex multi-level structure

## Input

### Options
```js
export default {
  parentKey: 'parent.id'
}
```

### Data
```js
export default [
  {
    id: 1
  },
  {
    id: 2,
    parent: {
      id: 1
    }
  },
  {
    id: 3,
    parent: {
      id: 1
    }
  },
  {
    id: 4,
    parent: {
      id: 2
    }
  },
  {
    id: 5,
    parent: {
      id: 3
    }
  }
]
```

## Output

### treeInfinity
```js
export default [
  {
    id: 1,
    children: [
      {
        id: 2,
        parent: {
          id: 1
        },
        children: [
          {
            id: 4,
            parent: {
              id: 2
            }
          }
        ]
      },
      {
        id: 3,
        parent: {
          id: 1
        },
        children: [
          {
            id: 5,
            parent: {
              id: 3
            }
          }
        ]
      }
    ]
  }
]
```