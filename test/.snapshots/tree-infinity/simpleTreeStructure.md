# Snapshot simpleTreeStructure

should organize flat array into tree structure

## Input

### Data
```js
export default [
  {
    id: 4,
    parentId: 2
  },
  {
    id: 5,
    parentId: 2
  },
  {
    id: 1
  },
  {
    id: 2,
    parentId: 1
  },
  {
    id: 3,
    parentId: 1
  },
  {
    id: 6
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
          },
          {
            id: 5,
            parentId: 2
          }
        ]
      },
      {
        id: 3,
        parentId: 1
      }
    ]
  },
  {
    id: 6
  }
]
```