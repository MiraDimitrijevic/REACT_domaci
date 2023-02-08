import React from 'react';
import Product from './Product';

function AllProducts(props) {
  return (
    <div className="allProducts">
          {props.products.map((product) => (
        <Product product={product}           kupi={props.kupi}/>
      ))}

    </div>
  )
}

export default AllProducts;
