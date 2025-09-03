# Snapshot matcher

matcher

## Input

### Options
```js
export default {
  groups: {
    groupBy: 'parent'
  },
  mappers: {
    label: 'name',
    value: 'id',
    selectable: {
      when: 'parent',
      'enum': [
        'A',
        'B'
      ]
    },
    disabled: {
      when: 'parent',
      'const': 'C'
    }
  }
}
```

### Data
```js
export default [
  {
    id: 1,
    parent: 'A',
    name: 'Item 1'
  },
  {
    id: 2,
    parent: 'A',
    name: 'Item 2'
  },
  {
    id: 3,
    parent: 'B',
    name: 'Item 3'
  },
  {
    id: 4,
    parent: 'B',
    name: 'Item 4'
  },
  {
    id: 5,
    parent: 'C',
    name: 'Item 5'
  },
  {
    id: 6,
    parent: 'C',
    name: 'Item 6'
  },
  {
    id: 7,
    parent: 'D',
    name: 'Item 7'
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
    selectable: true,
    disabled: false,
    $original: {
      id: 1,
      parent: 'A',
      name: 'Item 1'
    },
    $mapper: {
      label: 'name',
      value: 'id',
      selectable: {
        when: 'parent',
        'enum': [
          'A',
          'B'
        ]
      },
      disabled: {
        when: 'parent',
        'const': 'C'
      }
    }
  },
  {
    label: 'Item 2',
    value: 2,
    selectable: true,
    disabled: false,
    $original: {
      id: 2,
      parent: 'A',
      name: 'Item 2'
    },
    $mapper: {
      label: 'name',
      value: 'id',
      selectable: {
        when: 'parent',
        'enum': [
          'A',
          'B'
        ]
      },
      disabled: {
        when: 'parent',
        'const': 'C'
      }
    }
  },
  {
    label: 'Item 3',
    value: 3,
    selectable: true,
    disabled: false,
    $original: {
      id: 3,
      parent: 'B',
      name: 'Item 3'
    },
    $mapper: {
      label: 'name',
      value: 'id',
      selectable: {
        when: 'parent',
        'enum': [
          'A',
          'B'
        ]
      },
      disabled: {
        when: 'parent',
        'const': 'C'
      }
    }
  },
  {
    label: 'Item 4',
    value: 4,
    selectable: true,
    disabled: false,
    $original: {
      id: 4,
      parent: 'B',
      name: 'Item 4'
    },
    $mapper: {
      label: 'name',
      value: 'id',
      selectable: {
        when: 'parent',
        'enum': [
          'A',
          'B'
        ]
      },
      disabled: {
        when: 'parent',
        'const': 'C'
      }
    }
  },
  {
    label: 'Item 5',
    value: 5,
    selectable: false,
    disabled: true,
    $original: {
      id: 5,
      parent: 'C',
      name: 'Item 5'
    },
    $mapper: {
      label: 'name',
      value: 'id',
      selectable: {
        when: 'parent',
        'enum': [
          'A',
          'B'
        ]
      },
      disabled: {
        when: 'parent',
        'const': 'C'
      }
    }
  },
  {
    label: 'Item 6',
    value: 6,
    selectable: false,
    disabled: true,
    $original: {
      id: 6,
      parent: 'C',
      name: 'Item 6'
    },
    $mapper: {
      label: 'name',
      value: 'id',
      selectable: {
        when: 'parent',
        'enum': [
          'A',
          'B'
        ]
      },
      disabled: {
        when: 'parent',
        'const': 'C'
      }
    }
  },
  {
    label: 'Item 7',
    value: 7,
    selectable: false,
    disabled: false,
    $original: {
      id: 7,
      parent: 'D',
      name: 'Item 7'
    },
    $mapper: {
      label: 'name',
      value: 'id',
      selectable: {
        when: 'parent',
        'enum': [
          'A',
          'B'
        ]
      },
      disabled: {
        when: 'parent',
        'const': 'C'
      }
    }
  }
]
```

### tableGrouping
```js
export default [
  {
    $group: {
      groupBy: 'parent',
      labelBy: 'parent',
      sortBy: 'parent',
      extraBy: undefined,
      skipSingle: false
    },
    label: 'A',
    value: 'A',
    selectable: false,
    children: [
      {
        label: 'Item 1',
        value: 1,
        selectable: true,
        disabled: false,
        $original: {
          id: 1,
          parent: 'A',
          name: 'Item 1'
        },
        $mapper: {
          label: 'name',
          value: 'id',
          selectable: {
            when: 'parent',
            'enum': [
              'A',
              'B'
            ]
          },
          disabled: {
            when: 'parent',
            'const': 'C'
          }
        }
      },
      {
        label: 'Item 2',
        value: 2,
        selectable: true,
        disabled: false,
        $original: {
          id: 2,
          parent: 'A',
          name: 'Item 2'
        },
        $mapper: {
          label: 'name',
          value: 'id',
          selectable: {
            when: 'parent',
            'enum': [
              'A',
              'B'
            ]
          },
          disabled: {
            when: 'parent',
            'const': 'C'
          }
        }
      }
    ]
  },
  {
    $group: {
      groupBy: 'parent',
      labelBy: 'parent',
      sortBy: 'parent',
      extraBy: undefined,
      skipSingle: false
    },
    label: 'B',
    value: 'B',
    selectable: false,
    children: [
      {
        label: 'Item 3',
        value: 3,
        selectable: true,
        disabled: false,
        $original: {
          id: 3,
          parent: 'B',
          name: 'Item 3'
        },
        $mapper: {
          label: 'name',
          value: 'id',
          selectable: {
            when: 'parent',
            'enum': [
              'A',
              'B'
            ]
          },
          disabled: {
            when: 'parent',
            'const': 'C'
          }
        }
      },
      {
        label: 'Item 4',
        value: 4,
        selectable: true,
        disabled: false,
        $original: {
          id: 4,
          parent: 'B',
          name: 'Item 4'
        },
        $mapper: {
          label: 'name',
          value: 'id',
          selectable: {
            when: 'parent',
            'enum': [
              'A',
              'B'
            ]
          },
          disabled: {
            when: 'parent',
            'const': 'C'
          }
        }
      }
    ]
  },
  {
    $group: {
      groupBy: 'parent',
      labelBy: 'parent',
      sortBy: 'parent',
      extraBy: undefined,
      skipSingle: false
    },
    label: 'C',
    value: 'C',
    selectable: false,
    children: [
      {
        label: 'Item 5',
        value: 5,
        selectable: false,
        disabled: true,
        $original: {
          id: 5,
          parent: 'C',
          name: 'Item 5'
        },
        $mapper: {
          label: 'name',
          value: 'id',
          selectable: {
            when: 'parent',
            'enum': [
              'A',
              'B'
            ]
          },
          disabled: {
            when: 'parent',
            'const': 'C'
          }
        }
      },
      {
        label: 'Item 6',
        value: 6,
        selectable: false,
        disabled: true,
        $original: {
          id: 6,
          parent: 'C',
          name: 'Item 6'
        },
        $mapper: {
          label: 'name',
          value: 'id',
          selectable: {
            when: 'parent',
            'enum': [
              'A',
              'B'
            ]
          },
          disabled: {
            when: 'parent',
            'const': 'C'
          }
        }
      }
    ]
  },
  {
    $group: {
      groupBy: 'parent',
      labelBy: 'parent',
      sortBy: 'parent',
      extraBy: undefined,
      skipSingle: false
    },
    label: 'D',
    value: 'D',
    selectable: false,
    children: [
      {
        label: 'Item 7',
        value: 7,
        selectable: false,
        disabled: false,
        $original: {
          id: 7,
          parent: 'D',
          name: 'Item 7'
        },
        $mapper: {
          label: 'name',
          value: 'id',
          selectable: {
            when: 'parent',
            'enum': [
              'A',
              'B'
            ]
          },
          disabled: {
            when: 'parent',
            'const': 'C'
          }
        }
      }
    ]
  }
]
```