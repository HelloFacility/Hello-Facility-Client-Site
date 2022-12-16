import React from 'react';
import ServiceNavbar from '../../../Share/ServiceNavbar/ServiceNavbar';
import TopBanner from '../../../../Images/SubmenuService/SubMenuTopImg.jpg'
import badge from '../../../../Images/SubmenuService/badge.png'
import { AiFillSafetyCertificate } from 'react-icons/ai';
import Footer from '../../../Share/Footer/Footer';
import serviceLogo from '../../../../Images/ServiceLogo/CleaningService.png'
import { Link } from 'react-router-dom';
import { Rating, Stack } from '@mui/material';
const CommercialCleaning = () => {
    return (
        <div className='text-justify'>
            <ServiceNavbar />
            <div className='h-96 mt-1' style={{
                backgroundImage: `url(${TopBanner})`
            }}>
                <div className='lg:flex md:justify-between items-center'>
                    <div className='flex gap-4 items-baseline'>
                        <div>
                            <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold mt-16 lg:ml-28 md:ml-16 ml-5 text-white'>Commercial Cleaning Service/Regular Office</h1>
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
                        <h4 className='font-bold text-lg text-[#0F75BC]'>Commercial Cleaning Services Tailored to Fit Your Needs</h4>
                        <p className='pt-2'>HelloFacility provides commercial cleaning services to government buildings, multiple-location institutions, and neighborhood businesses. Our skilled employees are aware of the criteria of highly commercial clientele because we have previously served some of the biggest businesses in Bangladesh. HelloFacility ensures high standards of customer service, material safety, and environmentally friendly cleaning.</p>
                    </div>
                    <div>
                        <p className='pt-6'>Our goal when providing office cleaning services in Dhaka or anywhere else in Bangladesh is to create an atmosphere that is comfortable, healthy, and conducive to productivity. Because we are aware of the power of first impressions, we have tailored our cleaning services to meet your requirements.</p>
                    </div>
                </div>
            </div>


            {/* Service Details */}
            <div className='pt-10'>
                <div className='flex justify-center'>
                    <img className='w-[200px]' src={serviceLogo} alt="" />
                </div>
                <h1 className='text-center text-3xl font-bold text-[#0F75BC]'>Commercial Cleaning Service/Regular Office</h1>
                <div className='lg:mx-20 md:mx-16 mx-5 mt-10 gap-12'>
                    <div>
                        <h2 className='font-semibold text-lg text-[#0F75BC]'>Best Business & Office Cleaning Services to Fit Your Needs </h2>
                        <p>Any or all of your unique cleaning and maintenance requirements can be met by our countrywide business & office cleaning services. We provide 365 days of service with a fast response time to respect your valuable time.</p> <br />
                        <h2 className='font-semibold text-lg text-[#0F75BC]'>Experience with preparation of painting work</h2>
                        <p>We respect your time and you. As a result, we do everything in our power to ensure that you receive the best cleaning service possible. Our business cleaning services include</p>
                        <p className='pt-2'>1. <span className='font-semibold'>Antimicrobial Spraying:</span> a very powerful disinfectant that can protect business spaces for up to three months while eliminating 99% of all bacteria, viruses, microbiological insects, and lethal diseases.</p>
                        <p>2. <span className='font-semibold'>Electrostatic Spray Disinfecting:</span> It can completely get rid of those obstinate microorganisms that can make individuals ill.</p>
                        <p>3. <span className='font-semibold'>Office Cleaning:</span> Standard office space cleaning that makes you feel a positive working atmosphere.</p>
                        <p>4. <span className='font-semibold'>Floor Cleaning:</span> Commercial space floor cleaning for regular/one time basis</p>
                        <p>5. <span className='font-semibold'>Overnight Cleaning:</span> Overnight professional cleaning not to cause any business disturbance.</p>
                        <p>6. <span className='font-semibold'>Ceiling Cleaning:</span> Professional Ceiling cleaning to remove any kind of dust & dirt from ceiling.</p>
                        <p>7. <span className='font-semibold'>Power Wash:</span> Our special outdoor office surroundings cleaning service to make your first impression the best</p>
                        <p>8. <span className='font-semibold'>Green Cleaning:</span> An eco-friendly cleaning service without causing any damage to the environment.</p>
                    </div>
                </div>
                <div className='lg:mx-20 md:mx-16 mx-5 mt-10 gap-12'>
                    <h3 className='font-semibold text-lg text-[#0F75BC]'>Affordable Commercial Cleaning - Any Industry, Any Building</h3>
                    <p>HelloFacility worked & is still working with some of the most well-known businesses in Bangladesh. We provide a service that is so effective and enticing that top commercials are hesitant to switch to a competitor. The goal of multinational corporations and brands is to provide a safe environment for their clients and employees. We are skilled at accomplishing that. With cleaning and disinfection against COVID-19 and its variants, our business cleaning services also provide a range of specialized cleaning services.</p>
                    <div className='pt-5'>
                        <p>01. Here are a few examples of our experienced work spaces</p>
                        <p>02. Healthcare Space Cleaning</p>
                        <p>03. Industrial Space Cleaning</p>
                        <p>04. Office Space Cleaning</p>
                        <p>05. Hospital Space Cleaning</p>
                        <p>06. Educational Space Cleaning</p>
                        <p>07. Religious Space Cleaning</p>
                        <p>08. Govt. Building Cleaning</p>
                        <p>09. Event Center Cleaning</p>
                        <p>10. Recreation & Shopping Space Cleaning</p>
                        <p>11. Banks & Financial Institutions Cleaning</p>
                        <p>12. Residential Space Cleaning</p>
                    </div>
                </div>

                <div className='lg:mx-20 md:mx-16 mx-5 mt-10 gap-12'>
                    <h3 className='font-semibold text-lg text-[#0F75BC]'>Best Office Cleaning Services - Our Steps to Keep You COVID - 19</h3>
                    <p className='pt-4'>Every day, hundreds of employees and customers visit offices, hospitals, restaurants, and other commercial establishments. Such locations may be suitable for disseminating COVID-19. These corporate facilities must be cleaned and disinfected on a daily basis in order to welcome staff and consumers the following day.</p>
                    <p className='pt-4'>Coronavirus spreads through surfaces as well, and it is the most prevalent media for the virus. Anyone who touches that surface and then touches his or her mouth, eyes, ears, or nose may be affected. To avoid this, wash your hands frequently with soap and water or an alcohol-based sanitizer. The most effective method, however, is to clean and disinfect those surfaces on a regular basis.</p>
                    <p className='pt-4'>We educated and organized many disinfectant cleaning sessions for our cleaning specialists at HelloFacility to make them more productive workers. Besides making your office disinfectant, we also take some measures to make us COVID-19 free. They are:</p>
                    <li>We will wash our hands with soap and water or alcohol-based sanitizer before entering your premises.</li>
                    <li>Keeping a distance of 6 feet from individuals is advised.</li>
                    <li>cleaning surfaces that are often touched.</li>
                    <li>putting tissue in the garbage after covering a cough or sneezing with one.</li>
                    <li>residing at home when ill.</li>
                </div>

                <div className='lg:mx-20 md:mx-16 mx-5 mt-10 gap-12'>
                    <h2 className='font-semibold text-lg text-[#0F75BC]'>Commercial Cleaning Service - Our Quality Assurance Programme</h2>
                    <p className='pt-4'>HelloFacility dedicates itself to your complete satisfaction. We've tailored quality assurance programs and reporting systems to assist you effectively, improve your overall service experience, and improve communication</p>
                    <p className='pt-4'>We provide several ways for you to contact us if you have any questions, need an invoice, or have any other concerns. Your request is being logged and forwarded to our technical staff for execution and monitoring. We are available at all times for you.</p>
                </div>

                <div className='lg:mx-20 md:mx-16 mx-5 mt-10 gap-12'>
                    <h3 className='font-semibold text-lg text-[#0F75BC]'>What More We Offer for Cleaning Services in Bangladesh</h3>
                    <p className='pt-4'>HelloFacility brings you the most friendly cleaning service in bangladesh. We offer you our service at your schedule. Our pricing rate is variable depending what you exactly needed. We provide the most friendly resposnse within miniutes to our customer and always put them frist as our priority for any of our service. We supervise our cleaning sessions so that you don't have the feeling that some strangers are cleaning your home and anything could happen.</p>
                    <p>Beside Corporate Cleaning Service we also offer:</p>
                    <p>1. Corporate Cleaning Service</p>
                    <p>2. Floor Scrubbing.</p>
                    <p>3. Bathroom Deep Cleaning.</p>
                    <p>4. Kitchen Deep Cleaning.</p>
                    <p>5. Sofa Deep Cleaning.</p>
                    <p>6. Carpet Wash.</p>
                    <p>7. Abseiling (External Glass Clean) Service.</p>
                    <p className='font-semibold pt-2'>We also offer car rental service, pest control services in all over Bangladesh</p>
                </div>

                <div className='lg:mx-20 md:mx-16 mx-5 mt-10 gap-12'>
                    <h3 className='font-semibold text-lg text-[#0F75BC]'>Things to Keep in Mind for Commercial Cleaning</h3>
                    <li>Before staff departs the premises, service must be verified. We will not accept any further complaints after that.</li>
                    <li>Any additional services provided by staff will be charged in addition to the sum discussed.</li>
                    <li>Before the service begins, you must remove any valuable items.</li>
                    <li>If our workers do any damage, a committee will be formed consisting of one of our supervisors, workers, and you. A decision will be made after a brief inquiry and discussion.</li>
                    <li>If the customer is late, an additional fee will be applied.</li>
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
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:mx-20 md:mx-16 mx-5 gap-5 pb-10'>
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

export default CommercialCleaning;