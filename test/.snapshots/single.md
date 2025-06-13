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
    "group": "A",
    "id": 1,
    "name": "Single Item",
  },
]
```

### treeMapper
```json5
[
  {
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