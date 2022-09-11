import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Images/ColorLogo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <div className='header'>
                <img src={logo} alt="/" />
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/service'>Service</Link>
                    <Link to='/client'>Client</Link>
                    <Link to='/service'>Gallery</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/contactus'>Contact Us</Link>
                </nav>
            </div>


        </div>
    );
};

export default Navbar;