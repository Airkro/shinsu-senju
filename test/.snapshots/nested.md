# Snapshot nested

should handle nested grouping

## Input

### Options
```json5
{
  "groups": [
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
  {
    "id": 11,
    "level2": "Y",
    "level3": "III",
    "name": "Item 11",
  },
  {
    "id": 12,
    "level2": "Y",
    "level3": "III",
    "name": "Item 12",
  },
  {
    "id": 13,
    "level2": "Y",
    "name": "Item 13",
  },
]
```

## Output

### treeMapper
```json5
[
  {
    "$original": {
      "id": 1,
      "level1": "A",
      "level2": "X",
      "level3": "I",
      "name": "Item 1",
    },
    "label": "Item 1",
    "value": 1,
  },
  {
    "$original": {
      "id": 2,
      "level1": "A",
      "level2": "X",
      "level3": "I",
      "name": "Item 2",
    },
    "label": "Item 2",
    "value": 2,
  },
  {
    "$original": {
      "id": 3,
      "level1": "A",
      "level2": "X",
      "level3": "II",
      "name": "Item 3",
    },
    "label": "Item 3",
    "value": 3,
  },
  {
    "$original": {
      "id": 4,
      "level1": "A",
      "level2": "Y",
      "level3": "I",
      "name": "Item 4",
    },
    "label": "Item 4",
    "value": 4,
  },
  {
    "$original": {
      "id": 5,
      "level1": "A",
      "level2": "Y",
      "level3": "II",
      "name": "Item 5",
    },
    "label": "Item 5",
    "value": 5,
  },
  {
    "$original": {
      "id": 6,
      "level1": "B",
      "level2": "X",
      "level3": "I",
      "name": "Item 6",
    },
    "label": "Item 6",
    "value": 6,
  },
  {
    "$original": {
      "id": 7,
      "level1": "B",
      "level2": "X",
      "level3": "II",
      "name": "Item 7",
    },
    "label": "Item 7",
    "value": 7,
  },
  {
    "$original": {
      "id": 8,
      "level1": "B",
      "level2": "Y",
      "level3": "II",
      "name": "Item 8",
    },
    "label": "Item 8",
    "value": 8,
  },
  {
    "$original": {
      "id": 9,
      "level1": "B",
      "level2": "Y",
      "level3": "III",
      "name": "Item 9",
    },
    "label": "Item 9",
    "value": 9,
  },
  {
    "$original": {
      "id": 10,
      "level1": "B",
      "level2": "Y",
      "level3": "III",
      "name": "Item 10",
    },
    "label": "Item 10",
    "value": 10,
  },
  {
    "$original": {
      "id": 11,
      "level2": "Y",
      "level3": "III",
      "name": "Item 11",
    },
    "label": "Item 11",
    "value": 11,
  },
  {
    "$original": {
      "id": 12,
      "level2": "Y",
      "level3": "III",
      "name": "Item 12",
    },
    "label": "Item 12",
    "value": 12,
  },
  {
    "$original": {
      "id": 13,
      "level2": "Y",
      "name": "Item 13",
    },
    "label": "Item 13",
    "value": 13,
  },
]
```

### tableGrouping
```json5
[
  {
    "$meta": {
      "groupBy": "level1",
      "labelBy": "level1",
      "skipSingle": false,
      "sortBy": "level1",
    },
    "children": [
      {
        "$meta": {
          "groupBy": "level2",
          "labelBy": "level2",
          "skipSingle": false,
          "sortBy": "level2",
        },
        "children": [
          {
            "$meta": {
              "groupBy": "level3",
              "labelBy": "level3",
              "skipSingle": false,
              "sortBy": "level3",
            },
            "children": [
              {
                "$original": {
                  "id": 1,
                  "level1": "A",
                  "level2": "X",
                  "level3": "I",
                  "name": "Item 1",
                },
                "label": "Item 1",
                "value": 1,
              },
              {
                "$original": {
                  "id": 2,
                  "level1": "A",
                  "level2": "X",
                  "level3": "I",
                  "name": "Item 2",
                },
                "label": "Item 2",
                "value": 2,
              },
            ],
            "label": "I",
            "selectable": false,
            "value": "I",
          },
          {
            "$meta": {
              "groupBy": "level3",
              "labelBy": "level3",
              "skipSingle": false,
              "sortBy": "level3",
            },
            "children": [
              {
                "$original": {
                  "id": 3,
                  "level1": "A",
                  "level2": "X",
                  "level3": "II",
                  "name": "Item 3",
                },
                "label": "Item 3",
                "value": 3,
              },
            ],
            "label": "II",
            "selectable": false,
            "value": "II",
          },
        ],
        "label": "X",
        "selectable": false,
        "value": "X",
      },
      {
        "$meta": {
          "groupBy": "level2",
          "labelBy": "level2",
          "skipSingle": false,
          "sortBy": "level2",
        },
        "children": [
          {
            "$meta": {
              "groupBy": "level3",
              "labelBy": "level3",
              "skipSingle": false,
              "sortBy": "level3",
            },
            "children": [
              {
                "$original": {
                  "id": 4,
                  "level1": "A",
                  "level2": "Y",
                  "level3": "I",
                  "name": "Item 4",
                },
                "label": "Item 4",
                "value": 4,
              },
            ],
            "label": "I",
            "selectable": false,
            "value": "I",
          },
          {
            "$meta": {
              "groupBy": "level3",
              "labelBy": "level3",
              "skipSingle": false,
              "sortBy": "level3",
            },
            "children": [
              {
                "$original": {
                  "id": 5,
                  "level1": "A",
                  "level2": "Y",
                  "level3": "II",
                  "name": "Item 5",
                },
                "label": "Item 5",
                "value": 5,
              },
            ],
            "label": "II",
            "selectable": false,
            "value": "II",
          },
        ],
        "label": "Y",
        "selectable": false,
        "value": "Y",
      },
    ],
    "label": "A",
    "selectable": false,
    "value": "A",
  },
  {
    "$meta": {
      "groupBy": "level1",
      "labelBy": "level1",
      "skipSingle": false,
      "sortBy": "level1",
    },
    "children": [
      {
        "$meta": {
          "groupBy": "level2",
          "labelBy": "level2",
          "skipSingle": false,
          "sortBy": "level2",
        },
        "children": [
          {
            "$meta": {
              "groupBy": "level3",
              "labelBy": "level3",
              "skipSingle": false,
              "sortBy": "level3",
            },
            "children": [
              {
                "$original": {
                  "id": 6,
                  "level1": "B",
                  "level2": "X",
                  "level3": "I",
                  "name": "Item 6",
                },
                "label": "Item 6",
                "value": 6,
              },
            ],
            "label": "I",
            "selectable": false,
            "value": "I",
          },
          {
            "$meta": {
              "groupBy": "level3",
              "labelBy": "level3",
              "skipSingle": false,
              "sortBy": "level3",
            },
            "children": [
              {
                "$original": {
                  "id": 7,
                  "level1": "B",
                  "level2": "X",
                  "level3": "II",
                  "name": "Item 7",
                },
                "label": "Item 7",
                "value": 7,
              },
            ],
            "label": "II",
            "selectable": false,
            "value": "II",
          },
        ],
        "label": "X",
        "selectable": false,
        "value": "X",
      },
      {
        "$meta": {
          "groupBy": "level2",
          "labelBy": "level2",
          "skipSingle": false,
          "sortBy": "level2",
        },
        "children": [
          {
            "$meta": {
              "groupBy": "level3",
              "labelBy": "level3",
              "skipSingle": false,
              "sortBy": "level3",
            },
            "children": [
              {
                "$original": {
                  "id": 8,
                  "level1": "B",
                  "level2": "Y",
                  "level3": "II",
                  "name": "Item 8",
                },
                "label": "Item 8",
                "value": 8,
              },
            ],
            "label": "II",
            "selectable": false,
            "value": "II",
          },
          {
            "$meta": {
              "groupBy": "level3",
              "labelBy": "level3",
              "skipSingle": false,
              "sortBy": "level3",
            },
            "children": [
              {
                "$original": {
                  "id": 9,
                  "level1": "B",
                  "level2": "Y",
                  "level3": "III",
                  "name": "Item 9",
                },
                "label": "Item 9",
                "value": 9,
              },
              {
                "$original": {
                  "id": 10,
                  "level1": "B",
                  "level2": "Y",
                  "level3": "III",
                  "name": "Item 10",
                },
                "label": "Item 10",
                "value": 10,
              },
            ],
            "label": "III",
            "selectable": false,
            "value": "III",
          },
        ],
        "label": "Y",
        "selectable": false,
        "value": "Y",
      },
    ],
    "label": "B",
    "selectable": false,
    "value": "B",
  },
  {
    "$meta": {
      "groupBy": "level2",
      "labelBy": "level2",
      "skipSingle": false,
      "sortBy": "level2",
    },
    "children": [
      {
        "$meta": {
          "groupBy": "level3",
          "labelBy": "level3",
          "skipSingle": false,
          "sortBy": "level3",
        },
        "children": [
          {
            "$original": {
              "id": 11,
              "level2": "Y",
              "level3": "III",
              "name": "Item 11",
            },
            "label": "Item 11",
            "value": 11,
          },
          {
            "$original": {
              "id": 12,
              "level2": "Y",
              "level3": "III",
              "name": "Item 12",
            },
            "label": "Item 12",
            "value": 12,
          },
        ],
        "label": "III",
        "selectable": false,
        "value": "III",
      },
      {
        "$original": {
          "id": 13,
          "level2": "Y",
          "name": "Item 13",
        },
        "label": "Item 13",
        "value": 13,
      },
    ],
    "label": "Y",
    "selectable": false,
    "value": "Y",
  },
]
```