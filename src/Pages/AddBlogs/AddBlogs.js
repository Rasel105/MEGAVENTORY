import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiAddToQueue } from "react-icons/bi";

const AddBlogs = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        fetch('http://localhost:5000/blog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Blog added', {
                    toastId: 'success1',
                });
                e.target.reset();
            })
    };
    return (
        <div>
            <>
                <h3 className='text-center text-3xl my-3 text-gray-700'>Add <span className='text-sky-400'>Blog</span></h3>
                <div className='border-2 p-3 my-5 container sm:p-3 sm:w-full md:w-5/12 mx-auto bg-slate-300 rounded-xl'>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col bg-white rounded p-5">
                        <label className="block mb-2 text-sm font-bold text-gray-700">Blog Title</label>
                        <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' type="text" placeholder='Blog Title' {...register("title", { required: true })} />
                        <label className="block mb-2 text-sm font-bold text-gray-700">Blog Details</label>
                        <textarea className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' placeholder='Blog Details' type="text" {...register("blogdetails", { required: true })} />
                        <div className='flex justify-end'>
                            <button className='bg-sky-500/100 hover:bg-blue-800 py-2 px-4 mt-2 rounded-lg text-xl mx-2 text-white' type='submit'>
                                Add Blogs
                                <BiAddToQueue className='inline ml-2' />
                            </button>
                        </div>
                    </form>
                    <ToastContainer />
                </div >
            </>
        </div>
    );
};

export default AddBlogs;