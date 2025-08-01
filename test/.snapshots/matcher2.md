# Snapshot matcher2

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
    "$mapper": {
      "disabled": {
        "when": "parent",
      },
    },
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
    "$mapper": {
      "disabled": {
        "when": "parent",
      },
    },
    "$original": {
      "id": 2,
      "name": "Item 2",
      "parent": "A",
    },
    "disabled": true,
    "label": "Item 2",
    "value": 2,
  },
  {
    "$mapper": {
      "disabled": {
        "when": "parent",
      },
    },
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
    "$mapper": {
      "disabled": {
        "when": "parent",
      },
    },
    "$original": {
      "id": 4,
      "name": "Item 4",
      "parent": "B",
    },
    "disabled": true,
    "label": "Item 4",
    "value": 4,
  },
  {
    "$mapper": {
      "disabled": {
        "when": "parent",
      },
    },
    "$original": {
      "id": 5,
      "name": "Item 5",
      "parent": "C",
    },
    "disabled": true,
    "label": "Item 5",
    "value": 5,
  },
  {
    "$mapper": {
      "disabled": {
        "when": "parent",
      },
    },
    "$original": {
      "id": 6,
      "name": "Item 6",
      "parent": "C",
    },
    "disabled": true,
    "label": "Item 6",
    "value": 6,
  },
  {
    "$mapper": {
      "disabled": {
        "when": "parent",
      },
    },
    "$original": {
      "id": 7,
      "name": "Item 7",
      "parent": "D",
    },
    "disabled": true,
    "label": "Item 7",
    "value": 7,
  },
]
```

### tableGrouping
```json5
[
  {
    "$group": {
      "groupBy": "parent",
      "labelBy": "parent",
      "skipSingle": false,
      "sortBy": "parent",
    },
    "children": [
      {
        "$mapper": {
          "disabled": {
            "when": "parent",
          },
        },
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
        "$mapper": {
          "disabled": {
            "when": "parent",
          },
        },
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
    "$group": {
      "groupBy": "parent",
      "labelBy": "parent",
      "skipSingle": false,
      "sortBy": "parent",
    },
    "children": [
      {
        "$mapper": {
          "disabled": {
            "when": "parent",
          },
        },
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
        "$mapper": {
          "disabled": {
            "when": "parent",
          },
        },
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
    "$group": {
      "groupBy": "parent",
      "labelBy": "parent",
      "skipSingle": false,
      "sortBy": "parent",
    },
    "children": [
      {
        "$mapper": {
          "disabled": {
            "when": "parent",
          },
        },
        "$original": {
          "id": 5,
          "name": "Item 5",
          "parent": "C",
        },
        "disabled": true,
        "label": "Item 5",
        "value": 5,
      },
      {
        "$mapper": {
          "disabled": {
            "when": "parent",
          },
        },
        "$original": {
          "id": 6,
          "name": "Item 6",
          "parent": "C",
        },
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
    "$group": {
      "groupBy": "parent",
      "labelBy": "parent",
      "skipSingle": false,
      "sortBy": "parent",
    },
    "children": [
      {
        "$mapper": {
          "disabled": {
            "when": "parent",
          },
        },
        "$original": {
          "id": 7,
          "name": "Item 7",
          "parent": "D",
        },
        "disabled": true,
        "label": "Item 7",
        "value": 7,
      },
    ],
    "label": "D",
    "selectable": false,
    "value": "D",
  },
]
```