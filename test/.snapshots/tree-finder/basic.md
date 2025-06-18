# Snapshot basic

基本查找测试 - 在简单树中查找值

## Input

### Options
```json5
{
  "target": "c",
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
            "value": "c",
          },
          {
            "id": 4,
            "value": "d",
          },
        ],
        "id": 2,
        "value": "b",
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
[
  "a",
  "b",
  "c",
]
```

### optionFinder
```json5
[
  {
    "children": [
      {
        "children": [
          {
            "id": 3,
            "value": "c",
          },
          {
            "id": 4,
            "value": "d",
          },
        ],
        "id": 2,
        "value": "b",
      },
    ],
    "id": 1,
    "value": "a",
  },
  {
    "children": [
      {
        "id": 3,
        "value": "c",
      },
      {
        "id": 4,
        "value": "d",
      },
    ],
    "id": 2,
    "value": "b",
  },
  {
    "id": 3,
    "value": "c",
  },
]
```