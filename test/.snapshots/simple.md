# Snapshot simple

should group data by column and return tree structure

## Input

### Options
```json5
{
  "paths": {
    "groupBy": "parent",
  },
}
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
    "name2": "Item 2",
    "parent": "A",
  },
  {
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
    "$meta": {
      "groupBy": "parent",
      "value": "A",
    },
    "children": [
      {
        "id": 1,
        "name": "Item 1",
        "parent": "A",
      },
      {
        "id": 2,
        "name2": "Item 2",
        "parent": "A",
      },
    ],
  },
  {
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
    "$meta": {
      "groupBy": "parent",
      "value": "A",
    },
    "children": [
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
          "name2": "Item 2",
          "parent": "A",
        },
        "label": 2,
        "value": 2,
      },
    ],
    "label": "A",
    "selectable": false,
    "value": "A",
  },
  {
    "$original": {
      "id": 3,
      "name": "Item 3",
      "parent": "B",
    },
    "label": "Item 3",
    "value": 3,
  },
]
```