import { Dialog } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
    const [cleaningServiceOrder, setCleaningServiceOrder] = useState([]);
    const [editModal, setEditModal] = React.useState(false);
    const [statusDetails, setStatusDetails] = useState({})
    const { _id } = statusDetails
    useEffect(() => {
        fetch("http://localhost:5000/cleaningServiceOrder")
            .then((res) => res.json())
            .then((data) => setCleaningServiceOrder(data.reverse()));
    }, [cleaningServiceOrder]);

    // console.log(cleaningServiceOrder);
    const handleClickEdit = (ServiceOrder) => {
        setEditModal(true);
        // console.log(ServiceOrder);
        setStatusDetails(ServiceOrder)
    };
    const handleEditClose = () => {
        setEditModal(false);
    };
    const handleEditCloses = () => {
        setEditModal(false);
    };
    const handleChangeStatus = (e) => {
        e.preventDefault();
        const orderStatus = e.target.orderStatus.value;

        const changeStatus = {
            orderStatus,
        };
        console.log(changeStatus);
        const url = `http://localhost:5000/updateOrderStatus/${_id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(changeStatus),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("success", data);
                e.target.reset();
            });
    };
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
                        <th scope="col" class="py-3 px-6">
                            Edit
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {cleaningServiceOrder.map((ServiceOrder) => (

                        <tr
                            key={ServiceOrder._id}
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th
                                scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {ServiceOrder?.name}
                            </th>
                            <td class="py-4 px-6">
                                {ServiceOrder?.phone}
                            </td>
                            <td class="py-4 px-6">
                                {ServiceOrder?.email}
                            </td>
                            <td class="py-4 px-6">
                                {ServiceOrder?.service}
                            </td>
                            <td className='py-4 px-6'>
                                {ServiceOrder?.date}
                            </td>
                            <td className='py-4 px-6'>
                                {ServiceOrder?.area}
                            </td>
                            <td className='py-4 px-6'>
                                { ServiceOrder?.orderStatus || "On Review"}
                            </td>
                            <td className='py-4 px-6 '>
                                <button onClick={() => handleClickEdit(ServiceOrder)}>
                                    <div className='text-green-500 font-bold'>
                                        Edit
                                    </div>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Dialog
                open={editModal}
                onClose={handleEditClose}
                onClosees={handleEditCloses}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className='mx-10 my-10'>
                    <div className='flex justify-between'>
                        <h2 className='font-bold'>Order Status</h2>
                        <button className='text-[#F33823] font-extrabold' onClick={handleEditCloses}>
                            X
                        </button>
                    </div>

                    <div className='mt-5'>
                        <form onSubmit={handleChangeStatus}>
                            <div>
                                <div className='flex justify-between gap-5'>
                                    <div><span className='font-bold'>Customer Name:</span> {statusDetails?.name}</div>
                                    <div><span className='font-bold'>Phone Number:</span> {statusDetails?.phone}</div>
                                </div>
                                <div className='flex justify-between gap-5'>
                                    <div><span className='font-bold'>Email:</span>{statusDetails?.email}</div>
                                    <div><span className='font-bold'>Service:</span> {statusDetails?.service}</div>
                                </div>
                                <div className='flex justify-between gap-5'>
                                    <div><span className='font-bold'>Date:</span> {statusDetails?.date}</div>
                                    <div><span className='font-bold'>Address:</span> {statusDetails?.area}</div>
                                </div>
                            </div>
                            <select
                                name="orderStatus"
                                id=""
                                className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                defaultValue={statusDetails?.orderStatus}
                            >
                                <option value="On Review" selected disabled>On Review</option>
                                <option value="On Going">On Going</option>
                                <option value="Cancel">Cancel</option>
                            </select>
                            <div className='mt-8'>
                                <button onClick={handleEditClose}>
                                    <input className='bg-green-500 px-20 py-3 rounded cursor-pointer text-white font-bold' type="submit" value="Save" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default ManageOrder;