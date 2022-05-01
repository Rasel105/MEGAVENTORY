import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading />
    }
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className="w-full" >
            <header className="bg-teal-400">
                <nav className="flex justify-between w-full bg-purple-500 text-white p-4">
                    <Link to="/"><span className="font-semibold text-xl tracking-tight">Inventory</span></Link>
                    <div className="md:items-center md:w-auto flex">
                        {
                            user
                                ? <div className='flex items-center'>
                                    <Link to="/" className="block md:text-white mr-2 md:mr-4" href="/link">Home</Link>
                                    <Link to="/inventory" className="block md:text-white mr-2 md:mr-4" href="/link">Inventory</Link>
                                    <Link to="/blogs" className="block md:text-white mr-2 md:mr-4" href="/link">Blogs</Link>
                                    <Link to="/dashboard" className="block md:text-white mr-2 md:mr-4" href="/link">Dashboard</Link>
                                    <button onClick={handleSignOut} className="p-2 ml-2 bg-white text-teal-500 font-semibold leading-none border border-gray-100 rounded hover:border-transparent hover:bg-gray-100" >Sign Out</button>
                                </div>
                                :
                                <div className="flex text-sm">
                                    <Link to="/login" className="p-2 ml-2 bg-white text-teal-500 font-semibold leading-none border border-gray-100 rounded hover:border-transparent hover:bg-gray-100" >Login</Link>
                                    <Link to="/signup" className="p-2 ml-2 bg-teal-500 text-gray-100 font-semibold leading-none border border-teal-600 rounded hover:border-transparent hover:bg-teal-600">Sign up</Link>
                                </div>
                        }
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;