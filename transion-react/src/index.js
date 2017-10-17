import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './login/Login';

import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={Login} /> 
    </BrowserRouter>
    , document.getElementById('root')
);

