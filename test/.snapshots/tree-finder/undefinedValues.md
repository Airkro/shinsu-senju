# Snapshot undefinedValues

树中包含 undefined 值的测试

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
    value: undefined,
    children: [
      {
        id: 2,
        value: 'a'
      },
      {
        id: 3,
        value: undefined
      },
      {
        id: 4,
        value: 'target',
        children: [
          {
            id: 5,
            value: undefined
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
  undefined,
  'target'
]
```

### optionFinder
```js
export default [
  {
    id: 1,
    value: undefined,
    children: [
      {
        id: 2,
        value: 'a'
      },
      {
        id: 3,
        value: undefined
      },
      {
        id: 4,
        value: 'target',
        children: [
          {
            id: 5,
            value: undefined
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
        value: undefined
      }
    ]
  },
  {
    id: 5,
    value: undefined
  }
]
```