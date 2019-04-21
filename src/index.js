import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Clock from './Clock';
// import Toggle from './Toggle';
// import LoginControl from './LoginControl'
// import Page from './Page';
// import NameForm from './NameForm'
import Reservation from './Reservation'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Reservation />,
    document.getElementById('root')
);

console.log("kelu");

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
