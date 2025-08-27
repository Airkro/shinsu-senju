# Snapshot dup



## Input

### Options
```js
export default {
  groups: {
    groupBy: 'group.id',
    labelBy: 'group.name'
  },
  mappers: {
    label: 'user.name',
    value: 'user.id'
  }
}
```

### Data
```js
export default [
  {
    group: {
      id: 2,
      name: 'group2'
    },
    user: {
      id: 555,
      name: '李'
    }
  },
  {
    group: {
      id: 2,
      name: 'group2'
    },
    user: {
      id: 555,
      name: '李'
    }
  },
  {
    group: {
      id: 1,
      name: 'group1'
    },
    user: {
      id: 555,
      name: '李'
    }
  }
]
```

## Output

### treeMapper
```js
export default [
  {
    label: '李',
    value: 555,
    $original: {
      group: {
        id: 2,
        name: 'group2'
      },
      user: {
        id: 555,
        name: '李'
      }
    },
    $mapper: {
      label: 'user.name',
      value: 'user.id'
    }
  },
  {
    label: '李',
    value: 555,
    $original: {
      group: {
        id: 2,
        name: 'group2'
      },
      user: {
        id: 555,
        name: '李'
      }
    },
    $mapper: {
      label: 'user.name',
      value: 'user.id'
    }
  },
  {
    label: '李',
    value: 555,
    $original: {
      group: {
        id: 1,
        name: 'group1'
      },
      user: {
        id: 555,
        name: '李'
      }
    },
    $mapper: {
      label: 'user.name',
      value: 'user.id'
    }
  }
]
```

### tableGrouping
```js
export default [
  {
    $group: {
      groupBy: 'group.id',
      labelBy: 'group.name',
      sortBy: 'group.name',
      extraBy: undefined,
      skipSingle: false
    },
    label: 'group2',
    value: 2,
    selectable: false,
    children: [
      {
        label: '李',
        value: 555,
        $original: {
          group: {
            id: 2,
            name: 'group2'
          },
          user: {
            id: 555,
            name: '李'
          }
        },
        $mapper: {
          label: 'user.name',
          value: 'user.id'
        }
      },
      {
        label: '李',
        value: 555,
        $original: {
          group: {
            id: 2,
            name: 'group2'
          },
          user: {
            id: 555,
            name: '李'
          }
        },
        $mapper: {
          label: 'user.name',
          value: 'user.id'
        }
      }
    ]
  },
  {
    $group: {
      groupBy: 'group.id',
      labelBy: 'group.name',
      sortBy: 'group.name',
      extraBy: undefined,
      skipSingle: false
    },
    label: 'group1',
    value: 1,
    selectable: false,
    children: [
      {
        label: '李',
        value: 555,
        $original: {
          group: {
            id: 1,
            name: 'group1'
          },
          user: {
            id: 555,
            name: '李'
          }
        },
        $mapper: {
          label: 'user.name',
          value: 'user.id'
        }
      }
    ]
  }
]
```

### grouping
```js
export default [
  {
    $group: {
      groupBy: 'group.id',
      labelBy: 'group.name',
      sortBy: 'group.name',
      extraBy: undefined,
      skipSingle: false
    },
    label: 'group2',
    value: 2,
    selectable: false,
    children: [
      {
        label: '李',
        value: 555,
        $original: {
          group: {
            id: 2,
            name: 'group2'
          },
          user: {
            id: 555,
            name: '李'
          }
        },
        $mapper: {
          label: 'user.name',
          value: 'user.id'
        }
      }
    ]
  }
]
```