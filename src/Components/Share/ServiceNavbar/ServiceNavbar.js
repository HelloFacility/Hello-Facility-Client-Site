import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Images/ColorLogo.png';

const ServiceNavbar = () => {
    return (
        <div className='flex justify-between items-center px-16 py-3 bg-slate-50 shadow-sm'>
            <div className='w-1/5'>
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <div className='flex items-center gap-5'>
                <Link className='font-bold' to='/'>All Service</Link>
            </div>
        </div>
    );
};

export default ServiceNavbar;