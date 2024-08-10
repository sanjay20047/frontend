import React from 'react';
import '../../assets/styles/Header.css'; // Import the CSS file
import logo from '../../assets/images/logo.png'; // Import the logo image

const Header = () => {
    return (
        <header id="header">
            <div className="logo-container">
                <img src={logo} alt="TrashIt Logo" className="logo" />
                <h1>TrashIt</h1>
            </div>
        </header>
    );
};

export default Header;
