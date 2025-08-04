# Snapshot multipleRoots

多根节点树测试

## Input

### Options
```js
export default {
  target: 'target'
}
```

### Data
```js
export default [
  {
    id: 1,
    value: 'root1',
    children: [
      {
        id: 2,
        value: 'child1'
      }
    ]
  },
  {
    id: 3,
    value: 'root2',
    children: [
      {
        id: 4,
        value: 'target'
      }
    ]
  }
]
```

## Output

### treeFinder
```js
export default [
  'root2',
  'target'
]
```

### optionFinder
```js
export default [
  {
    id: 3,
    value: 'root2',
    children: [
      {
        id: 4,
        value: 'target'
      }
    ]
  },
  {
    id: 4,
    value: 'target'
  }
]
```