import React from 'react'
import styles from './style'

import { Navbar, Hero, About, Background, Projects, Contact, Footer} from './components';

const App = () => (
  <>
  <div className="w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>
  </div>
  
  <div className={`${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <Hero/>
    </div>
  </div>

  <div className={`sm:px-16 ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <About/>
      <Background/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  </div>
  </> 
);

export default App