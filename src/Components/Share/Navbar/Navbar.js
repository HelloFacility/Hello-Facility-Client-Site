import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Images/ColorLogo.png';

const Navbar = () => {
    return (
        <div className=' lg:mx-16'>
            <div className="navbar bg-base-100">
                <div className="justify-between mr-11 navbar-start">
                    <div className=" dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="p-2 mt-3 ml-6 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li tabindex="0">
                                <a className="justify-between">
                                    Service
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="text-black bg-white">
                                    <div >
                                        <div>
                                            <li>
                                                <Link className='font-bold' to='/cleaningService'>Cleaning Service</Link>
                                                <p><small>Commercial Cleaning Service</small></p>
                                                <p><small>Regular Office Cleaning</small></p>
                                                <p><small>Carpet Cleaning</small></p>
                                                <p><small>Sofa Cleaning</small></p>
                                                <p><small>Kitchen Cleaning</small></p>
                                                <p><small>Bathroom Cleaning</small></p>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <Link className='font-bold' to='/pestControl'>Pest Control</Link>
                                                <p><small>Cockroach Control</small></p>
                                                <p><small>Rodent Control</small></p>
                                                <p><small>Termite Control</small></p>
                                                <p><small>Ant Control</small></p>
                                                <p><small>Fumigation Service</small></p>
                                                <p><small>Wood Borer</small></p>
                                            </li>
                                        </div>

                                        <div>
                                            <li>
                                                <Link className='font-bold' to='/carRental' >Car Rental</Link>
                                                <p><small>Monthly Car Rental</small></p>
                                                <p><small>On Demand Service</small></p>
                                                <p><small>Weeding Car Rental</small></p>
                                            </li>
                                        </div>

                                    </div>
                                    <li><Link className='font-bold' to='/buildingManagement'>Building Management Solution</Link></li>
                                    <li><Link className='font-bold' to='/stationarySupply'>Stationary Supply</Link></li>
                                    <li><Link className='font-bold' to='/gardening'>Gardening</Link></li>
                                </ul>


                            </li>
                            <li><Link to='/client'>Client</Link></li>
                            <li><Link to='/gallery'>Gallery</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/contactUs'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <img className='w-2/3' src={logo} alt="/" />
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="p-0 menu menu-horizontal">
                        <li><Link to='/'>Home</Link></li>
                        <li tabindex="0">
                            <a>
                                Service
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 text-black bg-white">
                                <div className='flex'>
                                    <div>
                                        <li>
                                            <Link className='font-bold' to='/cleaningService'>Cleaning Service</Link>
                                            <p><small>Commercial Cleaning Service</small></p>
                                            <p><small>Regular Office Cleaning</small></p>
                                            <p><small>Carpet Cleaning</small></p>
                                            <p><small>Sofa Cleaning</small></p>
                                            <p><small>Kitchen Cleaning</small></p>
                                            <p><small>Bathroom Cleaning</small></p>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <Link className='font-bold' to='/pestControl'>Pest Control</Link>
                                            <p><small>Cockroach Control</small></p>
                                            <p><small>Rodent Control</small></p>
                                            <p><small>Termite Control</small></p>
                                            <p><small>Ant Control</small></p>
                                            <p><small>Fumigation Service</small></p>
                                            <p><small>Wood Borer</small></p>
                                        </li>
                                    </div>

                                    <div>
                                        <li>
                                            <Link className='font-bold' to='/carRental' >Car Rental</Link>
                                            <p><small>Monthly Car Rental</small></p>
                                            <p><small>On Demand Service</small></p>
                                            <p><small>Weeding Car Rental</small></p>
                                        </li>
                                    </div>

                                </div>
                                <li><Link className='font-bold' to='/buildingManagement'>Building Management Solution</Link></li>
                                <li><Link className='font-bold' to='/stationarySupply'>Stationary Supply</Link></li>
                                <li><Link className='font-bold' to='/gardening'>Gardening</Link></li>
                            </ul>


                        </li>
                        <li><Link to='/client'>Client</Link></li>
                        <li><Link to='/gallery'>Gallery</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/contactUs'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Sign In/Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;