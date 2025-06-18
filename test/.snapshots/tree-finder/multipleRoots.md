# Snapshot multipleRoots

多根节点树测试

## Input

### Options
```json5
{
  "target": "target",
}
```

### Data
```json5
[
  {
    "children": [
      {
        "id": 2,
        "value": "child1",
      },
    ],
    "id": 1,
    "value": "root1",
  },
  {
    "children": [
      {
        "id": 4,
        "value": "target",
      },
    ],
    "id": 3,
    "value": "root2",
  },
]
```

## Output

### treeFinder
```json5
[
  "root2",
  "target",
]
```