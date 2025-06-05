# Snapshot deep

should handle deep groupBy key (dot notation)

## Input

### Options
```json5
{
  "paths": [
    {
      "groupBy": "info.type.code",
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
      },
    },
    "name": "Item 1",
  },
  {
    "id": 2,
    "info": {
      "type": {
        "code": "Y",
      },
    },
    "name": "Item 2",
  },
  {
    "id": 3,
    "info": {
      "type": {
        "code": "X",
      },
    },
    "name": "Item 3",
  },
  {
    "id": 4,
    "info": {
      "type": {
        "code": "Z",
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
      "value": "X",
    },
    "children": [
      {
        "id": 1,
        "info": {
          "type": {
            "code": "X",
          },
        },
        "name": "Item 1",
      },
      {
        "id": 3,
        "info": {
          "type": {
            "code": "X",
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
      },
    },
    "name": "Item 2",
  },
  {
    "id": 4,
    "info": {
      "type": {
        "code": "Z",
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
    "label": "X",
    "selectable": false,
    "value": "X",
  },
  {
    "label": "Item 2",
    "value": 2,
  },
  {
    "label": "Item 4",
    "value": 4,
  },
]
```