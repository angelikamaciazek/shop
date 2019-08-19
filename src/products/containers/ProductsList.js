import React, { Component } from 'react'

import Product from '../components/Product'

class ProductsList extends Component {

  render() {
    return (
      <React.Fragment>
        <Product name="One" decription="Super product 1" price="123" />
        <Product name="Two" decription="Super product 2" price="456" />
        <Product name="Three" decription="Super product 3" price="789" />
      </React.Fragment>

    )
  }
}

export default ProductsList