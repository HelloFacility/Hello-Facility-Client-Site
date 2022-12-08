import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../../Images/ColorLogo.png';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';
import { Logout, Settings } from '@mui/icons-material';
import { MdDashboard } from 'react-icons/md';



const ServiceNavbar = () => {
    const [user] = useAuthState(auth)
    console.log(user);
    const handleSignOut = () => {
        signOut(auth)
    }
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div className='flex justify-between items-center px-16 py-3 bg-slate-50 shadow-sm'>
            <div className='w-1/5'>
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <div className='flex items-center gap-5'>
                <Link className='font-bold' to='/'>All Service</Link>
            </div>
        </div>
    );
};

export default ServiceNavbar;