# Snapshot notFound

找不到目标值的测试

## Input

### Options
```js
export default {
  target: 'nonexistent'
}
```

### Data
```js
export default [
  {
    id: 1,
    value: 'a',
    children: [
      {
        id: 2,
        value: 'b'
      },
      {
        id: 3,
        value: 'c'
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