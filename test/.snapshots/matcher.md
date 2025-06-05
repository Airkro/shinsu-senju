# Snapshot matcher

matcher

## Input

### Options
```json5
{
  "disabled": {
    "enum": [
      "C",
    ],
    "when": "parent",
  },
  "paths": {
    "groupBy": "parent",
  },
  "selectable": {
    "enum": [
      "A",
      "B",
    ],
    "when": "parent",
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
    "name": "Item 2",
    "parent": "A",
  },
  {
    "id": 3,
    "name": "Item 3",
    "parent": "B",
  },
  {
    "id": 4,
    "name": "Item 4",
    "parent": "B",
  },
  {
    "id": 5,
    "name": "Item 5",
    "parent": "C",
  },
  {
    "id": 6,
    "name": "Item 6",
    "parent": "C",
  },
  {
    "id": 7,
    "name": "Item 7",
    "parent": "D",
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
        "name": "Item 2",
        "parent": "A",
      },
    ],
  },
  {
    "$meta": {
      "groupBy": "parent",
      "value": "B",
    },
    "children": [
      {
        "id": 3,
        "name": "Item 3",
        "parent": "B",
      },
      {
        "id": 4,
        "name": "Item 4",
        "parent": "B",
      },
    ],
  },
  {
    "$meta": {
      "groupBy": "parent",
      "value": "C",
    },
    "children": [
      {
        "id": 5,
        "name": "Item 5",
        "parent": "C",
      },
      {
        "id": 6,
        "name": "Item 6",
        "parent": "C",
      },
    ],
  },
  {
    "id": 7,
    "name": "Item 7",
    "parent": "D",
  },
]
```

### treeMapper
```json5
[
  {
    "children": [
      {
        "disabled": false,
        "label": "Item 1",
        "selectable": true,
        "value": 1,
      },
      {
        "disabled": false,
        "label": "Item 2",
        "selectable": true,
        "value": 2,
      },
    ],
    "label": "A",
    "selectable": false,
    "value": "A",
  },
  {
    "children": [
      {
        "disabled": false,
        "label": "Item 3",
        "selectable": true,
        "value": 3,
      },
      {
        "disabled": false,
        "label": "Item 4",
        "selectable": true,
        "value": 4,
      },
    ],
    "label": "B",
    "selectable": false,
    "value": "B",
  },
  {
    "children": [
      {
        "disabled": true,
        "label": "Item 5",
        "selectable": false,
        "value": 5,
      },
      {
        "disabled": true,
        "label": "Item 6",
        "selectable": false,
        "value": 6,
      },
    ],
    "label": "C",
    "selectable": false,
    "value": "C",
  },
  {
    "disabled": false,
    "label": "Item 7",
    "selectable": false,
    "value": 7,
  },
]
```