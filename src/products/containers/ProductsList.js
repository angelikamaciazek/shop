import React, { Component } from 'react'

import Product from '../components/Product'

class ProductsList extends Component {

  state = {
    products: [
      {name:"One", description:"Super product 1", price:"123"},
      {name:"Two", description:"Super product 2", price:"456"},
      {name:"Three", description:"Super product 3", price:"789"}
    ]
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.products.map((product, index) => (
            <Product key={`prod-${index}`} data={product}/>
          ))
        }
      </React.Fragment>

    )
  }
}

export default ProductsList