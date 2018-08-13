import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super(); 


    this.state = {
      message : " "
    }
    this.handlechange = this.handlechange.bind(this)
  }
  handlechange(value){
    this.setState({message: value})
  }
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <input onChange={e => this.handlechange(e.target.value)} type="text"></input> 
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <img src={logo} className="App-logo2" alt="logo" />
          <img src={logo} className="App-logo3" alt="logo" />
          <img src={logo} className="App-logo4" alt="logo" />
          <img src={logo} className="App-logo5" alt="logo" />
          <img src={logo} className="App-logo6" alt="logo" />
          <img src={logo} className="App-logo7" alt="logo" />
          <img src={logo} className="App-logo8" alt="logo" />
          <img src={logo} className="App-logo9" alt="logo" />
          <img src={logo} className="App-logo10" alt="logo" />
          <img src={logo} className="App-logo11" alt="logo" />
          <img src={logo} className="App-logo12" alt="logo" />







          <p>{this.state.message}</p>
          <h2>React Drill #1 </h2>
        </div>
        
      </div>
    );
  }
}

export default App;
