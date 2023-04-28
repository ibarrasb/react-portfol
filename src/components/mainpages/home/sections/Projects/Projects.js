import React from 'react';
import Proj from '../../../../../img/code-branch-solid.svg'
import Sideline from '../../../../../img/side-line.png'
import Showerthoughts from '../../../../../img/showerthoughts.png'
import Angular from '../../../../../img/angular.png'

import ReactSVG from '../../../../../img/react.svg'
import JS from '../../../../../img/js.svg'
import NodeSVG from '../../../../../img/node.svg'
import MongoDB from '../../../../../img/mongodb.svg'

import TS from '../../../../../img/typescript.svg'
import AngSVG from '../../../../../img/angular.svg'

function Projects() {
    return (
        <div>
            <div className='proj-sec'id='detailed-sec'>
          <img src={Proj} alt='' className='home-svg' width='40px'/>
          <h2 className='pnd'>Projects</h2>

          <div className='project-comp'>
        <a href="https://github.com/ibarrasb/sideline-shop" target="_blank">
        <img src={Sideline} alt='' className='home-svg' width='250px' />
        <h3 className='pnd-text'>Sideline Shop</h3>
        </a>
        <div>
                <img src={ReactSVG} alt='' className='skill-svg' width='40px'/>
                <img src={JS} alt='' className='skill-svg' width='40px'/>
                <img src={NodeSVG} alt='' className='skill-svg' width='40px'/>
                <img src={MongoDB} alt='' className='skill-svg' width='40px'/>
            </div>
          </div>

          <div className='project-comp'>
          <a href="https://github.com/ibarrasb/shower-thoughts-v2" target="_blank">
          <img src={Showerthoughts} alt='' className='home-svg' width='250px'/>
          <h3 className='pnd-text'>Shower Thoughts 2.0</h3>
          </a>
          <div>
                <img src={ReactSVG} alt='' className='skill-svg' width='40px'/>
                <img src={JS} alt='' className='skill-svg' width='40px'/>
                <img src={NodeSVG} alt='' className='skill-svg' width='40px'/>
                <img src={MongoDB} alt='' className='skill-svg' width='40px'/>
            </div>
          </div>

          <div className='project-comp'>
          <a href="https://github.com/ibarrasb/Angular-Todo-List" target="_blank">
          <img src={Angular} alt='' className='home-svg' width='250px'/>
            <h3 className='pnd-text'>Angular To-Do List</h3>
            </a>
            <div>
                <img src={TS} alt='' className='skill-svg' width='40px'/>
                <img src={AngSVG} alt='' className='skill-svg' width='40px'/>
            </div>
          </div>
          
     </div>
     </div>
    );
};

export default Projects;