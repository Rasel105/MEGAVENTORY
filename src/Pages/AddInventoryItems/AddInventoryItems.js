import React from 'react';
import { useForm } from 'react-hook-form';
import { BiAddToQueue } from "react-icons/bi";

const AddInventoryItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
        <h3 className='text-center text-3xl my-1 text-green-400 underline'>Add new products</h3>
            <div className='border-2 p-3 my-5 container sm:p-3 sm:w-full md:w-5/12 mx-auto bg-slate-300 rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col bg-white rounded p-5">
                    <label className="block mb-2 text-sm font-bold text-gray-700">Product Name</label>
                    <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' placeholder='Product Name' {...register("product_name", { required: true})} />
                    <label className="block mb-2 text-sm font-bold  text-gray-700">Price</label>
                    <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' placeholder='Price' type="number" {...register("price", { pattern: /^[A-Za-z]+$/i })} />
                    <label className="block mb-2 text-sm font-bold text-gray-700">Quntity</label>
                    <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' placeholder='Quntity' type="number" {...register("quantity", { min: 18, max: 99 })} />
                    <label className="block mb-2 text-sm font-bold text-gray-700">Supplier</label>
                    <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' type="text" placeholder='Supplier' {...register("suplier", { min: 18, max: 99 })} />
                    <label className="block mb-2 text-sm font-bold text-gray-700">Img URL</label>
                    <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' type="text" placeholder='Image URL' {...register("img", { min: 18, max: 99 })} />
                    <label className="block mb-2 text-sm font-bold text-gray-700">Description</label>
                    <textarea className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' placeholder='Description' type="text" {...register("description", { min: 18, max: 99 })} />
                    <div className='flex justify-end'>
                        <button className='bg-lime-500 py-2 px-4 rounded-lg text-xl mx-2 text-white' type='submit'>
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddInventoryItems;