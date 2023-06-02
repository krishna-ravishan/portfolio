import React from 'react'

import me from "../assets/images/1.jpg"
import Vector2 from "../assets/images/Vector2.png"
import Vector3 from "../assets/images/Vector3.png"

const About = () => {
  return (
    <section id="about" className={`flex md:flex-row flex-col mb-10`}>
        <div className="flex flex-col w-[100vw] h-[100vh] md:flex-row md:w-[100vw] md:h-[100vh]">
          <div className="flex-1 w-[100%] md:block h-[40%] mb-0 md:w-[50%] md:h-[100%]">
            <img src={me} alt="portrait" className='block mx-auto pr-8 md:mx-0 md:pr-0 rounded-md rounded-tr-3xl h-[90%] md:w-[70%] md:h-auto'/>
          </div>
          <div className="flex-1 h-[60%] md:w-[50%] md:h-[100%] mt-0">
            <h1 className='font-bold text-6xl md:text-8xl pr-0 font-poppins'>Hello <span className="text-yellow-400">there.</span></h1>
              <p className="text-lg md:text-xl mt-6 font-poppins">My name is Krishna Ravishanker. I’m a software engineer and UI UX Designer. & No, contrary to popular assumptions, my life isn't a Bollywood movie. I must clarify that I do not have a harem of 16,108 wives, nor have I crossed paths with a divine soul named Radha. However, if fate brings us together, I might just end up marrying her and live out a love story that rivals legends.</p>
              <p className="text-lg md:text-xl mt-3 font-poppins">As a software engineer specializing in front end engineering I’ve an entrepreneurial spirit and a passion for turning ideas into digital reality. If I’m not writing lines of code, I’m playing the guitar, reading, working on my ideas or rocking it out in the gym. Check out my resume down below!</p>
              <button className=''><a href="">Resume</a></button>
          </div>
        </div>
        <div className="about-back absolute -z-10 mx-0 top-[110vh] left-0">
          <img src={Vector2} alt="" className='w-[70vw] h-[100%]'/>
        </div>
        <div className="about-back-1 absolute -z-10 top-[120vh] left-[40vw]">
          <img src={Vector3} alt="" className='w-[20vw] h-[100%]' />
        </div>
    </section>
  )
}

export default About