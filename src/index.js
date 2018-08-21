import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {shuffle, sample} from 'underscore';

const athletes = [
    {
        name: 'Roger Federer',
        imageUrl: 'images/federer.jpg',
        imageSource: 'Wikimedia Commons',
        sports: ['Tennis']
    },
    {
        name: 'Aaron Rodgers',
        imageUrl: 'images/rodgers.jpg',
        imageSource: 'Wikimedia Commons',
        sports: ['NFL']
    },
    {
        name: 'Floyd Mayweather',
        imageUrl: 'images/mayweather.jpg',
        imageSource: 'Wikimedia Commons',
        sports: ['Box']
    },
    {
        name: 'LeBron James',
        imageUrl: 'images/lebron.jpg',
        imageSource: 'Wikimedia Commons',
        sports: ['LeBron James']
    }
];

function getTurnData(athletes){
    const allSports = athletes.reduce(function (p, c, i){
        return p.concat(c.sports);
    }, []);
    const fourRandomSports = shuffle(allSports).slice(0, 4);
    const answer = sample(fourRandomSports);

    return {
        sports: fourRandomSports,
        athlete: athletes.find((athlete) =>
                athlete.sports.some((title) =>
                    title === answer ))
    }
}

const state = {
    turnData: getTurnData(athletes)
};

ReactDOM.render(<App data={state} />, document.getElementById('root'));
registerServiceWorker();
