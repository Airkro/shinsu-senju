# Snapshot invalidParentReferences

should handle invalid parent references

## Input

### Data
```js
export default [
  {
    id: 1
  },
  {
    id: 2,
    parentId: 999
  }
]
```

## Output

### treeInfinity
```js
export default [
  {
    id: 1
  },
  {
    id: 2,
    parentId: 999
  }
]
```