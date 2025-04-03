import React from 'react'
import p1 from "../assets/p1.jpeg"
import p2 from "../assets/p2.jpg"
import p3 from "../assets/p3.jpg"
import p4 from "../assets/p4.jpg"
import { FaGithub } from 'react-icons/fa'
import styles from './Portfolio.module.css'

export const Portfolio = () => {
    const projects = [
        {
            id: 1,
            image: p1,
            github: "https://github.com/adityachaturvedii",
            title: "Brain Mask Extraction",
            description: "Developed and implemented a robust and efficient algorithm using Image Processing Techniques and a U-Net based Architecture to automate brain region extraction from Brain CT Angiography (CTA) images. Received a cash prize of Rs. 10,000 for winning the hackathon.",
            technologies: "PyTorch, MONAI, OpenCV"
        },
        {
            id: 2,
            image: p2,
            github: "https://github.com/adityachaturvedii",
            title: "Air Quality Index Prediction",
            description: "Aggregated and prepared 8 years of Climate Data from Open Source Climate API. Developed a machine learning model to predict Air Quality Index using PM 2.5 data, achieving accuracy of 0.87 on training and testing datasets.",
            technologies: "Python, Machine Learning, Data Analysis"
        },
        {
            id: 3,
            image: p3,
            github: "https://github.com/adityachaturvedii",
            title: "Stroke Detection Research",
            description: "Leading a research-driven Stroke Detection project, contributing to cutting-edge advancements in early stroke diagnosis, with a research paper in progress for publication.",
            technologies: "Deep Learning, Computer Vision, Medical Imaging"
        },
        {
            id: 4,
            image: p4,
            github: "https://github.com/adityachaturvedii",
            title: "Deep Learning for Healthcare",
            description: "Developed and deployed a Deep Learning-based Brain Extraction Model for CT images, improving the accuracy and efficiency with Mean IoU 99.5 and DICE of 0.98.",
            technologies: "PyTorch, MONAI, Python"
        }
    ]
  return (
    <div id="portfolio" className='w-full md:min-h-screen bg-black pt-20'>
        <div className='max-w-screen-lg p-4 w-full h-full mx-auto flex flex-col justify-center items-center text-white md:items-start'>
            <div className='pb-8'>
                <h2 className='text-4xl sm:text-5xl font:bold inline border-b-4 border-gray-500'>Portfolio</h2>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {projects.map(({id, image, github, title, description, technologies})=>(
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
                            <img 
                                src={image} 
                                alt={title}
                                className='w-full h-48 object-cover hover:scale-105 duration-200'
                            />
                            <div className='p-4'>
                                <h3 className='text-xl font-semibold mb-2'>{title}</h3>
                                <p className='text-gray-400 text-sm mb-3'>{description}</p>
                                <div className='mb-4'>
                                    <span className='text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded'>{technologies}</span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <a 
                                        href={github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className='flex items-center gap-2 hover:text-gray-400'
                                    >
                                        <div className={styles.githubIcon}>
                                            <FaGithub size={25} />
                                        </div>
                                        <span>View Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                ))}

            </div>
        </div>
    </div>
  )
}
