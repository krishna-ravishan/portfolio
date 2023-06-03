import React from 'react'

import styles from '../style';

import innovation from '../assets/innovation-animate.svg'

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col`}>
      <div className="flex flex-col md:flex-row md:w-[100vw] md:h-[100vh]">
        <div className="flex-1 md:w-[50%] md:h-[100%]">
          <div className="md:w-[60%] md:h-[90%] relative md:top-36 md:left-16 text-center md:text-left">
            <h1 className='font-bold text-6xl md:text-8xl'>
              <span className="text-yellow-400">Nam</span>aste.</h1>
            <h3 className='font-sans text-xl'>
              Transforming Digital Experiences <br></br> 
              with Code & Creativity
            </h3>
            <p className='mt-7 px-16 md:px-0'>I’m a software engineer & UI UX Designer in a constant search new ideas to come up with the next best thing.  Welcome to my digital doorstep</p>
          </div>
        </div>
        <div className="flex flex-1 invisible sm:visible justify-center items-center md:w-[50%] md:h-[100%]">
          <img src={innovation} alt="" className='w-[40%] md:w-[80%] md:relative md:top-[-7%]'/>
        </div>
      </div>
      {/* check out image size. too big for tablets. Make changes to the font later */}
      {/* inria and lilia fonts */}
    </section>
    
  )
}

export default Hero