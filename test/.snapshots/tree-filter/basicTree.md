# Snapshot basicTree

should filter basic tree structure

## Input

### Options
```js
export default {
  parentKey: 'parentId',
  filterBy: (item) => item.name === "Grandchild"
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
    name: 'Child 1'
  },
  {
    id: 3,
    parentId: 1,
    name: 'Child 2'
  },
  {
    id: 4,
    parentId: 2,
    name: 'Grandchild'
  }
]
```

## Output

### treeFilter
```js
export default [
  {
    id: 4,
    parentId: 2,
    name: 'Grandchild'
  }
]
```