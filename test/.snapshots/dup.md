# Snapshot dup



## Input

### Options
```json5
{
  "groups": [
    {
      "groupBy": "group.id",
      "labelBy": "group.name",
    },
  ],
  "mappers": {
    "label": "user.name",
    "value": "user.id",
  },
}
```

### Data
```json5
[
  {
    "group": {
      "id": 2,
      "name": "group2",
    },
    "user": {
      "id": 555,
      "name": "李",
    },
  },
  {
    "group": {
      "id": 2,
      "name": "group2",
    },
    "user": {
      "id": 555,
      "name": "李",
    },
  },
  {
    "group": {
      "id": 1,
      "name": "group1",
    },
    "user": {
      "id": 555,
      "name": "李",
    },
  },
]
```

## Output

### tableGrouping
```json5
[
  {
    "$meta": {
      "groupBy": "group.id",
      "label": "group2",
      "value": 2,
    },
    "children": [
      {
        "group": {
          "id": 2,
          "name": "group2",
        },
        "user": {
          "id": 555,
          "name": "李",
        },
      },
      {
        "group": {
          "id": 2,
          "name": "group2",
        },
        "user": {
          "id": 555,
          "name": "李",
        },
      },
    ],
  },
  {
    "$meta": {
      "groupBy": "group.id",
      "label": "group1",
      "value": 1,
    },
    "children": [
      {
        "group": {
          "id": 1,
          "name": "group1",
        },
        "user": {
          "id": 555,
          "name": "李",
        },
      },
    ],
  },
]
```

### treeMapper
```json5
[
  {
    "$meta": {
      "groupBy": "group.id",
      "label": "group2",
      "value": 2,
    },
    "children": [
      {
        "$original": {
          "group": {
            "id": 2,
            "name": "group2",
          },
          "user": {
            "id": 555,
            "name": "李",
          },
        },
        "label": "李",
        "value": 555,
      },
      {
        "$original": {
          "group": {
            "id": 2,
            "name": "group2",
          },
          "user": {
            "id": 555,
            "name": "李",
          },
        },
        "label": "李",
        "value": 555,
      },
    ],
    "label": "group2",
    "selectable": false,
    "value": 2,
  },
  {
    "$meta": {
      "groupBy": "group.id",
      "label": "group1",
      "value": 1,
    },
    "children": [
      {
        "$original": {
          "group": {
            "id": 1,
            "name": "group1",
          },
          "user": {
            "id": 555,
            "name": "李",
          },
        },
        "label": "李",
        "value": 555,
      },
    ],
    "label": "group1",
    "selectable": false,
    "value": 1,
  },
]
```

### grouping
```json5
[
  {
    "$meta": {
      "groupBy": "group.id",
      "label": "group2",
      "value": 2,
    },
    "children": [
      {
        "$original": {
          "group": {
            "id": 2,
            "name": "group2",
          },
          "user": {
            "id": 555,
            "name": "李",
          },
        },
        "label": "李",
        "value": 555,
      },
    ],
    "label": "group2",
    "selectable": false,
    "value": 2,
  },
]
```