import React from 'react';
import './Home.css'
import WorkExp from '../home/sections/Work/WorkExp'

import Binary from '../../../img/binary-code.jpg'
import UserMe from '../../../img/user-solid.svg'

import Projects from '../../../img/code-branch-solid.svg'


function Home() {
    return (
        
        <section className="home-section">

           <div className='container-box'>
           <img className='binary-pic' alt='' src={Binary}/>
           <div className="centered-text"> Eduardo Ibarra</div>
           <div className="centered-text2"> Software Engineer</div>
           </div>

           <div className='about-sec'>
          <img src={UserMe} alt='' className='home-svg' width='40px'/>
          <h2 className='pnd'>About Me</h2>
          <p className='pnd-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
          </div>

          <WorkExp/>

          <div className='proj-sec'>
          <img src={Projects} alt='' className='home-svg' width='40px'/>
          <h2 className='pnd'>Projects</h2>
          <p className='pnd-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
          </div>

        </section>
    );
}

export default Home;