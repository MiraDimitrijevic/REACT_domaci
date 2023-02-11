import React from 'react';
import Product from './Product';
import {BsSearch} from "react-icons/bs";
import $ from "jquery";


function AllProducts(props) {
  return (
    <div >
       <div className="pretraga">
           <div className="pretraziPolje">
             <input type="text"
                placeholder='Cena...'
                name="pretraga"
                id="pretraga"
              ></input>
            <div className="btnP" onClick={()=> props.pretraga($("#pretraga").val())}>
              <h3><BsSearch/></h3>
            </div>
            </div>
            </div>
    <div className="allProducts">
         
          
          {props.products.map((product) => (
        <Product product={product} kupi={props.kupi}/>
      ))}
  </div>
    </div>
  )
}

export default AllProducts;
