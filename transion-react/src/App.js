import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './component/pages/LoginPages';
import HomePage from './component/pages/HomePage';
import MappingPage from './component/pages/MappingPage';
import MappingNewPage from './component/pages/MappingNewPage';
import ClientPage from './component/pages/client/ClientPage';
import ClientInvoiceCreate from './component/pages/client/ClientInvoiceCreate';
import ImportPage from './component/pages/ImportPage';
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
        <Route path="/mapping" exact render={() => (
          t !== null ? <MappingPage /> : <Redirect to="/" />
        )} />
        <Route path="/mapping/new/:type" exact render={() => (
          t !== null ? <MappingNewPage /> : <Redirect to="/" />
        )} />
        <Route path="/client" exact render={() => (
          t !== null ? <ClientPage /> : <Redirect to="/" />
        )} />
        <Route path="/client/newinvoice" exact render={() => (
          t !== null ? <ClientInvoiceCreate /> : <Redirect to="/" />
        )} />
        <Route path="/import" exact render={() => (
          t !== null ? <ImportPage /> : <Redirect to="/" />
        )} />
      </div>
    )
  }
}

export default App;
