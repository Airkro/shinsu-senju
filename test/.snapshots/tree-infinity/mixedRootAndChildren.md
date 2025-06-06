# Snapshot mixedRootAndChildren

should handle mixed root nodes and children

## Input

### Data
```json5
[
  {
    "id": 1,
  },
  {
    "id": 2,
    "parentId": 1,
  },
  {
    "id": 3,
  },
  {
    "id": 4,
    "parentId": 2,
  },
  {
    "id": 5,
  },
  {
    "id": 6,
    "parentId": 3,
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
        ],
        "id": 2,
        "parentId": 1,
      },
    ],
    "id": 1,
  },
  {
    "children": [
      {
        "id": 6,
        "parentId": 3,
      },
    ],
    "id": 3,
  },
  {
    "id": 5,
  },
]
```