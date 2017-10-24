import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './component/pages/LoginPages';
import HomePage from './component/pages/HomePage';


const App = () => (
  <div>
    <Route path = "/" exact component = {LoginPage} /> 
    <Route path = "/home" exact component = {HomePage} />
  </div>
);


export default App;
