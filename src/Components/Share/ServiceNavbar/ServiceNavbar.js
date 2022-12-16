import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Images/ColorLogo.png';

const ServiceNavbar = () => {
    return (
        <div className='flex justify-between items-center lg:px-16 md:px-12 px-5 py-3 bg-slate-50 shadow-sm'>
            <div className='lg:w-1/5 md:w-1/5 w-2/4'>
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <div className='flex items-center gap-5'>
                {/* <Link className='font-bold' to='/'>All Service</Link> */}
            </div>
        </div>
    );
};

export default ServiceNavbar;