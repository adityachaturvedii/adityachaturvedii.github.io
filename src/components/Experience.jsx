import React from 'react'
import python from '../assets/python.png'
import reactImage from '../assets/react.svg'
import pytorch from '../assets/pytorch.png'
import monai from '../assets/monai.png'
import opencv from '../assets/opencv.png'
import bash from '../assets/bash.png'
import git from '../assets/git.png'

export const Experience = () => {
    // Skills/Technologies
    const techs = [
        {
            id: 1,
            src: python,
            title: 'Python',
            style: 'shadow-blue-600'
        },
        {
            id: 2,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 3,
            src: pytorch,
            title: 'PyTorch',
            style: 'shadow-blue-600'
        }, 
        {
            id: 4,
            src: monai,
            title: 'MONAI',
            style: 'shadow-blue-600'
        },         
        {
            id: 5,
            src: opencv,
            title: 'OpenCV',
            style: 'shadow-blue-600'
        },
        {
            id: 6,
            src: bash,
            title: 'Bash',
            style: 'shadow-blue-600'
        },
        {
            id: 7,
            src: git,
            title: 'Git',
            style: 'shadow-blue-600'
        }
    ]

    // Work Experience
    const experiences = [
        {
            id: 1,
            title: 'Machine Learning Engineer',
            company: 'Proxmed Pty Ltd',
            period: 'October 2023 - Present',
            location: 'Melbourne, Australia · Remote',
            responsibilities: [
                'Built an on-premise acute-stroke imaging platform integrating three AI inference services behind a unified FastAPI interface and React clinical workflow.',
                'Designed resource-aware scheduling, multi-tenant authorization, PACS/DICOM ingestion, modality routing, and resilient inference delivery.',
                'Developed a 3D SegResNet pipeline for early ischaemic hypodensity segmentation, achieving mean Dice 0.84 on held-out cases.',
                'Lead imaging operations for the TENACITY multi-site stroke trial across sponsor, CRO, imaging-vendor, and internal teams.'
            ]
        },
        {
            id: 2,
            title: 'Machine Learning Engineer',
            company: 'QAI',
            period: 'June 2025 - March 2026',
            location: 'Germany · Remote',
            responsibilities: [
                'Built core components of an open-source AI quality-assurance platform for natural-language web and mobile testing.',
                'Extended DroidRun into a multimodal Android agent combining visual reasoning, accessibility-tree interaction, trajectory capture, artifact upload, and knowledge-graph context.',
                'Designed UI-flow graph versioning and diffing, and built the production feedback loop across a TypeScript telemetry SDK and Python anomaly engine.',
                'Decoupled execution and storage from GCP to enable full local deployment and support the platform’s open-source release.'
            ]
        },
        {
            id: 3,
            title: 'Research Engineer, Clinical AI',
            company: 'Institute of Liver & Biliary Sciences (ILBS)',
            period: 'September 2025 - August 2026',
            location: 'New Delhi, India',
            responsibilities: [
                'Led a CT radiomics study in alcoholic hepatitis across 513 cases using IBSI-compliant extraction, pre-registered hypotheses, and permutation testing.',
                'Built an LLM extraction pipeline that turns free-text hepatology discharge summaries into schema-validated cohort records.',
                'Developed a laboratory-free, sex-specific steatotic liver disease risk model using data from more than 6,000 South Asian adults.',
                'Served as a principal AI contributor to Project Walk For Life, a MeitY-funded national preventive healthcare initiative.'
            ]
        },
        {
            id: 4,
            title: 'Machine Learning Engineer',
            company: 'Sorcova Health SAS',
            period: '2025 - Present',
            location: 'France · Remote',
            responsibilities: [
                'Design and build the Health Profile Service, the core data and inference backend for a precision-medicine platform pursuing EU MDR Class IIa certification.',
                'Implemented de-identification and governance workflows supporting GDPR, EU MDR, and EU AI Act requirements.',
                'Automated legal and quality-system document generation through a programmatic Node.js pipeline.'
            ]
        },
        {
            id: 5,
            title: 'Big Data Intern',
            company: 'MedTourEasy',
            period: 'December 2022 - February 2023',
            location: 'New Delhi, India',
            responsibilities: [
                'Built automated ETL pipelines for multi-gigabyte daily healthcare datasets and predictive models in Python and R, replacing manual cleaning and validation steps.'
            ]
        }
    ]

    return (
        <div id='experience' className='w-full md:min-h-screen bg-black pt-20'>
            <div className='max-w-screen-lg p-4 w-full h-full mx-auto flex flex-col justify-center items-center text-white md:items-start'>
                <div className='w-full'>
                    <h2 className='text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500'>Experience</h2>
                </div>

                {/* Work Experience Section */}
                <div className='w-full mt-8'>
                    <h3 className='text-2xl sm:text-3xl font-bold text-gray-300 mb-6'>Work History</h3>
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

                {/* Skills Section */}
                <div className='w-full mt-8'>
                    <h3 className='text-2xl sm:text-3xl font-bold text-gray-300 mb-6'>Technical Skills</h3>
                    <p className='py-2 text-lg text-gray-300 mb-5 leading-relaxed'>Python · C++ · SQL · R · Java · TypeScript · PyTorch · MONAI · scikit-learn · TensorFlow · Hugging Face · MLX · FastAPI · Docker · Redis · React/Next.js · AWS · MLflow · SLURM/HPC · DICOM/NIfTI</p>
                    <div className='w-full grid grid-cols-2 sm:grid-cols-3 text-center py-4 px-12 sm:px-0'>
                        {techs.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md hover:scale-110 duration-300 py-6 px-8 rounded-lg ${style} cursor-pointer mb-6`}>
                                <img src={src} alt={title} className='w-24 h-24 mx-auto object-contain' />
                                <p className='text-2xl mt-4'>{title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
