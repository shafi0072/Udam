import React from 'react';
import logo from '../../Image/default-meta-image.png'
import './Header.css'

const Header = () => {
    return (
        <div className="Logo">
            <img src={logo} alt=""/>
            <nav className="MenuBar">
                <a href="/corse">Corse</a>
                <a href="/about">About Us</a>
                <a href="/contract">Contract Us</a>
            </nav>
        </div>
    );
};

export default Header;