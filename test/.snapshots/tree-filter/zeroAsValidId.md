# Snapshot zeroAsValidId

should handle zero as valid ID

## Input

### Options
```json5
{
  "filterBy": [Function],
  "parentKey": "parentId",
}
```

### Data
```json5
[
  {
    "id": 0,
    "name": "Root",
  },
  {
    "id": 1,
    "name": "Child of Zero",
    "parentId": 0,
  },
  {
    "id": 2,
    "name": "Target",
    "parentId": 1,
  },
]
```

## Output

### treeFilter
```json5
[
  {
    "id": 2,
    "name": "Target",
    "parentId": 1,
  },
]
```