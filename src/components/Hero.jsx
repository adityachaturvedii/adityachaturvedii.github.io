import React from 'react'
import HeroImage from "../assets/final.png"
export const Hero = () => {
  return (
    <div id="home" className='min-h-screen w-full pt-20 md:pt-40 bg-black'>
      <div className='max-w-screen-lg flex flex-col-reverse mx-auto h-full w-full text-white justify-center md:flex-row'>
        <div className='flex flex-col justify-center h-full text-center md:text-left px-6 mt-8 md:mt-0'>
          <p className='text-rose-500 font-semibold tracking-[0.2em] uppercase mb-3'>Aditya Chaturvedi</p>
          <h1 className='text-4xl sm:text-7xl font-bold leading-tight'>MACHINE LEARNING ENGINEER</h1>
          <p className='text-gray-300 max-w-xl py-5 mx-auto md:mx-0 text-lg leading-relaxed'>
            I build production AI systems across agentic automation, computer vision, and healthcare—from research and validation to dependable deployment.
          </p>
          <div className='flex flex-wrap gap-3 mt-4 justify-center md:justify-start'>
            <a className='px-6 py-3 rounded-md bg-rose-500 hover:bg-rose-600 font-semibold transition-colors' href='/resume_adityachaturvedi.pdf' download>Download resume</a>
            <a className='px-6 py-3 rounded-md border border-gray-700 hover:border-gray-400 font-semibold transition-colors' href='mailto:chaturvediaditya910@gmail.com'>Get in touch</a>
          </div>
        </div>
        <div className='flex justify-center items-center md:mt-0'>
          <img src={HeroImage} alt='Aditya Chaturvedi' className='rounded-2xl mx-auto w-2/3 md:w-full'></img>
        </div>
      </div>
    </div>
  )
}
