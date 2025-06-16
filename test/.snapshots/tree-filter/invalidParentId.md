# Snapshot invalidParentId

should handle invalid parent IDs

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
    "name": "Invalid Parent",
    "parentId": 999,
  },
  {
    "id": 3,
    "name": "Null Parent",
    "parentId": null,
  },
  {
    "id": 4,
    "name": "Undefined Parent",
    "parentId": undefined,
  },
]
```

## Output

### treeFilter
```json5
[
  {
    "id": 2,
    "name": "Invalid Parent",
    "parentId": 999,
  },
  {
    "id": 3,
    "name": "Null Parent",
    "parentId": null,
  },
  {
    "id": 4,
    "name": "Undefined Parent",
    "parentId": undefined,
  },
]
```