import React, { Component } from 'react';
import './App.css';
import "./bootstrap.min.css";

function Hero(){
  return (<div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Quiz</h1>
        <p>Select the sport</p> 
      </div>
    </div>
    );
}

function Turn(){
  return (<div />);
}

function Continue(){
  return (<div />);
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn />
        <Continue />
      </div>
    );
  }
}

export default App;
