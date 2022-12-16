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
        <div className='text-justify'>
            <ServiceNavbar />
            <div className='h-96 mt-1' style={{
                backgroundImage: `url(${TopBanner})`
            }}>
                <div className='lg:flex md:justify-between items-center'>
                    <div className='flex gap-4 items-baseline'>
                        <div>
                            <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold mt-16 lg:mx-28 md:mx-16 mx-5 text-white'>Pest Control</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:flex lg:mx-20 md:mx-12 mx-5 mt-10 gap-6'>
                <div className='w-full shadow-md px-4 py-4 rounded-md'>
                    <p>Are you looking for a pest control expert who can offer qualified pest solutions? Hello facility is one of the top pest control services in Dhaka. Our services can remove cockroaches, rodents, termites, ants, fumigation, wood borers, and bed bugs from your house.</p>
                    <p className='pt-2'>There are many different kinds of bugs around the globe. Some are dangerous, while others are not. We must therefore take some action to combat the hazardous bugs. These bugs pose a major risk to your and your family's health and well-being.</p>
                    <p className='pt-2'>If you are experiencing any issues, you must take action. Getting pest control done in your home is a crucial preventative measure. The Hello facility is here to relieve your hassles and offer you access to professionals at the touch of a button.</p>
                </div>
            </div>


            {/* Service Details */}
            <div className='pt-10'>
                <div className='flex justify-center'>
                    <img className='w-[200px]' src={serviceLogo} alt="" />
                </div>
                <h1 className='text-center lg:text-3xl md:text-2xl text-xl font-bold text-[#0F75BC]'>Pest Control</h1>
                <div className='lg:mx-20 md:mx-16 mx-5 mt-10 gap-12'>
                        <h2 className='font-semibold text-lg text-[#0F75BC]'>Our Offerings as a Pest Control Service</h2>
                        <h4 className='font-semibold text-base text-[#0F75BC]'>Hello Facility is one of the most well-known and dependable Pest Control Services in Dhaka.</h4>
                        <p>We offer pest control services in homes, hospitals, industries, shops, markets, and various business locations throughout Dhaka, Bangladesh. Our staff of highly qualified pest control specialists are successful bug exterminators who take into account all factors of health, the environment, and the surrounding area. No matter what epidemic has your heart racing, we want to reassure you that we have your back.</p>
                        <p className='pt-4'>Whatever the issue, we have the right personnel and workable solutions to get your house secure again. Our services are -</p>
                        <li>Cockroach Control</li>
                        <li>Rodent Control</li>
                        <li>Termite Control</li>
                        <li>Ant Control</li>
                        <li>Fumigation Service</li>
                        <li>Wood Borer</li>
                        <li>Bed Bug Control</li>

                        <p className='pt-6'>If you discover cockroaches, mosquitoes, rodents, bed bugs, termites, or other dangerous and harmful insects in your home, don't be terrified. We are well prepared to treat and prevent pest issues in your home, workplace, and organization. When you contact our professionals to handle pest control services in Dhaka, you'll get well-researched strategies and cutting-edge technology.</p>

                        <h2 className='pt-6 font-semibold text-lg text-[#0F75BC]'>Precautions Against COVID-19</h2>
                        <p className='pb-4'>The situation with COVID-19 has greatly improved. But as a result of this, we were all forced to suffer. That is why we don't want to take any chances. Since we have to see you in person, we will continue to take necessary coronavirus measures. These can be maintained by our trained team. Your safety will always come first for us, even throughout the audit. Our measurements include</p>

                        <li>We have completely vaccinated every member of our team.</li>
                        <li>We keep up with fundamental hygiene procedures and wear masks at all times. We wash our hands with soap or alcohol-based hand sanitizer, for instance.</li>
                        <li>We keep an eye on everyone's health. So that we are ready for anything.</li>
                        <li>If an employee is sick, we make sure they get the rest they need.</li>
                        <li>We use disinfectant spray on every piece of equipment before and after work.</li>
                        <li>We’re very keen to maintain social distancing.</li>

                        <h2 className='pt-6 font-semibold text-lg text-[#0F75BC]'>Pricing</h2>
                        <h4 className='font-semibold text-lg'>Estimated Flat Size:</h4>
                        <h4 className='font-semibold text-lg'>BHK Means: B - Bedroom, H - Hall Room, K - Kitchen</h4>

                        <li>1 BHK Flat - 800 Sq Ft - 1000 Sq Ft</li>
                        <li>2 BHK Flat - 1000 Sq Ft - 1200 Sq Ft</li>
                        <li>3 BHK Flat - 1200 Sq Ft - 1600 Sq Ft</li>
                        <li>More Than 3 BHK Flat - 1600 Sq Ft ++</li>

                        <h2 className='pt-6 font-semibold text-lg text-[#0F75BC]'>Why do You Need Professional Pest Control Service in Dhaka?</h2>
                        <p>Sometimes we underestimate how dirty our home or workplace is. You can resolve this issue with a professional cleaning. That's why pest control in Dhaka is more noteworthy than you think. It will be more fruitful if it comes from Hello Facility!</p>
                        <p className='pt-2'>Consumers can choose from a wide variety of items that promise to eradicate pest infestations from your home. These products won't permanently get rid of your insect issue, despite first seeming to work. Many of these remedies can't address the underlying causes of your insect issues. When it comes to removing invading insects or rodents, it will only be somewhat effective. This is why using expert pest control services is essential. The technician will investigate to identify and get rid of the pest's origin. At the first sign of insects, <Link className='text-blue-500 font-semibold' to='/contactUs'>get in touch with us</Link> We will ensure that you catch your infestation before it becomes dangerous.</p>
                        <p className='pt-2'>A home where pests are a continual problem makes it difficult to feel peaceful. Your family can live in a stress-free and pest-free environment when you rely on professional pest control services. Not only is it inconvenient to worry about pests all the time, but it can also make you fear for your family's safety and potential exposure to diseases. Leave pest treatment to the experts to create a pleasant and healthy home for you and your loved ones.</p>
                        <p className='pt-2'>Taking care of a bug issue immediately will prevent it from becoming a crisis later! DIY fixes could seem enticing in the near term, but the issue might simply be escalating in places you cannot see. You may have to spend thousands of Taka on repairs due to pests like termites. Therefore, it is always wiser to be safe and contact Hello Facility as soon as a potential issue arises. In the future, you can save yourself hundreds or even thousands of money.</p>

                        <h2 className='pt-6 font-semibold text-lg text-[#0F75BC]'>Things to Keep in Mind</h2>
                        <p className='pt-2'>As one of the best pest control services in Dhaka, our priority will always be providing the most satisfactory services. But you have to keep some things in mind to make it happen. Such as - </p>
                        <li>Verifying service is necessary before employees leave the area. Following that, we won't accept any more complaints.</li>
                        <li>Any further services rendered by staff will incur fees in addition to the amount mentioned.</li>
                        <li>You must take away any pricey objects before the procedure starts.</li>
                        <li>A committee made up of one of our supervisors, employees, and you will be formed if our workers cause any damage. Upon completion of a brief investigation and discussion, a decision will be taken.</li>
                        <li>The customer must supply fresh water and electricity to the service provider.</li>
                        <li>A surcharge will be applied if the workspace expands.</li>
                        <li>Everyone from the area has to leave before we start our work. The chemicals can be harmful if one isn't wearing a proper uniform as our workers do.</li>
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
                        <h2 className='text-center text-lg font-bold text-[#0F75BC]'>Pest Control</h2>
                        <p>Are you looking for a pest control expert who can offer qualified pest solutions? Hello facility is one of the top pest control services in Dhaka.</p>
                        <div className='mt-5'>
                            <Link className='font-bold text-[#0F75BC]' to='/pest-control'>See More</Link>
                        </div>
                    </div>
                    <div className='shadow-md px-3 py-3 rounded-md'>
                        <div className='flex justify-center'>
                            <img className='w-[200px]' src={serviceLogo} alt="" />
                        </div>
                        <h2 className='text-center text-lg font-bold text-[#0F75BC]'>Car Rental</h2>
                        <p>Interested in car rental services? You have arrived at the correct location! For a dependable car rental service, the Hello Facility is becoming more and more well-known in Bangladesh</p>
                        <div className='mt-5'>
                            <Link className='font-bold text-[#0F75BC]' to='/car-rental'>See More</Link>
                        </div>
                    </div>
                    <div className='shadow-md px-3 py-3 rounded-md'>
                        <div className='flex justify-center'>
                            <img className='w-[200px]' src={serviceLogo} alt="" />
                        </div>
                        <h2 className='text-center text-lg font-bold text-[#0F75BC]'>Kitchen Cleaning</h2>
                        <p>Are you trying to find a trustworthy cleaning service in Dhaka, Bangladesh? You're in the right spot. Your kitchen will look brand new thanks to Hello Facility.</p>
                        <div className='mt-5'>
                            <Link className='font-bold text-[#0F75BC]' to='/kitchen-cleaning'>See More</Link>
                        </div>
                    </div>
                    <div className='shadow-md px-3 py-3 rounded-md'>
                        <div className='flex justify-center'>
                            <img className='w-[200px]' src={serviceLogo} alt="" />
                        </div>
                        <h2 className='text-center text-lg font-bold text-[#0F75BC]'>Building Management System</h2>
                        <p>Building management companies can literally ease your life. The building management system (BMS) is a centralized control system that automates the regulation. It controls the non-GMP facility subsystems.</p>
                        <div className='mt-5'>
                            <Link className='font-bold text-[#0F75BC]' to='/buildingManagement'>See More</Link>
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
                <h2 className='font-semibold text-lg text-[#0F75BC]'>Why Choose The Hello Facility for Pest Control?</h2>
                <p className='pt-2'>Hello Facility is a renowned facility service provider in Bangladesh. We ensure customer happiness by providing high-quality, eco-friendly services. We consult with our clients for a specific roadmap for service delivery. We adhere to best practices for creating changes and improvements involving all stakeholders. Every initiative follows the same fundamental tenet. We create a defined SOW for a planned project to perform above expectations.</p>
                <p className='pt-2'>The Hello facility is completely dedicated to customer satisfaction, quality, and integrity. Our priority is to provide best-in-class, specialized facility services.</p>
                <p className='pt-2'>The service staff at the hello facility is all qualified. Before joining our team, they must pass three layers of quality inspections.</p>
                <p className='pt-2'>It's crucial to feel confident in a service provider before allowing them access to your home for any service. For this reason, we ensure that our registered service providers have a solid track record. To ensure trust, we check their credentials, expertise, and other factors, as well as the histories of their clients.</p>
                <p className='pt-2'>We also offer cleaning services, building management service, car rentals, general supplies, gardening, etc.</p>
            </div>
            <Footer />
        </div>
    );
};

export default PestControl;