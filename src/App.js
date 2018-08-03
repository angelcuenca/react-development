import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      clicks: 0
    }
  };

  handleClick = () => { 
    this.setState({
      clicks: this.state.clicks + 2
    });
    
  };

  render() {
    return (
      <div>
        <h1 onClick={()=> this.handleClick()}> Clicking here you can increment this number {this.state.clicks}</h1>
      </div>
    );
  }
}

export default App;
