import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../../Images/ColorLogo.png';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { Logout, Settings } from '@mui/icons-material';
import { Box } from '@mui/system';
import { Avatar, Button, Divider, IconButton, ListItemIcon, Menu, MenuItem, Popover, Tooltip, Typography } from '@mui/material';
import { AiOutlineMenu } from 'react-icons/ai';
import './NavbarStyle.css'

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const [user] = useAuthState(auth)
    console.log(user);
    const handleSignOut = () => {
        signOut(auth)
    }

    // 
    const [anchorE2, setAnchorE2] = React.useState(null);

    const handleClickMenu = (event) => {
        setAnchorE2(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorE2(null);
    };

    const openMenu = Boolean(anchorE2);
    const id = open ? 'simple-popover' : undefined;
    return (
        <div className='flex items-center justify-between mx-10'>
            <div className='flex items-center gap-10'>
                <div className='flex items-center gap-3'>
                    <div className='lg:hidden text-2xl'>
                        <button aria-describedby={id} variant="contained" onClick={handleClickMenu}>
                            <AiOutlineMenu />
                        </button>
                        <Popover
                            id={id}
                            open={openMenu}
                            anchorEl={anchorE2}
                            onClose={handleCloseMenu}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            <div className='px-10 py-3 w-[500px]'>
                                <div className='flex gap-5 font-semibold'>
                                    <Link to='/'>Home</Link>
                                    <Link to='/'>Home</Link>
                                    <Link to='/'>Home</Link>
                                </div>
                                <p className='text-xl font-bold py-3 text-blue-800'>Our Services</p>
                                <ul className='md:flex justify-between'>
                                    <div className='md:w-1/2'>
                                        <li className='flex flex-col'>
                                            <h2 className='font-bold pl-2'>Cleaning Service</h2>
                                            <Link to='/commercialCleaningService'>Commercial Cleaning</Link>
                                            <Link to='/carpetCleaning'>Carpet Cleaning</Link>
                                            <Link to='/sofaCleaning'>Sofa Cleaning</Link>
                                            <Link to='/kitchenCleaning'>Kitchen Cleaning</Link>
                                            <Link to='/bathroomCleaning'>Bathroom Cleaning</Link>
                                        </li>
                                    </div>

                                    <div className='md:w-1/2'>
                                        <li className='flex flex-col'>
                                            <h2 className='font-bold pl-2'>Pest Control</h2>
                                            <Link to='/cockroachControl'>Cockroach Control</Link>
                                            <Link to='/rodentControl'>Rodent Control</Link>
                                            <Link to='/termiteControl'>Termite Control</Link>
                                            <Link to='/antControl'>Ant Control</Link>
                                            <Link to='/fumigationService'>Fumigation Service</Link>
                                            <Link to='/woodBorer'>Wood Borer</Link>
                                        </li>
                                    </div>
                                </ul>
                                <ul className='md:flex justify-between gap-5 py-3'>
                                    <div className='md:w-1/2'>
                                        <li className='flex flex-col'>
                                            <h2 className='font-bold pl-2'>Car Rental</h2>
                                            <Link to='/monthlyCarRental'>Monthly Car Rental</Link>
                                            <Link to='/onDemandService'>On Demand Service</Link>
                                            <Link to='/weedingCarRental'>Weeding Car Rental</Link>
                                        </li>
                                    </div>
                                    <div className='md:w-1/2'>
                                        <li className='flex flex-col'>
                                            <h2 className='font-bold pl-2'>Others Service</h2>
                                            <Link to='/buildingManagement'>Building Management</Link>
                                            <Link to='/stationarySupply'>Stationary Supply</Link>
                                            <Link to='/gardening'>Gardening</Link>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </Popover>
                    </div>
                    {/* <h2 ><AiOutlineMenu/></h2> */}
                    <img className='lg:w-[230px] w-[180px]' src={logo} alt="" />
                </div>
                <div className='lg:flex items-center hidden'>
                    <div>
                        <Link to='/'>Home</Link>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Service</button>
                        <div className="dropdown-content">
                            <div className='whitespace-nowrap'>
                                <ul className='flex px-10 gap-5 py-3'>
                                    <div>
                                        <li>
                                            <h2 className='font-bold pl-2'>Cleaning Service</h2>
                                            <Link to='/commercialCleaningService'>Commercial Cleaning Service</Link>
                                            <Link to='/carpetCleaning'>Carpet Cleaning</Link>
                                            <Link to='/sofaCleaning'>Sofa Cleaning</Link>
                                            <Link to='/kitchenCleaning'>Kitchen Cleaning</Link>
                                            <Link to='/bathroomCleaning'>Bathroom Cleaning</Link>
                                        </li>
                                    </div>

                                    <div>
                                        <li>
                                            <h2 className='font-bold pl-2'>Pest Control</h2>
                                            <Link to='/cockroachControl'>Cockroach Control</Link>
                                            <Link to='/rodentControl'>Rodent Control</Link>
                                            <Link to='/termiteControl'>Termite Control</Link>
                                            <Link to='/antControl'>Ant Control</Link>
                                            <Link to='/fumigationService'>Fumigation Service</Link>
                                            <Link to='/woodBorer'>Wood Borer</Link>
                                        </li>
                                    </div>

                                    <div>
                                        <li>
                                            <h2 className='font-bold pl-2'>Car Rental</h2>
                                            <Link to='/monthlyCarRental'>Monthly Car Rental</Link>
                                            <Link to='/onDemandService'>On Demand Service</Link>
                                            <Link to='/weedingCarRental'>Weeding Car Rental</Link>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <Link className='font-semibold' to='/buildingManagement'>Building Management Solution</Link>
                                            <Link className='font-semibold' to='/stationarySupply'>Stationary Supply</Link>
                                            <Link className='font-semibold' to='/gardening'>Gardening</Link>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <Link to='/'>Home</Link>
                        <Link to='/'>Home</Link>
                        <Link to='/'>Home</Link>
                    </div>
                </div>
            </div>
            <div>
                {
                    user ?
                        <div>
                            <React.Fragment>

                                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                    <p className='hidden lg:flex md:flex'>{user?.displayName}</p>
                                    <Tooltip title="Account settings">
                                        <IconButton
                                            onClick={handleClick}
                                            size="small"
                                            sx={{ ml: 2 }}
                                            aria-controls={open ? 'account-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                        >
                                            <Avatar sx={{ width: 32, height: 32 }}><img src={user?.photoURL} alt="" /></Avatar>
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={{
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&:before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem>
                                        <Avatar src={user?.photoURL} /> My Profile
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem>
                                        <ListItemIcon>
                                            <Settings fontSize="small" />
                                        </ListItemIcon>
                                        My Account
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        <Link to='/' onClick={handleSignOut}>Sign Out</Link>
                                    </MenuItem>
                                </Menu>
                            </React.Fragment>
                        </div>
                        :
                        <Link className='font-bold' to='/signIn'><span>Login</span></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;