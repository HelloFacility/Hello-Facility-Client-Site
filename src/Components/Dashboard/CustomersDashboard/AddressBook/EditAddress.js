import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import { AiFillSave } from 'react-icons/ai';
import Swal from 'sweetalert2';

const EditAddress = ({addressEdit}) => {
    const { _id } =
    addressEdit;
    const [city, setCity] = React.useState('');
    const [area, setArea] = React.useState('');

    const handleCity = (event) => {
        setCity(event.target.value);
    };

    const handleArea = (event) => {
        setArea(event.target.value);
    };
    const handleEditAddress = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const shortAddress = e.target.shortAddress.value;
        const fullAddress = e.target.fullAddress.value;

        const EditAddress = {
            name,
            phone,
            city,
            area,
            shortAddress,
            fullAddress,
        };

        console.log(EditAddress);

        const url = `http://localhost:5000/newAddress/${_id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(EditAddress)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                Swal.fire(
                    'Good job!',
                    'Profile Updated!',
                    'success'
                  )
                e.target.reset()
            })
    }
    //     const url = `http://localhost:5000/editAddress/${_id}`;
    //     fetch(url, {
    //         method: "PUT",
    //         headers: {
    //             "content-type": "application/json",
    //         },
    //         body: JSON.stringify(handleEditAddress),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log("success", data);
    //             e.target.reset();
    //         });
    // }
    return (
        <div>
            <div>
                <input
                    type="checkbox"
                    id="edit-address-modal"
                    className="modal-toggle"
                />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <label
                            for="edit-address-modal"
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                            ✕
                        </label>
                        <div>
                            <h2 className='font-bold text-xl mb-5 mt-4'>Address Book</h2>
                            <form onSubmit={handleEditAddress}>
                                <div className='grid lg:grid-cols-2 grid-cols-1 gap-3 mt-5'>
                                    <TextField
                                        name="name"
                                        id="standard-number"
                                        label="Contact Person"
                                        type="text"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="standard"
                                    />

                                    <TextField
                                        name="phone"
                                        id="standard-number"
                                        label="Phone Number"
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="standard"
                                    />
                                </div>

                                <h2 className="mt-5 font-medium text-blue-500">
                                    Address
                                </h2>
                                <div className='grid lg:grid-cols-2 grid-cols-1 gap-3 mt-5'>
                                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={city}
                                            label="City"
                                            onChange={handleCity}
                                        >
                                            <MenuItem value={'Dhaka North'}>Dhaka North</MenuItem>
                                            <MenuItem value={'Dhaka South'}>Dhaka South</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
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

                                    <TextField
                                        name="shortAddress"
                                        id="standard-number"
                                        label="House No / Floor / Street"
                                        type="text"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="standard"
                                    />

                                    <TextField
                                        name="fullAddress"
                                        id="standard-number"
                                        label="Address"
                                        type="text"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="standard"
                                    />
                                </div>
                                <div className='flex justify-center mr-5'>
                                    <input className='bg-sky-900 py-3 px-20 text-white font-semibold mt-10 cursor-pointer' type="submit" value="SAVE CHANGE" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditAddress;