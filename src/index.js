import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const athletes = [
    {
        name: 'Roger Federer',
        imageUrl: 'images/federer.jpg',
        imageSource: 'Wikimedi Commons',
        sports: ['ATP World Tour']
    }
];

const state = {
    turnData: {
        athlete: athletes[0],
        sports: athletes[0].sports
    }
};

ReactDOM.render(<App data={state} />, document.getElementById('root'));
registerServiceWorker();
