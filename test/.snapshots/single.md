# Snapshot single

should handle single column grouping with one item

## Input

### Options
```json5
{
  "paths": [
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

### table2tree
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
    "label": "Single Item",
    "value": 1,
  },
]
```