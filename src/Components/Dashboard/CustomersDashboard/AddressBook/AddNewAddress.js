import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';


const AddNewAddress = () => {
    const [city, setCity] = React.useState('');
    const [area, setArea] = React.useState('');

    const handleCity = (event) => {
        setCity(event.target.value);
    };

    const handleArea = (event) => {
        setArea(event.target.value);
    };


    const handleAddNewAddress = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const shortAddress = e.target.shortAddress.value;
        const fullAddress = e.target.fullAddress.value;

        const NewAddress = {
            name,
            phone,
            city,
            area,
            shortAddress,
            fullAddress,
        };
        // console.log(NewAddress);

        fetch("http://localhost:5000/newAddress", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(NewAddress),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data) {
                    e.target.reset();
                }
            });
    };
    return (
        <div>
            <div className='mx-5 mt-5'>
                <div>
                    <h2 className='font-bold text-2xl mb-5'>ADD NEW ADDRESS</h2>
                    <div>
                        <form onSubmit={handleAddNewAddress}>
                            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-5'>
                                <TextField sx={{ width: 250 }} id="outlined-basic" label="Contact Person" variant="outlined"
                                    type="text" name="name" />

                                <TextField sx={{ width: 250 }} id="outlined-basic" label="Phone Number" variant="outlined" type="number" name="phone" />

                                <Box >
                                    <FormControl sx={{ width: 250 }}>
                                        <InputLabel id="demo-simple-select-label">City</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={city}
                                            label="City"
                                            onChange={handleCity}
                                        >
                                            <MenuItem value={'Dhaka North'}>Dhaka North</MenuItem>
                                            <MenuItem value={'Dhaka South'}>Dhaka South</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>


                                <Box >
                                    <FormControl sx={{ width: 250 }}>
                                        <InputLabel id="demo-simple-select-label">Area</InputLabel>
                                        <Select
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

                                <TextField sx={{ width: 250 }} id="outlined-basic" label="House No / Floor / Street" variant="outlined" type="text" name="shortAddress" />

                                <TextField sx={{ width: 250 }} id="outlined-basic" label="Address" variant="outlined"
                                    type="text" name="fullAddress" />
                            </div>

                            <div className='flex lg:justify-center md:justify-center justify-start mr-5'>
                                <input className='bg-sky-900 py-3 px-20 text-white font-semibold lg:mt-24 mt-10  cursor-pointer' to='/dashboard/addNewAddress' type="submit" value="SAVE CHANGE" />
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddNewAddress;