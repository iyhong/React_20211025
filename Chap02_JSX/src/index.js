import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')   // createElement(App).appendTo('root');
);

reportWebVitals();      // console.log. 성능 체크 함수를 지정.
