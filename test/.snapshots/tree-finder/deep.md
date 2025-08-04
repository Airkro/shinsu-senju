# Snapshot deep

多层级树测试

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
    value: 'root',
    children: [
      {
        id: 2,
        value: 'level1',
        children: [
          {
            id: 3,
            value: 'level2',
            children: [
              {
                id: 4,
                value: 'target'
              }
            ]
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
  'root',
  'level1',
  'level2',
  'target'
]
```

### optionFinder
```js
export default [
  {
    id: 1,
    value: 'root',
    children: [
      {
        id: 2,
        value: 'level1',
        children: [
          {
            id: 3,
            value: 'level2',
            children: [
              {
                id: 4,
                value: 'target'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    value: 'level1',
    children: [
      {
        id: 3,
        value: 'level2',
        children: [
          {
            id: 4,
            value: 'target'
          }
        ]
      }
    ]
  },
  {
    id: 3,
    value: 'level2',
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