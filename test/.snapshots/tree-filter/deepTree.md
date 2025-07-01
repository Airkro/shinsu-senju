# Snapshot deepTree

should handle deep tree structure

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
    "name": "Level 1",
    "parentId": 1,
  },
  {
    "id": 3,
    "name": "Level 2",
    "parentId": 2,
  },
  {
    "id": 4,
    "name": "Level 3",
    "parentId": 3,
  },
  {
    "id": 5,
    "name": "Level 4",
    "parentId": 4,
  },
]
```

## Output

### treeFilter
```json5
[
  {
    "id": 5,
    "name": "Level 4",
    "parentId": 4,
  },
]
```