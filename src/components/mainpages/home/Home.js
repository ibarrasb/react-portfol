import React from 'react';
import './Home.css'
import AboutMe from '../home/sections/About/AboutMe'
import WorkExp from '../home/sections/Work/WorkExp'
import Projects from '../home/sections/Projects/Projects'
import UserMe from '../../../img/user-solid.svg'



function Home() {
    return (
        
        <section className="home-section">

           <div className='container-box'>
    
           <div className="centered-text2"> Software Engineer</div>
           </div>

          <AboutMe/>
          <WorkExp/>
          <Projects/>

        </section>
    );
}

export default Home;