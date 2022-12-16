import React from 'react';
import { BsFillBagXFill } from 'react-icons/bs';
import Footer from '../Share/Footer/Footer';
import Navbar from '../Share/Navbar/Navbar';

const Career = () => {
    return (
        <div>
            <Navbar />
            <div className='text-center lg:mx-28 md:mx-20 mx-5'>
                <h2 className='pt-6 lg:text-4xl md:text:2xl text-xl lg:font-bold md:font-bold font-semibold text-[#0F75BC]'>Welcome to Hello Facility Career</h2>
                <h4 className='pt-2 lg:text-2xl md:text-xl text-lg font-semibold'>Join The Team</h4>

                <div className='pt-10'>
                    <div className='text-7xl flex justify-center text-[#F8C77E]'><BsFillBagXFill/></div>
                    <p className='pb-5 lg:text-2xl md:text-2xl text-xl text-gray-600'>There are no jobs right now.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Career;