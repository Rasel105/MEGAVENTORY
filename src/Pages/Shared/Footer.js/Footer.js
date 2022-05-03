import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const data = new Date()
    const currentDate = data.getFullYear();
    return (
        <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
            <div className="self-center">
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
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 text-center dark:text-gray-400"> <p> &copy; {currentDate} All Rights Reserved.</p>
            </span>
        </footer>

    );
};

export default Footer;