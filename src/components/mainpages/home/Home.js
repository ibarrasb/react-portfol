import React from 'react';
import './Home.css'
import MePicture from '../../../img/eddie.jpg'
import AboutMe from '../home/sections/About/AboutMe'
import WorkExp from '../home/sections/Work/WorkExp'
import Projects from '../home/sections/Projects/Projects'
import Education from '../home/sections/Education/Education';
import UserMe from '../../../img/user-solid.svg'



function Home() {
    return (
        
        <section className="home-section">

           <div className='container-box'>
           <img src={MePicture} alt='' className='me-pic' width='40px'/>
              
           <div className="centered-text2"> Software Engineer</div>
           </div>

          <AboutMe/>
          <WorkExp/>
          <Projects/>
          <Education/>

        </section>
    );
}

export default Home;