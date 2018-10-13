import React from 'react'
import './dashboard.css';
import Product from '../Product/Product';
import axios from 'axios';




 const Dashboard = (props) => {


  const deleteProduct = (e) => {
    let id = e.target.id
    // console.log("this is in the delete function", props)
    axios.delete(`/products/${id}`)
    .then( res => {
      
    })
    props.func()
    // console.log('is this working', props.inventory)
  }

   
  return (

    <div className="dashboard-container">
      <Product editItem={props.editItem} func={deleteProduct} inventory={props.inventory}/>
    </div>
  )
}
export default Dashboard;
// {props.inventory.map((el,i) => {
//   return <div key={i} className="product-box">
//          <img src={el.image_url}/>
//          <div className="headers">
//              <h1>{el.name}</h1>
//              <h2>{el.price}</h2>
//          </div>
//     </div>     
// })};