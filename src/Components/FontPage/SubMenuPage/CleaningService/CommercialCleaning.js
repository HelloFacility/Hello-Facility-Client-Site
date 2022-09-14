import React from 'react';
import ServiceNavbar from '../../../Share/ServiceNavbar/ServiceNavbar';
import CommercialCleaningService from '../../../../Images/CommercialCleaningServcie.jpg'

const CommercialCleaning = () => {
    return (
        <div>
            <ServiceNavbar />
            <div className=' bg-sky-900  text-white flex justify-between items-center'>
                <div className='pt-16 pl-32 pb-16'>
                    <h1 className='font-bold text-3xl '>Commercial Cleaning</h1> <br />
                    <p><small>(27331 ratings on 5 services)</small></p>
                    <p>Trusted & Reliable AC Technicians</p>
                    <p>Trusted & Reliable AC Technicians</p>
                </div>
                <div>
                    <img className='pr-16' src={CommercialCleaningService} alt="" />
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default CommercialCleaning;