# Snapshot nested

should handle nested grouping

## Input

### Options
```json5
{
  "paths": [
    {
      "groupBy": "level1",
    },
    {
      "groupBy": "level2",
    },
    {
      "groupBy": "level3",
    },
  ],
}
```

### Data
```json5
[
  {
    "id": 1,
    "level1": "A",
    "level2": "X",
    "level3": "I",
    "name": "Item 1",
  },
  {
    "id": 2,
    "level1": "A",
    "level2": "X",
    "level3": "I",
    "name": "Item 2",
  },
  {
    "id": 3,
    "level1": "A",
    "level2": "X",
    "level3": "II",
    "name": "Item 3",
  },
  {
    "id": 4,
    "level1": "A",
    "level2": "Y",
    "level3": "I",
    "name": "Item 4",
  },
  {
    "id": 5,
    "level1": "A",
    "level2": "Y",
    "level3": "II",
    "name": "Item 5",
  },
  {
    "id": 6,
    "level1": "B",
    "level2": "X",
    "level3": "I",
    "name": "Item 6",
  },
  {
    "id": 7,
    "level1": "B",
    "level2": "X",
    "level3": "II",
    "name": "Item 7",
  },
  {
    "id": 8,
    "level1": "B",
    "level2": "Y",
    "level3": "II",
    "name": "Item 8",
  },
  {
    "id": 9,
    "level1": "B",
    "level2": "Y",
    "level3": "III",
    "name": "Item 9",
  },
  {
    "id": 10,
    "level1": "B",
    "level2": "Y",
    "level3": "III",
    "name": "Item 10",
  },
]
```

## Output

### table2tree
```json5
[
  {
    "$meta": {
      "groupBy": "level1",
      "value": "A",
    },
    "children": [
      {
        "$meta": {
          "groupBy": "level2",
          "value": "X",
        },
        "children": [
          {
            "$meta": {
              "groupBy": "level3",
              "value": "I",
            },
            "children": [
              {
                "id": 1,
                "level1": "A",
                "level2": "X",
                "level3": "I",
                "name": "Item 1",
              },
              {
                "id": 2,
                "level1": "A",
                "level2": "X",
                "level3": "I",
                "name": "Item 2",
              },
            ],
          },
          {
            "id": 3,
            "level1": "A",
            "level2": "X",
            "level3": "II",
            "name": "Item 3",
          },
        ],
      },
      {
        "$meta": {
          "groupBy": "level2",
          "value": "Y",
        },
        "children": [
          {
            "id": 4,
            "level1": "A",
            "level2": "Y",
            "level3": "I",
            "name": "Item 4",
          },
          {
            "id": 5,
            "level1": "A",
            "level2": "Y",
            "level3": "II",
            "name": "Item 5",
          },
        ],
      },
    ],
  },
  {
    "$meta": {
      "groupBy": "level1",
      "value": "B",
    },
    "children": [
      {
        "$meta": {
          "groupBy": "level2",
          "value": "X",
        },
        "children": [
          {
            "id": 6,
            "level1": "B",
            "level2": "X",
            "level3": "I",
            "name": "Item 6",
          },
          {
            "id": 7,
            "level1": "B",
            "level2": "X",
            "level3": "II",
            "name": "Item 7",
          },
        ],
      },
      {
        "$meta": {
          "groupBy": "level2",
          "value": "Y",
        },
        "children": [
          {
            "id": 8,
            "level1": "B",
            "level2": "Y",
            "level3": "II",
            "name": "Item 8",
          },
          {
            "$meta": {
              "groupBy": "level3",
              "value": "III",
            },
            "children": [
              {
                "id": 9,
                "level1": "B",
                "level2": "Y",
                "level3": "III",
                "name": "Item 9",
              },
              {
                "id": 10,
                "level1": "B",
                "level2": "Y",
                "level3": "III",
                "name": "Item 10",
              },
            ],
          },
        ],
      },
    ],
  },
]
```

### treeMapper
```json5
[
  {
    "children": [
      {
        "children": [
          {
            "children": [
              {
                "label": "Item 1",
                "value": 1,
              },
              {
                "label": "Item 2",
                "value": 2,
              },
            ],
            "label": "level3",
            "selectable": false,
            "value": "I",
          },
          {
            "label": "Item 3",
            "value": 3,
          },
        ],
        "label": "level2",
        "selectable": false,
        "value": "X",
      },
      {
        "children": [
          {
            "label": "Item 4",
            "value": 4,
          },
          {
            "label": "Item 5",
            "value": 5,
          },
        ],
        "label": "level2",
        "selectable": false,
        "value": "Y",
      },
    ],
    "label": "level1",
    "selectable": false,
    "value": "A",
  },
  {
    "children": [
      {
        "children": [
          {
            "label": "Item 6",
            "value": 6,
          },
          {
            "label": "Item 7",
            "value": 7,
          },
        ],
        "label": "level2",
        "selectable": false,
        "value": "X",
      },
      {
        "children": [
          {
            "label": "Item 8",
            "value": 8,
          },
          {
            "children": [
              {
                "label": "Item 9",
                "value": 9,
              },
              {
                "label": "Item 10",
                "value": 10,
              },
            ],
            "label": "level3",
            "selectable": false,
            "value": "III",
          },
        ],
        "label": "level2",
        "selectable": false,
        "value": "Y",
      },
    ],
    "label": "level1",
    "selectable": false,
    "value": "B",
  },
]
```