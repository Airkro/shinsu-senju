# Snapshot matcher2

matcher

## Input

### Options
```js
export default {
  groups: {
    groupBy: 'parent'
  },
  mappers: {
    disabled: {
      when: 'parent'
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
    disabled: true,
    $original: {
      id: 1,
      parent: 'A',
      name: 'Item 1'
    },
    $mapper: {
      disabled: {
        when: 'parent'
      }
    }
  },
  {
    label: 'Item 2',
    value: 2,
    disabled: true,
    $original: {
      id: 2,
      parent: 'A',
      name: 'Item 2'
    },
    $mapper: {
      disabled: {
        when: 'parent'
      }
    }
  },
  {
    label: 'Item 3',
    value: 3,
    disabled: true,
    $original: {
      id: 3,
      parent: 'B',
      name: 'Item 3'
    },
    $mapper: {
      disabled: {
        when: 'parent'
      }
    }
  },
  {
    label: 'Item 4',
    value: 4,
    disabled: true,
    $original: {
      id: 4,
      parent: 'B',
      name: 'Item 4'
    },
    $mapper: {
      disabled: {
        when: 'parent'
      }
    }
  },
  {
    label: 'Item 5',
    value: 5,
    disabled: true,
    $original: {
      id: 5,
      parent: 'C',
      name: 'Item 5'
    },
    $mapper: {
      disabled: {
        when: 'parent'
      }
    }
  },
  {
    label: 'Item 6',
    value: 6,
    disabled: true,
    $original: {
      id: 6,
      parent: 'C',
      name: 'Item 6'
    },
    $mapper: {
      disabled: {
        when: 'parent'
      }
    }
  },
  {
    label: 'Item 7',
    value: 7,
    disabled: true,
    $original: {
      id: 7,
      parent: 'D',
      name: 'Item 7'
    },
    $mapper: {
      disabled: {
        when: 'parent'
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
        disabled: true,
        $original: {
          id: 1,
          parent: 'A',
          name: 'Item 1'
        },
        $mapper: {
          disabled: {
            when: 'parent'
          }
        }
      },
      {
        label: 'Item 2',
        value: 2,
        disabled: true,
        $original: {
          id: 2,
          parent: 'A',
          name: 'Item 2'
        },
        $mapper: {
          disabled: {
            when: 'parent'
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
        disabled: true,
        $original: {
          id: 3,
          parent: 'B',
          name: 'Item 3'
        },
        $mapper: {
          disabled: {
            when: 'parent'
          }
        }
      },
      {
        label: 'Item 4',
        value: 4,
        disabled: true,
        $original: {
          id: 4,
          parent: 'B',
          name: 'Item 4'
        },
        $mapper: {
          disabled: {
            when: 'parent'
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
        disabled: true,
        $original: {
          id: 5,
          parent: 'C',
          name: 'Item 5'
        },
        $mapper: {
          disabled: {
            when: 'parent'
          }
        }
      },
      {
        label: 'Item 6',
        value: 6,
        disabled: true,
        $original: {
          id: 6,
          parent: 'C',
          name: 'Item 6'
        },
        $mapper: {
          disabled: {
            when: 'parent'
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
        disabled: true,
        $original: {
          id: 7,
          parent: 'D',
          name: 'Item 7'
        },
        $mapper: {
          disabled: {
            when: 'parent'
          }
        }
      }
    ]
  }
]
```