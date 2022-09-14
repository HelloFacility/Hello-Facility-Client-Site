import React from 'react';
import banner from '../../../../Images/Car Renatl service banner.jpg';

const CleaningService = () => {
    return (
        <div>
            <div>
                <div className="relative flex justify-start md:justify-center md:items-end ">
                    <img className="absolute z-0 object-cover w-full h-full xl:mt-10" src={banner} alt="background" />
                    <div className="relative z-10 flex flex-col items-start justify-start px-4 pt-36 md:pt-32 lg:pt-40 xl:pt-56 md:px-6 xl:px-20 md:justify-center md:items-center">
                        <div className="flex flex-col items-start justify-start xl:justify-center xl:space-x-8 xl:flex-row">

                            <div className="grid w-full grid-cols-1 mt-12 xl:mt-0 sm:grid-cols-3 gap-y-12 sm:gap-y-0 md:w-auto sm:gap-x-20 md:gap-x-28 xl:gap-8">
                                <div className="flex flex-col items-start justify-start pb-20 space-y-5 sm:w-40 md:w-auto xl:w-100">
                                    <h2 className="text-base font-bold leading-4 text-white xl:text-5xl xl:font-bold xl:leading-10">Car Rental Service</h2>
                                    <button className="text-base text-xl leading-none text-left text-gray-100 hover:text-gray-400">
                                        Starts from <span className='text-3xl'>$10</span>
                                    </button>
                                    <button className="text-base leading-none text-left text-gray-100 hover:text-gray-400">
                                        On Time Work Completion
                                    </button>
                                    <button className="text-base leading-none text-left text-gray-100 hover:text-gray-400">
                                        Trusted And Reliabe Electronics
                                    </button>

                                </div>


                            </div>
                        </div>

                    </div>
                </div>
                <div className="p-20 section">
                    <h1 className='text-2xl font-bold'>Service Features:</h1>
                    <ul class="list-disc pl-5 m-2">
                        <li>Celling Fan Installation</li>
                        <li>Celling Fan Installation</li>
                        <li>Celling Fan Installation</li>
                        <li>Celling Fan Installation</li>
                        <li>Celling Fan Installation</li>

                    </ul>
                    <h1 className='text-2xl font-bold'>Price Includes:</h1>
                    <ul class="list-disc pl-5 m-2">
                        <li>Only service charge</li>


                    </ul>
                    <h1 className='text-2xl font-bold'>Price Excludes:</h1>
                    <ul class="list-disc pl-5 m-2">
                        <li>Components & Parts (if used)</li>
                        <li>Transportation (if applicable)</li>

                    </ul>
                </div>

                <div className="ml-20 FaQ">
                    <h1 className='text-3xl'>FAQ</h1>
                    <div>
                        <section class="text-gray-700">
                            <div class="container  mx-auto">

                                <div class=" lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                                    <div class="w-full lg:w-1/2  ppx-4y-2">
                                        <details class="mb-4">
                                            <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                                How Long is this site live?
                                            </summary>

                                            <span>
                                                Laboris qui labore cillum culpa in sunt quis sint veniam.
                                                Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                                                minim velit nostrud pariatur culpa magna in aute.
                                            </span>
                                        </details>
                                        <details class="mb-4">
                                            <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                                                Can I install/upload anything I want on there?
                                            </summary>

                                            <span>
                                                Laboris qui labore cillum culpa in sunt quis sint veniam.
                                                Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                                                minim velit nostrud pariatur culpa magna in aute.
                                            </span>
                                        </details>
                                        <details class="mb-4">
                                            <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                                How can I migrate to another site?
                                            </summary>

                                            <span>
                                                Laboris qui labore cillum culpa in sunt quis sint veniam.
                                                Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                                                minim velit nostrud pariatur culpa magna in aute.
                                            </span>
                                        </details>
                                        <details class="mb-4">
                                            <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                                How can I migrate to another site?
                                            </summary>

                                            <span>
                                                Laboris qui labore cillum culpa in sunt quis sint veniam.
                                                Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                                                minim velit nostrud pariatur culpa magna in aute.
                                            </span>
                                        </details>
                                        <details class="mb-4">
                                            <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                                How can I migrate to another site?
                                            </summary>

                                            <span>
                                                Laboris qui labore cillum culpa in sunt quis sint veniam.
                                                Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                                                minim velit nostrud pariatur culpa magna in aute.
                                            </span>
                                        </details>
                                        <details class="mb-4">
                                            <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                                How can I migrate to another site?
                                            </summary>

                                            <span>
                                                Laboris qui labore cillum culpa in sunt quis sint veniam.
                                                Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                                                minim velit nostrud pariatur culpa magna in aute.
                                            </span>
                                        </details>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className='mt-10 ml-20'>
                    <h1 className='text-3xl '>Review of Car Rental Service</h1>
                    <div className="p-4 ml-20 rating rating-lg">
                        <input type="radio" name="rating-9" className="rating-hidden" />
                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                        <input type="radio" name="rating-9" className="mask mask-star-2" checked />
                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                    </div>


                </div>
            </div >
        </div>
    );
};

export default CleaningService;