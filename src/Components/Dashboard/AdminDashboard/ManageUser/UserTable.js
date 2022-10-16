import React from 'react';
import Swal from 'sweetalert2';

const UserTable = ({ user }) => {
    const { email, role, name, phone } = user
    const makeAdmin = () => {
        const url = `https://secret-sierra-86800.herokuapp.com/user/admin/${email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                Swal.fire(
                    'Good job!',
                    'Profile Updated!',
                    'success'
                  )
                //   window.location.reload();
            })
    }

    const handleUserDelete = id => {
        const proceed = window.confirm('Do you want to delete this user?')
        if (proceed) {
            // console.log('delete', id);
            const url = `http://localhost:5000/user/${email}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                    }
                })
                .then(() => {
                    window.location.reload();
                })
        }
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="border px-3 py-2 rounded-xl bg-sky-900 text-white font-semibold">Make Admin</button>}</td>
            <td><button onClick={handleUserDelete} className="border px-3 py-2 rounded-xl bg-red-500 text-white font-semibold">Remove User</button></td>
        </tr>
    );
};

export default UserTable;