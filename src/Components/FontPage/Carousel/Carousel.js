import React from 'react';
import car from '../../../Images/car rental.avif';

const Carousel = () => {
    return (
        <div className='grid grid-cols-3 gap-4 bg-slate-300'>
            <div className='mt-20 font-bold text-center text-black '>
                <h1>This is our best car for you,anytime you can rent this.It has 5000cc Engine and fully auto gear system and air condition.Its a family size car just awesome features.</h1>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Read More
                </button>
            </div>
            <div className='col-span-2 '>
                <img src={car} alt="" />
            </div>

        </div>
    );
};

export default Carousel;