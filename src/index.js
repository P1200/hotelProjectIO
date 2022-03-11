import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './configurations/i18n/i18n';

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

reportWebVitals();
