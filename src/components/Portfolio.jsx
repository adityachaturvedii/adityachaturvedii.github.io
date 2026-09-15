import React from 'react'
import strokePlatform from "../assets/stroke-platform.jpg"
import mobileQaAgent from "../assets/mobile-qa-agent.jpg"
import ctSegmentation from "../assets/ct-segmentation.jpg"
import clinicalAiResearch from "../assets/clinical-ai-research.jpg"
import { FaGithub } from 'react-icons/fa'
import styles from './Portfolio.module.css'

export const Portfolio = () => {
    const projects = [
        {
            id: 1,
            image: strokePlatform,
            github: "https://github.com/adityachaturvedii",
            title: "Acute-Stroke Imaging Platform",
            description: "An on-premise clinical AI platform integrating three NCCT and CT-perfusion inference services, PACS/DICOM ingestion, resource-aware scheduling, and a unified clinical workflow.",
            technologies: "FastAPI, Docker, React, DICOM"
        },
        {
            id: 2,
            image: mobileQaAgent,
            github: "https://github.com/adityachaturvedii",
            title: "Multimodal Mobile QA Agent",
            description: "A multimodal Android agent combining visual reasoning, accessibility-tree interaction, trajectory capture, artifact upload, and knowledge-graph context during execution.",
            technologies: "Python, TypeScript, Multimodal Agents"
        },
        {
            id: 3,
            image: ctSegmentation,
            github: "https://github.com/adityachaturvedii",
            title: "Early Ischaemic Change Segmentation",
            description: "A 3D SegResNet pipeline for hypodensity segmentation on non-contrast CT, including registration, preprocessing, post-processing, and distributed HPC training.",
            technologies: "PyTorch, MONAI, 3D Imaging, HPC"
        },
        {
            id: 4,
            image: clinicalAiResearch,
            github: "https://github.com/adityachaturvedii",
            title: "Clinical AI Research Pipelines",
            description: "Reproducible pipelines for CT radiomics, structured LLM extraction from clinical notes, and laboratory-free risk modelling across liver-disease cohorts.",
            technologies: "Radiomics, LLMs, scikit-learn"
        }
    ]
  return (
    <div id="portfolio" className='w-full md:min-h-screen bg-black pt-20'>
        <div className='max-w-screen-lg p-4 w-full h-full mx-auto flex flex-col justify-center items-center text-white md:items-start'>
            <div className='pb-8'>
                <h2 className='text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500'>Selected Work</h2>
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
                                        <span>GitHub profile</span>
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
