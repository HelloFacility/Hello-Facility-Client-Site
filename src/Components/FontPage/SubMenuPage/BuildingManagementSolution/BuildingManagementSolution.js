import React from 'react';
import ServiceNavbar from '../../../Share/ServiceNavbar/ServiceNavbar';
import TopBanner from '../../../../Images/SubMenuPageImg/BuildingManagementSystemCover.jpg'
import serviceLogo from '../../../../Images/ServiceLogo/CleaningService.png'
import { Link } from 'react-router-dom';
import { Rating, Stack } from '@mui/material';
import Footer from '../../../Share/Footer/Footer';
import CleaningServiceIcon from '../../../../Images/ServiceLogo/CleaningService.jpeg'
import PestControlIcon from '../../../../Images/ServiceLogo/Pestcontrol.jpg'
import CarRentalIcon from '../../../../Images/ServiceLogo/kpeg.jpg'
import BMSIcon from '../../../../Images/ServiceLogo/bms.jpg'

const BuildingManagementSolution = () => {
    return (
        <div className='text-justify'>
            <div>
                <ServiceNavbar />
                <div className='h-96 mt-1' style={{
                    backgroundImage: `url(${TopBanner})`
                }}>
                    <div className='lg:flex md:justify-between items-center'>
                        <div className='flex gap-4 items-baseline'>
                            <div>
                                <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold mt-16 lg:ml-28 md:ml-16 ml-5 text-white'>Building Management System</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='lg:flex lg:mx-20 md:mx-12 mx-5 mt-10 gap-6'>
                    <div className='w-full shadow-md px-4 py-4 rounded-md'>
                        <div>
                            <h1 className='text-2xl font-bold pb-4 text-[#0F75BC]'>Overview</h1>
                            <h4 className='font-bold text-lg text-[#0F75BC]'>What's included?</h4>
                            <p>Building management companies can literally ease your life. The building management system (BMS) is a centralized control system that automates the regulation. It controls the non-GMP facility subsystems. It retains predefined parameters and the control of their operation. The main goal of the BMS is to ensure the security of facility operation while also keeping track of and making the most use of it. We, at Hello Facility, do everything in our power to deliver you a seamless and secure service. You have access to automation, efficiency, and control thanks to our building management systems. We can operate for buildings of all sizes. Our services are safe and highly scalable. It will assist you in achieving your energy efficiency objectives.</p>
                        </div>
                    </div>
                </div>


                {/* Service Details */}
                <div className='pt-10'>
                    <div className='flex justify-center'>
                        <img className='w-[200px]' src={serviceLogo} alt="" />
                    </div>
                    <h1 className='text-center lg:text-3xl md:text-2xl text-xl font-bold text-[#0F75BC]'>Building Management System</h1>
                    <div className='lg:mx-20 md:mx-16 mx-5 mt-10 gap-12'>
                        <div>
                            <h2 className='font-semibold text-lg text-[#0F75BC]'>What we do as a building management company in Dhaka</h2>
                            <p>We developed a unique workflow management system as a commercial building management company. We started an entire ecosystem for property management to bring about change in this arena. The services we provide are:</p> <br />
                        </div>
                        <div>
                            <h2 className='font-semibold text-lg text-[#0F75BC]'>Building Maintenance and operations</h2>
                            <p>Depending on the specific company or institution, building maintenance involves different activities. It requires a lot of "behind the scenes" effort to maintain a building's functionality and occupants' comfort. Your building will run flawlessly every day thanks to our skilled professionals. Cleaning up common spaces, taking out the trash daily, and fixing damaged things are all part of building maintenance. It will include inspecting, maintaining, and repairing electrical systems, heating-cooling systems, and other utility services. We will decide the service depending on your needs.</p>
                        </div>
                        <div>
                            <h2 className='font-semibold text-lg text-[#0F75BC] pt-5'>Facility Management</h2>
                            <p>Regardless of the type of facility, we'll make sure the structure and all of its parts are in good working order. We provide our services to any facility such as a factory, office, hospital, mall, shopping center, airport, museum, or stadium. The individual in question is a facility manager. Our professionals will work hard for a proper system and structure. Call us at 01757 11 11 77 for a better understanding.</p>
                        </div>
                        <div>
                            <h2 className='font-semibold text-lg text-[#0F75BC] pt-5'>Security Management</h2>
                            <p>A building management company must have a security management division. It is in charge of establishing and upholding a secure environment for the residents and other important stakeholders. Many procedures must be followed to make the facility secure. A security audit is where it all starts. It is a mandatory process. With the aid of a security consultant, it also comprises an assessment of the security system and procedures. Depending on the findings of the audit, we will then choose what measurements to make.</p>
                        </div>
                        <div>
                            <h2 className='font-semibold text-lg text-[#0F75BC] pt-5'>Gardening and Landscaping Management</h2>
                            <p>The phrase "landscape upkeep" doesn't adequately capture our talents or our clients' needs. Hence, we refer to it as garden management.</p>
                            <p className='pt-4'>Our outdoor spaces are intricate living systems made up of both natural and artificial elements. They need particular care and consideration. We name a dedicated manager to oversee your program to guarantee that it operates consistently. The manager will be an expert on your garden, mechanical systems, and landscape structures.  We'll make sure of that so we can offer you the best landscape care services </p>
                            <p className='pt-4'>We provide weekly, monthly, and seasonal service plans with a variety of options. Our aim is to maintain the constant functionality of your landscape systems.</p>
                        </div>
                        <div>
                            <h2 className='font-semibold text-lg text-[#0F75BC] pt-5'>Our Steps for COVID-19 as a Building Management Company</h2>
                            <p>The situation with COVID-19 has greatly improved. But as a result of this, we were all forced to suffer. That is why we don't want to take any chances. Since we have to see you in person, we will continue to take necessary coronavirus measures. These can be maintained by our trained team. Your safety will always come first for us, even throughout the audit. Our measurements include</p>
                            <li>We have completely vaccinated every member of our team.</li>
                            <li>We keep up with fundamental hygiene procedures and wear masks at all times. We wash our hands with soap or alcohol-based hand sanitizer, for instance.</li>
                            <li>We keep an eye on everyone's health. So that we are ready for anything.</li>
                            <li>If an employee is sick, we make sure they get the rest they need.</li>
                            <li>We use disinfectant spray on every piece of equipment before and after work.</li>
                            <li>We’re very keen to maintain social distancing.</li>
                        </div>

                        <div>
                            <h2 className='font-semibold text-lg text-[#0F75BC] pt-5'>One of The Best And Affordable Building Management System in Dhaka</h2>
                            <p>We take into account a few key elements when estimating the price of a new building automation system.</p>
                            <li>Size (total square footage)</li>
                            <li>Type of building (s)</li>
                            <li>Integratable systems like lighting, HVAC systems, fire, security, and access control</li>
                            <p className='pt-2'>In general, the price of a building automation system ranges from $2.50 to $7.50 per square foot.</p>
                            <p className='pt-3'>The following variables may also have an impact on the price:</p>
                            <li>Whether or not the system is being installed in a brand-new structure.</li>
                            <li>if a new system is installed in an old structure.</li>
                            <li>if it is an update from a legacy building automation system that is older.</li>
                            <li>It is simple to see why a data center would cost more per square foot than a standard office building, for instance.</li>
                        </div>

                        <div>
                            <h2 className='font-semibold text-lg text-[#0F75BC] pt-5'>Why do You Need a Building Management System?</h2>
                            <p>The benefits of installing an efficient and reliable Building Management System with a good track record are limitless. The benefits include operating cost reductions, safety, staff productivity, security, and the safety of your long-term investment.</p>
                            <li>A well-designed system can save operational costs by maximizing energy use across all subsystems.</li>
                            <li>Additionally, it helps lower operating costs by lowering maintenance costs.</li>
                            <li>Service time is reduced by using automatic checks for lamp failures rather than manual checks.</li>
                            <li>Preventive replacement is possible by tracking the life cycle of the component.</li>
                            <li>Control products are made with the least amount of ongoing maintenance in mind (battery-less, no moving parts such as hard disks).</li>
                            <li>Increased worker productivity can help you cut back on service costs.</li>
                            <li>From a smartphone or tablet, you can support mobile management of installations.</li>
                            <li>It will guarantee the security and safety of building tenants. For example, when a fire is detected, automatic shutters allow firemen easier access to the building.</li>
                            <li>Any configuration error can be quickly found. You can avoid disasters by getting a head start on detection.</li>
                        </div>

                        <div>
                            <h2 className='font-semibold text-lg text-[#0F75BC] pt-5'>Things to Keep in Mind</h2>
                            <p>As one of the best building management companies in Dhaka, our priority will always be providing the most satisfactory services. But you have to keep some things in mind to make it happen. Such as -</p>
                            <li>Verifying service is necessary before employees leave the area. Following that, we won't accept any more complaints.</li>
                            <li>Any further services rendered by staff will incur fees in addition to the amount mentioned.</li>
                            <li>You must take away any pricey objects before the procedure starts.</li>
                            <li>A committee made up of one of our supervisors, employees, and you will be formed if our workers cause any damage. Upon completion of a brief investigation and discussion, a decision will be taken.</li>
                            <li>There will be an extra charge if the consumer is late.</li>
                        </div>
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
                            <img className='w-[200px] h-[120px]' src={PestControlIcon} alt="" />
                        </div>
                        <h2 className='text-center text-lg font-bold text-[#0F75BC]'>Pest Control</h2>
                        <p>Are you looking for a pest control expert who can offer qualified pest solutions? Hello facility is one of the top pest control services in Dhaka.</p>
                        <div className='mt-5'>
                            <Link className='font-bold text-[#0F75BC]' to='/pest-control'>See More</Link>
                        </div>
                    </div>
                    <div className='shadow-md px-3 py-3 rounded-md'>
                        <div className='flex justify-center'>
                            <img className='w-[200px] h-[120px]' src={CarRentalIcon} alt="" />
                        </div>
                        <h2 className='text-center text-lg font-bold text-[#0F75BC]'>Car Rental</h2>
                        <p>Interested in car rental services? You have arrived at the correct location! For a dependable car rental service, the Hello Facility is becoming more and more well-known in Bangladesh</p>
                        <div className='mt-5'>
                            <Link className='font-bold text-[#0F75BC]' to='/car-rental'>See More</Link>
                        </div>
                    </div>
                    <div className='shadow-md px-3 py-3 rounded-md'>
                        <div className='flex justify-center'>
                            <img className='w-[200px] h-[120px]' src={CleaningServiceIcon} alt="" />
                        </div>
                        <h2 className='text-center text-lg font-bold text-[#0F75BC]'>Kitchen Cleaning</h2>
                        <p>Are you trying to find a trustworthy cleaning service in Dhaka, Bangladesh? You're in the right spot. Your kitchen will look brand new thanks to Hello Facility.</p>
                        <div className='mt-5'>
                            <Link className='font-bold text-[#0F75BC]' to='/kitchen-cleaning'>See More</Link>
                        </div>
                    </div>
                    <div className='shadow-md px-3 py-3 rounded-md'>
                        <div className='flex justify-center'>
                            <img className='w-[200px] h-[120px]' src={BMSIcon} alt="" />
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
                {/* <div className='lg:mx-20 md:mx-16 mx-5 mt-10 pb-5'>
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
                </div> */}

                <div className='lg:mx-20 md:mx-16 mx-5 my-10 gap-12'>
                    <h2 className='font-semibold text-lg text-[#0F75BC]'>Why Choose The Hello Facility for Building Management System?</h2>
                    <p>Hello Facility is a renowned facility service provider in Bangladesh. We ensure customer happiness by providing high-quality, eco-friendly services. We consult with our clients for a specific roadmap for service delivery. We adhere to best practices for creating changes and improvements involving all stakeholders. Every initiative follows the same fundamental tenet. We create a defined SOW for a planned project to perform above expectations.</p>
                    <p className='pt-2'>The Hello facility is completely dedicated to customer satisfaction, quality, and integrity. Our priority is to provide best-in-class, specialized facility services.</p>
                    <p className='pt-2'>The service staff at the hello facility is all qualified. Before joining our team, they must pass three layers of quality inspections.</p>
                    <p className='pt-2'>It's crucial to feel confident in a service provider before allowing them access to your home for any service. For this reason, we ensure that our registered service providers have a solid track record. To ensure trust, we check their credentials, expertise, and other factors, as well as the histories of their clients.</p>
                    <p className='pt-2'>We also offer cleaning services, building management service, car rentals, general supplies, gardening, etc.</p>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default BuildingManagementSolution;