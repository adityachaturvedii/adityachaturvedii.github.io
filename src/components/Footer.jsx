import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export const Footer = () => {
    return (
        <footer className='bg-black text-white py-8 border-t border-gray-800'>
            <div className='max-w-screen-lg mx-auto px-4'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='mb-4 md:mb-0'>
                        <h3 className='text-2xl font-bold'>Aditya Chaturvedi</h3>
                        <p className='text-gray-400 mt-1'>Machine Learning Engineer</p>
                    </div>
                    
                    <div className='flex space-x-4'>
                        <a 
                            href='mailto:chaturvediaditya910@gmail.com'
                            className='text-gray-400 hover:text-rose-500 transition-colors'
                            aria-label='Email'
                        >
                            <FaEnvelope size={24} />
                        </a>
                        <a 
                            href='https://linkedin.com/in/adityachaturvedii'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-400 hover:text-rose-500 transition-colors'
                            aria-label='LinkedIn'
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a 
                            href='https://github.com/adityachaturvedii'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-400 hover:text-rose-500 transition-colors'
                            aria-label='GitHub'
                        >
                            <FaGithub size={24} />
                        </a>
                    </div>
                </div>
                
                <div className='mt-6 text-center text-gray-500 text-sm'>
                    <p>&copy; {new Date().getFullYear()} Aditya Chaturvedi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
