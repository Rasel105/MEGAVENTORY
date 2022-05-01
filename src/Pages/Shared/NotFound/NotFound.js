import React from 'react';
import notfound from '../../../images/NotFound/404.png'
import { AiOutlineHome } from "react-icons/ai";
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex flex-col items-center my-5'>
            <img className='w-2/4' src={notfound} alt="" />
            <div className='flex flex-col items-center'>
                <h2 className='text-4xl text-blue-300 text-center my-3'>Oops! This Page is Not Found.</h2>
                <p className='text-center text-gray-500'>The requested page doesn't exist.</p>
                <Link to="/" className='bg-emerald-400 w-2/5 py-3 px-3 my-3 text-lg rounded-md text-white text-center'>
                    <AiOutlineHome className='inline mr-2' />
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;