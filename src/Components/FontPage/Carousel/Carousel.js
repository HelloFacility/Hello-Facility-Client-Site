import React from 'react';
import car from '../../../Images/SubmenuService/SubMenuTopImg.jpg';



const Carousel = () => {
    return (

        <div>
            <div className='h-96 mt-1' style={{
                backgroundImage: `url(${car})`
            }}>
                <div className="text-center">
                    <h1 className="pt-10 text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-5xl">
                        <span className="block xl:inline md:pl-2 text-white">Data to enrich your</span>{' '} <br />
                        <span className="block  xl:inline md:pl-2 text-white">online business</span>
                    </h1>
                    <p className='text-center mt-3 text-xl text-white'>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. 
                    <br />Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                    <p className="text-center mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0 md:pl-2">
                        
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex justify-center">
                        <div className="rounded-md shadow">
                            <a
                                href="#"
                                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-sky-900 border border-transparent rounded-md hover:bg-sky-700 md:py-4 md:px-10 md:text-lg"
                            >
                                Contact Us
                            </a>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;