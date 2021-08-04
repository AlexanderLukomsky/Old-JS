import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import { lesson_01 } from './lesson/01/01'
// import { student } from './lesson/02 _obj/02';
// import { ages } from './lesson/04_filter/04'
// let a = lesson_01
// let b = student
// let c = ages
// import { people } from './lesson/05_map/05'
// const d = people
import { usersObj } from './lesson/08_associative_array/08';
const eigth = usersObj
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
