# Snapshot basic

基本查找测试 - 在简单树中查找值

## Input

### Options
```js
export default {
  target: 'c'
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
        value: 'b',
        children: [
          {
            id: 3,
            value: 'c'
          },
          {
            id: 4,
            value: 'd'
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
export default [
  'a',
  'b',
  'c'
]
```

### optionFinder
```js
export default [
  {
    id: 1,
    value: 'a',
    children: [
      {
        id: 2,
        value: 'b',
        children: [
          {
            id: 3,
            value: 'c'
          },
          {
            id: 4,
            value: 'd'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    value: 'b',
    children: [
      {
        id: 3,
        value: 'c'
      },
      {
        id: 4,
        value: 'd'
      }
    ]
  },
  {
    id: 3,
    value: 'c'
  }
]
```