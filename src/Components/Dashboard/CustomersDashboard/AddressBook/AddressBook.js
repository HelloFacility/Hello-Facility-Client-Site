import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditAddress from './EditAddress';

const AddressBook = () => {
    const [newAddressBook, setNewAddressBook] = useState([]);
    const [addressEdit, setAddressEdit] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/newAddress')
            .then((res) => res.json())
            .then((data) => setNewAddressBook(data.reverse()));
    }, [newAddressBook]);

    // console.log(newAddressBook);
    return (
        <div className='mx-5 mt-5'>
            <div>
                <h2 className='font-bold text-2xl mb-5'>Address Book</h2>
                <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="py-3 px-6">
                                    Contact Person
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Phone Number
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    City
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Area
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Address
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {newAddressBook.map((newAddress) => (

                                <tr
                                    key={newAddress._id}
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th
                                        scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {newAddress?.name}
                                    </th>
                                    <td class="py-4 px-6">
                                        {newAddress?.phone}
                                    </td>
                                    <td class="py-4 px-6">
                                        {newAddress?.city}
                                    </td>
                                    <td class="py-4 px-6">
                                        {newAddress?.area}
                                    </td>
                                    <td class="py-4 px-6">
                                        {newAddress?.shortAddress}
                                        <br />
                                        <small>{newAddress?.fullAddress}</small>
                                    </td>



                                    <td className='py-4 px-4 text-right'>
                                        <label
                                            for="edit-address-modal"
                                            onClick={() =>
                                                setAddressEdit(
                                                    newAddress
                                                )
                                            }
                                        >
                                            <span className="font-medium text-blue-600 cursor-pointer">
                                            Edit
                                            </span>
                                        </label>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
            <div className='flex lg:justify-end justify-center mr-5'>
                <Link className='bg-sky-900 py-3 px-20 text-white font-semibold mt-24 cursor-pointer' to='/dashboard/addNewAddress'>+ ADD NEW ADDRESS</Link>
            </div>

            <EditAddress
                addressEdit={addressEdit}
            ></EditAddress>
        </div>
    );
};

export default AddressBook;