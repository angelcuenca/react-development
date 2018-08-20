import React, { Component } from 'react';
import './App.css';
import "./bootstrap.min.css";

function Hero(){
  return (<div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Quiz</h1>
        <p>Select the correct athlete</p> 
      </div>
    </div>
    );
}

function Sport({title}){
  return (<div className="answer">
            <h4>{title}</h4>  
          </div>
        );
}

function Turn({athlete, sports}){
  return (<div className="row turn" style={{backgroundColor: "white"}}>
            <div className="col-4 offset-1">
              <img src={athlete.imageUrl} className="athleteimage" alt="Athlete"></img>
            </div>
            <div className="col-6">
              {sports.map((title) =>  <Sport title={title} key={title} /> )}
            </div>
          </div>);
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
        <Turn {...this.props.data.turnData} />
        <Continue />
        <Footer />
      </div>
    );
  }
}

export default App;
