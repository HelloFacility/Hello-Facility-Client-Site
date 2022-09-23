import { Avatar, Divider } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillSave, AiOutlineArrowLeft } from 'react-icons/ai';


const CleaningOrderForm = () => {
    const [number1, setNumber1] = useState(299);
    const [number2, setNumber2] = useState('');
    const [total, setTotal] = useState(number1 + number2);

    function calculateTotal() {
        setTotal(number1 * number2);
    }
    return (
        <div>
            <div className='lg:flex md:flex lg:w-3/4 md:w-full mx-auto justify-between lg:rounded-lg pt-5'>
                <div className='lg:w-1/2 md:w-full bg-sky-600'>
                    <div className='p-5'>
                        <div className='flex items-center gap-3'>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <h1 className='font-bold text-white'>Abdullah Al Habib</h1>
                        </div>
                        <div>
                            <div className='mt-10 mb-5'>
                                <h2 className='font-semibold text-white text-xl'>Commercial Cleaning Service</h2>
                                <div className='flex justify-between items-center pr-5'>
                                    <p className='text-white text-sm'>Per Square Feet</p>
                                    <p className='text-white text-xl font-semibold'>৳ 299</p>
                                </div>
                            </div>
                            {/* <input type="number" name="" id="" />
                            Total= 299* */}
                            <Divider color="white" />
                            <div className='my-5'>
                                <h2 className='font-semibold text-white text-xl'>Carpet Cleaning</h2>
                                <div className='flex justify-between items-center pr-5'>
                                    <p className='text-white text-sm'>Starts From</p>
                                    <p className='text-white text-xl font-semibold'>৳ 299</p>
                                </div>
                            </div>
                            <Divider color="white" />
                            <div className='my-5'>
                                <h2 className='font-semibold text-white text-xl'>Sofa Cleaning</h2>
                                <div className='flex justify-between items-center pr-5'>
                                    <p className='text-white text-sm'>Starts From</p>
                                    <p className='text-white text-xl font-semibold'>৳ 299</p>
                                </div>
                            </div>
                            <Divider color="white" />
                            <div className='my-5'>
                                <h2 className='font-semibold text-white text-xl'>Kitchen Cleaning</h2>
                                <div className='flex justify-between items-center pr-5'>
                                    <p className='text-white text-sm'>Starts From</p>
                                    <p className='text-white text-xl font-semibold'>৳ 299</p>
                                </div>
                            </div>
                            <Divider color="white" />
                            <div className='my-5'>
                                <h2 className='font-semibold text-white text-xl'>Bathroom Cleaning</h2>
                                <div className='flex justify-between items-center pr-5'>
                                    <p className='text-white text-sm'>Starts From</p>
                                    <p className='text-white text-xl font-semibold'>৳ 299</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link className='font-bold text-white flex items-center justify-end hover:text-black' to='/'><AiOutlineArrowLeft /> Back to Home </Link>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 md:1/2 bg-gray-50 shadow-sm'>

                    <div className='lg:mx-24 md:mx-5'>
                        <h2 className='text-2xl font-bold py-10 text-center'>Budget Calculate</h2>
                        <div className="number-inputs">
                            <input
                                type="number"
                                value={number1}
                                onChange={(e) => setNumber1(+e.target.value)}
                                placeholder="0"
                                readOnly
                            />
                            <input
                                type="number"
                                value={number2}
                                onChange={(e) => setNumber2(e.target.value)}
                                placeholder="0"
                            />
                        </div>

                        <button onClick={calculateTotal}>Add Them!</button>

                        <br />
                        <input type="number" name="" id="" value={total} />
                        {/* <h2>{total}</h2> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CleaningOrderForm;