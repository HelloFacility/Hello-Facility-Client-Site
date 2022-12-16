import React from 'react';
import Footer from '../Share/Footer/Footer';
import Navbar from '../Share/Navbar/Navbar';
import Sanjib from '../../Images/Team/Sanjib.jpg'
import Shantanu from '../../Images/Team/Shantanu.jpg'
import { AiFillFacebook, AiFillLinkedin, AiOutlineArrowRight } from 'react-icons/ai';

const OurTeam = () => {
    return (
        <div>
            <Navbar />
            <div className='lg:flex lg:mx-28 md:mx-20 mx-5 py-16'>
                <div className='lg:w-1/3 md:w-1/3 flex justify-center items-center'>
                    <h2 className='text-4xl font-bold text-[#0F75BC]'>Our Team</h2>
                    <p className='text-4xl font-extrabold'><AiOutlineArrowRight/></p>
                </div>
                <div className='lg:w-2/4 md:2/4 lg:flex md:flex justify-between gap-5 lg:pt-0 md:pt-5'>
                    <div className='bg-slate-50 rounded-md shadow-lg px-6 lg:mt-0 md:mt-0 mt-5'>
                        <div className='flex justify-center pt-5'>
                            <img class="inline-block h-40 w-40 rounded-full ring-2 ring-white" src={Sanjib} alt="" />
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold pt-3 text-center px-10 whitespace-nowrap'>Sanjib Kumar Sarker</h3>
                            <p className='text-lg text-center'>Founder & CEO</p>
                            <div className='flex gap-3 text-3xl justify-center pb-10 pt-2 text-blue-600'>
                                <AiFillFacebook />
                                <AiFillLinkedin />
                            </div>
                        </div>
                    </div>
                    <div className='bg-slate-50 rounded-md shadow-lg px-6 lg:mt-0 md:mt-0 mt-5'>
                        <div className='flex justify-center pt-5'>
                        <img class="inline-block h-40 w-40 rounded-full ring-2 ring-white" src={Shantanu} alt="" />
                        </div>
                        <h3 className='text-xl font-semibold pt-3 text-center px-10 whitespace-nowrap'>Shantanu Ghosh</h3>
                        <p className='text-lg text-center'>Co-Founder & COO </p>
                        <div className='flex gap-3 text-3xl justify-center pb-10 pt-2 text-blue-600'>
                            <AiFillFacebook />
                            <AiFillLinkedin />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OurTeam;