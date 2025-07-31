# Snapshot reverse

reverse

## Input

### Options
```json5
{
  "groups": {
    "groupBy": "parent",
  },
  "mappers": {
    "disabled": {
      "const": "C",
      "reverse": true,
      "when": "parent",
    },
  },
}
```

### Data
```json5
[
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
    "id": 7,
    "name": "Item",
    "parent": "D",
  },
]
```

## Output

### tableGrouping
```json5
[
  {
    "$meta": {
      "groupBy": "parent",
      "label": "C",
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
    "$meta": {
      "groupBy": "parent",
      "label": "A",
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
      "label": "B",
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
      "label": "D",
      "value": "D",
    },
    "children": [
      {
        "id": 7,
        "name": "Item",
        "parent": "D",
      },
    ],
  },
]
```

### treeMapper
```json5
[
  {
    "$meta": {
      "groupBy": "parent",
      "label": "C",
      "value": "C",
    },
    "children": [
      {
        "$original": {
          "id": 5,
          "name": "Item 5",
          "parent": "C",
        },
        "disabled": false,
        "label": "Item 5",
        "value": 5,
      },
      {
        "$original": {
          "id": 6,
          "name": "Item 6",
          "parent": "C",
        },
        "disabled": false,
        "label": "Item 6",
        "value": 6,
      },
    ],
    "label": "C",
    "selectable": false,
    "value": "C",
  },
  {
    "$meta": {
      "groupBy": "parent",
      "label": "A",
      "value": "A",
    },
    "children": [
      {
        "$original": {
          "id": 1,
          "name": "Item 1",
          "parent": "A",
        },
        "disabled": true,
        "label": "Item 1",
        "value": 1,
      },
      {
        "$original": {
          "id": 2,
          "name": "Item 2",
          "parent": "A",
        },
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
    "$meta": {
      "groupBy": "parent",
      "label": "B",
      "value": "B",
    },
    "children": [
      {
        "$original": {
          "id": 3,
          "name": "Item 3",
          "parent": "B",
        },
        "disabled": true,
        "label": "Item 3",
        "value": 3,
      },
      {
        "$original": {
          "id": 4,
          "name": "Item 4",
          "parent": "B",
        },
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
    "$meta": {
      "groupBy": "parent",
      "label": "D",
      "value": "D",
    },
    "children": [
      {
        "$original": {
          "id": 7,
          "name": "Item",
          "parent": "D",
        },
        "disabled": true,
        "label": "Item",
        "value": 7,
      },
    ],
    "label": "D",
    "selectable": false,
    "value": "D",
  },
]
```