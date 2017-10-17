import React, { Component } from 'react';

class Login extends Component{

    render() {
      return (
        <div class="b1">
          <div styles="{{overflow:hidden;}}">
            <header class="header" id="header">
              <div class="container">
                <figure class="logo animated fadeInDown delay-07s">
                  <img src="/images/Transion_logo.png" class="img-circle img-responsive" alt="" />
                </figure>
                <h1 class="animated fadeInDown delay-07s">Welcome To <span styles="{{color:#42cbf4;}}">Transion </span></h1>
              </div>
            </header>
          </div>
            
          <div styles="{{overflow:hidden;}}">
            <header class="header" id="header">
              <div class="container">
                <form action="/loader" class="state-form form-horizontal" name="loginForm">
                  <div class="form-group">
                    <div class="login-box animated fadeInUp delay-2.1s">
                      <div class="box-header">
                        <h2 class="loginHeader">Sign In</h2>
                      </div>
                      <label for="username">Username</label>
                      <br/>
                      <input type="text" id="username" size="30" required />
                      <br/>
                      <label for="password">Password</label>
                      <br/>
                      <input type="password" id="password" size="30" required />
                      <br/>
                      <button type="submit">Sign In</button>
                      <br/>
                    </div>
                  </div>
                </form>
              </div>
              <br/>
            </header>
          </div>

          <nav class="navbar navbar-default navbar-fixed-bottom footer">
            <span class="copyright"> <span styles="{{color:#42cbf4;}}">Transion 1.0.0 </span> &copy 2017</span>
          </nav>
        </div>
      )
    }
}

export default Login;
