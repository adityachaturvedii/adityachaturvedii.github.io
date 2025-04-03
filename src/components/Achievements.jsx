import React from 'react'

export const Achievements = () => {
    const achievements = [
        {
            id: 1,
            year: '2025',
            title: 'Presenter, SPARC Seminar on Stroke Care',
            description: 'Presented work on Early Ischaemic Changes on Non-Contrast CT, hosted by the Centre for Biomedical Engineering at the Indian Institute of Technology, Delhi, and AIIMS, in collaboration with UNSW Medicine & Health.'
        },
        {
            id: 2,
            year: '2024',
            title: 'Special Invitee, SYNTACS 2024',
            description: 'Invited by the Head of the Department (CSE) to participate in the Symposium on Novel Technologies and Advances in Computer Science at IIT Ropar.'
        },
        {
            id: 3,
            year: '2023',
            title: 'Winter Student, Trust Lab, IIT Bombay',
            description: 'Awarded a fellowship at Trust Lab IIT Bombay to research the application of machine learning in cybersecurity and blockchain.'
        },
        {
            id: 4,
            year: '2022',
            title: 'Mentee, ACM IKDD & IIT Gandhinagar',
            description: 'Selected as part of a cohort of 50 from across India to spend the summer of 2022 at IIT Gandhinagar as a fully funded fellow. Received special appreciation for outstanding performance during the program.'
        },
        {
            id: 5,
            year: '2023',
            title: 'First Prize, Deep Learning Hackathon',
            description: 'Awarded ₹20,000 cash prize for winning first place in a college-wide hackathon focused on deep learning, showcasing excellence in machine learning and problem-solving.'
        }
    ]

    return (
        <div id="achievements" className='w-full md:min-h-screen bg-black pt-20'>
            <div className='max-w-screen-lg p-4 w-full h-full mx-auto flex flex-col justify-center items-center text-white md:items-start'>
                <div className='py-6 sm:text-center md:text-left w-full'>
                    <h2 className='text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500'>Achievements</h2>
                </div>

                <div className='w-full mt-8'>
                    {achievements.map(({ id, year, title, description }) => (
                        <div key={id} className='mb-10 relative pl-8 border-l-2 border-gray-700'>
                            <div className='absolute -left-3 top-0 w-6 h-6 rounded-full bg-rose-500'></div>
                            <div className='mb-1 text-rose-500 font-bold'>{year}</div>
                            <h3 className='text-xl font-bold mb-2'>{title}</h3>
                            <p className='text-gray-400'>{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
