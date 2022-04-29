import React from 'react';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar/>
            <Login/>
        </div>
    );
};

export default Header;