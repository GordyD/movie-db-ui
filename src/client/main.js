import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducer, { initialState } from './reducer'
import App from './containers/App'
import DevTools from './containers/DevTools'

import './main.styl'

let enhancer = compose(
  applyMiddleware(thunkMiddleware),
  DevTools.instrument()
)

let store = createStore(reducer, initialState, enhancer)

// Render our UI into the app element in index.html
render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
)
