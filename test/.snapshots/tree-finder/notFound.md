# Snapshot notFound

找不到目标值的测试

## Input

### Options
```json5
{
  "target": "nonexistent",
}
```

### Data
```json5
[
  {
    "children": [
      {
        "id": 2,
        "value": "b",
      },
      {
        "id": 3,
        "value": "c",
      },
    ],
    "id": 1,
    "value": "a",
  },
]
```

## Output

### treeFinder
```json5
[]
```