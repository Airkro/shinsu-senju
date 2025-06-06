# Snapshot infiniteLevelsNesting

should support infinite levels of nesting

## Input

### Data
```json5
[
  {
    "id": 7,
    "parentId": 6,
  },
  {
    "id": 8,
    "parentId": 7,
  },
  {
    "id": 9,
    "parentId": 8,
  },
  {
    "id": 10,
    "parentId": 9,
  },
  {
    "id": 1,
  },
  {
    "id": 2,
    "parentId": 1,
  },
  {
    "id": 3,
    "parentId": 2,
  },
  {
    "id": 4,
    "parentId": 3,
  },
  {
    "id": 5,
    "parentId": 4,
  },
  {
    "id": 6,
    "parentId": 5,
  },
]
```

## Output

### treeInfinity
```json5
[
  {
    "children": [
      {
        "children": [
          {
            "children": [
              {
                "children": [
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "id": 10,
                                        "parentId": 9,
                                      },
                                    ],
                                    "id": 9,
                                    "parentId": 8,
                                  },
                                ],
                                "id": 8,
                                "parentId": 7,
                              },
                            ],
                            "id": 7,
                            "parentId": 6,
                          },
                        ],
                        "id": 6,
                        "parentId": 5,
                      },
                    ],
                    "id": 5,
                    "parentId": 4,
                  },
                ],
                "id": 4,
                "parentId": 3,
              },
            ],
            "id": 3,
            "parentId": 2,
          },
        ],
        "id": 2,
        "parentId": 1,
      },
    ],
    "id": 1,
  },
]
```