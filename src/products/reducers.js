import  PRODUCTS_FETCH  from './constants'

const INITIAL_STATE = {
  products: [],
  product: {},
  basket: {}
}

const products = [
  { name: "One", description: "Super product 1", price: "123" },
  { name: "Two", description: "Super product 2", price: "456" },
  { name: "Three", description: "Super product 3", price: "789" }
]

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'PRODUCTS_FETCH':
      return {
        ...state,
        products: products,
      }
    default:
      return state
  }
}