# Snapshot simpleTreeStructure

should organize flat array into tree structure

## Input

### Data
```json5
[
  {
    "id": 4,
    "parentId": 2,
  },
  {
    "id": 5,
    "parentId": 2,
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
    "parentId": 1,
  },
  {
    "id": 6,
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
            "id": 4,
            "parentId": 2,
          },
          {
            "id": 5,
            "parentId": 2,
          },
        ],
        "id": 2,
        "parentId": 1,
      },
      {
        "id": 3,
        "parentId": 1,
      },
    ],
    "id": 1,
  },
  {
    "id": 6,
  },
]
```