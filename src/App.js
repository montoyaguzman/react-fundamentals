import './App.css';
import React from 'react';
import Calendar from './components/Calendar';

const student = 'joe montoya';

const formatName = (student) => {
  return student.toUpperCase();
}

const url = "https://png.pngtree.com/png-clipart/20190610/original/pngtree-userpeoplelinear-iconuser-png-image_1859764.jpg";


const jobElement = React.createElement(
  'span',
  { className: 'job' },
  'front end developer'
);

const element = <div className="App"> 
                  <h1 className="blue">¡Hola {formatName(student)}!</h1> 
                  {jobElement}
                  <br/>
                  <img alt="fotito.jpg" src={url} width="300" height="300"/>
                  <br/>
                  <Calendar/>
                </div>;

function App() {
  return (element);
}

export default App;
