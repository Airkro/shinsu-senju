# Snapshot nestedArrays

树中包含嵌套数组的测试

## Input

### Options
```json5
{
  "target": [
    "target",
    "found",
  ],
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
            "value": [
              "target",
              "found",
            ],
          },
        ],
        "id": 2,
        "value": [
          "branch",
          "leaf",
        ],
      },
    ],
    "id": 1,
    "value": [
      "root",
    ],
  },
]
```

## Output

### treeFinder
```json5
[]
```