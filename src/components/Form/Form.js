import React, { Component } from 'react'
import axios from 'axios';
import './form.css'
 class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: '',
            imgUrl: '',
            currentItemId: null
        }
        this.handleImgChange = this.handleImgChange.bind(this);
        this.handleProductChange = this.handleProductChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleClickCancel = this.handleClickCancel.bind(this);
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClickEdit = this.handleClickEdit.bind(this);    
           // this.getCurrentState = this.getCurrentState.bind(this)
    }
    
    
    
//     componentDidMount() {
//         console.log("----CDM-----", this.props)
// }

    componentDidUpdate(prevProps, prevState) {
        // console.log('222222222', prevProps.curItem,'uigyguigui',this.props.curItem)
      if (this.props.curItem.product_id !== prevProps.curItem.product_id) {
          this.setState({
            name: this.props.curItem.name,
            price: this.props.curItem.price,
            imgUrl: this.props.curItem.image_url,
            currentItemId: this.props.curItem.product_id
          })
          
      }
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
            imgUrl: '',
            currentItemId: null
        })
        // this.componentDidUpdate();
    }
    handleClickAdd() {
        const {name , price, imgUrl} = this.state;
        console.log('Add button Clicked!!!')
        axios.post('/products', {name: name, price: price, imgUrl: imgUrl})
        this.setState({
            name: '',
            price: 0,
            imgUrl: '',
            currentItemId: null
        })
   this.props.func();
    }

    handleClickEdit(){
    const {name , price, imgUrl, currentItemId} = this.state;
    axios.put(`/products/${currentItemId}`, {name: name, price: price, imgUrl: imgUrl})
    }


  render() {
    //   console.log('form current item', this.props.curItem.product_id)
    //   console.log('=====1111111111111111=====', this.state.currentItemId)

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

                {this.state.currentItemId === null?  <button className="add-btn" onClick={this.handleClickAdd}>Add To Inventory</button>
                :<button className="edit-btn" onClick={this.handleClickEdit}>Save Changes</button> }

                {/* {if (this.state.currentItemId === null) {
                    <button className="add-btn" onClick={this.handleClickAdd}>Add To Inventory</button>
                } else {<button className="edit-btn" onClick={this.handleClickAdd}>Save Changes</button>}}
                 */}
                
            </div>

        </div>
      </div>
    )
  }
}

export default Form;