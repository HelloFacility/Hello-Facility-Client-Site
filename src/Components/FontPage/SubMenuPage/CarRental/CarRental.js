import React from 'react';
import ServiceNavbar from '../../../Share/ServiceNavbar/ServiceNavbar';
import TopBanner from '../../../../Images/SubmenuService/SubMenuTopImg.jpg'
import badge from '../../../../Images/SubmenuService/badge.png'
import { AiFillSafetyCertificate } from 'react-icons/ai';
import Footer from '../../../Share/Footer/Footer';
import serviceLogo from '../../../../Images/ServiceLogo/CleaningService.png'
import { Link } from 'react-router-dom';
import { Rating, Stack } from '@mui/material';

const CarRental = () => {
    return (
        <div className='text-justify'>
            <ServiceNavbar />
            <div className='h-96 mt-1' style={{
                backgroundImage: `url(${TopBanner})`
            }}>
                <div className='lg:flex md:justify-between items-center'>
                    <div className='flex gap-4 items-baseline'>
                        <div>
                        <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold mt-16 lg:mx-28 md:mx-16 mx-5 text-white'>Car Rental</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:flex lg:mx-20 md:mx-12 mx-5 mt-10 gap-6'>
                <div className='w-full shadow-md px-4 py-4 rounded-md'>
                    <div>
                        <h1 className='text-2xl font-bold pb-4 text-[#0F75BC]'>Overview</h1>
                        <p>Interested in car rental services? You have arrived at the correct location! For a dependable car rental service, the Hello Facility is becoming more and more well-known in Bangladesh. We offer affordable, high-value rentals for families, businesses, and tourists. We stick to the timetable so you don't have to suffer for us.</p>
                        <p className='pt-3'>We provide a variety of vehicles for rent, including cars, microbuses, pickup trucks, ambulances, covered vans, and commercial vehicles. Zoom Rent a Car is the ideal automobile for you, whether you are a traveler, moving, or organizing a trip.</p>
                    </div>
                </div>
            </div>


            {/* Service Details */}
            <div className='pt-10'>
                <div className='flex justify-center'>
                    <img className='w-[200px]' src={serviceLogo} alt="" />
                </div>
                <h1 className='text-center lg:text-3xl md:text-2xl text-xl font-bold text-[#0F75BC]'>Car Rental</h1>
                <div className='lg:mx-20 md:mx-16 mx-5 mt-10 gap-12'>
                    <div>
                        <h2 className='font-semibold text-lg text-[#0F75BC]'>Our Offerings as a Car Rental Service</h2>
                        <p>We all paid a price for Dhaka's severe traffic problems. Traffic on public transportation can be extremely uncomfortable. When we go on special outings, whether it's for a meeting or to spend time with friends and family, renting a car in Dhaka can be a true breath of fresh air.</p> 
                        <p className='pt-2'>Hello Facility is one of the most trustworthy rental car companies in Bangladesh. Whether it is for a person or a business, we are dedicated to providing a fully-customized solution, from client convenience to excellent service and special offers.</p>
                        <p className='pt-2'>Since the beginning, we have worked with a distinct emphasis on innovation and have made it a constant goal to enhance every aspect of our services. Now, we provide the services listed below - </p>

                        <h3 className='pt-6'><span className='font-bold'>Airport Pick/ Drop Service:</span> Receive the most affordable pick-up and drop-off services to and from all airports.</h3>
                        <h3 className='pt-6'><span className='font-bold'>Holiday Travel Package:</span>Travel to Bangladesh's greatest tourist destinations in the safest vehicles possible.</h3>
                        <h3 className='pt-6'><span className='font-bold'>On-Demand Service:</span>Need to leave quickly for an emergency call? Are you late for an appointment with a client? To ensure that you arrive on time, just give us a call.</h3>
                        <h3 className='pt-6'><span className='font-bold'>Hourly Service:</span>With our reasonable hourly packages, you can now take in the sights of Dhaka city while relaxing in a car</h3>
                        <h3 className='pt-6'><span className='font-bold'>Business Travel Package:</span>Sometimes you have to go on business trips. So what to do about transportation? Hello facility is here to help once more. We provide a variety of packages. So simply give us a call</h3>
                        <h2 className='font-semibold text-lg text-[#0F75BC] pt-6'>Precautions Against COVID-19</h2>
                        <p>The COVID-19 situation has significantly improved. But because of this, we were all made to endure pain. We don't want to run the risk of that. We shall keep taking the required coronavirus precautions because you will be using our car rental services. It would be appreciated if you would do the same. No matter what, we will always put your safety first. Our measurements comprise</p>

                        <li className='pt-6'>Every member of our crew has received the full set of vaccinations.</li>
                        <li className='pt-6'>We maintain essential hygiene practices and always wear masks. For example, we wash our hands with soap or alcohol-based hand sanitizer.</li>
                        <li className='pt-6'>We monitor everybody's health. Because we want to be prepared for anything.</li>
                        <li className='pt-6'>We make sure sick employees get the rest they require.</li>
                        <li className='pt-6'>Before and after work, we thoroughly disinfect our autos with a solution.</li>


                        <h2 className='font-semibold text-lg text-[#0F75BC] pt-6'>Pricing</h2>

                        <ul>
                            <li>Types of car</li>
                            <li>Mile per hour</li>
                            <li>Per day</li>
                            <li>Package system</li>
                            <li>What things are included and excluded in the package</li>
                            <li>Extra km and extra hour charge</li>
                            <li>Pick up points</li>
                            <li>Payment method</li>
                        </ul>

                        <h2 className='font-semibold text-lg text-[#0F75BC] pt-6'>Why Should You Rent a Car in Dhaka?</h2>
                        <p className='pt-4'>Sometimes all you need is a set of wheels, whether you're going on a vacation or to your next client appointment. Car rental services can be the most convenient mode of transportation. To see how much bargain automobile rentals are, read the following benefits!</p>

                        <h2 className='font-semibold text-lg text-[#0F75BC] pt-6'>Low Cost And Affordability</h2>
                        <p>You may avoid worrying about maintenance costs and depreciation losses by renting a car. It is best for you to merely hire an automobile if you don't actually need one every day and only use it occasionally. This will spare you from having to pay for servicing, loans, fuel costs, etc.</p>

                        <h2 className='font-semibold text-lg text-[#0F75BC] pt-6'>A Lot More Freedom!</h2>
                        <p>Having a rental car provides you more freedom to explore, especially when visiting locations with undiscovered gems like mountaintop views and magnificent waterfalls. If you take a bus or other kind of public transportation with strangers, your view of the sights and locations will be constrained. You will probably visit well-known, well-traveled destinations because there are fixed schedules to follow.</p>

                        <p className='pt-4'>You can accomplish it with your personal vehicle. However, you won't need to worry about money again. With a car rental agency, it will be much more affordable. It is therefore safe to conclude that driving a rental automobile makes you feel more magical and awestruck than other modes of transportation.</p>

                        <h2 className='font-semibold text-lg text-[#0F75BC] pt-6'>Meets Your Need</h2>
                        <p>When you rent a car, you can choose the vehicle that best suits your needs. You can depend on us whether you need a minibus or larger vehicle for a family vacation, a van for your business during the summer, or anything else.</p>

                        <p>We really hope that you found this material useful. For those in Dhaka, Hello Facility provides specialized automobile rental services. <Link to='/ContactUs'>Contact us</Link>to rent a dependable car right away.</p>

                        <h2 className='font-semibold text-lg text-[#0F75BC] pt-6'>Things to Keep in Mind</h2>
                        <p>As one of the best building management companies in Dhaka, our priority will always be providing the most satisfactory services. But you have to keep some things in mind to make it happen. Such as - </p>

                        <li>Please check the car if it is from Hello Facility. There should not be any confusion.</li>
                        <li>Any further services rendered by staff will incur fees in addition to the amount mentioned.</li>
                        <li>You must take care of your belongings.</li>
                        <li>There will be an extra charge if the customer is late.</li>
                        <li>Everyone traveling in the car has to maintain COVID-19 precautions.</li>
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


            <div className='lg:mx-20 md:mx-16 mx-5 mt-10 pb-5'>
                <h2 className='font-semibold text-lg text-[#0F75BC] pt-6'>Why Choose The Hello Facility for Rent-a-car in Dhaka?</h2>
                <p className='pt-4'>Hello Facility is a renowned facility service provider in Bangladesh. We ensure customer happiness by providing high-quality, eco-friendly services.</p>
                <p className='pt-4'>In Dhaka, car rentals are currently quite well known. We always dedicate ourselves to customer satisfaction in order to stand out from the competition. The cars that are offered in our facility are all well-maintained. Due to their training, our drivers are capable of handling any unpleasant situation. Therefore, you won't need to worry during your travels. We always put on masks and follow basic hygiene. We wash our hands with soap or alcohol-based hand sanitizer, for instance. We properly clean our cars with a treatment both before and after work.</p>
                <p className='pt-4'>The service staff at the hello facility is all qualified. Before joining our team, they must pass three layers of quality inspections.</p>
                <p className='pt-4'>It's crucial to feel confident in a service provider before allowing them access to your home for any service. For this reason, we ensure that our registered service providers have a solid track record. To ensure trust, we check their credentials, expertise, and other factors, as well as the histories of their clients.</p>
                <p className='pt-4'>We also offer cleaning services, building management services, pest controls, general supplies, gardening, etc.</p>
            </div>
            <Footer />
        </div>
    );
};

export default CarRental;