import React from 'react';
import  ReactDOM  from 'react-dom';
// import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './app/store'
import './css/main.css';
import "bootstrap/dist/css/bootstrap.min.css"
import reportWebVitals from './reportWebVitals';
import axios from "axios";

axios.defaults.withCredentials = true
//const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
