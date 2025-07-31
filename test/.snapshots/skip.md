# Snapshot skip



## Input

### Options
```json5
{
  "groups": [
    {},
    {
      "groupBy": "group",
      "skipSingle": true,
    },
  ],
}
```

### Data
```json5
[
  {
    "group": "A",
    "id": 1,
    "name": "Item",
  },
  {
    "group": "A",
    "id": 2,
    "name": "Item",
  },
  {
    "group": "B",
    "id": 3,
    "name": "Item",
  },
]
```

## Output

### treeMapper
```json5
[
  {
    "$original": {
      "group": "A",
      "id": 1,
      "name": "Item",
    },
    "label": "Item",
    "value": 1,
  },
  {
    "$original": {
      "group": "A",
      "id": 2,
      "name": "Item",
    },
    "label": "Item",
    "value": 2,
  },
  {
    "$original": {
      "group": "B",
      "id": 3,
      "name": "Item",
    },
    "label": "Item",
    "value": 3,
  },
]
```

### tableGrouping
```json5
[
  {
    "$meta": {
      "groupBy": "group",
      "labelBy": "group",
      "skipSingle": true,
      "sortBy": "group",
    },
    "children": [
      {
        "$original": {
          "group": "A",
          "id": 1,
          "name": "Item",
        },
        "label": "Item",
        "value": 1,
      },
      {
        "$original": {
          "group": "A",
          "id": 2,
          "name": "Item",
        },
        "label": "Item",
        "value": 2,
      },
    ],
    "label": "A",
    "selectable": false,
    "value": "A",
  },
  {
    "$original": {
      "group": "B",
      "id": 3,
      "name": "Item",
    },
    "label": "Item",
    "value": 3,
  },
]
```