# Snapshot sort



## Input

### Data
```json5
[
  {
    "name": "1号",
  },
  {
    "name": "01号",
  },
  {
    "name": "2号",
  },
  {
    "name": "02号",
  },
  {
    "name": "9号",
  },
  {
    "name": "11号",
  },
  {
    "name": "100号",
  },
  {
    "name": "房间1",
  },
  {
    "name": "房间01",
  },
  {
    "name": "房间9",
  },
  {
    "name": "房间11",
  },
  {
    "name": "房间100",
  },
  {
    "name": "1",
  },
  {
    "name": "01",
  },
  {
    "name": "9",
  },
  {
    "name": "11",
  },
  {
    "name": "100",
  },
  {
    "name": "房间",
  },
]
```

## Output

### treeMapper
```json5
[
  {
    "$original": {
      "name": "01",
    },
    "label": "01",
    "value": undefined,
  },
  {
    "$original": {
      "name": "1",
    },
    "label": "1",
    "value": undefined,
  },
  {
    "$original": {
      "name": "9",
    },
    "label": "9",
    "value": undefined,
  },
  {
    "$original": {
      "name": "11",
    },
    "label": "11",
    "value": undefined,
  },
  {
    "$original": {
      "name": "100",
    },
    "label": "100",
    "value": undefined,
  },
  {
    "$original": {
      "name": "01号",
    },
    "label": "01号",
    "value": undefined,
  },
  {
    "$original": {
      "name": "02号",
    },
    "label": "02号",
    "value": undefined,
  },
  {
    "$original": {
      "name": "1号",
    },
    "label": "1号",
    "value": undefined,
  },
  {
    "$original": {
      "name": "2号",
    },
    "label": "2号",
    "value": undefined,
  },
  {
    "$original": {
      "name": "9号",
    },
    "label": "9号",
    "value": undefined,
  },
  {
    "$original": {
      "name": "11号",
    },
    "label": "11号",
    "value": undefined,
  },
  {
    "$original": {
      "name": "100号",
    },
    "label": "100号",
    "value": undefined,
  },
  {
    "$original": {
      "name": "房间01",
    },
    "label": "房间01",
    "value": undefined,
  },
  {
    "$original": {
      "name": "房间1",
    },
    "label": "房间1",
    "value": undefined,
  },
  {
    "$original": {
      "name": "房间9",
    },
    "label": "房间9",
    "value": undefined,
  },
  {
    "$original": {
      "name": "房间11",
    },
    "label": "房间11",
    "value": undefined,
  },
  {
    "$original": {
      "name": "房间100",
    },
    "label": "房间100",
    "value": undefined,
  },
  {
    "$original": {
      "name": "房间",
    },
    "label": "房间",
    "value": undefined,
  },
]
```

### tableGrouping
```json5
[
  {
    "$original": {
      "name": "01",
    },
    "label": "01",
    "value": undefined,
  },
  {
    "$original": {
      "name": "1",
    },
    "label": "1",
    "value": undefined,
  },
  {
    "$original": {
      "name": "9",
    },
    "label": "9",
    "value": undefined,
  },
  {
    "$original": {
      "name": "11",
    },
    "label": "11",
    "value": undefined,
  },
  {
    "$original": {
      "name": "100",
    },
    "label": "100",
    "value": undefined,
  },
  {
    "$original": {
      "name": "01号",
    },
    "label": "01号",
    "value": undefined,
  },
  {
    "$original": {
      "name": "02号",
    },
    "label": "02号",
    "value": undefined,
  },
  {
    "$original": {
      "name": "1号",
    },
    "label": "1号",
    "value": undefined,
  },
  {
    "$original": {
      "name": "2号",
    },
    "label": "2号",
    "value": undefined,
  },
  {
    "$original": {
      "name": "9号",
    },
    "label": "9号",
    "value": undefined,
  },
  {
    "$original": {
      "name": "11号",
    },
    "label": "11号",
    "value": undefined,
  },
  {
    "$original": {
      "name": "100号",
    },
    "label": "100号",
    "value": undefined,
  },
  {
    "$original": {
      "name": "房间01",
    },
    "label": "房间01",
    "value": undefined,
  },
  {
    "$original": {
      "name": "房间1",
    },
    "label": "房间1",
    "value": undefined,
  },
  {
    "$original": {
      "name": "房间9",
    },
    "label": "房间9",
    "value": undefined,
  },
  {
    "$original": {
      "name": "房间11",
    },
    "label": "房间11",
    "value": undefined,
  },
  {
    "$original": {
      "name": "房间100",
    },
    "label": "房间100",
    "value": undefined,
  },
  {
    "$original": {
      "name": "房间",
    },
    "label": "房间",
    "value": undefined,
  },
]
```

### grouping
```json5
[
  {
    "$original": {
      "name": "房间",
    },
    "label": "房间",
    "value": undefined,
  },
]
```