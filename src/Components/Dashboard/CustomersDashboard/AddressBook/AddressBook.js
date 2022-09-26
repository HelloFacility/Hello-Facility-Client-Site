import React from 'react';
import { Link } from 'react-router-dom';

const AddressBook = () => {
    return (
        <div className='mx-5 mt-5'>
            <div>
                <h2 className='font-bold text-2xl mb-5'>Address Book</h2>
                <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="py-3 px-6">
                                    Product name
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Color
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Category
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Price
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td class="py-4 px-6">
                                    Sliver
                                </td>
                                <td class="py-4 px-6">
                                    Laptop
                                </td>
                                <td class="py-4 px-6">
                                    $2999
                                </td>
                                <td class="py-4 px-6 text-right">
                                    <Link className='font-medium text-blue-600' to='/dashboard/editAddress'>Edit</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <div className='flex lg:justify-end justify-center mr-5'>
            <Link className='bg-sky-900 py-3 px-20 text-white font-semibold mt-24 cursor-pointer' to='/dashboard/addNewAddress'>+ ADD NEW ADDRESS</Link>
            </div>
        </div>
    );
};

export default AddressBook;