import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Images/ColorLogo.png';



const ServiceNavbar = () => {
 
    return (
        <div className='flex justify-between items-center px-16 py-3 bg-slate-50 shadow-sm'>
            <div className='w-1/5'>
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <div className='flex gap-5'>
                <h2 className='font-bold'>All Service</h2>
                <h2 className='font-bold'>Login</h2>
            </div>
        </div>
    );
};

export default ServiceNavbar;