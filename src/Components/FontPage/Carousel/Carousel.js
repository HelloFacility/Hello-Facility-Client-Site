import React from 'react';
import car from '../../../Images/car rental.avif';



const Carousel = () => {
    return (
        <div>
            <div className="container ">
                <div className="relative mt-10 overflow-hidden bg-white">
                    <div className="mx-auto max-w-7xl">
                        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
                            <svg
                                className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
                                fill="currentColor"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                aria-hidden="true"
                            >
                                <polygon points="50,0 100,0 50,100 0,100" />
                            </svg>

                            <main className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                                <div className="sm:text-center lg:text-left">
                                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                                        <span className="block xl:inline">Data to enrich your</span>{' '}
                                        <span className="block text-indigo-600 xl:inline">online business</span>
                                    </h1>
                                    <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
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
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <img
                            className="object-cover w-full h-56 sm:h-72 md:h-96 lg:h-full lg:w-full"
                            src={car}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;