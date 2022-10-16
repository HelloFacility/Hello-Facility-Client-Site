import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../../Images/ColorLogo.png';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';
import { Logout, Settings } from '@mui/icons-material';


const AdminNavbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const [user] = useAuthState(auth)
    // console.log(user);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div className='flex justify-between items-center px-16 py-3 shadow-sm'>
            <div className='w-1/5'>
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <div className='flex gap-5'>
                {
                    user ?
                        <div>
                            <React.Fragment>

                                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                    <p>{user?.displayName}</p>
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
                                        <Avatar src={user?.photoURL} /> <Link to='/dashboard'>My Profile</Link>
                                    </MenuItem>
                                    <Divider />
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

export default AdminNavbar;