import React, { Component } from 'react';
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: [],
      currentItem: {}
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.editPost = this.editPost.bind(this);

    }
    
    
   componentDidMount() {
     axios.get('/products')
     .then(res => {
       this.setState({
         inventory: res.data
       })

     })
    }
   editPost(post) {
     this.setState({
       currentItem: post
     });
     
   }   

  
  render() {
    // console.log("----------------", this.state.currentItem)
    // const {currentItem} = this.state.currentItem
    return (
      <div className="App">
      <Header />
        <div className="container">
          <div className="left-col">
            <Dashboard editItem={this.editPost} func={this.componentDidMount} inventory={this.state.inventory}/>
          </div> 

          <div className="right-col">
          <Form curItem={this.state.currentItem} func={this.componentDidMount}/>
          </div> 
        </div>
        
      </div>
    );
  }
  
}

export default App;


/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */