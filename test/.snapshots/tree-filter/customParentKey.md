# Snapshot customParentKey

should work with custom parent key

## Input

### Options
```json5
{
  "filterBy": [Function],
  "parentKey": "parent",
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
    "parent": 1,
  },
  {
    "id": 3,
    "name": "Child 2",
    "parent": 1,
  },
]
```

## Output

### treeFilter
```json5
[
  {
    "id": 2,
    "name": "Child 1",
    "parent": 1,
  },
]
```