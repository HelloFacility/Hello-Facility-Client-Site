import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddBlog = () => {
    const [show, setShow] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    return (
        <div>
            <div>
                <div>
                    <button
                        onClick={() => setShow(!show)}
                        className="flex items-center gap-2 px-4 py-2 font-bold text-white bg-blue-500 rounded shadow-sm hover:bg-white hover:text-blue-500 hover:outline-1 hover:border hover:border-blue-500 hover: shadow-green-200"
                    >
                        Add Blog
                    </button>{" "}
                </div>

                {show ? (
                    <div className="mt-6">
                        <form>
                            <section className="px-6 py-4 mx-auto mb-8 bg-white border rounded shadow-md md:w-3/6 shadow-gray-300">

                                <div className='flex gap-4'>
                                    <select
                                        required
                                        name="TextField"
                                        {...register("TextField")}
                                        id=""
                                        className="w-3/12 py-1 pl-3 my-1 border border-gray-300 rounded outline-none bg-slate-50"
                                    >
                                        <option value="" selected disabled>
                                            Select Text
                                        </option>
                                        <option value="H1">H1</option>
                                        <option value="H2">H2</option>
                                        <option value="H3">H3</option>
                                        <option value="H4">H4</option>
                                        <option value="H5">H5</option>
                                        <option value="H6">H6</option>
                                    </select>
                                    <button className='w-3/12 py-1 pl-3 my-1 border border-gray-300 rounded outline-none bg-slate-50'>Paragraph</button>
                                    <button className='w-3/12 py-1 pl-3 my-1 border border-gray-300 rounded outline-none bg-slate-50'>Hyperlink</button>
                                    <button className='w-3/12 py-1 pl-3 my-1 border border-gray-300 rounded outline-none bg-slate-50'>image</button>
                                </div>
                                <br />
                                <br />
                                <div className="flex justify-center mt-2">
                                    <button
                                        type="submit"
                                        className="flex items-center gap-2 px-6 py-2 font-bold text-white bg-blue-600 rounded shadow-sm hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300"
                                    >
                                        Post
                                    </button>{" "}
                                    <br />
                                </div>
                            </section>
                        </form>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default AddBlog;