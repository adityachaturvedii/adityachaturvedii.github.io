import React from 'react'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

export const Publications = () => {
    const publications = [
        {
            title: 'Endovascular thrombectomy for patients with large-core ischaemic stroke presenting up to 24 h after onset (ATLAS)',
            venue: 'The Lancet · May 2026',
            description: 'Individual-patient-data meta-analysis of six randomised trials with central imaging adjudication. The study found improved functional outcomes and lower mortality with thrombectomy compared with medical management.',
            href: 'https://doi.org/10.1016/S0140-6736(26)00876-7',
            label: 'Published article'
        },
        {
            title: 'Non-Contrast CT Severe Hypodensity versus Net Water Uptake in Assessing Thrombectomy Treatment Effect in Large Core Stroke',
            venue: 'Stroke, Volume 57, Supplement 1 (A031) · January 2026',
            description: 'Secondary analysis of the SELECT2 trial evaluating severe CT hypodensity versus net water uptake as imaging biomarkers for thrombectomy treatment effect in large-core stroke.',
            href: 'https://www.ahajournals.org/toc/str/57/Suppl_1?innerSection=Session+Title%3A+Imaging+in+Stroke+Oral+Abstracts',
            label: 'ISC 2026 abstract'
        },
        {
            title: 'Machine Learning-Based Models Predict Beta-Blocker Response Using Non-Invasive Tests in Patients with Acute Variceal Bleed — BE-RESPONSE Study',
            venue: 'APASL Annual Meeting · 2026',
            description: 'Machine-learning models using non-invasive tests to predict beta-blocker response in patients with acute variceal bleeding.',
            href: 'https://www.apasl2026istanbul.org/files/downloads/APASL2026-Abstract-List.pdf',
            label: 'Accepted abstract'
        }
    ]

    return (
        <section id='publications' className='w-full bg-black pt-20'>
            <div className='max-w-screen-lg p-4 mx-auto text-white'>
                <div className='pb-8'>
                    <h2 className='text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500'>Publications</h2>
                </div>
                <div className='grid gap-5'>
                    {publications.map((publication) => (
                        <article key={publication.title} className='border border-gray-800 rounded-xl p-6 hover:border-rose-500/70 transition-colors bg-gray-950'>
                            <div className='text-rose-500 text-sm font-semibold uppercase tracking-wider mb-2'>{publication.label}</div>
                            <h3 className='text-xl sm:text-2xl font-bold leading-snug'>{publication.title}</h3>
                            <p className='text-gray-400 mt-2'>{publication.venue}</p>
                            <p className='text-gray-300 mt-4 leading-relaxed'>{publication.description}</p>
                            <a href={publication.href} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 mt-5 text-rose-400 hover:text-rose-300 font-semibold'>View publication <FaArrowUpRightFromSquare size={14} /></a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
