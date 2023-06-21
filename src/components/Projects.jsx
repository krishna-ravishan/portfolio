import React from 'react'

import project1 from '../assets/images/project-1.png'
import project2 from '../assets/images/project-2.png'
import project3 from '../assets/images/project-3.png'
import project4 from '../assets/images/project-4.png'
import project5 from '../assets/images/project-5.png'
import project6 from '../assets/images/project-6.png'

const Projects = () => {
  return (
  <section id='projects' class="mb-16 text-center lg:text-left">
    <h1 className='font-bold text-6xl md:text-8xl pr-0 font-poppins text-center my-10'><span className="text-yellow-400">Pro</span>jects</h1>

    <div class="grid gap-x-6 lg:grid-cols-3 mb-3 mx-5">
      <div class="mb-12 lg:mb-0">
        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]" data-te-ripple-init data-te-ripple-color="light">
          <img src={project1} class="w-full" />
          <a href="#!">
            <div
              class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
          </a>
        </div>
        <h5 class="mb-4 text-lg font-bold">Portfolio Website</h5>
        <div class="mb-4 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 lg:justify-start">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
          </svg>
          HTML &#x2022; CSS &#x2022; JS/ES6+ &#x2022; React &#x2022; JS &#x2022; Git
        </div>
        <p class="text-neutral-500 dark:text-neutral-300">
        Crafted a visually stunning and responsive portfolio website utilizing the power of HTML, CSS, and Tailwind CSS, with dynamic interactivity powered by React. Leveraging Git for version control ensured seamless collaboration and efficient development process.
        </p>
      </div>

      <div class="mb-12 lg:mb-0">
        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]" data-te-ripple-init data-te-ripple-color="light">
          <img src={project6} class="w-full" />
          <a href="#!">
            <div
              class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
          </a>
        </div>

        <h5 class="mb-4 text-lg font-bold">Realtor Clone &#91; Ongoing &#93; </h5>
        <div class="mb-4 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400 lg:justify-start">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
          </svg>
          HTML &#x2022; CSS &#x2022; JS/ES6+ &#x2022; React &#x2022; JS &#x2022; Git
        </div>
        <p class="text-neutral-500 dark:text-neutral-300">
          Developed a high-fidelity realtor clone using HTML, CSS, and Tailwind CSS for a modern and intuitive user interface. Integrated Firebase for real-time data synchronization and user authentication. Leveraged React and Git to maintain a scalable codebase and facilitate smooth collaboration during development.
        </p>
      </div>

      <div class="mb-0">
        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]" data-te-ripple-init data-te-ripple-color="light">
          <img src={project4} class="w-full" />
          <a href="#!">
            <div
              class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
          </a>
        </div>

        <h5 class="mb-4 text-lg font-bold">QuickHire</h5>
        <div class="mb-4 flex items-center justify-center text-sm font-medium text-warning lg:justify-start">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
          </svg>
          HTML &#x2022; CSS &#x2022; JS/ES6+ &#x2022; Bootstrap
        </div>
        <p class="text-neutral-500 dark:text-neutral-300">
        Introducing QuickHire, a revolutionary platform designed to streamline the process of connecting workers with contractors and service agencies.Developed collaboratively by myself, Nikhil Dixit, and Gagan Shenvi, QuickHire redefines the way workers and employers interact, saving valuable time for both parties.
        </p>
      </div>
    </div>
    <div class="grid gap-x-6 lg:grid-cols-3 mx-5">
      <div class="mb-12 lg:mb-0">
        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]" data-te-ripple-init data-te-ripple-color="light">
          <img src={project2} class="w-full" />
          <a href="#!">
            <div
              class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
          </a>
        </div>
        <h5 class="mb-4 text-lg font-bold">Allyers</h5>
        <div class="mb-4 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 lg:justify-start">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
          </svg>
          HTML &#x2022; CSS &#x2022; JS/ES6+ &#x2022; PHP &#x2022; MySQL
        </div>
        <p class="text-neutral-500 dark:text-neutral-300">
        Harnessing AI for personalized mental wellness support. Natural language processing API generates empathetic responses to prompts. Text-to-speech API brings the interactive "ChatBuddy" to life, offering consultations and tailored suggestions.
        </p>
      </div>

      <div class="mb-12 lg:mb-0">
        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]" data-te-ripple-init data-te-ripple-color="light">
          <img src={project3} class="w-full" />
          <a href="#!">
            <div
              class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
          </a>
        </div>

        <h5 class="mb-4 text-lg font-bold">Hulu Clone</h5>
        <div class="mb-4 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400 lg:justify-start">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
          </svg>
          HTML &#x2022; CSS &#x2022; JS/ES6+ &#x2022; Bootstrap
        </div>
        <p class="text-neutral-500 dark:text-neutral-300">
        A captivating Hulu website clone with a dynamic technical foundation. JavaScript and PHP power the seamless registration and sign-in pages. HTML and CSS create an immersive frontend for an unparalleled streaming experience. Front-End Credit: <a href="https://github.com/avishka964" target="_blank">Avishka Kapuruge</a>
        </p>
      </div>

      <div class="mb-0">
        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]" data-te-ripple-init data-te-ripple-color="light">
          <img src={project5} class="w-full" />
          <a href="#!">
            <div
              class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
          </a>
        </div>

        <h5 class="mb-4 text-lg font-bold">Digital Clock</h5>
        <div class="mb-4 flex items-center justify-center text-sm font-medium text-warning lg:justify-start">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
          </svg>
          HTML &#x2022; CSS &#x2022; JS/ES6+ 
        </div>
        <p class="text-neutral-500 dark:text-neutral-300">
        An elegant digital clock crafted with HTML, CSS, and JavaScript. Watch as the dynamic JavaScript code keeps the clock ticking with precision. The sleek CSS design enhances the visual appeal, creating a seamless blend of functionality and style.
        </p>
      </div>
    </div>
  </section>
  )
}

export default Projects