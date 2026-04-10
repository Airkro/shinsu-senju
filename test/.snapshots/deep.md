# Snapshot deep

should handle deep groupBy key (dot notation)

## Input

### Options
```js
export default {
  groups: [
    {
      groupBy: 'info.type.code',
      labelBy: 'info.type.name',
      extraBy: (io) => io?.info?.type?.count
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
        name: '联通',
        count: 5
      }
    },
    name: 'Item 1'
  },
  {
    id: 2,
    info: {
      type: {
        code: 'Y',
        name: '电信',
        count: 4
      }
    },
    name: 'Item 2'
  },
  {
    id: 3,
    info: {
      type: {
        code: 'X',
        name: '联通',
        count: 6
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
    ident: 'id',
    $original: {
      id: 1,
      info: {
        type: {
          code: 'X',
          name: '联通',
          count: 5
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
    ident: 'id',
    $original: {
      id: 2,
      info: {
        type: {
          code: 'Y',
          name: '电信',
          count: 4
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
    ident: 'id',
    $original: {
      id: 3,
      info: {
        type: {
          code: 'X',
          name: '联通',
          count: 6
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
    ident: 'id',
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
      extraBy: (io) => io?.info?.type?.count,
      skipSingle: false,
      childrenKey: 'children',
      selectable: undefined,
      ident: 'info.type.code'
    },
    label: '联通',
    value: 'X',
    selectable: false,
    children: [
      {
        label: 'Item 1',
        value: 1,
        extra: '联通',
        ident: 'id',
        $original: {
          id: 1,
          info: {
            type: {
              code: 'X',
              name: '联通',
              count: 5
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
        ident: 'id',
        $original: {
          id: 3,
          info: {
            type: {
              code: 'X',
              name: '联通',
              count: 6
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
    ],
    extra: 5,
    ident: 'info.type.code'
  },
  {
    $group: {
      groupBy: 'info.type.code',
      labelBy: 'info.type.name',
      sortBy: 'info.type.name',
      extraBy: (io) => io?.info?.type?.count,
      skipSingle: false,
      childrenKey: 'children',
      selectable: undefined,
      ident: 'info.type.code'
    },
    label: '电信',
    value: 'Y',
    selectable: false,
    children: [
      {
        label: 'Item 2',
        value: 2,
        extra: '电信',
        ident: 'id',
        $original: {
          id: 2,
          info: {
            type: {
              code: 'Y',
              name: '电信',
              count: 4
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
    ],
    extra: 4,
    ident: 'info.type.code'
  },
  {
    $group: {
      groupBy: 'info.type.code',
      labelBy: 'info.type.name',
      sortBy: 'info.type.name',
      extraBy: (io) => io?.info?.type?.count,
      skipSingle: false,
      childrenKey: 'children',
      selectable: undefined,
      ident: 'info.type.code'
    },
    label: '移动',
    value: 'Z',
    selectable: false,
    children: [
      {
        label: 'Item 4',
        value: 4,
        extra: '移动',
        ident: 'id',
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
    ],
    ident: 'info.type.code'
  }
]
```