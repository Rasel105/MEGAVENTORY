import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram, BsTelegram, BsPinterest } from "react-icons/bs";

const Footer = () => {
    const data = new Date()
    const currentDate = data.getFullYear();
    return (
        <footer className="p-4 bg-gray-200 shadow md:px-6 md:py-8 dark:bg-gray-800 mt-14">
            <div className="sm:flex sm:justify-between">
                <Link to="/" className="flex items-center mb-4 sm:mb-0">
                    <span className="self-center sm:self-center text-2xl font-semibold dark:text-white">Megaventory</span>
                </Link>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <Link to="/" className="mr-4 hover:underline md:mr-6 ">About</Link>
                    </li>
                    <li>
                        <Link to="/" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="/" className="mr-4 hover:underline md:mr-6 ">Licensing</Link>
                    </li>
                    <li>
                        <Link to="/" className="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                <div className='flex justify-center my-2'>
                    <BsFacebook className='text-blue-800 mr-2' size={30} />
                    <BsTwitter className='mr-2' color='#00acee' size={30}/>
                    <BsYoutube className='mr-2' color='#FF0000' size={30}/>
                    <BsInstagram className='mr-2' color='#3f729b' size={30}/>
                    <BsTelegram className='mr-2' color='#229ED9' size={30}/>
                    <BsPinterest className='mr-2' color='#E60023' size={30}/>
                </div>
                &copy; {currentDate} All Rights Reserved Megaventory.
            </span>
        </footer>

    );
};

export default Footer;