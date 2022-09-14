import React from 'react';
import car from '../../../Images/car rental.avif';



const Carousel = () => {
    return (
        <div className="pt-10">
        <div className="container mx-auto">
            <div className="flex flex-wrap items-center pb-12">
                <div className="md:w-1/2 lg:w-1/2 mx-auto w-full xl:pr-20 md:pr-6">
                <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline md:pl-5">Data to enrich your</span>{' '}
                        <span className="block text-indigo-600 xl:inline md:pl-5">online business</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0 md:pl-2">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                        fugiat veniam occaecat fugiat aliqua.
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <a
                                href="#"
                                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                            >
                                Get started
                            </a>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                            <a
                                href="#"
                                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                            >
                                Live demo
                            </a> 
                        </div>
                        <br />
                    </div>
                    </div>
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-full  h-96 flex items-end justify-center">
                    <img className=" w-full h-full inset-0 object-cover object-center rounded-md" src={car} alt />
                </div>
            </div>
        </div>
    </div>

    );
};

export default Carousel;