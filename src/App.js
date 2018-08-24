import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
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

function Sport({title, onClick, answerClicked, highlight}){
  function highlightToBgColor(highlight){    
    const mapping = {
      'none' : '',
      'correct' : 'green',
      'wrong' : 'red'
    }
    if( answerClicked === title){
      return mapping[highlight];
    }else{
      return mapping['none'];
    }    
  }

  return (<div className="answer" style={{backgroundColor: highlightToBgColor(highlight)}} onClick={() => {onClick(title);}} >
            <h4>{title}</h4>  
          </div>
  );
}

function Turn({athlete, answerClicked, sports, highlight, onAnswerSelected}){
  
  return (<div className="row turn">
            <div className="col-4 offset-1">
              <img src={athlete.imageUrl} className="athleteimage" alt="Athlete"></img>
            </div>
            <div className="col-6">
              {sports.map((title) => <Sport title={title} 
                                            key={title} 
                                            onClick={onAnswerSelected} 
                                            answerClicked={answerClicked}
                                            highlight={highlight} /> )}
            </div>
          </div>);
}
Turn.propTypes = {
  athlete: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    sports: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  sports: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string.isRequired
};

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
        <Turn {...this.props.data.turnData} 
              answerClicked={this.props.answerClicked} 
              highlight={this.props.highlight} 
              onAnswerSelected={this.props.onAnswerSelected} />
        <Continue />
        <Footer />
      </div>
    );
  }
}

export default App;
