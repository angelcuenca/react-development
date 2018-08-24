import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const state = {
  turnData: {
      sports: ['Tennis', 'Nfl', 'Nba', 'Fifa'],
      athlete:{
        name: 'Roger Federer',
        imageUrl: 'images/federer.jpg',
        imageSource: 'Wikimedia Commons',
        sports: ['Tennis']
      },      
  },
  highlight: 'none'
};

describe("App", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App data={state.turnData} highlight={state.highlight} onAnswerSelected={()=>{}} />, div); 
  });
});