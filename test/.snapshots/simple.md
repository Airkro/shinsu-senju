# Snapshot simple

should group data by column and return tree structure

## Input

### Options
```json5
{
  "groups": {
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

### treeMapper
```json5
[
  {
    "$mapper": {},
    "$original": {
      "id": 1,
      "name": "Item 1",
      "parent": "A",
    },
    "label": "Item 1",
    "value": 1,
  },
  {
    "$mapper": {},
    "$original": {
      "id": 3,
      "name": "Item 3",
      "parent": "B",
    },
    "label": "Item 3",
    "value": 3,
  },
  {
    "$mapper": {},
    "$original": {
      "id": 2,
      "name2": "Item 2",
      "parent": "A",
    },
    "label": 2,
    "value": 2,
  },
]
```

### tableGrouping
```json5
[
  {
    "$group": {
      "extraBy": undefined,
      "groupBy": "parent",
      "labelBy": "parent",
      "skipSingle": false,
      "sortBy": "parent",
    },
    "children": [
      {
        "$mapper": {},
        "$original": {
          "id": 1,
          "name": "Item 1",
          "parent": "A",
        },
        "label": "Item 1",
        "value": 1,
      },
      {
        "$mapper": {},
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
    "$group": {
      "extraBy": undefined,
      "groupBy": "parent",
      "labelBy": "parent",
      "skipSingle": false,
      "sortBy": "parent",
    },
    "children": [
      {
        "$mapper": {},
        "$original": {
          "id": 3,
          "name": "Item 3",
          "parent": "B",
        },
        "label": "Item 3",
        "value": 3,
      },
    ],
    "label": "B",
    "selectable": false,
    "value": "B",
  },
]
```