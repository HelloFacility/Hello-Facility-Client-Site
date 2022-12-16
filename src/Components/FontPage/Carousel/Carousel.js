import React from 'react';
import { Link } from 'react-router-dom';
import car from '../../../Images/SubmenuService/SubMenuTopImg.jpg';



const Carousel = () => {
    return (

        <div>
            <div className='h-96 mt-1' style={{
                backgroundImage: `url(${car})`
            }}>

                <div>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold text-white text-center pt-10'>We are always committed</h1>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold text-white text-center'>to best service</h1>
                    <p className='lg:text-xl md:text-lg text-white text-center mt-10 italic'><span className='text-3xl font-bold'>H</span>ello Facility promise to deliver best-in-class, customized facility services focusing 
                        <br />customer satisfaction, quality and integrity.</p>
                </div>
                <div className='flex justify-center pt-10'>
                    <Link className='font-bold shadow-sm bg-[#0F75BC] text-white lg:px-4 px-6 py-3 rounded-md' to='/contactUs'>Learn More</Link>
                </div>
            </div>
        </div>
    );
};

export default Carousel;