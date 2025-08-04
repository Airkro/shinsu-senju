# Snapshot deepTree

should handle deep tree structure

## Input

### Options
```js
export default {
  parentKey: 'parentId',
  filterBy: (item) => item.name === "Level 4"
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
    name: 'Level 1'
  },
  {
    id: 3,
    parentId: 2,
    name: 'Level 2'
  },
  {
    id: 4,
    parentId: 3,
    name: 'Level 3'
  },
  {
    id: 5,
    parentId: 4,
    name: 'Level 4'
  }
]
```

## Output

### treeFilter
```js
export default [
  {
    id: 5,
    parentId: 4,
    name: 'Level 4'
  }
]
```