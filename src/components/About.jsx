import React from 'react'

export const About = () => {
    return (
        <div id="about" className='w-full md:min-h-screen bg-black pt-20'>
            <div className='max-w-screen-lg p-4 w-full h-full mx-auto flex flex-col justify-center items-center text-white md:items-start'>
                <div className='py-6 sm:text-center md:text-left w-full'>
                    <h2 className='text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500'>About</h2>
                </div>

                <div className='text-xl mt-4 space-y-6'>
                    <p>
                        I'm a passionate Machine Learning Engineer with a strong drive to apply cutting-edge Computer Vision and Deep Learning techniques to solve real-world challenges in medical imaging. Known for dissecting complex problems through first-principles thinking and crafting scalable, high-performance solutions.
                    </p>
                    
                    <p>
                        In addition to my work at Proxmed, I've been actively involved in multiple AI conferences, where I've contributed insights and learned from leading experts. I've also been engaged in helping institutions and students enhance their machine learning capabilities through capacity building and training sessions.
                    </p>
                </div>
                
                <div className='py-6 mt-6 sm:text-center md:text-left w-full'>
                    <h3 className='text-2xl sm:text-3xl font-bold text-gray-300'>Education</h3>
                </div>
                
                <div className='w-full'>
                    <div className='mb-6'>
                        <h4 className='text-xl font-semibold'>B.S. Data Science & Application</h4>
                        <p className='text-gray-400'>Indian Institute of Technology Madras | 2020 - 2024</p>
                    </div>
                    
                    <div className='mb-6'>
                        <h4 className='text-xl font-semibold'>B.Tech Computer Science Engineering (AI/ML)</h4>
                        <p className='text-gray-400'>Lovely Professional University | 2020 - 2024</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
