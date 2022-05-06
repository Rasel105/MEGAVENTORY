import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://thawing-everglades-09724.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, [id, product]);

    const handleDelivered = id => {

        if (product.quantity <= 0) {
            return
        }

        fetch(`https://thawing-everglades-09724.herokuapp.com/product/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then(response => response.json())
            .then(data => {
                toast.success('Delivered', {
                    toastId: 'success1',
                });
            });
    };

    const handleStockUpdate = (event) => {

        event.preventDefault();
        const value = event.target.quantity.value;
        if (value < 0 || value === null || value === '') {
            return;
        }
        const quantity = parseInt(product.quantity) + parseInt(value);
        // const quantity = event.target.quantity.value;
        fetch(`https://thawing-everglades-09724.herokuapp.com/insertProduct/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ quantity }),
        })
            .then(response => response.json())
            .then(data => {
                toast.success('Quantity added', {
                    toastId: 'success1',
                });
                event.target.reset();
            });
    };

    return (
        <>
            <h2 className='text-4xl mx-8 text-center my-2'><span className='text-sky-500/100'>Inventory</span> Item</h2>
            <div className='container grid md:grid-cols-12 gap-5 w-full mx-auto justify-center my-3'>
                <div className="md:col-span-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg" src={product.img} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.product_name}</h5>
                        <h5 className='text-xs'>ID: {product._id}</h5>
                        <h5 className='text-2xl'>Price: ${product.price}</h5>
                        <h5 className='text-xl'>Sold: {product.sold}/pcs</h5>
                        <h5 className='text-xl mb-2'>Supplier: {product.supplier_name}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
                        <div className='flex justify-between items-center'>
                            <h5 className='text-2xl'>Quantity: {product.quantity}/pcs</h5>
                            <button onClick={() => handleDelivered(product._id)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Delivered
                                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='md:mt-48 w-72 mx-auto md:col-span-7 items-center'>
                    <form onSubmit={handleStockUpdate}>
                        <div className='flex flex-col'>
                            <label className='block text-3xl text-center'><span>Restock</span> Products</label>
                            <input className='py-4 border-2 px-3 text-lg my-3 rounded shadow appearance-none focus:outline-none focus:shadow-outline' placeholder='Increase product' name='quantity' />
                            <input className='bg-green-400 py-3 rounded-xl cursor-pointer text-2xl hover:bg-green-500 text-white' type="submit" value="Restock" />
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default Inventory;