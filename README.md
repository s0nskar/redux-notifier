# redux-notifier

## Notification middleware for redux actions

### Install
`npm i --save-dev redux-notifier`

### Usage
```js
import notifier from 'redux-notifier'

const store = createStore(
    reducers,
    applyMiddleware(notifier)
)
```

### License
MIT @ sanskarmodi97@gmail.com