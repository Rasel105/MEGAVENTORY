import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiArrowSmRight } from "react-icons/hi";
import imgaa from '../../../images/images/dell-2.png'
 

const InventoryCard = ({ product }) => {
    const {_id, product_name, img, description, price, quantity, supplier_name } = product;
    const navigate = useNavigate();
    const navigateToInventory = (id) => {
        navigate(`/inventory/${id}`);
    };
    return (
        <div className="max-w-sm mx-auto items-center justify-center bg-white rdounde-lg border rounded-lg my-2 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={img} alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">{product_name}</h5>
                <h5 className='text-2xl'>Price: ${price}</h5>
                <h5 className='text-xl mb-2'>Supplier: {supplier_name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" title={description}>{description.slice(0, 120)}...</p>
                <div className='flex justify-between items-center'>
                    <h5 className='text-2xl text-gray-700'>Quantity: {quantity}/pcs</h5>
                    <button onClick={() => navigateToInventory(_id)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Manage
                        <HiArrowSmRight size={25}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InventoryCard;