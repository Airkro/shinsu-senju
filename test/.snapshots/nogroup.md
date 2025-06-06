# Snapshot nogroup

should group data by column and return tree structure

## Input

### Options
```json5
{}
```

### Data
```json5
[
  {
    "id": 1,
    "name": "Item 1",
    "parent": "A",
  },
  {
    "id": 2,
    "name": "Item 2",
    "parent": "A",
  },
  {
    "children": [
      {
        "id": 4,
        "name": "Item 4",
      },
    ],
    "id": 3,
    "name": "Item 3",
    "parent": "B",
  },
]
```

## Output

### table2tree
```json5
[
  {
    "id": 1,
    "name": "Item 1",
    "parent": "A",
  },
  {
    "id": 2,
    "name": "Item 2",
    "parent": "A",
  },
  {
    "children": [
      {
        "id": 4,
        "name": "Item 4",
      },
    ],
    "id": 3,
    "name": "Item 3",
    "parent": "B",
  },
]
```

### treeMapper
```json5
[
  {
    "$original": {
      "id": 1,
      "name": "Item 1",
      "parent": "A",
    },
    "label": "Item 1",
    "value": 1,
  },
  {
    "$original": {
      "id": 2,
      "name": "Item 2",
      "parent": "A",
    },
    "label": "Item 2",
    "value": 2,
  },
  {
    "$original": {
      "id": 3,
      "name": "Item 3",
      "parent": "B",
    },
    "children": [
      {
        "$original": {
          "id": 4,
          "name": "Item 4",
        },
        "label": "Item 4",
        "value": 4,
      },
    ],
    "label": "Item 3",
    "value": 3,
  },
]
```