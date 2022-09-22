import React from "react";

const Client = () => {
    return (
        <div className="container 2xl:mx-auto 2xl:container lg:py-16 lg:px-40 xl:px-20 md:pt-12 md:px-6 py-9 px-4">
            <div className="flex flex-col items-start justify-center">
                <h1 className="text-3xl font-bold xl:block leading-tight text-sky-900">
                    Our Valuable Client
                </h1>
                <p className="text-base leading-6 text-left text-gray-600 sm:w-96 md:w-11/12 lg:w-11/12 mt-4">You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.</p>
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