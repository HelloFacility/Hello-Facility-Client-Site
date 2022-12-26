import React from 'react';
import { Link } from 'react-router-dom';
import CarRenralBanner from '../../Images/SubMenuPageImg/HomePageCarRental.webp'
import HappyCustomer from '../../Images/HappyCustomerLogo.png'
import CleaningServiceImg from '../../Images/SubMenuPageImg/HomepageCleaning.jpg'

const RentalCleaningService = () => {
    return (
        <div className='mt-10'>
            <div className='lg:flex lg:mx-20 md:mx-10 mx-5 gap-10'>
                <div className='lg:w-2/5 md:full'>
                    <img className='rounded-lg' src={CarRenralBanner} alt="" />
                    <div className='shadow-md py-4 mx-5'>
                        <div className='flex justify-center'>
                            <img className='w-16' src={HappyCustomer} alt="" />
                            <div className='text-left ml-5'>
                                <h2 className='text-orange-500 text-xl font-bold'>180 +</h2>
                                <p>Happy Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-3/5'>
                    <h1 className="lg:text-2xl text-xl font-bold xl:leading-loose text-[#0F75BC] mt-5">Car Rental</h1>
                    <p className="text-base font-normal lg:font-medium leading-6 mt-4 mb-5 text-gray-600">Considering a trip? Your journey can be more enjoyable with the help of the facility's car rental service. We make every effort to offer first-rate service, whether it is for airport pick-up and drop-off or vacation travel services. Furthermore, we put a high priority on keeping you safe. Call now to make a service reservation.</p>
                    {/* <Link className='font-bold shadow-sm bg-gray-100 px-4 py-3 rounded-md' to='/'>Learn More</Link> */}
                </div>
            </div>
            <div className='lg:flex  lg:mx-20 md:mx-10 mx-5 gap-10 mt-10'>
                <div className='lg:w-3/5'>
                    <h1 className="lg:text-2xl text-xl font-bold xl:leading-loose text-[#0F75BC]">Cleaning Services</h1>
                    <p className="text-base font-normal lg:font-medium leading-6 mt-4 mb-5 text-gray-600">Do you find deep cleaning your home to be a hassle? In that case, relax! Hello, help is on the way! We offer a range of cleaning services, including floor scrubbing, deep kitchen, bathroom, and sofa cleaning, as well as carpet washing. Additionally, we'll clean your office as you request.</p>
                    <Link className='font-bold shadow-sm text-white px-4 bg-[#0F75BC] py-3 rounded-md' to='/contactUs'>Let's go over this more. 
                    </Link>
                </div>
                <div className='lg:w-2/5 md:full pt-5'>
                    <img src={CleaningServiceImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RentalCleaningService;