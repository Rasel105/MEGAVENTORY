import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { BiAddToQueue } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';


const AddInventoryItems = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        
        fetch('https://thawing-everglades-09724.herokuapp.com/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Product added', {
                    toastId: 'success1',
                });
                e.target.reset();
                console.log('Success:', data);
            })
    };


    return (
        <>
            <h3 className='text-center text-3xl my-3 text-gray-700'>Add <span className='text-teal-400'>new</span> products</h3>
            <div className='border-2 p-3 my-5 container sm:p-3 sm:w-full md:w-5/12 mx-auto bg-slate-300 rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col bg-white rounded p-5">
                    <label className="block mb-2 text-sm font-bold text-gray-700">Email</label>
                    <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none bg-gray-200 focus:outline-none focus:shadow-outline ' value={email} readOnly {...register("email")} />
                    <label className="block mb-2 text-sm font-bold text-gray-700">Product Name</label>
                    <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' placeholder='Product Name' {...register("product_name", { required: true })} />
                    <label className="block mb-2 text-sm font-bold  text-gray-700">Price</label>
                    <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' placeholder='Price' type="number" {...register("price", { required: true })} />
                    <label className="block mb-2 text-sm font-bold text-gray-700">Quntity</label>
                    <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' placeholder='Quntity' type="number" {...register("quantity", { required: true })} />
                    <label className="block mb-2 text-sm font-bold text-gray-700">Supplier</label>
                    <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' type="text" placeholder='Supplier' {...register("supplier_name", { required: true })} />
                    <label className="block mb-2 text-sm font-bold text-gray-700">Img URL</label>
                    <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' type="text" placeholder='Image URL' {...register("img", { required: true })} />
                    <label className="block mb-2 text-sm font-bold text-gray-700">Description</label>
                    <textarea className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' placeholder='Description' type="text" {...register("description", { required: true })} />
                    <div className='flex justify-end'>
                        <button className='bg-teal-500 py-2 px-4 mt-2 rounded-lg text-xl mx-2 text-white' type='submit'>
                            Add
                            <BiAddToQueue className='inline ml-2' />
                        </button>
                    </div>
                </form>
                <ToastContainer />
            </div >
        </>
    );
};

export default AddInventoryItems;