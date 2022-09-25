import React from 'react';
import ServiceNavbar from '../../../Share/ServiceNavbar/ServiceNavbar';
import TopBanner from '../../../../Images/SubmenuService/SubMenuTopImg.jpg'
import badge from '../../../../Images/SubmenuService/badge.png'
import banner from '../../../../Images/SubmenuService/SubMenuTopImg.jpg'
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { Box, Button, FormControl, InputLabel, MenuItem, Rating, Select, Stack, Step, StepContent, StepLabel, Stepper, TextField, Typography } from '@mui/material';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import Footer from '../../../Share/Footer/Footer';

const AntControl = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const steps = [
        {
            label: 'Select campaign settings',
            description: `For each ad campaign that you create, you can control how much
                    you're willing to spend on clicks and conversions, which networks
                    and geographical locations you want your ads to show on, and more.`,
        },
        {
            label: 'Create an ad group',
            description:
                'An ad group contains one or more ads which target a shared set of keywords.',
        },
        {
            label: 'Create an ad',
            description: `Try out different ad text to see what brings in the most customers,
                    and learn how to enhance your ads using features like ad extensions.
                    If you run into any problems with your ads, find out how to tell if
                    they're running and how to resolve approval issues.`,
        },
    ];
    return (
        <div>
            <ServiceNavbar />
            <div className='h-96 mt-1' style={{
                backgroundImage: `url(${TopBanner})`
            }}>
                <div className='lg:flex md:justify-between items-center'>
                    <div className='flex gap-4 items-baseline'>
                        <div>
                            <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold mt-16 lg:ml-28 md:ml-16 ml-5 text-white'>Plumbing & Sanitary Services</h1>
                        </div>
                        <div>
                            <img className='lg:w-36 md:w-36 w-48  pr-5' src={badge} alt="" />
                        </div>
                    </div>
                </div>
                <div className='lg:ml-28 md:ml-16 ml-5'>
                    <div className='pt-10'>
                        <p className='text-xl text-white'>Starts from <span className='text-2xl font-bold'>৳299</span></p>
                    </div>
                    <div className='flex font-semibold text-white items-center gap-2 pt-8 '>
                        <div className='text-xl'><AiFillSafetyCertificate /></div>
                        <div>On Time Work Completion</div>
                    </div>
                    <div className='flex font-semibold text-white items-center gap-2 pt-4'>
                        <div className='text-xl'><AiFillSafetyCertificate /></div>
                        <div>On Time Work Completion</div>
                    </div>
                </div>
            </div>

            <div className='lg:flex justify-between lg:ml-20 mt-10 md:ml-10 ml-5 md:mx-16 mx-5'>
                <div className='lg:w-3/4 md:w-full lg:shadow-lg lg:mr-10 lg:p-5 md:shadow-lg md:mr-16 md:p-5'>
                    <div>
                        <h1 className='text-2xl font-bold pb-4'>Overview</h1>
                        <h4 className='font-bold text-lg text-sky-900'>What's included?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quas illo consequatur ducimus autem, molestias quae eos ea facere perspiciatis officia odit neque quasi quam nesciunt quaerat pariatur sequi laudantium culpa architecto esse nemo, sunt explicabo. Ducimus vel repellendus sint, saepe nesciunt veniam omnis commodi repudiandae earum nam, illo laudantium!</p>
                    </div>
                    <br />
                    <div>
                        <h4 className='font-bold text-lg text-sky-900'>What's excluded?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quas illo consequatur ducimus autem, molestias quae eos ea facere perspiciatis officia odit neque quasi quam nesciunt quaerat pariatur sequi laudantium culpa architecto esse nemo, sunt explicabo. Ducimus vel repellendus sint, saepe nesciunt veniam omnis commodi repudiandae earum nam, illo laudantium!</p>
                    </div>
                </div>
                <div className=' lg:w-1/4 md:w-1/4  lg:shadow-lg lg:mr-16 lg:p-5 mt-3 md:whitespace-nowrap mx-auto'>
                    <h1 className='text-xl font-bold text-sky-900 text-center'>Request For Quote</h1>
                    <h1 className='text-base font-bold mb-4 text-yellow-500 text-center'>This Service Only for Office</h1>
                    <div className='lg:ml-0 md:ml-0 ml-20'>
                        <form>
                            <TextField
                                required
                                id="outlined-required"
                                label="Company Name"
                                type="text"
                                sx={{ width: 250 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <br /> <br />
                            <TextField
                                required
                                id="outlined-required"
                                label="Total Area"
                                type="email"
                                sx={{ width: 250 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <br /> <br />
                            <Box sx={{ width: 250 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Service</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Service"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>One Time</MenuItem>
                                        <MenuItem value={20}>Monthly</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <br /> <br />
                            <TextField
                                id="date"
                                label="Request Service Date"
                                type="date"
                                defaultValue="2017-05-24"
                                sx={{ width: 250 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            /> <br /> <br />
                            <div className='lg:flex justify-center ml-20 lg:ml-0 '>
                                <Button variant="outlined" size="large">Send</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Preparations against COVID-19 */}

            <div className='lg:ml-20 mt-10 md:ml-10 ml-5'>
                <div className='flex items-end gap-5 mb-5'>
                    <h1 className='font-bold text-2xl'>Preparations against COVID-19</h1>
                    <img className='w-24 mt-5' src={badge} alt="" />
                </div>
                <small className='italic text-base mt-4'>We are well-equipped and well-prepared to protect your health and hygiene while serve you. Our preparations include-</small>
                <Box sx={{ maxWidth: 400 }}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={step.label}>
                                <StepLabel
                                    optional={
                                        index === 2 ? (
                                            <Typography variant="caption">Last step</Typography>
                                        ) : null
                                    }
                                >
                                    {step.label}
                                </StepLabel>
                                <StepContent>
                                    <Typography>{step.description}</Typography>
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            <Button
                                                variant="contained"
                                                onClick={handleNext}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                            </Button>
                                            <Button
                                                disabled={index === 0}
                                                onClick={handleBack}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                Back
                                            </Button>
                                        </div>
                                    </Box>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </div>

            {/* Service Details */}
            <div className='lg:ml-20 mt-10 md:ml-10 ml-5'>
                <h1 className='font-bold text-2xl'>Service Details</h1>
                <p className='pr-20 font-medium'>All your Plumbing and Sanitary-related problems will be taken care of by Sheba.xyz marketplace. We have trusted professionals who are experts in fitting, installations, and drainage related issues.</p>
            </div>
            <div className='lg:ml-20 mt-10 md:ml-10 ml-5'>
                <h1 className='font-bold text-2xl'>Service Details</h1>
                <p className='pr-20 font-medium'>All your Plumbing and Sanitary-related problems will be taken care of by Sheba.xyz marketplace. We have trusted professionals who are experts in fitting, installations, and drainage related issues.</p>
            </div>
            <div className='lg:ml-20 mt-10 md:ml-10 ml-5'>
                <h1 className='font-bold text-2xl'>Service Details</h1>
                <p className='pr-20 font-medium'>All your Plumbing and Sanitary-related problems will be taken care of by Sheba.xyz marketplace. We have trusted professionals who are experts in fitting, installations, and drainage related issues.</p>
            </div>

            {/* Review */}
            <div className='lg:mx-20 md:mx-16 mx-5 shadow-lg mt-5 p-5'>
                <Stack spacing={1}>
                    <p className='font-bold'>Abdullah Al Habib</p>
                    <Rating name="size-medium" defaultValue={2} />
                    <small className='italic text-sm font-semibold'>The person was very expert and did his job very well</small>
                    <small>Date: 19 September, 2022</small>
                </Stack>
            </div>

            {/* How To Order */}
            <div className='lg:flex  items-center lg:mx-20 md:mx-16 mx-5 shadow-lg mt-5 p-5'>
                <div className='lg:w-1/2 md:w-full '>
                    <img src={banner} alt="" />
                </div>
                <div>
                    <div className='lg:ml-20 mt-10 md:ml-10 ml-5'>
                        <h1 className='text-3xl font-bold'>How to order</h1>
                        <div className='w-0 '>
                            <Timeline>
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot color="success" />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent className='whitespace-nowrap'>
                                        <h2 className='font-bold'>Go to order Request</h2>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot color="success" />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent className='whitespace-nowrap'>
                                        <h2 className='font-bold'>Book your schedule</h2>
                                        <p>Select your convenient time slot.</p>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot color="success" />
                                    </TimelineSeparator>
                                    <TimelineContent className='whitespace-nowrap'>
                                        <h2 className='font-bold'>Place order</h2>
                                        <p>Confirm your order by clicking
                                            <br />  ‘Place order’.</p>
                                    </TimelineContent>
                                </TimelineItem>
                            </Timeline>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AntControl;