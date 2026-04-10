# Snapshot nested

should handle nested grouping

## Input

### Options
```js
export default {
  groups: [
    {
      groupBy: 'level1',
      selectable: true
    },
    {
      groupBy: 'level2'
    },
    {
      groupBy: 'level3'
    }
  ]
}
```

### Data
```js
export default [
  {
    id: 1,
    level1: 'A',
    level2: 'X',
    level3: 'I',
    name: 'Item 1'
  },
  {
    id: 2,
    level1: 'A',
    level2: 'X',
    level3: 'I',
    name: 'Item 2'
  },
  {
    id: 3,
    level1: 'A',
    level2: 'X',
    level3: 'II',
    name: 'Item 3'
  },
  {
    id: 4,
    level1: 'A',
    level2: 'Y',
    level3: 'I',
    name: 'Item 4'
  },
  {
    id: 5,
    level1: 'A',
    level2: 'Y',
    level3: 'II',
    name: 'Item 5'
  },
  {
    id: 6,
    level1: 'B',
    level2: 'X',
    level3: 'I',
    name: 'Item 6'
  },
  {
    id: 7,
    level1: 'B',
    level2: 'X',
    level3: 'II',
    name: 'Item 7'
  },
  {
    id: 8,
    level1: 'B',
    level2: 'Y',
    level3: 'II',
    name: 'Item 8'
  },
  {
    id: 9,
    level1: 'B',
    level2: 'Y',
    level3: 'III',
    name: 'Item 9'
  },
  {
    id: 10,
    level1: 'B',
    level2: 'Y',
    level3: 'III',
    name: 'Item 10'
  },
  {
    id: 11,
    level2: 'Y',
    level3: 'III',
    name: 'Item 11'
  },
  {
    id: 12,
    level2: 'Y',
    level3: 'III',
    name: 'Item 12'
  },
  {
    id: 13,
    level2: 'Y',
    name: 'Item 13'
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
    ident: 'id',
    $original: {
      id: 1,
      level1: 'A',
      level2: 'X',
      level3: 'I',
      name: 'Item 1'
    },
    $mapper: {
      label: 'name',
      value: 'id'
    }
  },
  {
    label: 'Item 2',
    value: 2,
    ident: 'id',
    $original: {
      id: 2,
      level1: 'A',
      level2: 'X',
      level3: 'I',
      name: 'Item 2'
    },
    $mapper: {
      label: 'name',
      value: 'id'
    }
  },
  {
    label: 'Item 3',
    value: 3,
    ident: 'id',
    $original: {
      id: 3,
      level1: 'A',
      level2: 'X',
      level3: 'II',
      name: 'Item 3'
    },
    $mapper: {
      label: 'name',
      value: 'id'
    }
  },
  {
    label: 'Item 4',
    value: 4,
    ident: 'id',
    $original: {
      id: 4,
      level1: 'A',
      level2: 'Y',
      level3: 'I',
      name: 'Item 4'
    },
    $mapper: {
      label: 'name',
      value: 'id'
    }
  },
  {
    label: 'Item 5',
    value: 5,
    ident: 'id',
    $original: {
      id: 5,
      level1: 'A',
      level2: 'Y',
      level3: 'II',
      name: 'Item 5'
    },
    $mapper: {
      label: 'name',
      value: 'id'
    }
  },
  {
    label: 'Item 6',
    value: 6,
    ident: 'id',
    $original: {
      id: 6,
      level1: 'B',
      level2: 'X',
      level3: 'I',
      name: 'Item 6'
    },
    $mapper: {
      label: 'name',
      value: 'id'
    }
  },
  {
    label: 'Item 7',
    value: 7,
    ident: 'id',
    $original: {
      id: 7,
      level1: 'B',
      level2: 'X',
      level3: 'II',
      name: 'Item 7'
    },
    $mapper: {
      label: 'name',
      value: 'id'
    }
  },
  {
    label: 'Item 8',
    value: 8,
    ident: 'id',
    $original: {
      id: 8,
      level1: 'B',
      level2: 'Y',
      level3: 'II',
      name: 'Item 8'
    },
    $mapper: {
      label: 'name',
      value: 'id'
    }
  },
  {
    label: 'Item 9',
    value: 9,
    ident: 'id',
    $original: {
      id: 9,
      level1: 'B',
      level2: 'Y',
      level3: 'III',
      name: 'Item 9'
    },
    $mapper: {
      label: 'name',
      value: 'id'
    }
  },
  {
    label: 'Item 10',
    value: 10,
    ident: 'id',
    $original: {
      id: 10,
      level1: 'B',
      level2: 'Y',
      level3: 'III',
      name: 'Item 10'
    },
    $mapper: {
      label: 'name',
      value: 'id'
    }
  },
  {
    label: 'Item 11',
    value: 11,
    ident: 'id',
    $original: {
      id: 11,
      level2: 'Y',
      level3: 'III',
      name: 'Item 11'
    },
    $mapper: {
      label: 'name',
      value: 'id'
    }
  },
  {
    label: 'Item 12',
    value: 12,
    ident: 'id',
    $original: {
      id: 12,
      level2: 'Y',
      level3: 'III',
      name: 'Item 12'
    },
    $mapper: {
      label: 'name',
      value: 'id'
    }
  },
  {
    label: 'Item 13',
    value: 13,
    ident: 'id',
    $original: {
      id: 13,
      level2: 'Y',
      name: 'Item 13'
    },
    $mapper: {
      label: 'name',
      value: 'id'
    }
  }
]
```

### tableGrouping
```js
export default [
  {
    $group: {
      groupBy: 'level1',
      labelBy: 'level1',
      sortBy: 'level1',
      extraBy: undefined,
      skipSingle: false,
      childrenKey: 'children',
      selectable: true,
      ident: 'level1'
    },
    label: 'A',
    value: 'A',
    selectable: true,
    children: [
      {
        $group: {
          groupBy: 'level2',
          labelBy: 'level2',
          sortBy: 'level2',
          extraBy: undefined,
          skipSingle: false,
          childrenKey: 'children',
          selectable: undefined,
          ident: 'level2'
        },
        label: 'X',
        value: 'X',
        selectable: false,
        children: [
          {
            $group: {
              groupBy: 'level3',
              labelBy: 'level3',
              sortBy: 'level3',
              extraBy: undefined,
              skipSingle: false,
              childrenKey: 'children',
              selectable: undefined,
              ident: 'level3'
            },
            label: 'I',
            value: 'I',
            selectable: false,
            children: [
              {
                label: 'Item 1',
                value: 1,
                ident: 'id',
                $original: {
                  id: 1,
                  level1: 'A',
                  level2: 'X',
                  level3: 'I',
                  name: 'Item 1'
                },
                $mapper: {
                  label: 'name',
                  value: 'id'
                }
              },
              {
                label: 'Item 2',
                value: 2,
                ident: 'id',
                $original: {
                  id: 2,
                  level1: 'A',
                  level2: 'X',
                  level3: 'I',
                  name: 'Item 2'
                },
                $mapper: {
                  label: 'name',
                  value: 'id'
                }
              }
            ],
            ident: 'level3'
          },
          {
            $group: {
              groupBy: 'level3',
              labelBy: 'level3',
              sortBy: 'level3',
              extraBy: undefined,
              skipSingle: false,
              childrenKey: 'children',
              selectable: undefined,
              ident: 'level3'
            },
            label: 'II',
            value: 'II',
            selectable: false,
            children: [
              {
                label: 'Item 3',
                value: 3,
                ident: 'id',
                $original: {
                  id: 3,
                  level1: 'A',
                  level2: 'X',
                  level3: 'II',
                  name: 'Item 3'
                },
                $mapper: {
                  label: 'name',
                  value: 'id'
                }
              }
            ],
            ident: 'level3'
          }
        ],
        ident: 'level2'
      },
      {
        $group: {
          groupBy: 'level2',
          labelBy: 'level2',
          sortBy: 'level2',
          extraBy: undefined,
          skipSingle: false,
          childrenKey: 'children',
          selectable: undefined,
          ident: 'level2'
        },
        label: 'Y',
        value: 'Y',
        selectable: false,
        children: [
          {
            $group: {
              groupBy: 'level3',
              labelBy: 'level3',
              sortBy: 'level3',
              extraBy: undefined,
              skipSingle: false,
              childrenKey: 'children',
              selectable: undefined,
              ident: 'level3'
            },
            label: 'I',
            value: 'I',
            selectable: false,
            children: [
              {
                label: 'Item 4',
                value: 4,
                ident: 'id',
                $original: {
                  id: 4,
                  level1: 'A',
                  level2: 'Y',
                  level3: 'I',
                  name: 'Item 4'
                },
                $mapper: {
                  label: 'name',
                  value: 'id'
                }
              }
            ],
            ident: 'level3'
          },
          {
            $group: {
              groupBy: 'level3',
              labelBy: 'level3',
              sortBy: 'level3',
              extraBy: undefined,
              skipSingle: false,
              childrenKey: 'children',
              selectable: undefined,
              ident: 'level3'
            },
            label: 'II',
            value: 'II',
            selectable: false,
            children: [
              {
                label: 'Item 5',
                value: 5,
                ident: 'id',
                $original: {
                  id: 5,
                  level1: 'A',
                  level2: 'Y',
                  level3: 'II',
                  name: 'Item 5'
                },
                $mapper: {
                  label: 'name',
                  value: 'id'
                }
              }
            ],
            ident: 'level3'
          }
        ],
        ident: 'level2'
      }
    ],
    ident: 'level1'
  },
  {
    $group: {
      groupBy: 'level1',
      labelBy: 'level1',
      sortBy: 'level1',
      extraBy: undefined,
      skipSingle: false,
      childrenKey: 'children',
      selectable: true,
      ident: 'level1'
    },
    label: 'B',
    value: 'B',
    selectable: true,
    children: [
      {
        $group: {
          groupBy: 'level2',
          labelBy: 'level2',
          sortBy: 'level2',
          extraBy: undefined,
          skipSingle: false,
          childrenKey: 'children',
          selectable: undefined,
          ident: 'level2'
        },
        label: 'X',
        value: 'X',
        selectable: false,
        children: [
          {
            $group: {
              groupBy: 'level3',
              labelBy: 'level3',
              sortBy: 'level3',
              extraBy: undefined,
              skipSingle: false,
              childrenKey: 'children',
              selectable: undefined,
              ident: 'level3'
            },
            label: 'I',
            value: 'I',
            selectable: false,
            children: [
              {
                label: 'Item 6',
                value: 6,
                ident: 'id',
                $original: {
                  id: 6,
                  level1: 'B',
                  level2: 'X',
                  level3: 'I',
                  name: 'Item 6'
                },
                $mapper: {
                  label: 'name',
                  value: 'id'
                }
              }
            ],
            ident: 'level3'
          },
          {
            $group: {
              groupBy: 'level3',
              labelBy: 'level3',
              sortBy: 'level3',
              extraBy: undefined,
              skipSingle: false,
              childrenKey: 'children',
              selectable: undefined,
              ident: 'level3'
            },
            label: 'II',
            value: 'II',
            selectable: false,
            children: [
              {
                label: 'Item 7',
                value: 7,
                ident: 'id',
                $original: {
                  id: 7,
                  level1: 'B',
                  level2: 'X',
                  level3: 'II',
                  name: 'Item 7'
                },
                $mapper: {
                  label: 'name',
                  value: 'id'
                }
              }
            ],
            ident: 'level3'
          }
        ],
        ident: 'level2'
      },
      {
        $group: {
          groupBy: 'level2',
          labelBy: 'level2',
          sortBy: 'level2',
          extraBy: undefined,
          skipSingle: false,
          childrenKey: 'children',
          selectable: undefined,
          ident: 'level2'
        },
        label: 'Y',
        value: 'Y',
        selectable: false,
        children: [
          {
            $group: {
              groupBy: 'level3',
              labelBy: 'level3',
              sortBy: 'level3',
              extraBy: undefined,
              skipSingle: false,
              childrenKey: 'children',
              selectable: undefined,
              ident: 'level3'
            },
            label: 'II',
            value: 'II',
            selectable: false,
            children: [
              {
                label: 'Item 8',
                value: 8,
                ident: 'id',
                $original: {
                  id: 8,
                  level1: 'B',
                  level2: 'Y',
                  level3: 'II',
                  name: 'Item 8'
                },
                $mapper: {
                  label: 'name',
                  value: 'id'
                }
              }
            ],
            ident: 'level3'
          },
          {
            $group: {
              groupBy: 'level3',
              labelBy: 'level3',
              sortBy: 'level3',
              extraBy: undefined,
              skipSingle: false,
              childrenKey: 'children',
              selectable: undefined,
              ident: 'level3'
            },
            label: 'III',
            value: 'III',
            selectable: false,
            children: [
              {
                label: 'Item 9',
                value: 9,
                ident: 'id',
                $original: {
                  id: 9,
                  level1: 'B',
                  level2: 'Y',
                  level3: 'III',
                  name: 'Item 9'
                },
                $mapper: {
                  label: 'name',
                  value: 'id'
                }
              },
              {
                label: 'Item 10',
                value: 10,
                ident: 'id',
                $original: {
                  id: 10,
                  level1: 'B',
                  level2: 'Y',
                  level3: 'III',
                  name: 'Item 10'
                },
                $mapper: {
                  label: 'name',
                  value: 'id'
                }
              }
            ],
            ident: 'level3'
          }
        ],
        ident: 'level2'
      }
    ],
    ident: 'level1'
  },
  {
    $group: {
      groupBy: 'level2',
      labelBy: 'level2',
      sortBy: 'level2',
      extraBy: undefined,
      skipSingle: false,
      childrenKey: 'children',
      selectable: undefined,
      ident: 'level2'
    },
    label: 'Y',
    value: 'Y',
    selectable: false,
    children: [
      {
        $group: {
          groupBy: 'level3',
          labelBy: 'level3',
          sortBy: 'level3',
          extraBy: undefined,
          skipSingle: false,
          childrenKey: 'children',
          selectable: undefined,
          ident: 'level3'
        },
        label: 'III',
        value: 'III',
        selectable: false,
        children: [
          {
            label: 'Item 11',
            value: 11,
            ident: 'id',
            $original: {
              id: 11,
              level2: 'Y',
              level3: 'III',
              name: 'Item 11'
            },
            $mapper: {
              label: 'name',
              value: 'id'
            }
          },
          {
            label: 'Item 12',
            value: 12,
            ident: 'id',
            $original: {
              id: 12,
              level2: 'Y',
              level3: 'III',
              name: 'Item 12'
            },
            $mapper: {
              label: 'name',
              value: 'id'
            }
          }
        ],
        ident: 'level3'
      },
      {
        label: 'Item 13',
        value: 13,
        ident: 'id',
        $original: {
          id: 13,
          level2: 'Y',
          name: 'Item 13'
        },
        $mapper: {
          label: 'name',
          value: 'id'
        }
      }
    ],
    ident: 'level2'
  }
]
```