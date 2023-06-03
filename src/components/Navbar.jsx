import React, { useState } from 'react';

import menu from '../assets/menu.svg';
import close from '../assets/close.svg'

import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <div className={`logo font-bold text-2xl font-montserrat`}>
        <a href="#"><span className="text-yellow-400">KRI</span>SHNA R.</a> 
      </div>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}  
            className={`font-poppins font-medium cursor-pointer text-sm mt-1 text-black ${index === navLinks.length - 1 ? 'mr-0' : 'mr-12'}`}        
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      {/* Mobile Navbar */}
      <div className='sm:hidden flex flex-1 justify-end item-center'>
          <img src={toggle ? close : menu} 
          alt="menu" 
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToggle((prev) => !prev)}/>

          <div 
          className={`${toggle ? 'flex' : 'hidden'} z-10 p-6 bg-yellow-400 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className='list-none flex-col justify-end items-center flex-1'>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}  
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-black ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}        
                >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </nav>
    <div className='w-[60vw] h-[100vh] sm:w-[50vw] absolute top-0 right-0 hero-back'></div>
    </>
  )
}

export default Navbar