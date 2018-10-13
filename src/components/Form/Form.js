import React, { Component } from 'react'
import axios from 'axios';
import './form.css'
 class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: '',
            imgUrl: '',
            currentItem: ''
        }
        this.handleImgChange = this.handleImgChange.bind(this);
        this.handleProductChange = this.handleProductChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleClickCancel = this.handleClickCancel.bind(this);
        this.handleClickAdd = this.handleClickAdd.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {

        
    }

   handleImgChange(e) {
       this.setState({
           imgUrl: e.target.value
       })
   }

   handleProductChange(e) {
       this.setState({
           name: e.target.value
       })
   }

   handlePriceChange(e) {
       this.setState({
           price: e.target.value
       })
   }

    handleClickCancel() {
        console.log('Cancel button Clicked!!!')
        this.setState({
            name: '',
            price: 0,
            imgUrl: ''
        })
        this.componentDidUpdate();
    }
    handleClickAdd() {
        const {name , price, imgUrl} = this.state;
        console.log('Add button Clicked!!!')
        axios.post('/products', {name: name, price: price, imgUrl: imgUrl})
        this.setState({
            name: '',
            price: 0,
            imgUrl: ''
        })
   this.props.func();
    }


  render() {

    return (
      <div>
        <div className="form-container">
            <div className="img-box"><img className="the-img" src={this.state.imgUrl} alt=""/></div>
            <p>Image Url:</p>
            <input type="text" onChange={this.handleImgChange} value={this.state.imgUrl}/>
            <p>Product Name:</p>
            <input type="text" onChange={this.handleProductChange} value={this.state.name}/>
            <p>Price:</p>
            <input type="text" onChange={this.handlePriceChange} value={this.state.price}/>
            <div className="btn-box">
                <button className="cancel-btn" onClick={this.handleClickCancel}>Cancel</button>
                <button className="add-btn" onClick={this.handleClickAdd}>Add To Inventory</button>
            </div>

        </div>
      </div>
    )
  }
}

export default Form;