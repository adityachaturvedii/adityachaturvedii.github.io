import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export const Contact = () => {
    return (
        <div id="contact" className='w-full md:min-h-screen bg-black pt-20'>
            <div className='max-w-screen-lg p-4 w-full h-full mx-auto flex flex-col justify-center items-center text-white md:items-start'>
                <div className='py-6 sm:text-center md:text-left w-full'>
                    <h2 className='text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500'>Contact</h2>
                </div>

                <div className='w-full mt-8 flex flex-col md:flex-row gap-10'>
                    {/* Contact Information */}
                    <div className='w-full md:w-1/2'>
                        <h3 className='text-2xl font-bold mb-6'>Get In Touch</h3>
                        <p className='text-gray-300 mb-8'>
                            I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to discuss potential projects or just want to connect!
                        </p>
                        
                        <div className='space-y-4'>
                            <div className='flex items-center gap-4'>
                                <div className='bg-rose-500 p-3 rounded-full'>
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <h4 className='text-lg font-semibold'>Email</h4>
                                    <a href='mailto:chaturvediaditya910@gmail.com' className='text-gray-300 hover:text-rose-500 transition-colors'>
                                        chaturvediaditya910@gmail.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className='flex items-center gap-4'>
                                <div className='bg-rose-500 p-3 rounded-full'>
                                    <FaLinkedin size={20} />
                                </div>
                                <div>
                                    <h4 className='text-lg font-semibold'>LinkedIn</h4>
                                    <a href='https://linkedin.com/in/adityachaturvedii' target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-rose-500 transition-colors'>
                                        linkedin.com/in/adityachaturvedii
                                    </a>
                                </div>
                            </div>
                            
                            <div className='flex items-center gap-4'>
                                <div className='bg-rose-500 p-3 rounded-full'>
                                    <FaGithub size={20} />
                                </div>
                                <div>
                                    <h4 className='text-lg font-semibold'>GitHub</h4>
                                    <a href='https://github.com/adityachaturvedii' target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-rose-500 transition-colors'>
                                        github.com/adityachaturvedii
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Contact Form */}
                    <div className='w-full md:w-1/2'>
                        <h3 className='text-2xl font-bold mb-6'>Send a Message</h3>
                        <form className='space-y-4'>
                            <div>
                                <label htmlFor='name' className='block text-sm font-medium text-gray-300 mb-1'>Name</label>
                                <input 
                                    type='text' 
                                    id='name' 
                                    className='w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500'
                                    placeholder='Your Name'
                                />
                            </div>
                            
                            <div>
                                <label htmlFor='email' className='block text-sm font-medium text-gray-300 mb-1'>Email</label>
                                <input 
                                    type='email' 
                                    id='email' 
                                    className='w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500'
                                    placeholder='Your Email'
                                />
                            </div>
                            
                            <div>
                                <label htmlFor='message' className='block text-sm font-medium text-gray-300 mb-1'>Message</label>
                                <textarea 
                                    id='message' 
                                    rows='5'
                                    className='w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500'
                                    placeholder='Your Message'
                                ></textarea>
                            </div>
                            
                            <button 
                                type='submit'
                                className='px-6 py-3 bg-gradient-to-r from-rose-500 to-black text-white font-medium rounded-md hover:opacity-90 transition-opacity'
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
