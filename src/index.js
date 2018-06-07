import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');

let render = () => {
    ReactDOM.render(
        <App/>, rootEl)
}

ReactDOM.render(
    <App/>, document.getElementById('root'));
registerServiceWorker();
