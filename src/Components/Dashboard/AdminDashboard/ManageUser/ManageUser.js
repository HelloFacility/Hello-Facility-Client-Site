import React from 'react';
import useUsers from '../../../hook/useUsers';
import UserTable from './UserTable';

const ManageUser = () => {
    const [user] = useUsers()
 
    return (
        <div>
            <h2>Total Users: {user?.length} </h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr className='text-left'>
                            <th >User Name</th>
                            <th >Email</th>
                            <th >Phone</th>
                            <th>User Status</th>
                            <th>Remove Button</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                            user.map(user => <UserTable
                                key={user?._id}
                                user={user}
                            ></UserTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;