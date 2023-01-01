import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../Images/WhiteLogo.png'
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';

const Footer = () => {
    return (
        <div>
            <div>
                <div className="flex px-4 md:px-6  xl:px-20 flex-col justify-start items-start md:justify-center md:items-center relative z-10 bg-sky-900 pt-10">
                    <div className="flex  flex-col items-start justify-start xl:justify-center xl:space-x-8 xl:flex-row">
                        <div className="flex flex-col justify-start items-center space-x-4">
                            <Link to='/'><img className='w-56' src={Logo} alt="" /></Link>
                            <p className="w-60 text-sm pt-2 pl-2 font-semibold leading-normal text-white"><span>Integrity</span> . <span>Commitment</span> . <span>Quality</span></p>
                        </div>
                        <div className="mt-12 xl:mt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-y-0 w-full md:w-auto sm:gap-x-20 md:gap-x-28 xl:gap-8">
                            <div className="lg:visible hidden sm:w-40 md:w-50 xl:w-50 lg:flex  justify-start items-start flex-col space-y-6">
                                <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">Community</h2>
                                <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                                    <Link to='/about'>About Us</Link>
                                </button>
                                <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                                <Link to='/our-team'>Our Team</Link>
                                </button>
                                <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                                <Link to='/career'>Career</Link>
                                </button>
                            </div>
                            <div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-4">
                                <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">Address</h2>
                                <p className='text-white'>
                                    <button className="text-left text-base font-bold hover:text-gray-400 leading-none text-gray-100">
                                        Registered Address:
                                    </button> <br />
                                    Sunrise Garden, House # 5/B, Primary School Road , Kallyanpur, Mirpur - 1207, Dhaka Division, Bangladesh</p>
                                <p className='text-white'>
                                    <button className="text-left text-base font-bold hover:text-gray-400 leading-none text-gray-100">
                                        Mailing Address:
                                    </button> <br />
                                    Road- 1, House- 6, Shekhertek, Adabor, Dhaka- 1207</p>
                            </div>
                            <div className=" xl:w-72 flex justify-start items-start flex-col space-y-6 lg:pl-10">
                                <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">Contacts</h2>
                                <div className='text-white'>
                                    <button className="text-left text-base font-bold hover:text-gray-400 leading-none text-gray-100">
                                        Helpline:
                                    </button> <br />
                                    <ul>
                                        <li>09606 35 35 35</li>
                                        <li>01757 11 11 77</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className='text-white'><span className='font-semibold'>E-mail: </span> <span>info@hellofacility.com.bd</span></p>
                                    <p className='text-white pt-2'><span className='font-semibold'>Website: </span><span><Link to='/'>www.hellofacility.com.bd</Link></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 flex  xl:justify-between xl:flex-row flex-col-reverse items-center xl:items-start w-full ">
                        <p className="my-10 md:mt-12 xl:mt-0 text-sm leading-none text-white">Copyright © {new Date().getFullYear()} Hello Facility. All rights reserved.</p>
                        <div className='flex gap-4 text-white text-xl'>
                            <a href="https://www.facebook.com/hellofacility/"><BsFacebook/></a>
                            <a href="https://www.linkedin.com/company/hello-facility/"><BsLinkedin/></a>
                            <a href="https://www.instagram.com/hellofacility.bd/"><BsInstagram/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;