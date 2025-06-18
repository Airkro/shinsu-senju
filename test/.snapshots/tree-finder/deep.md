# Snapshot deep

多层级树测试

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
        "children": [
          {
            "children": [
              {
                "id": 4,
                "value": "target",
              },
            ],
            "id": 3,
            "value": "level2",
          },
        ],
        "id": 2,
        "value": "level1",
      },
    ],
    "id": 1,
    "value": "root",
  },
]
```

## Output

### treeFinder
```json5
[
  "root",
  "level1",
  "level2",
  "target",
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
            "children": [
              {
                "id": 4,
                "value": "target",
              },
            ],
            "id": 3,
            "value": "level2",
          },
        ],
        "id": 2,
        "value": "level1",
      },
    ],
    "id": 1,
    "value": "root",
  },
  {
    "children": [
      {
        "children": [
          {
            "id": 4,
            "value": "target",
          },
        ],
        "id": 3,
        "value": "level2",
      },
    ],
    "id": 2,
    "value": "level1",
  },
  {
    "children": [
      {
        "id": 4,
        "value": "target",
      },
    ],
    "id": 3,
    "value": "level2",
  },
  {
    "id": 4,
    "value": "target",
  },
]
```