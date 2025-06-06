# Snapshot invalidParentReferences

should handle invalid parent references

## Input

### Data
```json5
[
  {
    "id": 1,
  },
  {
    "id": 2,
    "parentId": 999,
  },
]
```

## Output

### treeInfinity
```json5
[
  {
    "id": 1,
  },
  {
    "id": 2,
    "parentId": 999,
  },
]
```