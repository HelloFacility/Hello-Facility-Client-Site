import React from 'react';
import BlogPage from '../FontPage/BlogPage/BlogPage';
import Carousel from '../FontPage/Carousel/Carousel';
import CleaningService from '../FontPage/CleaningService/CleaningService';
import Client from '../FontPage/Client/Client';
import Footer from '../FontPage/Footer/Footer';
import Navbar from '../FontPage/Navbar/Navbar';
import Post from '../FontPage/Post/Post';
import RentalService from '../FontPage/RentalService/RentalService';
import WhyChoose from '../FontPage/WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Carousel/>
            <RentalService/>
            <CleaningService/>
            <BlogPage/>
            <WhyChoose/>
            <Client/>
            <Post/>
            <Footer/>
        </div>
    );
};

export default Home;