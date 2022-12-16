import React from 'react';
import Footer from '../Share/Footer/Footer';
import Navbar from '../Share/Navbar/Navbar';
import AboutUs from '../../../src/Images/About.jpg'

const About = () => {
    return (
        <div>
            <Navbar />
            <div className='pt-10 text-justify'>
                <div className='lg:flex lg:mx-28 md:mx-20 mx-10 gap-16'>
                    <div className='lg:w-1/2'>
                        <img className='w-full' src={AboutUs} alt="" />
                    </div>
                    <div className='lg:w-1/2'>
                        <p><span className='text-2xl font-bold'>H</span>ello Facility promise to deliver best-in-class, customized facility services focusing customer satisfaction, quality and integrity. We are offering Cleaning service, Pest Control, Car Rental, General Supplies, Building Management Solution, Gardening and many more.</p>
                        <p className='pt-6'>Our basic principle is the same for every project. We formulate a well-defined SOW that follows an orchestrated project plan and execute beyond expectations. We strive as a company to provide quality and value-added complete facility solutions. We measure our success by company growth and the retention of customers.</p>
                    </div>
                </div>
                <div className='pt-10 lg:mx-28 md:mx-20 mx-10'>
                    <h2 className='lg:text-3xl md:text-2xl text-xl font-bold text-center text-[#0F75BC]'>Mission</h2> <br />
                    <p>To enhance the reputation of Hello Facility as a leader in Facility service and every aspect of our business by achieving sustainable, quality growth and creating winning culture.</p> <br />
                    <p>We guarantee customer satisfaction by providing quality & eco-friendly services in a safe and timely manner. We work with our clients in a collaborative consulting process to develop and implement a customized roadmap of service delivery. We follow best practices to make continuous improvements involving all stake holders.</p>
                </div>
                <div className='pt-10 lg:mx-28 md:mx-20 mx-10'>
                    <h2 className='lg:text-3xl md:text-2xl text-xl font-bold text-center text-[#0F75BC]'>Vision</h2> <br />
                    <p>To become Bangladesh’s # 1 Facility service company by providing customer excellence & satisfaction of highest quality. We believe that our first responsibility is to our clients and others who use our services, and to our employees, who contribute with their effort and commitment to delivering our services in a safe and timely manner. Being an organization with social responsibility, we are also committed to ensure diversity & gender equality in our working environment.</p>
                </div>
                <div className='pt-10 lg:mx-28 md:mx-20 mx-10 pb-10'>
                    <h2 className='lg:text-3xl md:text-2xl text-xl font-bold text-center text-[#0F75BC]'>Values</h2> <br />
                    <p>Saftey, Integrity, Accountability, Quality Collaboration, Customer Excellence and Dynamic Culture.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;