import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import AllCampuses from './components/AllCampuses';
import CampusList from './components/CampusList';
import CampusEdit from './components/CampusEdit';
import NewCampusForm from './components/NewCampusForm';
import NoCampusRegistered from './components/NoCampusRegistered';
import CampusNoStudents from './components/CampusNoStudents';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <CampusNoStudents/>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
