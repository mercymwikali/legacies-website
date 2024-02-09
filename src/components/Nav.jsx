import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import { logo } from '../assets/images';
import { navLinksdata } from '../constants/menu';
import WhatsAppButton from './whatsApp';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
    const [nav, setNav] = useState(false);

    return (
        <div className="flex justify-between w-full shadow-lg z-40 p-4">
            <div className="items-center cursor-pointer">
                {/* Apply max width to the logo */}
                <img src={logo} alt='logo' className='max-w-[200px]' />
            </div>
            <div className='flex justify-around items-center pl-3 text-gray-400 w-full'>
                <ul className='hidden md:flex text-center gap-x-10'>
                    {navLinksdata.map(({ _id, label, key }) => (
                        <li
                            key={_id}
                            className="cursor-pointer capitalize font-bold text-slate-500 hover:text-red duration-200"
                        >
                            {/* Use Link from react-scroll with to prop */}
                            <Link to={key} smooth duration={500}>{label}</Link>
                        </li>
                    ))}
                </ul>
                <div className='hidden md:flex md:mx-10'>
                    <WhatsAppButton />
                </div>
            </div>
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 pt-2 z-10 text-black md:hidden'>
                {nav ? <FaTimes size={25} className=' text-black' /> : <FaBars size={25} className='text-black' />}

                {/* Mobile Menu */}
                {nav && (
                    <div className='fixed top-0 left-0 w-full h-screen bg-neutral-400'>
                      
                        <ul className='flex flex-col justify-center items-center h-full'>
                            {navLinksdata.map(({ _id, label, key }) => (
                                <li key={_id}
                                className='px-4 cursor-pointer capitalize py-3 text-2xl'>
                                <Link onClick={() => setNav(!nav)}
                                  to={key}
                                  smooth duration={500}>{label}</Link>
                              </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Nav;
