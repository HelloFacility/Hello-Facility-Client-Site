import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { MdOutlineCloseFullscreen } from 'react-icons/md';

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
            {/* <FinanceNavbar /> */}
            <section className="flex w-full">
                <div
                    className={`bg-[#FFFFFF] md:w-2/12 duration-300 min-h-screen shadow-md justify-center 
            ease-in-out ${open ? "w-9/12" : "hidden md:flex"}`}
                >
                    <div className="md:mx-2 lg:mx-4">
                        <NavLink to="manageProfile">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "flex  my-4 px-6 p-2 duration-300 transition cursor-pointer rounded bg-custom-cyan-100 border-l-4 border-blue-400"
                                            : "hover:bg-custom-cyan-100 bg-custom-gray flex  my-4 px-6 p-2"
                                    }
                                >
                                    <span>Manage Profile</span>
                                </span>
                            )}
                        </NavLink>
                        <NavLink to="addBlogs">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "flex  my-4 px-6 p-2 duration-300 transition cursor-pointer rounded bg-custom-cyan-100 border-l-4 border-blue-400"
                                            : "hover:bg-custom-cyan-100 bg-custom-gray flex  my-4 px-6 p-2"
                                    }
                                >
                                    <span>Add Blog</span>
                                </span>
                            )}
                        </NavLink>
                        <NavLink to="addPost">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "flex  my-4 px-6 p-2 duration-300 transition cursor-pointer rounded bg-custom-cyan-100 border-l-4 border-blue-400"
                                            : "hover:bg-custom-cyan-100 bg-custom-gray flex  my-4 px-6 p-2"
                                    }
                                >
                                    <span>Add Post</span>
                                </span>
                            )}
                        </NavLink>
                        <NavLink to="manageUser">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "flex  my-4 px-6 p-2 duration-300 transition cursor-pointer rounded bg-custom-cyan-100 border-l-4 border-blue-400"
                                            : "hover:bg-custom-cyan-100 bg-custom-gray flex  my-4 px-6 p-2"
                                    }
                                >
                                    <span>Manage User</span>
                                </span>
                            )}
                        </NavLink>
                        <NavLink to="myOrder">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "flex  my-4 px-6 p-2 duration-300 transition cursor-pointer rounded bg-custom-cyan-100 border-l-4 border-blue-400"
                                            : "hover:bg-custom-cyan-100 bg-custom-gray flex  my-4 px-6 p-2"
                                    }
                                >
                                    <span>My Order</span>
                                </span>
                            )}
                        </NavLink>
                        <NavLink to="myReview">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "flex  my-4 px-6 p-2 duration-300 transition cursor-pointer rounded bg-custom-cyan-100 border-l-4 border-blue-400"
                                            : "hover:bg-custom-cyan-100 bg-custom-gray flex  my-4 px-6 p-2"
                                    }
                                >
                                    <span>My Review</span>
                                </span>
                            )}
                        </NavLink>
                        <NavLink to="viewProfile">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "flex  my-4 px-6 p-2 duration-300 transition cursor-pointer rounded bg-custom-cyan-100 border-l-4 border-blue-400"
                                            : "hover:bg-custom-cyan-100 bg-custom-gray flex  my-4 px-6 p-2"
                                    }
                                >
                                    <span>View Profile</span>
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