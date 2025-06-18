# Snapshot complexObjects

目标值是复杂对象的测试

## Input

### Options
```json5
{
  "target": {
    "name": "target.txt",
    "size": 1024,
    "type": "file",
  },
}
```

### Data
```json5
[
  {
    "children": [
      {
        "children": [
          {
            "id": 3,
            "value": {
              "name": "target.txt",
              "size": 1024,
              "type": "file",
            },
          },
        ],
        "id": 2,
        "value": {
          "name": "subfolder",
          "type": "folder",
        },
      },
    ],
    "id": 1,
    "value": {
      "name": "root",
      "type": "folder",
    },
  },
]
```

## Output

### treeFinder
```json5
[]
```