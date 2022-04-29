import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav className='bg-indigo-300'>
            <div onClick={() => setOpen(!open)} className='h-7 w-7 text-black md:hidden'>
                {open ? <XIcon/> :  <MenuIcon />}
            </div>
            <ul className={`md:flex justify-center w-full bg-indigo-300 md:static absolute duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                <li><Link to="/">Home</Link></li>
                <div className='md:flex'>
                    <li><Link className='mr-3' to="/">Contact</Link></li>
                    <li><Link className='mr-3' to="/">Coupon</Link></li>
                    <li><Link className='mr-3' to="/">Inventory</Link></li>
                    <li><Link className='mr-3' to="/">Deals</Link></li>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;