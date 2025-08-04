# Snapshot nullValues

树中包含 null 值的测试

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
    value: null,
    children: [
      {
        id: 2,
        value: 'a'
      },
      {
        id: 3,
        value: null
      },
      {
        id: 4,
        value: 'target',
        children: [
          {
            id: 5,
            value: null
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
  null,
  'target'
]
```

### optionFinder
```js
export default [
  {
    id: 1,
    value: null,
    children: [
      {
        id: 2,
        value: 'a'
      },
      {
        id: 3,
        value: null
      },
      {
        id: 4,
        value: 'target',
        children: [
          {
            id: 5,
            value: null
          }
        ]
      }
    ]
  },
  {
    id: 4,
    value: 'target',
    children: [
      {
        id: 5,
        value: null
      }
    ]
  }
]
```