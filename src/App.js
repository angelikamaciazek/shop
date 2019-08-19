import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import store from './store'
import ProductsList from './products/containers/ProductsList'

function App() {
  return (
    <Provider store={store}>
      <ProductsList />
    </Provider>
  )
}

export default App