import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';

const MyOrder = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [user] =useAuthState(auth)
    // const { email } = user
   
    useEffect(() => {
        const getItem = async () => {
            const email = user.email
            const url = `http://localhost:5000/cleaningServiceOrder?email=${email}`
            const { data } = await axios.get(url, {
                headers: {
                    // authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setMyOrders(data)
        }
        getItem()
    }, [user])
    // console.log(myOrders);

    return (
        <div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6">
                            Customer Name
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Phone Number
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Email
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Service
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Date
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Address
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Order Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {myOrders.map((order) => (

                        <tr
                            key={order._id}
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th
                                scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {order?.name}
                            </th>
                            <td class="py-4 px-6">
                                {order?.phone}
                            </td>
                            <td class="py-4 px-6">
                                {order?.email}
                            </td>
                            <td class="py-4 px-6">
                                {order?.service}
                            </td>
                            <td className='py-4 px-6'>
                                {order?.date}
                            </td>
                            <td className='py-4 px-6'>
                                {order?.area}
                            </td>
                            <td className='py-4 px-6'>
                                {order?.orderStatus || "On Review"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;