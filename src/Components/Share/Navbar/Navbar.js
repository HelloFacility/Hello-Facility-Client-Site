import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Images/ColorLogo.png';
import './NavbarStyle.css'
import { MdKeyboardArrowDown } from 'react-icons/md';

const Navbar = () => {
     return (
        <div>
            <div className='flex justify-center pt-3'>
                <Link className='cursor-pointer' to='/'><img className='lg:hidden md:hidden w-[180px]' src={logo} alt="" /></Link>
            </div>
            <div className='flex items-center justify-between lg:mx-10 md:mx-10 mx-5'>
                <div className='flex items-center gap-10'>
                    <div className='flex items-center gap-3'>
                        <div>
                            <Link to='/'><img className='lg:w-[230px] md:w-[180px] w-[0px] cursor-pointer' src={logo} alt="" /></Link>
                        </div>
                        <div className='lg:hidden flex items-center whitespace-nowrap'>
                            <div>
                                <Link to='/'>Home</Link>
                            </div>
                            <div className="dropdown">
                                <button className="dropbtn flex items-center">Service <MdKeyboardArrowDown /></button>
                                <div className="dropdown-content">
                                    <div className='whitespace-nowrap'>
                                        <ul className='flex px-10 gap-5 py-3'>
                                            <div>
                                                <li>
                                                    <Link to='/cleaning-service'>Cleaning Service</Link>
                                                    <Link to='/commercialCleaningService'>Commercial Cleaning Service</Link>
                                                </li>
                                                <li>
                                                    <Link to='/pest-control'>Pest Control</Link>
                                                    <Link to='/kitchen-cleaning'>Kitchen Cleaning</Link>
                                                </li>
                                                <li>
                                                    <Link to='/car-rental'>Car Rental</Link>
                                                    <Link to='/buildingManagement'>Building Management System</Link>
                                                </li>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <Link to='/'>About Us</Link>
                                <Link to='/'>Our Team</Link>
                                <Link to='/'>Career</Link>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex items-center hidden'>
                        <div>
                            <Link to='/'>Home</Link>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn flex items-center">Service <MdKeyboardArrowDown /></button>
                            <div className="dropdown-content">
                                <div className='whitespace-nowrap'>
                                    <ul className='flex px-10 gap-5 py-3'>
                                        <div>
                                            <li>
                                                <Link to='/cleaning-service'>Cleaning Service</Link>
                                                <Link to='/commercialCleaningService'>Commercial Cleaning Service</Link>
                                            </li>
                                        </div>

                                        <div>
                                            <li>
                                                <Link to='/pest-control'>Pest Control</Link>
                                                <Link to='/kitchen-cleaning'>Kitchen Cleaning</Link>
                                            </li>
                                        </div>

                                        <div>
                                            <li>
                                                <Link to='/car-rental'>Car Rental</Link>
                                                <Link to='/buildingManagement'>Building Management System </Link>
                                            </li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <Link to='/'>About Us</Link>
                            <Link to='/'>Our Team</Link>
                            <Link to='/'>Career</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;