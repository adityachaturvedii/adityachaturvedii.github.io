import React from 'react'

export const WorkExperience = () => {
    const experiences = [
        {
            id: 1,
            title: 'Machine Learning Engineer',
            company: 'Proxmed Pty Ltd',
            period: 'October 2023 - Present',
            location: 'Melbourne, Australia',
            responsibilities: [
                'Developed and deployed a Deep Learning-based Brain Extraction Model for CT images, improving the accuracy and efficiency with Mean IoU 99.5 and DICE of 0.98.',
                'Leading a research-driven Stroke Detection project, contributing to cutting-edge advancements in early stroke diagnosis, with a research paper in progress for publication.',
                'Managed a team of 5 members, overseeing project coordination, providing mentorship, and fostering a collaborative environment to drive results.',
                'Contributed to team knowledge-sharing through regular discussions, code reviews, and collaborative learning initiatives.'
            ]
        },
        {
            id: 2,
            title: 'Big Data Intern',
            company: 'MedTourEasy',
            period: 'December 2022 - February 2023',
            location: 'New Delhi, India',
            responsibilities: [
                'Improved data-driven decisions by 15% through developing predictive models using Python and R for trend analysis.',
                'Conducted data cleaning and preprocessing, ensuring high-quality, structured datasets for model training and analysis.',
                'Participated in the development of automated pipelines for data extraction, transformation, and loading (ETL), improving overall data workflow efficiency.'
            ]
        }
    ]

    return (
        <div name="experience" className='w-full md:min-h-screen bg-black'>
            <div className='max-w-screen-lg p-4 w-full h-full mx-auto flex flex-col justify-center items-center text-white md:items-start'>
                <div className='py-6 sm:text-center md:text-left w-full'>
                    <h2 className='text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500'>Work Experience</h2>
                </div>

                <div className='w-full mt-8'>
                    {experiences.map(({ id, title, company, period, location, responsibilities }) => (
                        <div key={id} className='mb-12 relative pl-8 border-l-2 border-gray-700'>
                            <div className='absolute -left-3 top-0 w-6 h-6 rounded-full bg-rose-500'></div>
                            <h3 className='text-2xl font-bold'>{title}</h3>
                            <div className='flex flex-col md:flex-row md:items-center text-gray-400 mb-4'>
                                <span className='font-semibold text-rose-500'>{company}</span>
                                <span className='hidden md:inline mx-2'>•</span>
                                <span>{period}</span>
                                <span className='hidden md:inline mx-2'>•</span>
                                <span>{location}</span>
                            </div>
                            <ul className='list-disc pl-5 space-y-2 text-gray-300'>
                                {responsibilities.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
