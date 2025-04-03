import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'

export const Navbar = () => {
    const [nav, setNav] = useState(false)
    
    const links = [
        {
            id: 1,
            title: 'home'
        },
        {
            id: 2,
            title: 'about'
        },
        {
            id: 3,
            title: 'achievements'
        },
        {
            id: 4,
            title: 'portfolio'
        },
        {
            id: 5,
            title: 'experience'
        },
        {
            id: 6,
            title: 'contact'
        }
    ]
    
    const handleClick = (title) => {
        const element = document.getElementById(title);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setNav(false); // Close mobile menu after clicking
    }
    
    return (
        <div className='flex justify-between px-4 items-center bg-black text-white w-full h-20 fixed top-0 z-50'>
            <div className='text-3xl font-bold ml-2'>ADITYA</div>
            <ul className='hidden md:flex'>
                {links.map((data) => (
                    <li 
                        key={data.id} 
                        className='text-2xl px-4 capitalize cursor-pointer text-gray-500 hover:text-white hover:scale-105 duration-200'
                        onClick={() => handleClick(data.title)}
                    >
                        {data.title}
                    </li>
                ))}
            </ul>
            <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer pr-4 z-10 text-gray-500'>
                {nav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>}
            </div>
            {nav && (
                <ul className='flex flex-col items-center justify-center absolute top-0 left-0 w-full h-screen bg-black'>
                    {links.map((data) => (
                        <li 
                            key={data.id} 
                            className='text-2xl py-4 capitalize cursor-pointer text-gray-500 hover:text-white hover:scale-105 duration-200'
                            onClick={() => handleClick(data.title)}
                        >
                            {data.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
