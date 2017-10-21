import React, { Component } from 'react'
import Validator from 'validator'
import LoginError from '../messages/LoginError'
import PropTypes from 'prop-types'

class LoginForm extends React.Component {

    state = {
        data: {
            username: '',
            password: ''
        }
    }

    onChange = e =>
        this.setState({
            data : { ...this.state.data, [e.target.name] : e.target.value}
        });

    onSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState(errors);
        if(Object.keys(errors).length === 0){
            this.props.submit(this.state.data);
        }
    }

    validate = (data) => {
        const errors = {};
        if(!data.password) errors.password = "Password can't be blank.";
        if(!data.username) errors.username = "Username can't be blank."
        return errors;
    }

    render() {
        const { data, errors } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit} className="state-form form-horizontal">
                    <div className="form-group">
                        <div className="login-box animated fadeInUp delay-2.1s">
                            <div className="box-header">
                                <h2 className="loginHeader">Sign In</h2>
                            </div>
                            <label htmlFor="username">Username</label>
                            <br />
                            <input
                                type="text"
                                id="username"
                                name="username"
                                size="30"
                                placeholder="example@example.com"
                                value={data.username}
                                onChange={this.onChange}
                                required />
                            <br />
                            {errors && <LoginError text={errors.username} />}
                            <label htmlFor="password">Password</label>
                            <br />
                            <input
                                type="password"
                                id="password" 
                                name="password"
                                size="30"
                                placeholder="example"
                                value={data.password}
                                onChange={this.onChange}
                                required />
                            <br />
                            {errors && <LoginError text={errors.password} />}
                            <button type="submit">Sign In</button>
                            <br />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

LoginForm.propTypes = {
    submit : PropTypes.func.isRequired
};

export default LoginForm;