import React from 'react';
import useUsers from '../../../hook/useUsers';
import UserTable from './UserTable';

const ManageUser = () => {
    const [user] = useUsers()
 
    return (
        <div>
            <h2 className='py-3 px-3'>Total Users: {user?.length} </h2>
            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                        <tr className='text-left'>
                            <th scope="col" class="py-3 px-6">User Name</th>
                            <th scope="col" class="py-3 px-6">Email</th>
                            <th scope="col" class="py-3 px-6">Phone</th>
                            <th scope="col" class="py-3 px-6">User Status</th>
                            <th scope="col" class="py-3 px-6">Remove Button</th>
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