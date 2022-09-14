import React from 'react';
import BlogPage from '../FontPage/BlogPage/BlogPage';
import Carousel from '../FontPage/Carousel/Carousel';
import Client from '../FontPage/Client/Client';
import Navbar from '../Share/Navbar/Navbar';

import Post from '../FontPage/Post/Post';
import WhyChoose from '../FontPage/WhyChoose/WhyChoose';
import RentalCleaningService from '../Service/RentalCleaningService';
import Footer from '../Share/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <RentalCleaningService />
            <BlogPage />
            <WhyChoose />
            <Client />
            <Post />
            <Footer />
        </div>
    );
};

export default Home;