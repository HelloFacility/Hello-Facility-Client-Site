import _ from "lodash";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddBlog = () => {
  const [show, setShow] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [fields, setFields] = useState([]);
  const onSubmit = (data) => {
    console.log("data", data);
  };
  const handle_field = (data, value) => {
    // console.log("value", value);
    const hKey = value;
    const field = {
      type: data.toLowerCase(),
      name: `${data.toLowerCase()}-${_.uniqueId()}`,
      className: "",
    };
    const newData = [...fields, field];
    setFields(newData);
  };
  //   console.log("data", fields);
  // const CustomTag = (value) => {
  //     return (`h${value}`)
  // };
  const handle_remove = (value) => {
    console.log("value", fields[value]?.name);
    const newData = fields.filter((el) => el?.name !== fields[value]?.name);
    setFields(newData)
    
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <section className="md:w-3/6 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-4 px-6 mb-8">
                <div className="flex gap-4">
                  <select
                    required
                    name="TextField"
                    // {...register("TextField")}
                    onChange={(e) => handle_field(e.target.value, "h")}
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
                  <button
                    type="button"
                    onClick={() => handle_field("p")}
                    className="py-1 pl-3 w-3/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                  >
                    Paragraph
                  </button>
                  <button
                    type="button"
                    onClick={() => handle_field("a")}
                    className="py-1 pl-3 w-3/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                  >
                    Hyperlink
                  </button>
                  <button
                    type="button"
                    onClick={() => handle_field("img")}
                    className="py-1 pl-3 w-3/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                  >
                    image
                  </button>
                </div>
                <br />
                <br />

                <div>
                  {fields?.map((field, i) => {
                    return (
                      <span className="flex gap-5 items-center">
                        <div key={i} className="flex flex-col">
                          <label htmlFor={field?.type}>{field?.type}</label>
                          <input
                            type={field?.type === "img" ? "file" : "text"}
                            className={`border border-red-500`}
                          />
                        </div>
                        <div onClick={() => handle_remove(i)} className="cursor-pointer">Close</div>
                      </span>
                    );
                    // if (field?.img) {
                    //   const CustomTag = `${field?.type}`;
                    //   return (
                    //     <>
                    //       <label htmlFor={field?.type}>
                    //         <input
                    //           type={field?.type === "img" ? "file" : "text"}
                    //         />
                    //       </label>
                    //     </>
                    //   );
                    // } else {
                    //   const CustomTag = `${field?.type}`;
                    //   return <CustomTag>{field?.name}</CustomTag>;
                    // }
                  })}
                </div>

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
