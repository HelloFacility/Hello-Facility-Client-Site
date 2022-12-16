import React from 'react';
import ServiceNavbar from '../../../Share/ServiceNavbar/ServiceNavbar';
import TopBanner from '../../../../Images/SubmenuService/SubMenuTopImg.jpg'
import badge from '../../../../Images/SubmenuService/badge.png'
import { AiFillSafetyCertificate } from 'react-icons/ai';
import Footer from '../../../Share/Footer/Footer';
import serviceLogo from '../../../../Images/ServiceLogo/CleaningService.png'
import { Link } from 'react-router-dom';
import { Rating, Stack } from '@mui/material';

const CleaningService = () => {
    return (
        <div className='text-justify'>
            <ServiceNavbar />
            <div className='h-96 mt-1' style={{
                backgroundImage: `url(${TopBanner})`
            }}>
                <div className='lg:flex md:justify-between items-center'>
                    <div className='flex gap-4 items-baseline'>
                        <div>
                            <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold mt-16 lg:ml-28 md:ml-16 ml-5 text-white'>Cleaning Services/Home Cleaning Service</h1>
                        </div>
                        <div>
                            <img className='lg:w-36 md:w-36 w-48  pr-5' src={badge} alt="" />
                        </div>
                    </div>
                </div>
                {/* <div className='lg:ml-28 md:ml-16 ml-5'>
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
                </div> */}
            </div>

            <div className='lg:flex lg:mx-20 md:mx-12 mx-5 mt-10 gap-6'>
                <div className='w-full shadow-md px-4 py-4 rounded-md'>
                    <div>
                        <h1 className='text-2xl font-bold pb-4'>Overview</h1>
                        <p>Cleaning services in Dhaka or the whole of Bangladesh go beyond simple mopping and include thorough sweeping. To you, a house is a place where you can breathe easier, do the things you enjoy, and unwind anyway you choose. For an office, it's the setting where you create something lovely and useful and where your original ideas come to life. Therefore, both of them must be clean and fresh since a clean atmosphere may offer you a pleasant vibe and positive energy. Using this as our guiding principle, Hello Facility goes above and beyond the standard cleaning service to provide you with a more thorough cleaning that you can actually feel. Our knowledgeable, experienced, and committed team members can give you these services on a weekly, monthly, or as-needed basis.</p>
                    </div>
                </div>
            </div>


            {/* Service Details */}
            <div className='pt-10'>
                <div className='flex justify-center'>
                    <img className='w-[200px]' src={serviceLogo} alt="" />
                </div>
                <h1 className='text-center text-3xl font-bold text-[#0F75BC]'>Cleaning Services/Home Cleaning Service</h1>
                <div className='lg:mx-20 md:mx-16 mx-5 mt-10'>
                    <h2 className='font-semibold text-lg text-[#0F75BC]'>What We Do as Cleaning Services in Dhaka</h2>
                    <p>We follow our guidelines strictly & assure you the best cleaning service in Dhaka, Bangladesh with experienced team members of over 10 years,</p>
                    <p>Our Cleaning Services in Dhaka include:</p>
                    <p>
                        1.  We make sure to use a sanitizing solution while cleaning. Our trained & experienced members make sure to clean doorknobs, switches, every room's surface, corner of the room, desk, handles, bars, or other frequently touched locations in your house or office. We use mopping with microfibre mops that can reduce germs up to 99%. Also, the sanitizing liquid solution we use contains chemicals that are safe for newborns to the most elder in your house.
                    </p>
                    <p>2. Between houses and offices, we make sure to change our clothing and mopheads. To provide you with the finest, we wash them after every service.</p>
                    <p>3. We utilize environmentally friendly chemicals that won't harm or discolor metal-type components such as window grilles, doorknobs, ceiling fans, and other products.</p>
                    <p>4. In addition to cleaning the furniture, we also clear the dust that was accumulated on it and reorganize it.</p>
                    <p>5. We are also experts in removing pet stains from carpets, whether it's in your home or workplace.</p>
                </div>
                
                <div className='lg:mx-20 md:mx-16 mx-5 mt-10'>
                    <h3 className='font-semibold text-lg text-[#0F75BC]'>Home Cleaning Service in Dhaka - Our Steps for COVID-19</h3>
                    <p>For COVID-19, Bangladesh has suffered a significant loss. Hello Facility, A corporation that offers cleaning services has seen how Covid has affected everyone's lives. Because of this, our service begins with responsibility and following the government's guidelines by taking simple preventative safety steps.</p>
                    <li>We will wash our hands with soap and water or alcohol-based sanitizer before entering your premises.</li>
                    <li>Keeping a distance of 6 feet from individuals is advised.</li>
                    <li>cleaning surfaces that are often touched.</li>
                    <li>putting tissue in the garbage after covering a cough or sneezing with one.</li>
                    <li>residing at home when ill.</li>
                </div>

                <div className='lg:mx-20 md:mx-16 mx-5 mt-10'>
                    <h3 className='font-semibold text-lg text-[#0F75BC]'>What More We Can Offer for Office/Home Cleaning Service?</h3>
                    <p>You can certainly ask us for the precise service you want. In order to acquire the ideal timetable for you, we also provide you with a customized cleaning service plan in Dhaka. Here are some of the services that we offer more:</p>
                    <p>1. A customized, no-contract house cleaning plan.</p>
                    <p>2. There are no additional fees or hidden costs; we simply charge for the service.</p>
                    <p>3. We follow your timetable when working.</p>
                    <p>4. With a fair lower fee, you may hire us on a monthly or weekly basis.</p>
                </div>

                <div className='lg:mx-20 md:mx-16 mx-5 mt-10'>
                    <p>We also offer cleaning and grounds maintenance services to our esteemed clientele. Now, we provide the services listed below.</p>
                    <p>1. Corporate Cleaning Service</p>
                    <p>2. Floor Scrubbing.</p>
                    <p>3. Bathroom Deep Cleaning.</p>
                    <p>4. Kitchen Deep Cleaning.</p>
                    <p>5. Sofa Deep Cleaning.</p>
                    <p>6. Carpet Wash.</p>
                    <p>7. Abseiling (External Glass Clean) Service.</p>
                </div>

                <div className='lg:mx-20 md:mx-16 mx-5 mt-10'>
                    <h2 className='font-semibold text-lg text-[#0F75BC]'>Hello Facility Cleaning Service Pricing</h2>
                    <p>Hello Facility values interpersonal bonds above just corporate interactions. We mostly discuss our customers' options and opportunities for cleaning services in Dhaka or elsewhere in Bangladesh. But, if this is truly that essential to you, here is a look at our pricing:</p>
                    <p>1. 4 - 5 tk per square foot for public areas.</p>
                    <p>2. We offer a standard bundle of 3500 BDT for 800 square feet (Max)</p>
                    <p>3. We mostly talk about how simple or difficult the procedure will be. Then settle on a price.</p>
                    <p>4. Following the overall review, we add if you have any more requirements and provide a reasonable discount.</p>
                </div>

                <div className='lg:mx-20 md:mx-16 mx-5 mt-10'>
                    <h3 className='font-semibold text-lg text-[#0F75BC]'>Cleaning Services in Dhaka - Things to Keep in Mind</h3>
                    <p>1. Before staff depart the premises, service must be verified. We will not accept any further complaints after that.</p>
                    <p>2. Any additional services provided by staff will be charged in addition to the sum discussed.</p>
                    <p>3. Before the service begins, you must remove any valuable items.</p>
                    <p>4. If our workers do any damage, a committee will be formed consisting of one of our supervisors, workers, and you. A decision will be made after a brief inquiry and discussion.</p>
                    <p>5. If the customer is late, an additional fee will be applied.</p>
                </div>
            </div>
            <div className='lg:mx-20 md:mx-16 mx-5 mt-10'>
                <h1>
                    <span className='font-bold text-xl text-[#0F75BC]'>Additional Service</span> <span className='text-lg'>Recommended related service</span>
                </h1>
                <hr />
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-10'>
                    <div className='shadow-md px-3 py-3 rounded-md'>
                        <div className='flex justify-center'>
                            <img className='w-[200px]' src={serviceLogo} alt="" />
                        </div>
                        <h2 className='text-center text-lg font-bold text-[#0F75BC]'>Carpet Cleaning</h2>
                        <p>Painting is more than just splashing paint on your walls. There’s a lot of prior work that goes into painting, like sanding, filling putty, priming and so on.</p>
                        <div className='mt-5'>
                            <Link className='font-bold text-[#0F75BC]' to='/'>See More</Link>
                        </div>
                    </div>
                    <div className='shadow-md px-3 py-3 rounded-md'>
                        <div className='flex justify-center'>
                            <img className='w-[200px]' src={serviceLogo} alt="" />
                        </div>
                        <h2 className='text-center text-lg font-bold text-[#0F75BC]'>Carpet Cleaning</h2>
                        <p>Painting is more than just splashing paint on your walls. There’s a lot of prior work that goes into painting, like sanding, filling putty, priming and so on.</p>
                        <div className='mt-5'>
                            <Link className='font-bold text-[#0F75BC]' to='/'>See More</Link>
                        </div>
                    </div>
                    <div className='shadow-md px-3 py-3 rounded-md'>
                        <div className='flex justify-center'>
                            <img className='w-[200px]' src={serviceLogo} alt="" />
                        </div>
                        <h2 className='text-center text-lg font-bold text-[#0F75BC]'>Carpet Cleaning</h2>
                        <p>Painting is more than just splashing paint on your walls. There’s a lot of prior work that goes into painting, like sanding, filling putty, priming and so on.</p>
                        <div className='mt-5'>
                            <Link className='font-bold text-[#0F75BC]' to='/'>See More</Link>
                        </div>
                    </div>
                    <div className='shadow-md px-3 py-3 rounded-md'>
                        <div className='flex justify-center'>
                            <img className='w-[200px]' src={serviceLogo} alt="" />
                        </div>
                        <h2 className='text-center text-lg font-bold text-[#0F75BC]'>Carpet Cleaning</h2>
                        <p>Painting is more than just splashing paint on your walls. There’s a lot of prior work that goes into painting, like sanding, filling putty, priming and so on.</p>
                        <div className='mt-5'>
                            <Link className='font-bold text-[#0F75BC]' to='/'>See More</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Review */}
            <div className='lg:mx-20 md:mx-16 mx-5 mt-10 pb-5'>
                <h1 className='font-bold text-xl text-[#0F75BC]'>Service Review</h1>
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

            <div className='lg:mx-20 md:mx-16 mx-5 my-10'>
                <h2 className='font-semibold text-lg text-[#0F75BC] '>Why Choose Hello Facility for Cleaning Service?</h2>
                <p>Keeping a large house clean is a lot of effort, and your housemaid's cleaning will not be enough. You require expert cleaning services to provide a dust-free, clean environment. Hello Facility has worked on this for almost 5 years. We have already served a number of reputable clients. So, we know how much cleaning will delight you and will be completed by our skilled hands without a doubt. Furthermore, we provide the most competitive rates and make every effort to accommodate your schedule. We sincerely believe in mutual bonds and strive to keep them in such a way that you are satisfied with our services. So, simply call us or fill out the form to receive what you need from us.</p>
            </div>
            <Footer />
        </div>
    );
};

export default CleaningService;