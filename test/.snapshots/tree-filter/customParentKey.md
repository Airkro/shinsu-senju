# Snapshot customParentKey

should work with custom parent key

## Input

### Options
```js
export default {
  parentKey: 'parent',
  filterBy: (item) => item.name === "Child 1"
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
    parent: 1,
    name: 'Child 1'
  },
  {
    id: 3,
    parent: 1,
    name: 'Child 2'
  }
]
```

## Output

### treeFilter
```js
export default [
  {
    id: 2,
    parent: 1,
    name: 'Child 1'
  }
]
```