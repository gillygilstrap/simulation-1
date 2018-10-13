import React from 'react'
import './product.css'

const Product = (props) => {
  return (
    <div className="products-container">
    {props.inventory.map((el,i) => {
        return <div key={i} className="product-box">
               <img className src={el.image_url} alt="x"/>
               <div className="product-desc">
                  <div className="headers">
                      <h1>{el.name}</h1>
                      <h2>${el.price}</h2>
                  </div>
                  <div className="btns">
                  <button id={el.product_id} onClick={props.func} className="delete-btn">Delete</button>
                  <button  onClick={() => props.editItem(el)} className="edit-btn">Edit</button>
                </div>
               </div>
          </div>     
     })};
      
    </div>
  )
}
export default Product
