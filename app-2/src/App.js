import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super(); 
    this.state= {
        food:[
          'F', 
          'O', 
          'O', 
          'D ', 
          'yum',
          'yummy', 
          'tidepods'
        ]
      
    }
  }
  render() {
    let display = this.state.food.map((element)=>{
        return <h2> {element} </h2>})
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to mylist*</h2>
        </div>
        <h2> {display}</h2>
      </div>
    );
  }
}

export default App;
