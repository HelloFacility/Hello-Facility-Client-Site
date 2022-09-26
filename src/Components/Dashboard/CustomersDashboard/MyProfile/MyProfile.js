import { Avatar } from '@mui/material';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';  

const MyProfile = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='mx-5'>
            <div className='mt-5 flex items-center gap-3'>
                <h2 className='font-bold text-2xl'>My Profile</h2>
                <Avatar sx={{ width: 40, height: 40 }}><img src={user?.photoURL} alt="" /></Avatar> 
            </div>
            <div className='lg:grid md:grid lg:grid-cols-3 md:grid-cols-2  gap-4 mt-5'>
                <div>
                    <h4 className='lg:text-sm font-bold'>Full Name</h4>
                    <h4>{user?.displayName}</h4>
                </div>
                <div className=''>
                    <h4 className='lg:text-sm font-bold'>Email</h4>
                    <h4>{user?.email}</h4>
                </div>
                <div>
                    <h4 className='lg:text-sm font-bold'>Phone</h4>
                    <h4>{user?.phoneNumber}</h4>
                </div>
                <div className='lg:mt-5'>
                    <h4 className='lg:text-sm font-bold'>City</h4>
                    <h4>{user?.city}</h4>
                </div>
            </div>
            <div className='mt-24'>
                <Link className='bg-sky-900 py-3 px-20 text-white font-semibold' to='/dashboard/editProfile'>EDIT PROFILE</Link>
            </div>
        </div>
    );
};

export default MyProfile;