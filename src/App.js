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

function Footer(){
  return (<div id="footer" className="row">
          <div className="col-12">
            <p className="text-muted credit">
              All sports images are from <a href="https://www.google.com">Google</a>
            </p>
          </div>
        </div>
    );
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'mi banda el mexicano'
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn />
        <Continue />
        <Footer />
      </div>
    );
  }
}

export default App;
