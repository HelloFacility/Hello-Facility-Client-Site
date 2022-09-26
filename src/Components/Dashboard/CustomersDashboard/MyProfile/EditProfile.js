import { TextField } from '@mui/material';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import auth from '../../../firebase.init';


const EditProfile = () => {
    const [user] = useAuthState(auth)
    const handleEditProfile = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const phone = event.target.phone.value

        const editProfile = { name, email, phone }
        console.log(editProfile);


        const url = `http://localhost:5000/user/${email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(editProfile)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                // toast('Update Successful');
                Swal.fire(
                    'Good job!',
                    'Profile Updated!',
                    'success'
                  )
                window.location.reload();
                event.target.reset()
            })
    }

    return (
        <div className='mx-5'>
            <div className='mt-5'>
                <h2 className='font-bold text-2xl'>Edit Profile</h2>
            </div>
            <div>
                <form onSubmit={handleEditProfile}>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-5'>
                        <TextField id="outlined-basic" label="Your Name" variant="outlined" type="text" name="name" />
                        <TextField disabled id="outlined-basic" value={user?.email} variant="outlined" type="email" name="email" />
                        <TextField id="outlined-basic" label="Your Phone" variant="outlined" type="number" name="phone" />
                    </div>
                    <div className=''>
                        <input className='bg-sky-900 py-3 px-20 text-white font-semibold mt-24 cursor-pointer' type="submit" value="SAVE CHANGE" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;