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
                    <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold text-white text-center pt-10'>Data to enrich your</h1>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold text-white text-center'>online business</h1>
                    <p className='text-xl text-white text-center mt-10'>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                        <br />Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                </div>
                <div className='flex justify-center pt-10'>
                    <Link className='font-bold shadow-sm bg-gray-100 px-4 py-3 rounded-md' to='/contactUs'>Learn More</Link>
                </div>
            </div>
        </div>
    );
};

export default Carousel;