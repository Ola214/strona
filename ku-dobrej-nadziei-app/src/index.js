import React from 'react';
import ReactDOM from 'react-dom';
import './zglobal.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './bootstrap/css/bootstrap.min.css';
import './fonts/Whyte-Bold.ttf';
import './fonts/Whyte-Extra-Light.ttf';
import './fonts/Whyte-Heavy.ttf';
import './fonts/Whyte-Light.ttf';
import './fonts/SportingGrotesque-Bold.otf';
import './fonts/SportingGrotesque-Regular.otf';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
