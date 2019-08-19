import React, { Component } from 'react'

import Product from '../components/Product'

class ProductsList extends Component {

  render() {
    return (
      <React.Fragment>
        <Product data={{name:"One", description:"Super product 1", price:"123"}} />
        <Product data={{name:"Two", description:"Super product 2", price:"456"}} />
        <Product data={{name:"Three", description:"Super product 3", price:"789"}} />
      </React.Fragment>

    )
  }
}

export default ProductsList