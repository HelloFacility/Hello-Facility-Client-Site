import React from "react";
import Xiaomi from '../../../../src/Images/Client/Xiaomi.png'
import Bpg from '../../../../src/Images/Client/BPG.png'
import DPHE from '../../../../src/Images/Client/DPHE.jpg'
import Haier from '../../../../src/Images/Client/Haier.png'
import Lantabur from '../../../../src/Images/Client/Lantabur.jpg'
import TSports from '../../../../src/Images/Client/T-Sports.png'


const Client = () => {
    return (
        <div className="container 2xl:mx-auto 2xl:container lg:py-16 lg:px-40 xl:px-20 md:pt-12 md:px-6 py-9 px-4">
            <div className="flex flex-col items-start justify-center">
                <h1 className="text-3xl font-bold xl:block leading-tight text-sky-900">
                    Our Valuable Client
                </h1>
            </div>
            <div className="flex flex-wrap gap-5 mt-10 xl:justify-between lg:justify-around md:justify-center justify-around xl:w-full lg:w-11/12 w-11/12 mx-auto xl:mx-0 lg:mx-auto">
                <button className="bg-white shadow mb-2 xl:mb-0 lg:mb-0 rounded flex items-center justify-center h-24 w-40 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                    <img className="w-[150px]" src={Xiaomi} alt />
                </button>
                <button className="bg-white shadow mb-2 xl:mb-0 rounded flex items-center justify-center h-24 w-40 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                    <img className="w-[120px]" src={Bpg} alt />
                </button>
                <button className="bg-white shadow mb-2 xl:mb-0 rounded flex items-center justify-center h-24 w-40 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                    <img className="w-[65px]" src={DPHE} alt />
                </button>
                <button className="bg-white shadow mb-2 xl:mb-0 rounded flex items-center justify-center h-24 w-40 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                    <img className="w-[250px]" src={Haier} alt />
                </button>
                <button className="bg-white shadow mb-2 xl:mb-0 rounded flex items-center justify-center h-24 w-40 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                    <img className="w-[70px]" src={Lantabur} alt />
                </button>
                <button className="bg-white shadow mb-2 xl:mb-0 rounded flex items-center justify-center h-24 w-40 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                    <img className="w-[150px]" src={TSports} alt />
                </button>
            </div>
        </div>
    );
};

export default Client;