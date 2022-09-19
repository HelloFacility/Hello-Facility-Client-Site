import React from 'react';
import ServiceNavbar from '../../../Share/ServiceNavbar/ServiceNavbar';
import TopBanner from '../../../../Images/SubmenuService/SubMenuTop.jpg'
import badge from '../../../../Images/SubmenuService/badge.png'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { AiOutlineNumber } from 'react-icons/ai';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';




import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const CommercialCleaning = () => {

    return (
        <div>
            <ServiceNavbar />
            <div className='h-80 mt-1' style={{
                backgroundImage: `url(${TopBanner})`
            }}>
                <div className='flex gap-4 items-baseline'>
                    <div>
                        <h1 className='text-4xl font-bold mt-16 ml-28 text-sky-900'>Plumbing & Sanitary Services</h1>
                    </div>
                    <div>
                        <img className='w-28' src={badge} alt="" />
                    </div>
                </div>
                <div className='mt-28 ml-28'>
                    <div className='flex font-semibold text-black'>
                        <div className='text-xl'><AiOutlineNumber /></div>
                        <div>On Time Work Completion</div>
                    </div>
                    <div className='flex font-semibold text-black'>
                        <div className='text-xl'><AiOutlineNumber /></div>
                        <div>On Time Work Completion</div>
                    </div>
                </div>
            </div>

            <div className='flex mt-10'>
                <div className='w-2/4'>
                    <div >
                        <div className=' ml-20'>
                            <h4 className='font-bold text-lg text-sky-900'>What's included?</h4>
                            <p className='mt-4'><span className='shadow-sm rounded-full p-1 shadow-blue-600 font-bold'> 01</span> <span className='font-semibold'>Well-trained plumber</span></p>
                            <p className='mt-4'><span className='shadow-sm rounded-full p-1 shadow-blue-600 font-bold'> 02</span> <span className='font-semibold'>Well-trained plumber</span></p>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <div className='w-2/3 ml-20'>
                            <h4 className='font-bold text-lg text-sky-900'>What's excluded?</h4>
                            <p className='mt-4'><span className='shadow-sm rounded-full p-1 shadow-blue-600 font-bold'> 01</span> <span className='font-semibold'>Well-trained plumber</span></p>
                            <p className='mt-4'><span className='shadow-sm rounded-full p-1 shadow-blue-600 font-bold'> 02</span> <span className='font-semibold'>Well-trained plumber</span></p>
                        </div>
                    </div>
                </div>

                <div className='w-2/4 ml-28'>
                    <h1 className='text-2xl font-bold text-sky-900 pb-5'>Plumbing & Sanitary Services</h1>
                    <form>
                        {/* Service Order Form */}
                        {/* Popover MUI */}
                    </form>
                </div>
            </div>

            {/* FAQ */}
            <div>
                <h1 className='text-3xl font-semibold ml-20 mt-10'>FAQ</h1>
                <div className='mx-20 mt-5'>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className='flex items-center gap-2'>
                                <span className='text-sky-900'><MdKeyboardArrowDown /></span>
                                Does accessories cost included in service charge?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                No, additional materials and parts cost are excluded from service charge.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className='flex items-center gap-2'>
                                <span className='text-sky-900'><MdKeyboardArrowDown /></span>
                                Does accessories cost included in service charge?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                No, additional materials and parts cost are excluded from service charge.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>

            {/* How To Order */}
            <div className='ml-20 mt-10'>
                <h1 className='text-3xl font-bold'>How to order</h1>
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            9:30 am
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot>
                                <FastfoodIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Eat
                            </Typography>
                            <Typography>Because you need strength</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="text.secondary"
                        >
                            10:00 am
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <LaptopMacIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Code
                            </Typography>
                            <Typography>Because it&apos;s awesome!</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" variant="outlined">
                                <HotelIcon />
                            </TimelineDot>
                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Sleep
                            </Typography>
                            <Typography>Because you need rest</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            <TimelineDot color="secondary">
                                <RepeatIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Repeat
                            </Typography>
                            <Typography>Because this is the life you love!</Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>

            </div>

            {/* Preparations against COVID-19 */}

            <div className='ml-20 mt-10'>
                <h1 className='font-bold text-2xl'>Preparations against COVID-19</h1>
                <img className='w-1/5 mt-5' src={badge} alt="" />
                <small className='italic text-base mt-4'>We are well-equipped and well-prepared to protect your health and hygiene while serve you. Our preparations include-</small>
                <p>1. Checked Health condition of service specialist</p>
                <p>2. Ensuring use of masks, hand sanitisers, gloves, etc</p>
                <p>3. Disinfecting equipments before and after the work</p>
                <p>4. Maintaining social distancing</p>
            </div>

            {/* Service Details */}
            <div className='ml-20 mt-10'>
                <h1 className='font-bold text-2xl'>Service Details</h1>
                <p className='pr-20 font-medium'>All your Plumbing and Sanitary-related problems will be taken care of by Sheba.xyz marketplace. We have trusted professionals who are experts in fitting, installations, and drainage related issues.</p>
            </div>

            {/* Review */}
            <div className='ml-20 mt-10'>
                <Stack spacing={1}>
                    <p className='font-bold'>Abdullah Al Habib</p>
                    <Rating name="size-medium" defaultValue={2} />
                    <small className='italic text-sm font-semibold'>The person was very expert and did his job very well</small>
                    <small>Date: 19 September, 2022</small>
                </Stack>
            </div>
        </div>
    );
};

export default CommercialCleaning;