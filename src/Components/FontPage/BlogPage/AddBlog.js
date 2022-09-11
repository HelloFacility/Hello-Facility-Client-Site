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
                        className="flex items-center gap-2 bg-blue-500 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-blue-500 hover:outline-1 hover:border hover:border-blue-500 hover: shadow-green-200 hover: shadow-sm"
                    >
                        Add Blog
                    </button>{" "}
                </div>

                {show ? (
                    <div className="mt-6">
                        <form>
                            <section className="md:w-3/6 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-4 px-6 mb-8">

                                <div className='flex gap-4'>
                                    <select
                                        required
                                        name="TextField"
                                        {...register("TextField")}
                                        id=""
                                        className="py-1 pl-3 w-3/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none"
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
                                    <button className='py-1 pl-3 w-3/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none'>Paragraph</button>
                                    <button className='py-1 pl-3 w-3/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none'>Hyperlink</button>
                                    <button className='py-1 pl-3 w-3/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none'>image</button>
                                </div>
                                <br />
                                <br />
                                <div className="flex justify-center mt-2">
                                    <button
                                        type="submit"
                                        className="flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm"
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