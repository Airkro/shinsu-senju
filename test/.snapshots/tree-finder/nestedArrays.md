# Snapshot nestedArrays

树中包含嵌套数组的测试

## Input

### Options
```js
export default {
  target: [
    'target',
    'found'
  ]
}
```

### Data
```js
export default [
  {
    id: 1,
    value: [
      'root'
    ],
    children: [
      {
        id: 2,
        value: [
          'branch',
          'leaf'
        ],
        children: [
          {
            id: 3,
            value: [
              'target',
              'found'
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
export default []
```