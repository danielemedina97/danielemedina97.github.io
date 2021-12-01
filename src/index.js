import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Projects from './resources/components/projects/Projects';
import SocialMedia from './resources/components/social-media/SocialMedia'

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <meta name="viewport" content="width=device-width"/>
    <Routes>
      <Route exact path="/" element={ <App/> }/>
      <Route exact path="/projects" element={ <Projects/> }/>
      <Route exaxt path="/social-media" element={ <SocialMedia/> }/>
    </Routes>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
