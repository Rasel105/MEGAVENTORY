import React from 'react';
import useAllProducts from '../../hooks/useAllProducts';
import { BiAddToQueue } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";

const ManageInventories = () => {
    const [products] = useAllProducts();

    const handleProductDelete = id => {
        const deleteConfirm = window.confirm("Delete Product?");
        if (deleteConfirm) {
            fetch(`http://localhost:5000/product/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                })
        }
    }

    return (
        <>
            <div className='container flex justify-end'>
                <Link to='/additems' className='py-2 px-3 my-3 mr-2 bg-sky-500/100 rounded-lg text-xl text-white'>Add item
                    <BiAddToQueue className="inline m-2" />
                </Link>
            </div>
            <div className="container w-full mx-auto my-5  overflow-x-auto shadow-md sm:rounded-lg">
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
                            <th scope='col' className='px-6 py-3'>
                                Action
                            </th>
                        </tr>
                    </thead>
                    {
                        products.map(product => <tbody key={product._id}>
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
                                <td className="px-6 py-4">
                                    <button onClick={() => handleProductDelete(product._id)} href="#" className="font-medium bg-red-400 py-2 px-3 rounded text-white">Delete  <AiFillDelete className='inline' size={20} /></button>
                                </td>
                            </tr>

                        </tbody>
                        )}
                </table>
            </div>
        </>

    );
};

export default ManageInventories;