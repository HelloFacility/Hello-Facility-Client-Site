import React from 'react';
import CleaningImg from '../../../Images/CleaningBaner.jpg'

const CleaningService = () => {
    return (
        <div>
            <div>
                <div className="flex items-center justify-between h-full w-full absolute z-0">
                    <div className="w-1/3 bg-white h-full" />
                    <div className="w-4/6 ml-16 bg-gray-100 h-4/6" />
                </div>
                <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
                    <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">What our customers are saying</h1>
                    <div className="flex">
                        <div className="md:flex">
                            <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                                <img src={CleaningImg} alt="" className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded-3xl" />
                            </div>
                            <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                                <div>
                                    <h1 className="text-2xl font-semibold xl:leading-loose mt-10 text-sky-900 ">Cleaning Service</h1>
                                    <p className="text-base font-medium leading-6 mt-4 text-gray-600">They are integrated into our daily work lives and help us to remember our customers always comes first, the last thank you should always comes from us.</p>
                                    <div className="form-check pt-5">
                                        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-sky-900 checked:border-sky-900 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" checked />
                                        <label className="form-check-label inline-block text-gray-600 text-base font-medium" for="flexCheckChecked">
                                            Regular Cleaning Service (Office)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-sky-900 checked:border-sky-900 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" checked />
                                        <label className="form-check-label inline-block text-gray-600 text-base font-medium" for="flexCheckChecked">
                                            Regular Cleaning Service (Office)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-sky-900 checked:border-sky-900 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" checked />
                                        <label className="form-check-label inline-block text-gray-600 text-base font-medium" for="flexCheckChecked">
                                            Regular Cleaning Service (Office)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-sky-900 checked:border-sky-900 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" checked />
                                        <label className="form-check-label inline-block text-gray-600 text-base font-medium" for="flexCheckChecked">
                                            Regular Cleaning Service (Office)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-sky-900 checked:border-sky-900 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" checked />
                                        <label className="form-check-label inline-block text-gray-600 text-base font-medium" for="flexCheckChecked">
                                            Regular Cleaning Service (Office)
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CleaningService;