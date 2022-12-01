import React from 'react';
import  ReactDOM  from 'react-dom';
// import ReactDOM from 'react-dom/client';
import App from './App';
import './css/main.css';
import "bootstrap/dist/css/bootstrap.min.css"
import reportWebVitals from './reportWebVitals';

//const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
