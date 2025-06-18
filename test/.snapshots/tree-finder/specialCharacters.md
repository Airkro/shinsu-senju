# Snapshot specialCharacters

目标值包含特殊字符的测试

## Input

### Options
```json5
{
  "target": "{}|:"<>?",
}
```

### Data
```json5
[
  {
    "children": [
      {
        "id": 2,
        "value": "%^&*",
      },
      {
        "children": [
          {
            "id": 4,
            "value": "{}|:"<>?",
          },
        ],
        "id": 3,
        "value": "()_+",
      },
    ],
    "id": 1,
    "value": "!@#",
  },
]
```

## Output

### treeFinder
```json5
[
  "!@#",
  "()_+",
  "{}|:"<>?",
]
```