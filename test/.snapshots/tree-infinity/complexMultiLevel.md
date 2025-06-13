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
    "parent": {
      "id": 1,
    },
  },
  {
    "id": 3,
    "parent": {
      "id": 1,
    },
  },
  {
    "id": 4,
    "parent": {
      "id": 2,
    },
  },
  {
    "id": 5,
    "parent": {
      "id": 3,
    },
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
            "parent": {
              "id": 2,
            },
          },
        ],
        "id": 2,
        "parent": {
          "id": 1,
        },
      },
      {
        "children": [
          {
            "id": 5,
            "parent": {
              "id": 3,
            },
          },
        ],
        "id": 3,
        "parent": {
          "id": 1,
        },
      },
    ],
    "id": 1,
  },
]
```