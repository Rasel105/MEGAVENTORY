import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <div className="w-full" >
            <header className="bg-teal-400">
                <nav className="flex justify-between w-full bg-purple-500 text-white p-4">
                    <Link to="/"><span className="font-semibold text-xl tracking-tight">Title</span></Link>
                    <div className="md:items-center md:w-auto flex">
                        <div className="md:flex hidden">
                            <Link to="/" className="block md:text-white mr-4" href="/link">Link 1</Link>
                            <Link to="/" className="block md:text-white mr-4" href="/link">Link 2</Link>
                            <Link to="/" className="block md:text-white mr-4" href="/link">Link 3</Link>
                            < Link to="/" className="block md:text-white mr-4" href="/link">Link 4</Link>
                        </div>
                        <div className="flex text-sm">
                            <Link to="/login" className="p-2 ml-2 bg-white text-teal-500 font-semibold leading-none border border-gray-100 rounded hover:border-transparent hover:bg-gray-100" >Login</Link>
                            <Link to="/signup" className="p-2 ml-2 bg-teal-500 text-gray-100 font-semibold leading-none border border-teal-600 rounded hover:border-transparent hover:bg-teal-600">Sign up</Link>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;