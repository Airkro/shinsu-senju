# Snapshot deep

should handle deep groupBy key (dot notation)

## Input

### Options
```json5
{
  "extra": "info.type.name",
  "paths": [
    {
      "groupBy": "info.type.code",
      "labelBy": "info.type.name",
    },
  ],
}
```

### Data
```json5
[
  {
    "id": 1,
    "info": {
      "type": {
        "code": "X",
        "name": "联通",
      },
    },
    "name": "Item 1",
  },
  {
    "id": 2,
    "info": {
      "type": {
        "code": "Y",
        "name": "电信",
      },
    },
    "name": "Item 2",
  },
  {
    "id": 3,
    "info": {
      "type": {
        "code": "X",
        "name": "联通",
      },
    },
    "name": "Item 3",
  },
  {
    "id": 4,
    "info": {
      "type": {
        "code": "Z",
        "name": "移动",
      },
    },
    "name": "Item 4",
  },
]
```

## Output

### table2tree
```json5
[
  {
    "$meta": {
      "groupBy": "info.type.code",
      "label": "联通",
      "value": "X",
    },
    "children": [
      {
        "id": 1,
        "info": {
          "type": {
            "code": "X",
            "name": "联通",
          },
        },
        "name": "Item 1",
      },
      {
        "id": 3,
        "info": {
          "type": {
            "code": "X",
            "name": "联通",
          },
        },
        "name": "Item 3",
      },
    ],
  },
  {
    "id": 2,
    "info": {
      "type": {
        "code": "Y",
        "name": "电信",
      },
    },
    "name": "Item 2",
  },
  {
    "id": 4,
    "info": {
      "type": {
        "code": "Z",
        "name": "移动",
      },
    },
    "name": "Item 4",
  },
]
```

### treeMapper
```json5
[
  {
    "children": [
      {
        "label": "Item 1",
        "value": 1,
      },
      {
        "label": "Item 3",
        "value": 3,
      },
    ],
    "extra": undefined,
    "label": "联通",
    "selectable": false,
    "value": "X",
  },
  {
    "extra": "电信",
    "label": "Item 2",
    "value": 2,
  },
  {
    "extra": "移动",
    "label": "Item 4",
    "value": 4,
  },
]
```