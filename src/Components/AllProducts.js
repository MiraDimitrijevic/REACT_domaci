import React from 'react';
import Product from './Product';

function AllProducts(props) {
  return (
    <div className="allProducts">
          {props.products.map((product) => (
        <Product product={product} />
      ))}

    </div>
  )
}

export default AllProducts;