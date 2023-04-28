import React from 'react';
import Proj from '../../../../../img/code-branch-solid.svg'

function Projects() {
    return (
        <div>
            <div className='proj-sec'id='detailed-sec'>
          <img src={Proj} alt='' className='home-svg' width='40px'/>
          <h2 className='pnd'>Projects</h2>

          <div className='project-comp'>
              
        <a href="https://www.example.com" target="_blank">
        <h3 className='pnd-text'>Sideline Shop</h3>
        </a>
          <p className='pnd-text'>Full-Stack Responsive E-Commerce based web application for sports memorabilia.</p>
          </div>

          <div className='project-comp'>

          <a href="https://www.example.com" target="_blank">
          <h3 className='pnd-text'>Shower Thoughts 2.0</h3>
          </a>
          <p className='pnd-text'>Full-Stack Social Media application where users can post their thoughts, and comment on other users posts. Similar to twitter, etc.</p>
          </div>

          <div className='project-comp'>

          <a href="https://www.example.com" target="_blank">
            <h3 className='pnd-text'>Link Up</h3>
            </a>
          <p className='pnd-text'>Full-Stack application where users can make gathering events to make new friends or connections. </p>
          </div></div>
         
         
          
            
        </div>
    );
};

export default Projects;