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
                        I work at the intersection of applied machine learning and systems engineering. My experience spans multimodal agents, medical imaging, 3D segmentation, inference services, distributed training, data pipelines, and cloud and on-premises deployment.
                    </p>
                    
                    <p>
                        In healthcare, I build clinical AI infrastructure and research imaging biomarkers across stroke and liver disease. In agentic automation, I develop systems that turn natural-language goals into reliable web and mobile execution, with production feedback loops and reproducible evaluation.
                    </p>
                </div>
                
                <div className='py-6 mt-6 sm:text-center md:text-left w-full'>
                    <h3 className='text-2xl sm:text-3xl font-bold text-gray-300'>Education</h3>
                </div>
                
                <div className='w-full'>
                    <div className='mb-6'>
                        <h4 className='text-xl font-semibold'>B.S., Data Science &amp; Applications</h4>
                        <p className='text-gray-400'>Indian Institute of Technology Madras | 2020 - 2024</p>
                    </div>
                    
                    <div className='mb-6'>
                        <h4 className='text-xl font-semibold'>B.Tech., Computer Science &amp; Engineering</h4>
                        <p className='text-gray-400'>Lovely Professional University | 2020 - 2024</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
