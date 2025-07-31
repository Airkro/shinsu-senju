# Snapshot matcher

matcher

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
      "when": "parent",
    },
    "selectable": {
      "enum": [
        "A",
        "B",
      ],
      "when": "parent",
    },
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

### treeMapper
```json5
[
  {
    "$original": {
      "id": 1,
      "name": "Item 1",
      "parent": "A",
    },
    "disabled": false,
    "label": "Item 1",
    "selectable": true,
    "value": 1,
  },
  {
    "$original": {
      "id": 2,
      "name": "Item 2",
      "parent": "A",
    },
    "disabled": false,
    "label": "Item 2",
    "selectable": true,
    "value": 2,
  },
  {
    "$original": {
      "id": 3,
      "name": "Item 3",
      "parent": "B",
    },
    "disabled": false,
    "label": "Item 3",
    "selectable": true,
    "value": 3,
  },
  {
    "$original": {
      "id": 4,
      "name": "Item 4",
      "parent": "B",
    },
    "disabled": false,
    "label": "Item 4",
    "selectable": true,
    "value": 4,
  },
  {
    "$original": {
      "id": 5,
      "name": "Item 5",
      "parent": "C",
    },
    "disabled": true,
    "label": "Item 5",
    "selectable": false,
    "value": 5,
  },
  {
    "$original": {
      "id": 6,
      "name": "Item 6",
      "parent": "C",
    },
    "disabled": true,
    "label": "Item 6",
    "selectable": false,
    "value": 6,
  },
  {
    "$original": {
      "id": 7,
      "name": "Item 7",
      "parent": "D",
    },
    "disabled": false,
    "label": "Item 7",
    "selectable": false,
    "value": 7,
  },
]
```

### tableGrouping
```json5
[
  {
    "$meta": {
      "groupBy": "parent",
      "labelBy": "parent",
      "skipSingle": false,
      "sortBy": "parent",
    },
    "children": [
      {
        "$original": {
          "id": 1,
          "name": "Item 1",
          "parent": "A",
        },
        "disabled": false,
        "label": "Item 1",
        "selectable": true,
        "value": 1,
      },
      {
        "$original": {
          "id": 2,
          "name": "Item 2",
          "parent": "A",
        },
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
    "$meta": {
      "groupBy": "parent",
      "labelBy": "parent",
      "skipSingle": false,
      "sortBy": "parent",
    },
    "children": [
      {
        "$original": {
          "id": 3,
          "name": "Item 3",
          "parent": "B",
        },
        "disabled": false,
        "label": "Item 3",
        "selectable": true,
        "value": 3,
      },
      {
        "$original": {
          "id": 4,
          "name": "Item 4",
          "parent": "B",
        },
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
    "$meta": {
      "groupBy": "parent",
      "labelBy": "parent",
      "skipSingle": false,
      "sortBy": "parent",
    },
    "children": [
      {
        "$original": {
          "id": 5,
          "name": "Item 5",
          "parent": "C",
        },
        "disabled": true,
        "label": "Item 5",
        "selectable": false,
        "value": 5,
      },
      {
        "$original": {
          "id": 6,
          "name": "Item 6",
          "parent": "C",
        },
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
    "$meta": {
      "groupBy": "parent",
      "labelBy": "parent",
      "skipSingle": false,
      "sortBy": "parent",
    },
    "children": [
      {
        "$original": {
          "id": 7,
          "name": "Item 7",
          "parent": "D",
        },
        "disabled": false,
        "label": "Item 7",
        "selectable": false,
        "value": 7,
      },
    ],
    "label": "D",
    "selectable": false,
    "value": "D",
  },
]
```