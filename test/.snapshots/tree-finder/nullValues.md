# Snapshot nullValues

树中包含 null 值的测试

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
        "value": null,
      },
      {
        "children": [
          {
            "id": 5,
            "value": null,
          },
        ],
        "id": 4,
        "value": "target",
      },
    ],
    "id": 1,
    "value": null,
  },
]
```

## Output

### treeFinder
```json5
[
  null,
  "target",
]
```