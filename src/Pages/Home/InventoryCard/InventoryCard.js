import React from 'react';

const InventoryCard = ({ product }) => {
    const { product_name, img, description, price, quantity, supplier_name } = product;
    return (
        <div className='border-2 max-h-full px-4 my-5 rounded-lg '>

            <img className='w-100 mx-auto rounded-t-lg' src={img} alt="" />
            <div className='max-h-full'>
                <p className='mb-2 text-2xl font-bold text-gray-900 tracking-tight dark:text-white'>{product_name}</p>
                <p className='mb-2 font-normal text-gray-700 dark:text-gray-400'>{description}</p>
                <p className=''>{price}</p>
                <p>{quantity}</p>
                <p className=''>{supplier_name}</p>
                <button className="mt-5 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Update
                    <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
        </div>
    );
};

export default InventoryCard;