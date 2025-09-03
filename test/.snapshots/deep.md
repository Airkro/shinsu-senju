# Snapshot deep

should handle deep groupBy key (dot notation)

## Input

### Options
```js
export default {
  groups: [
    {
      groupBy: 'info.type.code',
      labelBy: 'info.type.name'
    }
  ],
  mappers: {
    label: 'name',
    value: 'id',
    extra: 'info.type.name'
  }
}
```

### Data
```js
export default [
  {
    id: 1,
    info: {
      type: {
        code: 'X',
        name: '联通'
      }
    },
    name: 'Item 1'
  },
  {
    id: 2,
    info: {
      type: {
        code: 'Y',
        name: '电信'
      }
    },
    name: 'Item 2'
  },
  {
    id: 3,
    info: {
      type: {
        code: 'X',
        name: '联通'
      }
    },
    name: 'Item 3'
  },
  {
    id: 4,
    info: {
      type: {
        code: 'Z',
        name: '移动'
      }
    },
    name: 'Item 4'
  }
]
```

## Output

### treeMapper
```js
export default [
  {
    label: 'Item 1',
    value: 1,
    extra: '联通',
    $original: {
      id: 1,
      info: {
        type: {
          code: 'X',
          name: '联通'
        }
      },
      name: 'Item 1'
    },
    $mapper: {
      label: 'name',
      value: 'id',
      extra: 'info.type.name'
    }
  },
  {
    label: 'Item 2',
    value: 2,
    extra: '电信',
    $original: {
      id: 2,
      info: {
        type: {
          code: 'Y',
          name: '电信'
        }
      },
      name: 'Item 2'
    },
    $mapper: {
      label: 'name',
      value: 'id',
      extra: 'info.type.name'
    }
  },
  {
    label: 'Item 3',
    value: 3,
    extra: '联通',
    $original: {
      id: 3,
      info: {
        type: {
          code: 'X',
          name: '联通'
        }
      },
      name: 'Item 3'
    },
    $mapper: {
      label: 'name',
      value: 'id',
      extra: 'info.type.name'
    }
  },
  {
    label: 'Item 4',
    value: 4,
    extra: '移动',
    $original: {
      id: 4,
      info: {
        type: {
          code: 'Z',
          name: '移动'
        }
      },
      name: 'Item 4'
    },
    $mapper: {
      label: 'name',
      value: 'id',
      extra: 'info.type.name'
    }
  }
]
```

### tableGrouping
```js
export default [
  {
    $group: {
      groupBy: 'info.type.code',
      labelBy: 'info.type.name',
      sortBy: 'info.type.name',
      extraBy: undefined,
      skipSingle: false
    },
    label: '联通',
    value: 'X',
    selectable: false,
    children: [
      {
        label: 'Item 1',
        value: 1,
        extra: '联通',
        $original: {
          id: 1,
          info: {
            type: {
              code: 'X',
              name: '联通'
            }
          },
          name: 'Item 1'
        },
        $mapper: {
          label: 'name',
          value: 'id',
          extra: 'info.type.name'
        }
      },
      {
        label: 'Item 3',
        value: 3,
        extra: '联通',
        $original: {
          id: 3,
          info: {
            type: {
              code: 'X',
              name: '联通'
            }
          },
          name: 'Item 3'
        },
        $mapper: {
          label: 'name',
          value: 'id',
          extra: 'info.type.name'
        }
      }
    ]
  },
  {
    $group: {
      groupBy: 'info.type.code',
      labelBy: 'info.type.name',
      sortBy: 'info.type.name',
      extraBy: undefined,
      skipSingle: false
    },
    label: '电信',
    value: 'Y',
    selectable: false,
    children: [
      {
        label: 'Item 2',
        value: 2,
        extra: '电信',
        $original: {
          id: 2,
          info: {
            type: {
              code: 'Y',
              name: '电信'
            }
          },
          name: 'Item 2'
        },
        $mapper: {
          label: 'name',
          value: 'id',
          extra: 'info.type.name'
        }
      }
    ]
  },
  {
    $group: {
      groupBy: 'info.type.code',
      labelBy: 'info.type.name',
      sortBy: 'info.type.name',
      extraBy: undefined,
      skipSingle: false
    },
    label: '移动',
    value: 'Z',
    selectable: false,
    children: [
      {
        label: 'Item 4',
        value: 4,
        extra: '移动',
        $original: {
          id: 4,
          info: {
            type: {
              code: 'Z',
              name: '移动'
            }
          },
          name: 'Item 4'
        },
        $mapper: {
          label: 'name',
          value: 'id',
          extra: 'info.type.name'
        }
      }
    ]
  }
]
```