import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../action/action';
import { Redirect } from 'react-router-dom'; 

class Header extends React.Component {

    constructor (){
        super();
        this.state = {
            redirect : false
        }
    }

    logoutUser = () => {
        this.props.logout();
        this.setState({
            redirect:true
        });
    }

    render(){
        if(this.state.redirect){
            return <Redirect to='/'/>;
        }
        return (
            <nav className="main-nav-outer" id="navbarPopup">
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-left main-nav">
                        <li styles="{{font-size: 26px;}}"> <span id="logoText" styles="{{color:#42cbf4;}}">Transion </span></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right main-nav">
                        <li styles="{{font-size: 18px;}}" onClick={this.logoutUser}>Log out [Marko] <i className="fa fa-sign-out" aria-hidden="true"></i> </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

Header.ProptTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    logout: PropTypes.func.isRequired
}

export default connect(null, { logout })(Header);