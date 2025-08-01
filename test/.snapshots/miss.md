# Snapshot miss



## Input

### Options
```json5
{
  "groups": [
    {},
    {
      "groupBy": "group",
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
    "$mapper": {},
    "$original": {
      "group": "A",
      "id": 1,
      "name": "Item",
    },
    "label": "Item",
    "value": 1,
  },
  {
    "$mapper": {},
    "$original": {
      "group": "A",
      "id": 2,
      "name": "Item",
    },
    "label": "Item",
    "value": 2,
  },
  {
    "$mapper": {},
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
    "$group": {
      "groupBy": "group",
      "labelBy": "group",
      "skipSingle": false,
      "sortBy": "group",
    },
    "children": [
      {
        "$mapper": {},
        "$original": {
          "group": "A",
          "id": 1,
          "name": "Item",
        },
        "label": "Item",
        "value": 1,
      },
      {
        "$mapper": {},
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
    "$group": {
      "groupBy": "group",
      "labelBy": "group",
      "skipSingle": false,
      "sortBy": "group",
    },
    "children": [
      {
        "$mapper": {},
        "$original": {
          "group": "B",
          "id": 3,
          "name": "Item",
        },
        "label": "Item",
        "value": 3,
      },
    ],
    "label": "B",
    "selectable": false,
    "value": "B",
  },
]
```