import React from 'react';
import Suitcase from '../../../../../img/suitcase-solid.svg'
import aiTWENTY from '../../../../../img/247-logo.png'
import DAP from '../../../../../img/dap.png'

function WorkExp() {
    return (
        <div>
            <div className='exp-sec'>
          <img src={Suitcase} alt='' className='home-svg' width='40px'/>
          <h2 className='pnd'>Experience</h2>

          <div className='job-img'>
              <div className='ai'>
                <img src={aiTWENTY} alt='' className='foursevensvg' width='40px'/>
              </div>
          </div>
          <h2 className='pnd-text'>[24]7.ai</h2>
          <h3 className='pnd-text'>Software Engineer</h3>
          <p className='pnd-text'>Development of world-class speech applications for Capital One Auto Finance, and delivery tools that impact millions of consumers every day.</p>
          <div className='job-img'>
              <div className='ai'>
                <img src={DAP} alt='' className='dap' width='40px'/>
              </div>
          </div>
          <h2 className='pnd-text'>Smart Response</h2>
          <h3 className='pnd-text'>Web Developer</h3>
          <p className='pnd-text'>Web developer at a non-profit organization, committed to creating web solutions that empower the organization's mission and drive positive change in the community. I work with dedication, attention to detail, and a collaborative mindset to contribute to the success of the organization and help amplify its impact.</p>
          </div>  
        </div>
    );
}

export default WorkExp;