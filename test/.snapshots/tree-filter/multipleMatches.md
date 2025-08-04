# Snapshot multipleMatches

should handle multiple matches

## Input

### Options
```js
export default {
  parentKey: 'parentId',
  filterBy: (item) => typeof item.name === "string" && item.name.startsWith("Active")
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
    parentId: 1,
    name: 'Active 1'
  },
  {
    id: 3,
    parentId: 1,
    name: 'Active 2'
  },
  {
    id: 4,
    parentId: 2,
    name: 'Inactive'
  },
  {
    id: 5,
    parentId: 3,
    name: 'Active 3'
  }
]
```

## Output

### treeFilter
```js
export default [
  {
    id: 2,
    parentId: 1,
    name: 'Active 1'
  },
  {
    id: 3,
    parentId: 1,
    name: 'Active 2'
  },
  {
    id: 5,
    parentId: 3,
    name: 'Active 3'
  }
]
```