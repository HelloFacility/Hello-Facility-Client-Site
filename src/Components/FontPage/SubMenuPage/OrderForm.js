import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Swal from 'sweetalert2';

const OrderForm = () => {
    const [service, setService] = React.useState('');
    const [area, setArea] = React.useState('');

    const handleArea = (event) => {
        setArea(event.target.value);
    };

    const handleChange = (event) => {
        setService(event.target.value);
    };

    const handleCleaningServiceOrder = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        const date = e.target.date.value;

        const CleaningServiceOrder = {
            name,
            phone,
            email,
            service,
            date,
            area,
        };

        console.log(CleaningServiceOrder);

        fetch(
            "http://localhost:5000/cleaningServiceOrder",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(CleaningServiceOrder),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data) {
                    Swal.fire(
                        'Thank You!',
                        'You Order is Successfully submitted!',
                        'success'
                    )
                    e.target.reset();
                }
            });
    };
    return (
        <div className='flex justify-center'>
            <form onSubmit={handleCleaningServiceOrder}>
                <div className='lg:flex gap-2'>
                    <div>
                        <TextField
                            required
                            sx={{ width: '30ch' }}
                            id="outlined-basic"
                            label="Your Name"
                            variant="outlined"
                            type="text"
                            name="name"
                        /> <br /> <br />
                        <TextField
                            required
                            sx={{ width: '30ch' }}
                            id="outlined-basic"
                            label="Your Phone"
                            variant="outlined"
                            type="number"
                            name="phone"
                        />
                    </div>
                    <br /> <br />
                    <div>
                        <TextField
                            required
                            sx={{ width: '30ch' }}
                            id="outlined-basic"
                            label="Your Email"
                            variant="outlined"
                            type="email"
                            name="email"
                        /> <br /> <br />
                        <Box sx={{ width: '30ch' }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Service Name</InputLabel>
                                <Select
                                    required
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={service}
                                    label="Service"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={'Commercial Cleaning Service'}>Commercial Cleaning Service</MenuItem>
                                    <MenuItem value={'Carpet Cleaning'}>Carpet Cleaning</MenuItem>
                                    <MenuItem value={'Sofa Cleaning'}>Sofa Cleaning</MenuItem>
                                    <MenuItem value={'Kitchen Cleaning'}>Kitchen Cleaning</MenuItem>
                                    <MenuItem value={'Bathroom Cleaning'}>Bathroom Cleaning</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </div> <br />
                <div className='lg:flex gap-2'>
                    <TextField
                        required
                        sx={{ width: '30ch' }}
                        id="outlined-number"
                        label="Request Date"
                        type="date"
                        name="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <br /> <br />
                    <Box >
                        <FormControl sx={{ width: 250 }}>
                            <InputLabel id="demo-simple-select-label">Area</InputLabel>
                            <Select
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={area}
                                label="Area"
                                onChange={handleArea}
                            >
                                <MenuItem value={'Cantonment area'}>Cantonment area</MenuItem>
                                <MenuItem value={'Banani'}>Banani</MenuItem>
                                <MenuItem value={'Gulshan'}>Gulshan</MenuItem>
                                <MenuItem value={'Mohakhali'}>Mohakhali</MenuItem>
                                <MenuItem value={'Bashundhara'}>Bashundhara</MenuItem>
                                <MenuItem value={'Banasree'}>Banasree</MenuItem>
                                <MenuItem value={'Banani'}>Banani</MenuItem>
                                <MenuItem value={'Baridhara'}>Baridhara</MenuItem>
                                <MenuItem value={'Uttarkhan'}>Uttarkhan</MenuItem>
                                <MenuItem value={'Banani'}>Banani</MenuItem>
                                <MenuItem value={'Dakshinkhan'}>Dakshinkhan</MenuItem>
                                <MenuItem value={'Bawnia'}>Bawnia</MenuItem>
                                <MenuItem value={'Khilkhet'}>Khilkhet</MenuItem>
                                <MenuItem value={'Tejgaon'}>Tejgaon</MenuItem>
                                <MenuItem value={'Farmgate'}>Farmgate</MenuItem>
                                <MenuItem value={'Mohammadpur'}>Mohammadpur</MenuItem>
                                <MenuItem value={'Rampura'}>Rampura</MenuItem>
                                <MenuItem value={'Badda'}>Badda</MenuItem>
                                <MenuItem value={'Satarkul'}>Satarkul</MenuItem>
                                <MenuItem value={'Beraid'}>Beraid</MenuItem>
                                <MenuItem value={'Khilgaon'}>Khilgaon</MenuItem>
                                <MenuItem value={'Vatara'}>Vatara</MenuItem>
                                <MenuItem value={'Gabtali'}>Gabtali</MenuItem>
                                <MenuItem value={'Hazaribagh'}>Hazaribagh</MenuItem>
                                <MenuItem value={'Dhanmondi'}>Dhanmondi</MenuItem>
                                <MenuItem value={'Ramna'}>Ramna</MenuItem>
                                <MenuItem value={'Motijheel'}>Motijheel</MenuItem>
                                <MenuItem value={'Sabujbagh'}>Sabujbagh</MenuItem>
                                <MenuItem value={'Lalbagh'}>Lalbagh</MenuItem>
                                <MenuItem value={'Kamalapur'}>Kamalapur</MenuItem>
                                <MenuItem value={'Kamrangirchar'}>Kamrangirchar</MenuItem>
                                <MenuItem value={'Sadarghat'}>Sadarghat</MenuItem>
                                <MenuItem value={'Wari'}>Wari</MenuItem>
                                <MenuItem value={'Kotwali'}>Kotwali</MenuItem>
                                <MenuItem value={'Sutrapur'}>Sutrapur</MenuItem>
                                <MenuItem value={'Jurain'}>Jurain</MenuItem>
                                <MenuItem value={'Dania'}>Dania</MenuItem>
                                <MenuItem value={'Demra'}>Demra</MenuItem>
                                <MenuItem value={'Shyampur'}>Shyampur</MenuItem>
                                <MenuItem value={'Nimtoli'}>Nimtoli</MenuItem>
                                <MenuItem value={'Shahbagh'}>Shahbagh</MenuItem>
                                <MenuItem value={'Paltan'}>Paltan</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <br />
                <div className='lg:flex justify-center'>
                    <input className='border px-20 py-3 rounded-md cursor-pointer hover:bg-sky-900 hover:text-white font-bold text-[#0F75BC]' type="submit" value="Request Send" />
                </div>
            </form>
        </div>
    );
};

export default OrderForm;