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
            <div className='items-center justify-between lg:mx-20 md:mx-16 mx-5 mt-10'>
                <h1 className='text-3xl font-bold xl:block leading-tight text-[#0F75BC]'>Recommended For You</h1>
            </div>
            <div>
                <div className='lg:grid md:grid lg:grid-cols-4 md:grid-cols-2 gap-5 lg:mx-20 md:mx-16 mx-5 my-5'>
                    <div>
                        <div>
                            <Link to='/pest-control'>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="130"
                                            image={car}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <h2 className='font-bold lg:text-xl text-lg text-center lg:pb-7'>Pest Control</h2>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Link to='/commercialCleaningService'>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="130"
                                            image={car}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <h2 className='font-bold lg:text-xl text-lg text-center'>Commercial Cleaning Service</h2>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Link to='/kitchen-cleaning'>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="130"
                                            image={car}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <h2 className='font-bold lg:text-xl text-lg text-center lg:pb-7'>Kitchen Cleaning</h2>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Link to='/buildingManagement'>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="130"
                                            image={car}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <h2 className='font-bold lg:text-xl text-lg text-center'>Building Management System</h2>
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