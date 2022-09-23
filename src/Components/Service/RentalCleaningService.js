import React from 'react';
import { Link } from 'react-router-dom';
import CarRenralBanner from '../../Images/CarRentalBanner.jpg'
import HappyCustomer from '../../Images/HappyCustomerLogo.png'

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
                                <h2 className='text-orange-500 text-xl font-bold'>2,500 +</h2>
                                <p>Happy Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-3/5'>
                    <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800 mt-5">Some of the best work that was done!</h1>
                    <p className="text-base font-medium leading-6 mt-4 mb-5 text-gray-600">Our core values are at the heart of all that we do. They are integrated into our daily work lives and help us to remember our customers always comes first, the last thank you should always comes from us.</p>
                    <Link className='font-bold shadow-sm bg-gray-100 px-4 py-3 rounded-md' to='/'>Learn More</Link>
                </div>
            </div>
            <div className='lg:flex  lg:mx-20 md:mx-10 mx-5 gap-10 mt-10'>
                <div className='lg:w-3/5'>
                    <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">Some of the best work that was done!</h1>
                    <p className="text-base font-medium leading-6 mt-4 mb-5 text-gray-600">Our core values are at the heart of all that we do. They are integrated into our daily work lives and help us to remember our customers always comes first, the last thank you should always comes from us.</p>
                    <Link className='font-bold shadow-sm bg-gray-100 px-4 py-3 rounded-md' to='/'>Learn More</Link>
                </div>
                <div className='lg:w-2/5 md:full pt-5'>
                    <img src={CarRenralBanner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RentalCleaningService;