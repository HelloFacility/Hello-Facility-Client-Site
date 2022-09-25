import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { MdOutlineCloseFullscreen } from 'react-icons/md';
import AdminNavbar from '../Share/AdminNavbar/AdminNavbar';

const AdminDashboard = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className="min-h-screen bg-custom-gray">
            <span
                className="fixed block lg:hidden bottom-6 bg-custom-light-gray p-3 hover:bg-custom-green hover:text-custom-light-gray duration-300 shadow-sm rounded-full right-3 hover:shadow-lg"
                onClick={() => setOpen(!open)}
            >
                <div className='text-blue-400'><MdOutlineCloseFullscreen/></div>
            </span>
            <AdminNavbar/>
            <section className="flex w-full mt-1">
                <div
                    className={`bg-[#EBF0F4] lg:w-2/12 md:w-3/12 duration-300 min-h-screen shadow-md justify-center whitespace-nowrap 
            ease-in-out ${open ? "w-9/12" : "hidden md:flex"}`}
                >
                    <div className="md:mx-2 lg:mx-4">
                        <NavLink to="myProfile">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "flex bg-white  my-4 px-6 p-2 duration-300 transition cursor-pointer rounded bg-custom-cyan-100 border-l-4 border-blue-400"
                                            : "hover:bg-custom-cyan-100 bg-custom-gray flex  my-4 px-6 p-2"
                                    }
                                >
                                    <span>My Profile</span>
                                </span>
                            )}
                        </NavLink>
                        <NavLink to="addressBook">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "flex bg-white  my-4 px-6 p-2 duration-300 transition cursor-pointer rounded bg-custom-cyan-100 border-l-4 border-blue-400"
                                            : "hover:bg-custom-cyan-100 bg-custom-gray flex  my-4 px-6 p-2"
                                    }
                                >
                                    <span>Address Book</span>
                                </span>
                            )}
                        </NavLink>
                        <NavLink to="myReview">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "flex bg-white  my-4 px-6 p-2 duration-300 transition cursor-pointer rounded bg-custom-cyan-100 border-l-4 border-blue-400"
                                            : "hover:bg-custom-cyan-100 bg-custom-gray flex  my-4 px-6 p-2"
                                    }
                                >
                                    <span>My Review</span>
                                </span>
                            )}
                        </NavLink>
                        <NavLink to="coupon">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "flex bg-white  my-4 px-6 p-2 duration-300 transition cursor-pointer rounded bg-custom-cyan-100 border-l-4 border-blue-400"
                                            : "hover:bg-custom-cyan-100 bg-custom-gray flex  my-4 px-6 p-2"
                                    }
                                >
                                    <span>Coupon</span>
                                </span>
                            )}
                        </NavLink>
                        <NavLink to="requestService">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "flex bg-white  my-4 px-6 p-2 duration-300 transition cursor-pointer rounded bg-custom-cyan-100 border-l-4 border-blue-400"
                                            : "hover:bg-custom-cyan-100 bg-custom-gray flex  my-4 px-6 p-2"
                                    }
                                >
                                    <span>Request Service</span>
                                </span>
                            )}
                        </NavLink>
                        <NavLink to="myCancellations">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "flex bg-white  my-4 px-6 p-2 duration-300 transition cursor-pointer rounded bg-custom-cyan-100 border-l-4 border-blue-400"
                                            : "hover:bg-custom-cyan-100 bg-custom-gray flex  my-4 px-6 p-2"
                                    }
                                >
                                    <span>My Cancellations</span>
                                </span>
                            )}
                        </NavLink>
                        
                    </div>
                </div>
                <div className="px-3 overflow-auto w-full">
                    <Outlet />
                </div>
            </section>
        </div>
        </div>
    );
};

export default AdminDashboard;