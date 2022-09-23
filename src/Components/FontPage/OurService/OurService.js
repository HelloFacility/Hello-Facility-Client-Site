import React from 'react';
import { Link } from 'react-router-dom';
import car from '../../../Images/SubmenuService/SubMenuTopImg.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
const OurService = () => {
    return (
        <div>
            <div className='lg:flex md:flex items-center justify-between lg:mx-20 md:mx-16 mx-5 mt-10'>
                <h1 className='text-3xl font-bold xl:block leading-tight text-sky-900'>Recommended For You</h1>
                <h2 className='font-bold'>All Service</h2>
            </div>
            <div>
                <div className='lg:flex md:flex gap-5 lg:mx-20 md:mx-16 mx-5 my-10'>
                    <div>
                        <div>
                            <Link to='/sdf'>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="130"
                                            image={car}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <h2 className='font-bold text-xl text-center'>Car Rental</h2>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Link to='/sdf'>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="130"
                                            image={car}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <h2 className='font-bold text-xl text-center'>Car Rental</h2>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Link to='/sdf'>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="130"
                                            image={car}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <h2 className='font-bold text-xl text-center'>Car Rental</h2>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Link to='/sdf'>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="130"
                                            image={car}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <h2 className='font-bold text-xl text-center'>Car Rental</h2>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;