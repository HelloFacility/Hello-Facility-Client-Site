import React from "react";

const Client = () => {
    return (
        <div className="container px-20 pt-16">
            <div className="xl:w-full w-11/12 mx-auto">
            <h1 className="text-3xl font-bold xl:block hidden leading-tight text-sky-900">
            Our Valuable Client
                    </h1>
                <p className="text-xl xl:text-left md:text-left lg:text-left md:w-full text-center xl:w-2/3 lg:w-2/3 w-11/12 mx-auto xl:mx-0 lg:mx-0 text-gray-600">You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.</p>
            </div>
            <div className="flex flex-wrap gap-5 mt-10 xl:justify-between lg:justify-around md:justify-center justify-around xl:w-full lg:w-11/12 w-11/12 mx-auto xl:mx-0 lg:mx-auto">
                <button className="bg-white shadow mb-2 xl:mb-0 lg:mb-0 rounded flex items-center justify-center h-24 w-40 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                    <img src="https://cdn.tuk.dev/assets/adidas-gray.png" alt />
                </button>
                <button className="bg-white shadow mb-2 xl:mb-0 rounded flex items-center justify-center h-24 w-40 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                    <img src="https://cdn.tuk.dev/assets/mini-gray.png" alt />
                </button>
                <button className="bg-white shadow mb-2 xl:mb-0 rounded flex items-center justify-center h-24 w-40 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                    <img src="https://cdn.tuk.dev/assets/channel-gray.png" alt />
                </button>
                <button className="bg-white shadow mb-2 xl:mb-0 rounded flex items-center justify-center h-24 w-40 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                    <img src="https://cdn.tuk.dev/assets/gs1-gray.png" alt />
                </button>
                <button className="bg-white shadow mb-2 xl:mb-0 rounded flex items-center justify-center h-24 w-40 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                    <img src="https://cdn.tuk.dev/assets/Twitter.png" alt />
                </button>
                <button className="bg-white shadow mb-2 xl:mb-0 rounded flex items-center justify-center h-24 w-40 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                    <img src="https://cdn.tuk.dev/assets/toyota-gray.png" alt />
                </button>
            </div>
        </div>
    );
};

export default Client;