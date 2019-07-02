import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Home';
import './styles/main.css';

const app = document.getElementById('app');

const render = () => {
  ReactDOM.render(<App />, app)
}

if (app) render();

if (module.hot) module.hot.accept(); 