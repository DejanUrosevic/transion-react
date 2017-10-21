import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './component/pages/LoginPages';


const App = () => (
  <div>
    <Route path = "/" exact component={LoginPage} /> 
  </div>
);


export default App;
