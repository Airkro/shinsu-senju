# Snapshot single

should handle single column grouping with one item

## Input

### Options
```json5
{
  "groups": [
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
    "name": "Single Item",
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
      "name": "Single Item",
    },
    "label": "Single Item",
    "value": 1,
  },
]
```

### tableGrouping
```json5
[
  {
    "$group": {
      "extraBy": undefined,
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
          "name": "Single Item",
        },
        "label": "Single Item",
        "value": 1,
      },
    ],
    "label": "A",
    "selectable": false,
    "value": "A",
  },
]
```