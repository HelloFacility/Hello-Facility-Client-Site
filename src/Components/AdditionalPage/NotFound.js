import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import NotFoundImage from '../../../src/Images/NotFound.png'
const NotFound = () => {
    return (
        <div >
            <div className='mt-[25vh]'>
                <div className='text-center'>
                    <h1 className='text-8xl text-[#39498E] font-extrabold'>404</h1>
                    <p className='text-red-600 text-xl'>Page Not Found</p>
                </div>
                <div>
                    <img className='mx-auto px-5' src={NotFoundImage} alt="" />
                </div>
                <div className='text-center'>
                    <p className='font-medium text-[#0F75BC]'>We're sorry the page your requested could not be found <br /> please go back to homepage</p>
                    <div className='flex  justify-center'>
                        <Link className='flex items-center border border-[#0F75BC] px-3 py-2 mt-5 rounded-sm text-[#0F75BC] gap-2' to='/'>
                            <div><AiOutlineHome /></div>
                            <div>GO HOME</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;