# Snapshot invalidParentId

should handle invalid parent IDs

## Input

### Options
```js
export default {
  parentKey: 'parentId',
  filterBy: (item) => typeof item.name === "string" && item.name.includes("Parent")
}
```

### Data
```js
export default [
  {
    id: 1,
    name: 'Root'
  },
  {
    id: 2,
    parentId: 999,
    name: 'Invalid Parent'
  },
  {
    id: 3,
    parentId: null,
    name: 'Null Parent'
  },
  {
    id: 4,
    parentId: undefined,
    name: 'Undefined Parent'
  }
]
```

## Output

### treeFilter
```js
export default [
  {
    id: 2,
    parentId: 999,
    name: 'Invalid Parent'
  },
  {
    id: 3,
    parentId: null,
    name: 'Null Parent'
  },
  {
    id: 4,
    parentId: undefined,
    name: 'Undefined Parent'
  }
]
```