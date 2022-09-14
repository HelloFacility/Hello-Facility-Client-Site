import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Images/ColorLogo.png';

const ServiceNavbar = () => {
    return (
        <div>
            <div className='shadow-md'>
                <div className='lg:mx-16'>
                    <div className="navbar ">
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
                                        <ul className="text-black absolute bg-gray-50">
                                            <div >
                                                <div>
                                                    <li>
                                                        <h2 className='font-bold'>Cleaning Service</h2>
                                                        <Link to='/commercialCleaningService'>Commercial Cleaning Service</Link>
                                                        <Link to='/regularOfficeCleaning'>Regular Office Cleaning</Link>
                                                        <Link to='/carpetCleaning'>Carpet Cleaning</Link>
                                                        <Link to='/sofaCleaning'>Sofa Cleaning</Link>
                                                        <Link to='/kitchenCleaning'>Kitchen Cleaning</Link>
                                                        <Link to='/bathroomCleaning'>Bathroom Cleaning</Link>
                                                    </li>
                                                </div>
                                                <div>
                                                    <li>
                                                        <h2 className='font-bold'>Pest Control</h2>
                                                        <Link to='/cockroachControl'>Cockroach Control</Link>
                                                        <Link to='/rodentControl'>Rodent Control</Link>
                                                        <Link to='/termiteControl'>Termite Control</Link>
                                                        <Link to='/antControl'>Ant Control</Link>
                                                        <Link to='/fumigationService'>Fumigation Service</Link>
                                                        <Link to='/woodBorer'>Wood Borer</Link>
                                                    </li>
                                                </div>

                                                <div>
                                                    <li>
                                                        <h2 className='font-bold'>Car Rental</h2>
                                                        <Link to='/monthlyCarRental'>Monthly Car Rental</Link>
                                                        <Link to='/onDemandService'>On Demand Service</Link>
                                                        <Link to='/weedingCarRental'>Weeding Car Rental</Link>
                                                    </li>
                                                </div>
                                                <div>
                                                    <li>
                                                        <Link className='font-semibold' to='/buildingManagement'>Building Management Solution</Link>
                                                        <Link className='font-semibold' to='/stationarySupply'>Stationary Supply</Link>
                                                        <Link className='font-semibold' to='/gardening'>Gardening</Link>
                                                    </li>
                                                </div>

                                            </div>
                                        </ul>
                                    </li>
                                    <li><Link to='/additionalClient'>Client</Link></li>
                                    <li><Link to='/AdditionalGallery'>Gallery</Link></li>
                                    <li><Link to='/additionalBlog'>Blog</Link></li>
                                    <li><Link to='/contactUs'>Contact Us</Link></li>
                                </ul>
                            </div>
                            <img className='w-2/3' src={logo} alt="/" />
                        </div>
                        <div className="hidden navbar-center lg:flex w-96 ml-10">
                            <input className="px-2 focus:outline-none  border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Search" />
                        </div>
                        <div className="navbar-end">
                            <Link to='/logIn' className="font-bold">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceNavbar;