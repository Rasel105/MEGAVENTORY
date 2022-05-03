import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { signOut } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading />
    }
    
    const handleSignOut = () => {
        signOut(auth);
        toast.success("Sign Out", {
            toastId: 'success1',
        });
    }

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-4 bg-purple-500">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link to="/"
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                        >
                            Megaventory
                        </Link>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <HiMenu size={30} />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        {
                            user ? <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                <li className="nav-item">
                                    <Link to='/'
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/manageInventories'
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    >
                                        Manage Items
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/additems"
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    >
                                        Add Item
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/myitems"
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    >
                                        My Items
                                    </Link>
                                </li>
                                <button onClick={handleSignOut} className="p-2 ml-2 bg-white text-teal-500 font-semibold leading-none border border-gray-100 rounded hover:border-transparent hover:bg-gray-100" >Sign Out</button>

                            </ul> : <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                <li className="nav-item">
                                    <Link to="/login"
                                        className="px-2 py-2 mr-3 mb-2 bg-white text-teal-500 border-gray-100 rounded hover:border-transparent hover:bg-gray-100 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                    >
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/signup"
                                        className="px-3 py-2 bg-teal-500 text-gray-100 border-teal-600 rounded hover:border-transparent hover:bg-teal-600 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                    >
                                        Register
                                    </Link>
                                </li>
                            </ul>
                        }
                    </div>
                </div>
                <ToastContainer/>
            </nav>
        </>

    );
};

export default Navbar;