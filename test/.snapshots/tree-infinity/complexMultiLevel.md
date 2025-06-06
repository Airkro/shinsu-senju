# Snapshot complexMultiLevel

should handle complex multi-level structure

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
    "parentId": 1,
  },
  {
    "id": 4,
    "parentId": 2,
  },
  {
    "id": 5,
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
      {
        "children": [
          {
            "id": 5,
            "parentId": 3,
          },
        ],
        "id": 3,
        "parentId": 1,
      },
    ],
    "id": 1,
  },
]
```