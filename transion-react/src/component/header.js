import React from 'react';

const Header = () => {
    return (
        <nav className="main-nav-outer" id="navbarPopup">
            <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-left main-nav">
                    <li styles="{{font-size: 26px;}}"> <span id="logoText" styles="{{color:#42cbf4;}}">Transion </span></li>
                </ul>
                <ul className="nav navbar-nav navbar-right main-nav">
                    <li styles="{{font-size: 18px;}}">Log out [Marko] <i className="fa fa-sign-out" aria-hidden="true"></i> </li>
                </ul>
            </div>
        </nav>
    )
};

export default Header;