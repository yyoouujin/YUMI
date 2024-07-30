import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import App from './Condition';
import reportWebVitals from './reportWebVitals';

//public 폴더 내 index.html 내 #root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
