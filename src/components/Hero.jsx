import React from 'react'
import HeroImage from "../assets/final.png"
export const Hero = () => {
  return (
    <div id="home" className='min-h-screen w-full pt-20 md:pt-40 bg-black'>
      <div className='max-w-screen-lg flex flex-col-reverse mx-auto h-full w-full text-white justify-center md:flex-row'>
        <div className='flex flex-col justify-center h-full text-center md:text-left px-6 mt-8 md:mt-0'>
          <h2 className='text-4xl sm:text-7xl font-bold'>MACHINE LEARNING ENGINEER</h2>
          <p className='text-gray-500 max-w-md py-4 mx-auto md:mx-0'>
            I'm Aditya, a Machine Learning Engineer at Proxmed Pty Ltd, where I specialize in leveraging deep learning algorithms to create innovative solutions in healthcare, with a particular focus on Stroke Research. My expertise lies in applying computer vision techniques to improve early stroke detection. Since joining Proxmed, I've been dedicated to developing advanced solutions aimed at identifying strokes within critical early windows.
          </p>
          <div className='w-fit px-6 py-3 mt-5 rounded-md bg-gradient-to-r from-rose-500 to-black'>
            <a href='/resume_adityachaturvedi.pdf' download={true}>Resume</a>
          </div>
        </div>
        <div className='flex justify-center items-center md:mt-0'>
          <img src={HeroImage} className='rounded-2xl mx-auto w-2/3 md:w-full'></img>
        </div>
      </div>
    </div>
  )
}
