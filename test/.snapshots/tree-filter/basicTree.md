# Snapshot basicTree

should filter basic tree structure

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
    "name": "Child 1",
    "parentId": 1,
  },
  {
    "id": 3,
    "name": "Child 2",
    "parentId": 1,
  },
  {
    "id": 4,
    "name": "Grandchild",
    "parentId": 2,
  },
]
```

## Output

### treeFilter
```json5
[
  {
    "id": 4,
    "name": "Grandchild",
    "parentId": 2,
  },
]
```