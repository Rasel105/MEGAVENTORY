import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiMenu } from "react-icons/hi";
import CustomLink from '../CustomLink/CustomLink'
import { Link } from 'react-router-dom';
import { AiOutlineLogin } from 'react-icons/ai';
import { SiGnuprivacyguard } from 'react-icons/si';
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [user] = useAuthState(auth);


    const handleSignOut = () => {
        signOut(auth);
        toast.success("Sign Out", {
            toastId: 'success1',
        });
    }

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-4 bg-purple-500 shadow-2xl">
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
                                    <CustomLink to='/'
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    >
                                        Home
                                    </CustomLink>
                                </li>
                                <li className="nav-item">
                                    <CustomLink to='/manageInventories'
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    >
                                        Manage Items
                                    </CustomLink>
                                </li>
                                <li className="nav-item">
                                    <CustomLink to="/additems"
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    >
                                        Add Item
                                    </CustomLink>
                                </li>
                                <li className="nav-item">
                                    <CustomLink to="/myitems"
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    >
                                        My Items
                                    </CustomLink>
                                </li>
                                <li className="nav-item">
                                    <CustomLink to="/blogs"
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    >
                                        Blogs
                                    </CustomLink>
                                </li>
                                <li className="nav-item">
                                    <CustomLink to="/blog"
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    >
                                        Add Blog
                                    </CustomLink>
                                </li>
                                <button onClick={handleSignOut} className="p-2 ml-2 bg-white text-sky-500 font-semibold leading-none border border-gray-100 rounded hover:border-transparent hover:bg-gray-100" >
                                    Sign Out <FiLogOut className='inline-block' size={18}/>
                                </button>

                            </ul> : <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                <li className="nav-item">
                                    <Link to="/login"
                                        className="px-2 py-2 mr-3 mb-2 bg-white text-teal-500 border-gray-100 rounded hover:border-transparent hover:bg-gray-100 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                    >
                                        Login <AiOutlineLogin className='ml-1' size={20} />
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/signup"
                                        className="px-3 py-2 bg-teal-500 text-gray-100 border-teal-600 rounded hover:border-transparent hover:bg-teal-600 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                    >
                                        Register <SiGnuprivacyguard className='ml-1' size={18} />
                                    </Link>
                                </li>
                            </ul>
                        }
                    </div>
                </div>
                <ToastContainer />
            </nav>
        </>

    );
};

export default Navbar;