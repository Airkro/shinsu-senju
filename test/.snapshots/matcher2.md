# Snapshot matcher2

matcher

## Input

### Options
```json5
{
  "disabled": {
    "when": "parent",
  },
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
        "disabled": true,
        "label": "Item 1",
        "value": 1,
      },
      {
        "disabled": true,
        "label": "Item 2",
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
        "disabled": true,
        "label": "Item 3",
        "value": 3,
      },
      {
        "disabled": true,
        "label": "Item 4",
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
        "value": 5,
      },
      {
        "disabled": true,
        "label": "Item 6",
        "value": 6,
      },
    ],
    "label": "C",
    "selectable": false,
    "value": "C",
  },
  {
    "disabled": true,
    "label": "Item 7",
    "value": 7,
  },
]
```