import React from 'react';
import BlogPage from '../FontPage/BlogPage/BlogPage';
import Carousel from '../FontPage/Carousel/Carousel';
import Client from '../FontPage/Client/Client';
import Navbar from '../Share/Navbar/Navbar';
import WhyChoose from '../FontPage/WhyChoose/WhyChoose';
import RentalCleaningService from '../Service/RentalCleaningService';
import Footer from '../Share/Footer/Footer';
import OurService from '../FontPage/OurService/OurService';

const Home = () => {
    return (
        <div className='text-justify'>
            <Navbar />
            <Carousel />
            <RentalCleaningService />
            <OurService/>
            <WhyChoose />
            <Client />
            <BlogPage />
            <Footer />
        </div>
    );
};

export default Home;