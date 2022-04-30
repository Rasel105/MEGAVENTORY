import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, [product]);

    const handleDelivered = id => {
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            });
    };

    const onSubmit = (data, event) => {
        fetch(`http://localhost:5000/insertProduct/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                event.target.reset();
            });
    };


    return (
        <div className='container grid md:grid-cols-2 gap-5 w-full mx-auto justify-center my-3'>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={product.img} alt="" />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.product_name}</h5>
                    <h5 className='text-2xl'>Price: ${product.price}</h5>
                    <h5 className='text-xl'>Quantity: ${product.quantity}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <div className='flex justify-between items-center'>
                        <h5 className='text-2xl'>Quantity: {product.quantity}</h5>
                        <button onClick={() => handleDelivered(product._id)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Delivered
                            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='md:mt-32 mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col'>
                        <label className='block text-3xl'>Restock Products</label>
                        <input className='py-4 border-2 px-3 text-lg my-3 rounded shadow appearance-none focus:outline-none focus:shadow-outline' placeholder='Increase product' {...register("quantity", { required: true })} />
                        <input className='bg-green-400 py-3 rounded-xl cursor-pointer text-2xl hover:bg-green-500 text-white' type="submit" value="Restock" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Inventory;