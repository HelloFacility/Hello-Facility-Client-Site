import React from 'react';
import ServiceNavbar from '../../../Share/ServiceNavbar/ServiceNavbar';
import TopBanner from '../../../../Images/SubmenuService/SubMenuTopImg.jpg'
import badge from '../../../../Images/SubmenuService/badge.png'
import { AiFillSafetyCertificate } from 'react-icons/ai';
import Footer from '../../../Share/Footer/Footer';
import serviceLogo from '../../../../Images/ServiceLogo/CleaningService.png'
import { Link } from 'react-router-dom';
import { Rating, Stack } from '@mui/material';

const PestControl = () => {
    return (
        <div>
            <ServiceNavbar />
            <div className='h-96 mt-1' style={{
                backgroundImage: `url(${TopBanner})`
            }}>
                <div className='lg:flex md:justify-between items-center'>
                    <div className='flex gap-4 items-baseline'>
                        <div>
                            <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold mt-16 lg:ml-28 md:ml-16 ml-5 text-white'>Plumbing & Sanitary Services</h1>
                        </div>
                        <div>
                            <img className='lg:w-36 md:w-36 w-48  pr-5' src={badge} alt="" />
                        </div>
                    </div>
                </div>
                <div className='lg:ml-28 md:ml-16 ml-5'>
                    <div className='pt-10'>
                        <p className='text-xl text-white'>Starts from <span className='text-2xl font-bold'>৳299</span></p>
                    </div>
                    <div className='flex font-semibold text-white items-center gap-2 pt-8 '>
                        <div className='text-xl'><AiFillSafetyCertificate /></div>
                        <div>On Time Work Completion</div>
                    </div>
                    <div className='flex font-semibold text-white items-center gap-2 pt-4'>
                        <div className='text-xl'><AiFillSafetyCertificate /></div>
                        <div>On Time Work Completion</div>
                    </div>
                </div>
            </div>

            <div className='lg:flex lg:mx-20 md:mx-12 mx-5 mt-10 gap-6'>
                <div className='w-full shadow-md px-4 py-4 rounded-md'>
                    <div>
                        <h1 className='text-2xl font-bold pb-4'>Overview</h1>
                        <h4 className='font-bold text-lg text-sky-900'>What's included?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quas illo consequatur ducimus autem, molestias quae eos ea facere perspiciatis officia odit neque quasi quam nesciunt quaerat pariatur sequi laudantium culpa architecto esse nemo, sunt explicabo. Ducimus vel repellendus sint, saepe nesciunt veniam omnis commodi repudiandae earum nam, illo laudantium!</p>
                    </div>
                    <br />
                    <div>
                        <h4 className='font-bold text-lg text-sky-900'>What's excluded?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quas illo consequatur ducimus autem, molestias quae eos ea facere perspiciatis officia odit neque quasi quam nesciunt quaerat pariatur sequi laudantium culpa architecto esse nemo, sunt explicabo. Ducimus vel repellendus sint, saepe nesciunt veniam omnis commodi repudiandae earum nam, illo laudantium!</p>
                    </div>
                </div>
            </div>


            {/* Service Details */}
            <div className='pt-10'>
                <div className='flex justify-center'>
                    <img className='w-[200px]' src={serviceLogo} alt="" />
                </div>
                <h1 className='text-center text-3xl font-bold text-sky-900'>Carpet Cleaning</h1>
                <div className='lg:flex lg:mx-20 md:mx-16 mx-5 mt-10 gap-12'>
                    <div>
                        <h2 className='font-semibold text-lg text-sky-900'>Experience with preparation of painting work</h2>
                        <p>Painting is more than just splashing paint on your walls. There’s a lot of prior work that goes into painting, like sanding, filling putty, priming and so on. And this is something that a professional expert painter of sheba.xyz will have expert knowledge about and experience in painting works.</p> <br />
                        <h2 className='font-semibold text-lg text-sky-900'>Experience with preparation of painting work</h2>
                        <p>Painting is more than just splashing paint on your walls. There’s a lot of prior work that goes into painting, like sanding, filling putty, priming and so on. And this is something that a professional expert painter of sheba.xyz will have expert knowledge about and experience in painting works.</p>
                    </div>
                    <div>
                        <h2 className='font-semibold text-lg text-sky-900'>Experience with preparation of painting work</h2>
                        <p>Painting is more than just splashing paint on your walls. There’s a lot of prior work that goes into painting, like sanding, filling putty, priming and so on. And this is something that a professional expert painter of sheba.xyz will have expert knowledge about and experience in painting works.</p>
                    </div>
                </div>
            </div>
            <div className='lg:mx-20 md:mx-16 mx-5 mt-10'>
                <h1>
                    <span className='font-bold text-xl text-sky-900'>Additional Service</span> <span className='text-lg'>Recommended related service</span>
                </h1>
                <hr />
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-10'>
                    <div className='shadow-md px-3 py-3 rounded-md'>
                        <div className='flex justify-center'>
                            <img className='w-[200px]' src={serviceLogo} alt="" />
                        </div>
                        <h2 className='text-center text-lg font-bold text-sky-900'>Carpet Cleaning</h2>
                        <p>Painting is more than just splashing paint on your walls. There’s a lot of prior work that goes into painting, like sanding, filling putty, priming and so on.</p>
                        <div className='mt-5'>
                            <Link className='font-bold text-sky-900' to='/'>See More</Link>
                        </div>
                    </div>
                    <div className='shadow-md px-3 py-3 rounded-md'>
                        <div className='flex justify-center'>
                            <img className='w-[200px]' src={serviceLogo} alt="" />
                        </div>
                        <h2 className='text-center text-lg font-bold text-sky-900'>Carpet Cleaning</h2>
                        <p>Painting is more than just splashing paint on your walls. There’s a lot of prior work that goes into painting, like sanding, filling putty, priming and so on.</p>
                        <div className='mt-5'>
                            <Link className='font-bold text-sky-900' to='/'>See More</Link>
                        </div>
                    </div>
                    <div className='shadow-md px-3 py-3 rounded-md'>
                        <div className='flex justify-center'>
                            <img className='w-[200px]' src={serviceLogo} alt="" />
                        </div>
                        <h2 className='text-center text-lg font-bold text-sky-900'>Carpet Cleaning</h2>
                        <p>Painting is more than just splashing paint on your walls. There’s a lot of prior work that goes into painting, like sanding, filling putty, priming and so on.</p>
                        <div className='mt-5'>
                            <Link className='font-bold text-sky-900' to='/'>See More</Link>
                        </div>
                    </div>
                    <div className='shadow-md px-3 py-3 rounded-md'>
                        <div className='flex justify-center'>
                            <img className='w-[200px]' src={serviceLogo} alt="" />
                        </div>
                        <h2 className='text-center text-lg font-bold text-sky-900'>Carpet Cleaning</h2>
                        <p>Painting is more than just splashing paint on your walls. There’s a lot of prior work that goes into painting, like sanding, filling putty, priming and so on.</p>
                        <div className='mt-5'>
                            <Link className='font-bold text-sky-900' to='/'>See More</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Review */}
            <div className='lg:mx-20 md:mx-16 mx-5 mt-10 pb-5'>
                <h1 className='font-bold text-xl text-sky-900'>Service Review</h1>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:mx-20 md:mx-16 mx-5 gap-5'>
                <div className='shadow-md px-3 py-5 '>
                    <Stack spacing={1}>
                        <p className='font-bold'>Abdullah Al Habib</p>
                        <Rating name="size-medium" defaultValue={2} />
                        <small className='italic text-sm font-semibold'>The person was very expert and did his job very well</small>
                        <small>Date: 19 September, 2022</small>
                    </Stack>
                </div>
                <div className='shadow-md px-3 py-5 '>
                    <Stack spacing={1}>
                        <p className='font-bold'>Abdullah Al Habib</p>
                        <Rating name="size-medium" defaultValue={2} />
                        <small className='italic text-sm font-semibold'>The person was very expert and did his job very well</small>
                        <small>Date: 19 September, 2022</small>
                    </Stack>
                </div>
                <div className='shadow-md px-3 py-5 '>
                    <Stack spacing={1}>
                        <p className='font-bold'>Abdullah Al Habib</p>
                        <Rating name="size-medium" defaultValue={2} />
                        <small className='italic text-sm font-semibold'>The person was very expert and did his job very well</small>
                        <small>Date: 19 September, 2022</small>
                    </Stack>
                </div>
                <div className='shadow-md px-3 py-5 '>
                    <Stack spacing={1}>
                        <p className='font-bold'>Abdullah Al Habib</p>
                        <Rating name="size-medium" defaultValue={2} />
                        <small className='italic text-sm font-semibold'>The person was very expert and did his job very well</small>
                        <small>Date: 19 September, 2022</small>
                    </Stack>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PestControl;