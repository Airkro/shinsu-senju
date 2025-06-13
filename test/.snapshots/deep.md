# Snapshot deep

should handle deep groupBy key (dot notation)

## Input

### Options
```json5
{
  "groups": [
    {
      "groupBy": "info.type.code",
      "labelBy": "info.type.name",
    },
  ],
  "mappers": {
    "extra": "info.type.name",
  },
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

### tableGrouping
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
    "$meta": {
      "groupBy": "info.type.code",
      "label": "联通",
      "value": "X",
    },
    "children": [
      {
        "$original": {
          "id": 1,
          "info": {
            "type": {
              "code": "X",
              "name": "联通",
            },
          },
          "name": "Item 1",
        },
        "extra": "联通",
        "label": "Item 1",
        "value": 1,
      },
      {
        "$original": {
          "id": 3,
          "info": {
            "type": {
              "code": "X",
              "name": "联通",
            },
          },
          "name": "Item 3",
        },
        "extra": "联通",
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
    "$original": {
      "id": 2,
      "info": {
        "type": {
          "code": "Y",
          "name": "电信",
        },
      },
      "name": "Item 2",
    },
    "extra": "电信",
    "label": "Item 2",
    "value": 2,
  },
  {
    "$original": {
      "id": 4,
      "info": {
        "type": {
          "code": "Z",
          "name": "移动",
        },
      },
      "name": "Item 4",
    },
    "extra": "移动",
    "label": "Item 4",
    "value": 4,
  },
]
```