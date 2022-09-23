import React from 'react';
import ServiceNavbar from '../../../Share/ServiceNavbar/ServiceNavbar';
import TopBanner from '../../../../Images/SubmenuService/SubMenuTopImg.jpg'
import badge from '../../../../Images/SubmenuService/badge.png'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { AiFillSafetyCertificate } from 'react-icons/ai';

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
import TimelineDot from '@mui/lab/TimelineDot';

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

const CommercialCleaning = () => {

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

            <div className='lg:flex md:flex justify-between lg:ml-20 mt-10 md:ml-10 ml-5'>
                <div>
                    <div>
                        <h4 className='font-bold text-lg text-sky-900'>What's included?</h4>
                        <div className='flex font-semibold text-black items-center gap-2 pt-4'>
                            <div className='text-xl'><AiFillSafetyCertificate /></div>
                            <div>On Time Work Completion</div>
                        </div>
                        <div className='flex font-semibold text-black items-center gap-2 pt-4'>
                            <div className='text-xl'><AiFillSafetyCertificate /></div>
                            <div>On Time Work Completion</div>
                        </div>
                    </div>
                    <br />
                    <div>
                        <h4 className='font-bold text-lg text-sky-900'>What's excluded?</h4>
                        <div className='flex font-semibold text-black items-center gap-2 pt-4'>
                            <div className='text-xl'><AiFillSafetyCertificate /></div>
                            <div>On Time Work Completion</div>
                        </div>
                        <div className='flex font-semibold text-black items-center gap-2 pt-4'>
                            <div className='text-xl'><AiFillSafetyCertificate /></div>
                            <div>On Time Work Completion</div>
                        </div>
                    </div>
                </div>
                <div className='lg:mr-20 mt-10 md:mr-10 mr-5'>
                    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-4 rounded-lg'>
                        <Link className='bg-white px-20 font-bold py-3 rounded-lg flex items-center gap-3' to='/cleaningOrder'>Order Request <MdKeyboardArrowRight /> </Link>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div>
                <h1 className='text-3xl font-semibold ml-20 mt-10'>FAQ</h1>
                <div className='lg:ml-20 mt-10 md:ml-10 ml-5 lg:mr-20 md:mr-10 mr-5'>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className='flex items-center gap-2'>
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
            <div className='lg:ml-20 mt-10 md:ml-10 ml-5'>
                <h1 className='text-3xl font-bold'>How to order</h1>
                <div className='w-0'>
                    <Timeline>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="success"/>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className='whitespace-nowrap'>
                                <h2 className='font-bold'>Go to order Request</h2>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="success"/>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className='whitespace-nowrap'>
                                <h2 className='font-bold'>Book your schedule</h2>
                                <p>Select your convenient time slot.</p>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="success"/>
                            </TimelineSeparator>
                            <TimelineContent className='whitespace-nowrap'>
                                <h2 className='font-bold'>Place order</h2>
                                <p>Confirm your order by clicking ‘Place order’.</p>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>

            </div>

            {/* Preparations against COVID-19 */}

            <div className='lg:ml-20 mt-10 md:ml-10 ml-5'>
                <h1 className='font-bold text-2xl'>Preparations against COVID-19</h1>
                <img className='w-1/5 mt-5' src={badge} alt="" />
                <small className='italic text-base mt-4'>We are well-equipped and well-prepared to protect your health and hygiene while serve you. Our preparations include-</small>
                <p>1. Checked Health condition of service specialist</p>
                <p>2. Ensuring use of masks, hand sanitisers, gloves, etc</p>
                <p>3. Disinfecting equipments before and after the work</p>
                <p>4. Maintaining social distancing</p>
            </div>

            {/* Service Details */}
            <div className='lg:ml-20 mt-10 md:ml-10 ml-5'>
                <h1 className='font-bold text-2xl'>Service Details</h1>
                <p className='pr-20 font-medium'>All your Plumbing and Sanitary-related problems will be taken care of by Sheba.xyz marketplace. We have trusted professionals who are experts in fitting, installations, and drainage related issues.</p>
            </div>

            {/* Review */}
            <div className='lg:ml-20 mt-10 md:ml-10 ml-5'>
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