# Snapshot infiniteLevelsNesting

should support infinite levels of nesting

## Input

### Data
```js
export default [
  {
    id: 7,
    parentId: 6
  },
  {
    id: 8,
    parentId: 7
  },
  {
    id: 9,
    parentId: 8
  },
  {
    id: 10,
    parentId: 9
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
    parentId: 2
  },
  {
    id: 4,
    parentId: 3
  },
  {
    id: 5,
    parentId: 4
  },
  {
    id: 6,
    parentId: 5
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
            id: 3,
            parentId: 2,
            children: [
              {
                id: 4,
                parentId: 3,
                children: [
                  {
                    id: 5,
                    parentId: 4,
                    children: [
                      {
                        id: 6,
                        parentId: 5,
                        children: [
                          {
                            id: 7,
                            parentId: 6,
                            children: [
                              {
                                id: 8,
                                parentId: 7,
                                children: [
                                  {
                                    id: 9,
                                    parentId: 8,
                                    children: [
                                      {
                                        id: 10,
                                        parentId: 9
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]
```