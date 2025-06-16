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

### tableGrouping
```json5
[
  {
    "$meta": {
      "groupBy": "group",
      "label": "A",
      "value": "A",
    },
    "children": [
      {
        "group": "A",
        "id": 1,
        "name": "Single Item",
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
      "groupBy": "group",
      "label": "A",
      "value": "A",
    },
    "children": [
      {
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