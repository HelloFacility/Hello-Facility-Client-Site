import React from 'react';
import Footer from '../Share/Footer/Footer';
import Navbar from '../Share/Navbar/Navbar';
import { FaAddressCard } from 'react-icons/fa';
import { MdCall, MdMarkEmailRead } from 'react-icons/md';
const ContactUs = () => {
    return (
        <div>
            <Navbar />
            <div>
                <h2 className='pt-10 text-center lg:text-4xl md:text-2xl text-xl font-bold text-[#0F75BC]'>Let’s get in touch…</h2>
                <h4 className='pt-2 text-center text-lg font-semibold'>Hello Facility</h4>
                <div className='lg:flex md:flex gap-20 lg:mx-28 md:mx-20 mx-10 pb-16 pt-5'>
                    <div className='lg:w-1/3'>
                        <div className='flex justify-start'>
                            <p className='text-8xl text-[#0F98DA]'><FaAddressCard /></p>
                        </div>
                        <p className='text-lg font-bold'>Registered Address:</p>
                        <p>Sunrise Garden, House # 5/B, Primary School Road , Kallyanpur, Mirpur - 1207, Dhaka Division, Bangladesh</p>
                    </div>
                    <div className='lg:w-1/3 lg:pl-20'>
                        <div className='flex justify-start'>
                            <p className='text-8xl text-[#0F98DA]'><MdCall /></p>
                        </div>
                        <div className=''>
                            <div className='text-lg font-bold'>Helpline:</div>
                            <ul>
                                <li>09606 35 35 35</li>
                                <li>01757 11 11 77</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <div className='flex justify-start'>
                            <p className='text-8xl text-[#0F98DA]'><MdMarkEmailRead /></p>
                        </div>
                        <div className=''>
                            <p className='text-lg font-bold'>E-mail:</p>
                            <ul>
                                <li>info@hellofacility.com.bd</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;