# Snapshot complexObjects

目标值是复杂对象的测试

## Input

### Options
```js
export default {
  target: {
    type: 'file',
    name: 'target.txt',
    size: 1024
  }
}
```

### Data
```js
export default [
  {
    id: 1,
    value: {
      type: 'folder',
      name: 'root'
    },
    children: [
      {
        id: 2,
        value: {
          type: 'folder',
          name: 'subfolder'
        },
        children: [
          {
            id: 3,
            value: {
              type: 'file',
              name: 'target.txt',
              size: 1024
            }
          }
        ]
      }
    ]
  }
]
```

## Output

### treeFinder
```js
export default []
```