import React from 'react';
import Swal from 'sweetalert2';

const UserTable = ({ user }) => {
    const { email, role, name, phone } = user

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json",
            }
        })
        .then(res => res.json())
        .then(() => {
            window.location.reload();
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
            <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">{name}</td>
            <td class="py-4 px-6">{email}</td>
            <td class="py-4 px-6">{phone}</td>
            <td class="py-4 px-6">{role !== 'admin' && <button onClick={makeAdmin} className="border px-3 py-1 rounded-3xl bg-green-600 text-white font-semibold">Make Admin</button>}</td>
            <td class="py-4 px-6"><button onClick={handleUserDelete} className="border px-3 py-1 rounded-3xl bg-red-500 text-white font-semibold">Remove</button></td>
        </tr>
    );
};

export default UserTable;