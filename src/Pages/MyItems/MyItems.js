import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../firebase.init.js'
import 'react-toastify/dist/ReactToastify.css';
import { AiFillDelete } from "react-icons/ai";
import { HiPencilAlt } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import axios from 'axios';
import { signOut } from 'firebase/auth';


const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        const getMyItems = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/myitems?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setMyItems(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 403 || error.response.status === 401) {
                    signOut(auth);
                    toast.success("Sign Out", {
                        toastId: 'success1',
                    });
                    navigate('/login');
                }
            }
        }

        getMyItems()

    }, [user]);

    const handleProductDelete = id => {
        const deleteConfirm = window.confirm("Delete Product?");
        if (deleteConfirm) {
            fetch(`http://localhost:5000/myitem/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('Product Deleted', {
                        toastId: 'success1',
                    });
                });
        };

    };

    const navigateToInventory = (id) => {
        navigate(`/inventory/${id}`);
    };


    return (
        <div className=''>
            <h2 className='text-4xl mx-8 text-center my-2'>My <span className='text-sky-500/100'>Items </span>{myItems.length} </h2>
            <div className="container sm:w-full md:w-4/6 mx-auto my-5  overflow-x-auto shadow-md sm:rounded-lg">
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
                        myItems.map(item =>
                            <tbody key={item._id}>
                                <Zoom>
                                    <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            {item.product_name}
                                        </th>
                                        <td className="px-6 py-4">
                                            ${item.price}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.quantity}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.supplier_name}
                                        </td>
                                        <td className="px-6 py-4 flex">
                                            <button onClick={() => handleProductDelete(item._id)} className="font-medium bg-red-400 py-2 px-3 m-2 rounded text-white">Delete <AiFillDelete className='inline' size={20} /></button>
                                            <button onClick={() => navigateToInventory(item._id)} className="font-medium bg-sky-500/100 py-2 px-3 m-2 rounded text-white">Update <HiPencilAlt className='inline' size={20} /></button>
                                        </td>
                                    </tr>
                                </Zoom>
                                <ToastContainer />
                            </tbody>
                        )}
                </table>
            </div>
        </div >
    );
};

export default MyItems;