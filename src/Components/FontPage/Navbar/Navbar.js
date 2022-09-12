import React from 'react';
import logo from '../../../Images/ColorLogo.png';

const Navbar = () => {
    return (
        <div className='mx-16 '>
            <div className="navbar bg-base-100">
                <div className="justify-between mr-11 navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="p-2 mt-3 ml-6 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li tabindex="0">
                                <a className="justify-between">
                                    Service
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Cleaning Service</a></li>
                                    <li><a>Car Rental</a></li>
                                    <li><a>Building Management Solution</a></li>
                                    <li><a>Stationary Supply</a></li>
                                    <li><a>Pest Cpntrol</a></li>
                                    <li><a>Gardening</a></li>
                                </ul>
                            </li>
                            <li><a>Client</a></li>
                            <li><a>Gallery</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Contact Us</a></li>
                        </ul>
                    </div>
                    <img className='' src={logo} alt="/" />
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="p-0 menu menu-horizontal">
                        <li><a>Item 1</a></li>
                        <li tabindex="0">
                            <a>
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;