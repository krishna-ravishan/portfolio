import React from 'react'

import Vector4 from '../assets/images/Vector4.png'

const Background = () => {
  return (
    <>
    <div className="absolute -z-10 mb-3">
      <img src={Vector4} alt="" className="w-[170vw] h-[120vh]" />
    </div>
    <h1 className='font-bold text-4xl md:text-5xl pr-0 font-poppins text-center my-6'><span className="text-yellow-400">Back</span>ground</h1>
        <br />
    <section id="background" className={`flex md:flex-row flex-col mb-8`}>
        <div className="container flex flex-col justify-center items-center md:flex-row h-[300vh] md:w-[100vw] md:h-[110vh]">
          <div className="flex-1 w-[75%] h-[100%] md:w-[30%] md:h-[100%]">
            <div className="">
            <h1 className='font-bold text-2xl md:text-4xl pr-0 font-poppins'>Edu<span className="text-yellow-400">cation</span></h1>
              <div className="my-6">
                <h3 className="text-xl font-bold">Manipal University Jaipur</h3>
                <h4 className="text-base font-normal">BTech Information Technology</h4>
                <ul className="text-sm list-none text-neutral-500 dark:text-neutral-300">
                  <li>Awarded deans list for academic excellence (x2)</li>
                </ul>
              </div>
              <div className="my-14">
                <h3 className="text-xl font-bold">Manipal University Jaipur</h3>
                <h4 className="text-base font-normal">BTech Information Technology</h4>
                <ul className="text-sm list-none text-neutral-500 dark:text-neutral-300">
                  <li>Awarded deans list for academic excellence (x2)</li>
                </ul>
              </div>
              <div className="my-14">
                <h3 className="text-xl font-bold">Manipal University Jaipur</h3>
                <h4 className="text-base font-normal">BTech Information Technology</h4>
                <ul className="text-sm list-none text-neutral-500 dark:text-neutral-300">
                  <li>Awarded deans list for academic excellence (x2)</li>
                </ul>
              </div>
              <div className="my-14">
                <h3 className="text-xl font-bold">Manipal University Jaipur</h3>
                <h4 className="text-base font-normal">BTech Information Technology</h4>
                <ul className="text-sm list-none text-neutral-500 dark:text-neutral-300">
                  <li>Awarded deans list for academic excellence (x2)</li>
                </ul>
              </div>
              
            </div>
          </div>
          <div className="flex-1 w-[75%] h-[100%] md:w-[30%] md:h-[100%]">
            <div className="">
            <h1 className='font-bold text-2xl md:text-4xl pr-0 font-poppins'>Ski<span className="text-yellow-400">lls</span></h1>
            <div className="">
              <h3 className='text-xl font-bold mt-6'>Programming Skills</h3>
              <ul className="list-none">
              <li className='flex items-center'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
                className='w-4 my-3'
                /> 
                <p className='indent-2 md:indent-5'>HTML &#91; Advanced  &#93;</p>
              </li>
              <li className='flex items-center'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
                className='w-4 my-3'
                />
                <p className='indent-2 md:indent-5'>CSS &#91; Intermediate  &#93;</p>
              </li>
              <li className='flex items-center'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                className='w-4 my-3'
                />
                <p className='indent-2 md:indent-5'>JS/ES6+ &#91; Intermediate  &#93;</p>
              </li>
              <li className='flex items-center'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" 
                className='w-4 my-3'
                />
                <p className='indent-2 md:indent-5'>C &#91; Advanced  &#93;</p>
              </li>
              <li className='flex items-center'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
                className='w-4 my-3'
                />
                <p className='indent-2 md:indent-5'>Python &#91; Beginner  &#93;</p>
              </li>
              <li className='flex items-center'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" 
                className='w-4 my-3'
                />
                <p className='indent-2 md:indent-5'>PHP &#91; Intermediate  &#93;</p>
              </li>
              <li className='flex items-center'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
                className='w-4 my-3'
                />
                <p className='indent-2 md:indent-5'>MySQL &#91; Intermediate  &#93;</p>
              </li>
              </ul>
            </div>
            <div className="">
              <h3 className='text-xl font-bold'>Miscellaneous Skills</h3>
              <ul className="list-none">
              <li className='flex items-center'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                className='w-4 my-3'
                />
                <p className='indent-2 md:indent-5'>React &#91; Intermediate  &#93;</p>
              </li>
              <li className='flex items-center'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" 
                className='w-4 my-3'
                />
                <p className='indent-2 md:indent-5'>Firebase &#91; Beginner  &#93;</p>
              </li>
              <li className='flex items-center'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" 
                className='w-4 my-3'
                />
                <p className='indent-2 md:indent-5'>SASS &#91; Intermediate  &#93;</p>
              </li>
              <li className='flex items-center'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" 
                className='w-4 my-3'
                />
                <p className='indent-2 md:indent-5'>Tailwind CSS &#91; Intermediate  &#93;</p>
              </li>
              <li className='flex items-center'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
                className='w-4 my-3'
                /> 
                <p className='indent-2 md:indent-5'>Git &#91; Intermediate  &#93;</p>
              </li>
              <li className='flex items-center'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" 
                className='w-4 my-3'
                />
                <p className='indent-2 md:indent-5'>Bootstrap &#91; Intermediate  &#93;</p>
              </li>
              <li className='flex items-center'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg" 
                className='w-4 my-3'
                />
                <p className='indent-2 md:indent-5'>Latex &#91; Beginner  &#93;</p>
              </li>
              </ul>
            </div>
            </div>
          </div>
          <div className="flex-1 w-[75%] h-[100%] md:w-[30%] md:h-[100%]">
            <div className="">
            <h1 className='font-bold text-2xl md:text-4xl pr-0 font-poppins'>Com<span className="text-yellow-400">petition</span></h1>
              <div className="mt-6 mb-5">
                <h3 className="text-xl font-bold">Epiphany Ideathon | IEEE</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-300">1st Place</p>
              </div>
              <div className="my-5">
                <h3 className="text-xl font-bold">Internal Case Comp. | 180DC</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-300">1st Place</p>
              </div>
              <div className="my-5">
                <h3 className="text-xl font-bold">Hack It Up | Techideate</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-300">2nd Round Qualifier</p>
              </div>
            </div>
            <div className="my-5">
            <h1 className='font-bold text-2xl md:text-4xl pr-0 font-poppins'>Ho<span className="text-yellow-400">nors</span></h1>
            <div className="my-5">
                <h3 className="text-xl font-bold">Epiphany Ideathon | IEEE</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-300">Placed First</p>
              </div>
              <div className="my-5">
                <h3 className="text-xl font-bold">Internal Case Comp. | 180DC</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-300">Placed First</p>
              </div>
              <div className="my-5">
                <h3 className="text-xl font-bold">Dean's List for Academic Excellence &#91;x2&#93;</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-300">
                  &#91; 3rd Sem: 9.33 &#93; &#91; 4th Sem: 9.4 &#93; 
                </p>
              </div>
            </div>
          </div>
        </div>
      
    </section>
    </>
  )
}

export default Background