import React from 'react';
import CountUp from 'react-countup';
import WhyChooseUs from '../../../Images/SubMenuPageImg/WhyChooseUs.jpg'

const WhyChoose = () => {
    return (
        <div>
            <div>
                <div className="flex items-center justify-between h-full w-full absolute z-0">
                    <div className="w-1/3 bg-white h-full" />
                </div>
                <div className="xl:px-20 px-8 pt-0 2xl:mx-auto 2xl:container relative z-40">
                    <h1 className="text-3xl font-bold xl:block leading-tight text-[#0F75BC]">
                        Why Choose Us
                    </h1>
                    <div className="flex">
                        <div className="mt-5 md:flex">
                            <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                                <img src={WhyChooseUs} alt="imageOfProfile" className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded" />
                            </div>
                            <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between ">
                                <div>
                                    <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">Why Choose Us</h1>
                                    <p className="text-base font-medium leading-6 mt-4 text-gray-600">There are thousands of service company available in Bangladesh. What sets Hello Facility apart from the competition?</p>
                                    <ul className='list-disc'>
                                        <li>We adjust the service in accordance with client requests.</li>
                                        <li>The tools we use for professional cleaning are safe for both people and animals.</li>
                                        <li>We constantly practice good hygiene.</li>
                                        <li>The Hello facility has a total commitment to quality, integrity, and client satisfaction.</li>
                                        <li>At the hello facility, all of the service personnel are trained.</li>
                                        <li>We adjust the service in accordance with client requests.</li>
                                        <li>We check the backgrounds of all the service providers we register.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-1 px-1 mt-5'>
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 items-center'>
                            <div className='bg-slate-100 py-6 text-center text-[#F7941E] shadow-md rounded-md'>
                                <div className='font-bold text-5xl'>
                                    <CountUp start={20} end={42} delay={2}>
                                        {({ countUpRef }) => (
                                            <div>
                                                <span ref={countUpRef} />+
                                            </div>
                                        )}
                                    </CountUp>
                                </div>
                                <div className='text-xl font-semibold'>
                                    Ongoing Projects
                                </div>
                            </div>
                            <div className='bg-slate-50 py-6 text-center text-[#0F75BC] shadow-md rounded-md'>
                                <div className='font-bold text-5xl'>
                                    <CountUp start={70} end={90} delay={2}>
                                        {({ countUpRef }) => (
                                            <div>
                                                <span ref={countUpRef} />+
                                            </div>
                                        )}
                                    </CountUp>
                                </div>
                                <div className='text-xl font-semibold'>
                                    Expert Team Members
                                </div>
                            </div>
                            <div className='bg-slate-50 py-6 text-center text-[#F7941E] shadow-md rounded-md'>
                                <div className='font-bold text-5xl'>
                                    <CountUp start={330} end={350} delay={2}>
                                        {({ countUpRef }) => (
                                            <div>
                                                <span ref={countUpRef} />+
                                            </div>
                                        )}
                                    </CountUp>
                                </div>
                                <div className='text-xl font-semibold'>
                                    Happy Customers
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;