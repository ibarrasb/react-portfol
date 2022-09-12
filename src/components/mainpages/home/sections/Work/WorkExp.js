import React from 'react';
import './workexp.css'
import Suitcase from '../../../../../img/suitcase-solid.svg'
import CapitalOne from '../../../../../img/capitalone.svg.png'
import aiTWENTY from '../../../../../img/247-logo.png'

function WorkExp() {
    return (
        <div>
            <div className='exp-sec'>
          <img src={Suitcase} alt='' className='home-svg' width='40px'/>
          <h2 className='pnd'>Experience</h2>

          <div className='job-img'>
              <div className='ai'>
                <img src={CapitalOne} alt='' className='cap1-svg' width='40px'/>
              </div>
              <div className='cap-one'>
                <img src={aiTWENTY} alt='' className='ai-svg' width='40px'/>
              </div>
          </div>
        
          <p className='pnd-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
          </div>
            
        </div>
    );
}

export default WorkExp;