# Snapshot multipleMatches

should handle multiple matches

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
    "id": 1,
    "name": "Root",
  },
  {
    "id": 2,
    "name": "Active 1",
    "parentId": 1,
  },
  {
    "id": 3,
    "name": "Active 2",
    "parentId": 1,
  },
  {
    "id": 4,
    "name": "Inactive",
    "parentId": 2,
  },
  {
    "id": 5,
    "name": "Active 3",
    "parentId": 3,
  },
]
```

## Output

### treeFilter
```json5
[
  {
    "id": 2,
    "name": "Active 1",
    "parentId": 1,
  },
  {
    "id": 3,
    "name": "Active 2",
    "parentId": 1,
  },
  {
    "id": 5,
    "name": "Active 3",
    "parentId": 3,
  },
  {
    "id": 1,
    "name": "Root",
  },
]
```