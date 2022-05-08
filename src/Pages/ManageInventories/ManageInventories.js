import React from 'react';
import useAllProducts from '../../hooks/useAllProducts';
import { BiAddToQueue } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";
import { HiPencilAlt } from "react-icons/hi";
import Zoom from 'react-reveal/Zoom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageInventories = () => {
    const [products] = useAllProducts();
    const navigate = useNavigate()
    const handleProductDelete = id => {
        const deleteConfirm = window.confirm("Delete Product?");
        if (deleteConfirm) {
            fetch(`https://thawing-everglades-09724.herokuapp.com/product/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('Deleted successfully', {
                        toastId: 'success1',
                    });
                    // console.log(data);
                })
        }
    }

    const navigateToInventory = (id) => {
        navigate(`/inventory/${id}`);
    };

    return (
        <>
            <div className='container flex justify-between'>
                <h2 className='text-4xl mx-8 text-center my-2'><span className='text-sky-500/100'>Manage </span>Items</h2>
                <Link to='/additems' className='py-2 px-3 my-3 mr-2 bg-sky-500/100 rounded-lg text-xl text-white'>Add item
                    <BiAddToQueue className="inline m-2" />
                </Link>
            </div>
            <div className="container md:w-9/12 mx-auto my-5  overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quntitry
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Supplier
                            </th>
                            <th scope='col' className='px-6 py-3 text-center'>
                                Action
                            </th>
                        </tr>
                    </thead>
                    {
                        products.map(product =>
                            <Zoom>
                                <tbody key={product._id}>
                                    <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            {product.product_name}
                                        </th>
                                        <td className="px-6 py-4">
                                            ${product.price}
                                        </td>
                                        <td className="px-6 py-4">
                                            {product.quantity}
                                        </td>
                                        <td className="px-6 py-4">
                                            {product.supplier_name}
                                        </td>
                                        <td className="px-6 py-4 m-2 flex">
                                            <button onClick={() => handleProductDelete(product._id)} className="font-medium bg-red-400 py-2 px-2 m-2 rounded text-white">Delete  <AiFillDelete className='inline' size={20} /></button>
                                            <button onClick={() => navigateToInventory(product._id)} className="font-medium bg-sky-500/100 py-2 px-3 m-2 rounded text-white">Update  <HiPencilAlt className='inline' size={20} /></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Zoom>
                        )}
                </table>
            </div>
            <ToastContainer />
        </>

    );
};

export default ManageInventories;