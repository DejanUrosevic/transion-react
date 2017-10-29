import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './component/pages/LoginPages';
import HomePage from './component/pages/HomePage';
import { Redirect } from 'react-router-dom'; 

class App extends React.Component {

  render(){
    const t = localStorage.getItem("token");
    return(
      <div>
        <Route path="/" exact component={LoginPage} />
        <Route path="/home" exact render={() => (
          t !== null ? <HomePage /> : <Redirect to="/" />
        )} />
      </div>
    )
  }
}

export default App;
