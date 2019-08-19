import { BASKET_ADD_PRODUCT } from './constans'

export const addProduct = (product) => ({
  type: BASKET_ADD_PRODUCT,
  payload: product
})