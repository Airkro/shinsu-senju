# Snapshot mixedRootAndChildren

should handle mixed root nodes and children

## Input

### Data
```js
export default [
  {
    id: 1
  },
  {
    id: 2,
    parentId: 1
  },
  {
    id: 3
  },
  {
    id: 4,
    parentId: 2
  },
  {
    id: 5
  },
  {
    id: 6,
    parentId: 3
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
        parentId: 1,
        children: [
          {
            id: 4,
            parentId: 2
          }
        ]
      }
    ]
  },
  {
    id: 3,
    children: [
      {
        id: 6,
        parentId: 3
      }
    ]
  },
  {
    id: 5
  }
]
```