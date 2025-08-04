# Snapshot zeroAsValidId

should handle zero as valid ID

## Input

### Options
```js
export default {
  parentKey: 'parentId',
  filterBy: (item) => item.name === "Target"
}
```

### Data
```js
export default [
  {
    id: 0,
    name: 'Root'
  },
  {
    id: 1,
    parentId: 0,
    name: 'Child of Zero'
  },
  {
    id: 2,
    parentId: 1,
    name: 'Target'
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
    name: 'Target'
  }
]
```