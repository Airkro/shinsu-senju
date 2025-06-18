# Snapshot undefinedValues

树中包含 undefined 值的测试

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
        "value": "a",
      },
      {
        "id": 3,
        "value": undefined,
      },
      {
        "children": [
          {
            "id": 5,
            "value": undefined,
          },
        ],
        "id": 4,
        "value": "target",
      },
    ],
    "id": 1,
    "value": undefined,
  },
]
```

## Output

### treeFinder
```json5
[
  undefined,
  "target",
]
```