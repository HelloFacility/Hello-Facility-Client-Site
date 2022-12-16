import React from 'react';
import ServiceNavbar from '../../../Share/ServiceNavbar/ServiceNavbar';
import TopBanner from '../../../../Images/SubmenuService/SubMenuTopImg.jpg'
import badge from '../../../../Images/SubmenuService/badge.png'
import { AiFillSafetyCertificate } from 'react-icons/ai';
import Footer from '../../../Share/Footer/Footer';
import serviceLogo from '../../../../Images/ServiceLogo/CleaningService.png'
import { Link } from 'react-router-dom';
import { Rating, Stack } from '@mui/material';

const KitchenCleaning = () => {
    return (
        <div>
            <ServiceNavbar />
            <div className='h-96 mt-1' style={{
                backgroundImage: `url(${TopBanner})`
            }}>
                <div className='lg:flex md:justify-between items-center'>
                    <div className='flex gap-4 items-baseline'>
                        <div>
                            <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold mt-16 lg:ml-28 md:ml-16 ml-5 text-white'>Kitchen Cleaning</h1>
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
                        <p>Are you trying to find a trustworthy cleaning service in Dhaka, Bangladesh? You're in the right spot. Your kitchen will look brand new thanks to Hello Facility. It gathers a lot of dust and organic garbage due to being the busiest room in the house. Cleaning regularly, such as once a week, is crucial. To ensure healthy breathing, the kitchen should, nevertheless, undergo a deep cleaning once a month. Call us if you need a healthy cleaning of your kitchen. In the city of Dhaka, we offer expert kitchen cleaning services.</p>
                    </div>
                </div>
            </div>


            {/* Service Details */}
            <div className='pt-10'>
                <div className='flex justify-center'>
                    <img className='w-[200px]' src={serviceLogo} alt="" />
                </div>
                <h1 className='text-center text-3xl font-bold text-sky-900'>Kitchen Cleaning</h1>
                <div className='lg:mx-20 md:mx-16 mx-5 mt-10 gap-12'>
                    <div>
                        <p>We occasionally look for simple, quick kitchen cleaning tips. However, you may avoid this hassle if you have your kitchen professionally cleaned once a month. We're not arguing that easy-to-follow advice won't be effective. However, it will be a waste of your time, effort, and money. So hire a specialist and take pleasure in your spotless kitchen. Before moving into a new home, following a remodeling, and both before and after a party or get-together, you should clean the kitchen. Our services - </p> <br />
                        <li>Cleaning of windows, ventilators, ceiling fans, exhaust fans, kitchen tiles, doors, etc.</li>
                        <li>Oil, stain, and grease removal</li>
                        <li>Cleaning of gas hobs, burners, and chimney hoods</li>
                        <li>Sanitizing of the kitchen sink and wash zone</li>
                        <li>Cleaning of all stainless steel and chrome fittings</li>
                        <li>External cleaning of kitchen appliances such as refrigerator, microwave, toaster, oven, etc.</li>
                        <li>Removal and re-arrangement of utensils and cleaning of storage cabinets</li>
                        <li>Washing, wiping and sanitizing floor and tiles</li>

                        <h2 className='font-semibold text-lg text-sky-900 pt-6'>Precautions Against COVID-19</h2>
                        <p className='pt-2'>The state of COVID-19 has greatly improved. Since we all had to suffer, we don't want to take any chances. We will continue to follow the necessary coronavirus precautions because we will be visiting your home. We would appreciate it if you followed suit. Your safety will always come first to us, no matter what.</p>
                        <li>Our entire crew has undergone the necessary vaccines.</li>
                        <li>We always put on masks and follow basic hygiene. We wash our hands with soap or alcohol-based hand sanitizer, for instance.</li>
                        <li>We keep an eye on everyone's health. We want to be ready for anything, so.</li>
                        <li>We see to it that sick workers get the rest they need.</li>
                        <li>Before and after work, we spray disinfectant on every piece of equipment.</li>
                        <li>Maintaining social distance is something we value highly.</li>

                        <h2 className='font-semibold text-lg text-sky-900 pt-6'>Pricing</h2>
                        <ul>
                            <li>Sqft</li>
                            <li>Payment method</li>
                            <li>Extra payment</li>
                            <li>Service charge</li>
                        </ul>
                        <h2 className='font-semibold text-lg text-sky-900 pt-6'>Why Should You Hire a Kitchen Cleaning Service?</h2>
                        <p>Searching for some kitchen cleaning tips and tricks online? Why not hire a professional to take care of the mess? Here's why this will be one of your best decisions - </p>


                        <p className='pt-4'><span className='font-bold'>Stress-free Life:</span> An untidy kitchen can become a haven for bugs and pathogens. As you walk into the kitchen, it has an impact on how you feel since you'll be horrified to find cockroaches, ants, rats, etc. But it also has an impact on the standard of the food you prepare in your kitchen. Your stress levels could rise as a result. To avoid this issue, you must contact professionals to perform deep cleaning in the kitchen. This will allow them to sterilize your kitchen and remove any chance of a bug infestation.</p>
                        <p className='pt-4'><span className='font-bold'>Healthy Family:</span>Your family's health is impacted by how clean your kitchen is. The likelihood of pest attacks and mishaps in the eyes and kitchens is also increased by the presence of dirty cupboards, soiled tiles, and other similar things. As a result, maintain your kitchen tidy by hiring experts to perform thorough kitchen cleaning. To make your kitchen tidy, they will clean all of the floors of oil, grease, and stains as well as disinfect every area of the kitchen. Your family will be able to avoid contracting illnesses from food.</p>
                        <p className='pt-4'><span className='font-bold'>Proper Equipment For The Job:</span>It might be necessary to purchase tools or cleaning supplies to thoroughly clean your kitchen. Not only may this be very expensive, but you might not know exactly what to buy.</p>
                        <p className='pt-4'>You should not worry about anything because house cleaners arrive equipped with everything they require.</p>
                        <p className='pt-4'>They'll manage the instruments required to get your kitchen in wonderful shape, but you may always make special requests, such as no harsh chemicals and nothing that could harm dogs or children.</p>
                        <p className='pt-4'><span className='font-bold'>Cost-Effective:</span>You might be concerned about the expense of hiring a house cleaning service. Why pay for something when you can do it yourself, after all?</p>

                        <p className='pt-4'>The truth is that paying a cleaning company to thoroughly clean your kitchen can sometimes be a good deal! You may not only avoid having to purchase any necessary tools and materials, but you may also avoid having to clean the kitchen more frequently.</p>

                        <p className='pt-4'>Not to mention potential doctor appointments due to mold growth and airborne bacteria in places you hadn't even noticed.</p>

                        <p className='pt-4'>Although it may seem like you're paying a lot, it will probably balance out in the long run.</p>

                        <p className='pt-6'>We really hope that you found this material useful. For those in Dhaka, Hello Facility provides specialized kitchen cleaning services. <Link to='/contactUs'>Contact us</Link>and get a top notch kitchen. </p>

                        <h2 className='font-semibold text-lg text-sky-900 pt-6'>Things to Keep in Mind</h2>
                        <p>As one of the best kitchen cleaning service providers in Dhaka, our priority will always be providing the most satisfactory services. But you have to keep some things in mind to make it happen. Such as -</p>

                        <li>Any delays caused by the customer will result in an additional fee being added to the service price.</li>
                        <li>Before the service person leaves the location, the customer must double-check the service. No complaints will be considered following the service provider's departure.</li>
                        <li>Keep the pricey possessions in a secure location.</li>
                        <li>A higher price will be charged as the work area grows.</li>
                        <li>When our staff visits your home, make sure the kitchen is unoccupied.</li>
                        <li>Everyone in your house has to maintain COVID-19 precautions.</li>
                        
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

            <div className='lg:mx-20 md:mx-16 mx-5 mt-10'>
            <h2 className='font-semibold text-lg text-sky-900 pt-6'>Why Choose The Hello Facility for Kitchen Cleaning Services?</h2>
            <p className='pt-4'>Hello Facility is dedicated to giving consumers top-notch services. Your kitchen will be thoroughly cleaned by our pros using cutting-edge cleaning equipment. They complete the task with biodegradable and non-hazardous materials to protect your family's health and your expensive kitchen and equipment. You may anticipate your kitchen to smell wonderful and look fantastic after using our kitchen cleaning services.</p>
            <p className='pt-4'>At a fair price, we provide thorough cleaning services in our kitchen. Having frequent services rather than worrying about overspending benefits our customers. After using Hello Facility Kitchen Cleaning Services, you'll realize what you've been missing all these years!</p>
            <p className='pt-4'>It's crucial to feel confident in a service provider before allowing them access to your home for any service. For this reason, we ensure that our registered service providers have a solid track record. To ensure trust, we check their credentials, expertise, and other factors, as well as the histories of their clients.</p>
            <p className='pt-4 pb-10'>We also offer cleaning services, building management services, pest controls, general supplies, gardening, etc.</p>
            </div>
            <Footer />
        </div>
    );
};

export default KitchenCleaning;