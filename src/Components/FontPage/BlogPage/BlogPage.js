import React from 'react';

const BlogPage = () => {
    return (
        <div>
            <div className="2xl:mx-auto 2xl:container lg:py-16 lg:px-40 xl:px-20 md:pt-12 md:px-6 py-9 px-4">
                <div className="flex flex-col items-start justify-center">
                <h1 className="text-3xl font-bold xl:block leading-tight text-sky-900">
                    Latest Blog
                    </h1>
                    <p className="text-base leading-6 text-left text-gray-600 sm:w-96 md:w-9/12 lg:w-11/12 mt-4">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-8 md:gap-6 gap-4 mt-6 items-center">
                    <div className="mt-9 bg-sky-900 rounded-lg">
                        <div className="relative">
                            <img className='rounded-lg' src="https://i.ibb.co/8mP5tmS/img-2.png" alt="flower pot" />
                        </div>
                        <div className='pl-5 py-5'>
                            <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-white">Expert advice on wood works</h1>
                            <p className="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-white">by rankingbooth | May 17, 2022 | Seo</p>
                            <p className="text-sm leading-normal mt-4 sm:pr-20 md:pr-10 text-green-400">Read More</p>
                        </div>
                    </div>
                    <div className="mt-9 bg-sky-900 rounded-lg">
                        <div className="relative">
                            <img className='rounded-lg' src="https://i.ibb.co/8mP5tmS/img-2.png" alt="flower pot" />
                        </div>
                        <div className='pl-5 py-5'>
                            <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-white">Expert advice on wood works</h1>
                            <p className="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-white">by rankingbooth | May 17, 2022 | Seo</p>
                            <p className="text-sm leading-normal mt-4 sm:pr-20 md:pr-10 text-green-400">Read More</p>
                        </div>
                    </div>
                    <div className="mt-9 bg-sky-900 rounded-lg">
                        <div className="relative">
                            <img className='rounded-lg' src="https://i.ibb.co/8mP5tmS/img-2.png" alt="flower pot" />
                        </div>
                        <div className='pl-5 py-5'>
                            <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-white">Expert advice on wood works</h1>
                            <p className="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-white">by rankingbooth | May 17, 2022 | Seo</p>
                            <p className="text-sm leading-normal mt-4 sm:pr-20 md:pr-10 text-green-400">Read More</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;