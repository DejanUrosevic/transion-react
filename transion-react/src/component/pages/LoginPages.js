import React from 'react';
import LoginForm from '../forms/LoginForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../action/action.js';
import Footer from '../footer';

class LoginPages extends React.Component {

  submit = data => {
    this.props.login(data).then(() => this.props.history.push("/home"))
  };

  render() {
    return (
      <div className="b1">
        <div styles="{{overflow:hidden;}}">
          <header className="header" id="header">
            <div className="container">
              <figure className="logo animated fadeInDown delay-07s">
                <img src="/images/Transion_logo.png" className="img-circle img-responsive" alt="" />
              </figure>
              <h1 className="animated fadeInDown delay-07s">Welcome To <span styles="{{color:#42cbf4;}}">Transion </span></h1>
            </div>
          </header>
        </div>

        <div styles="{{overflow:hidden;}}">
          <header className="header" id="header">
            <div className="container">
              <LoginForm submit={this.submit} />
            </div>
            <br />
          </header>
        </div>

        <Footer />
      </div>
    )
  }
}

LoginPages.PropTypes = {
  history : PropTypes.shape({
    push : PropTypes.func.isRequired
  }).isRequired,
  login : PropTypes.func.isRequired
};

export default connect(null, { login })(LoginPages);