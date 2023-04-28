import React from 'react';
import Mustang from '../../../../../img/mustang.png'
import Dallas from '../../../../../img/dallas.png'
import School from '../../../../../img/school-solid.svg'

function Education() {
    return (
        <div>
           <div className='exp-sec'id='detailed-sec'>
          <img src={School} alt='' className='home-svg' width='40px'/>
          <h2 className='pnd'>Education</h2>

          <div className='j-segments'>
          <div className='job-img'>
              <div className='ai'>
                <img src={Mustang} alt='' className='mustang' width='40px'/>
              </div>
          </div>
          <h2 className='pnd-text'>Full-Stack Web Development</h2>
          <h3 className='pnd-text'>Southern Methodist University</h3>
          <h3 className='job-time'>April 2021</h3>
          <p className='pnd-text'></p>
          </div>
          <div className='j-segments'>
          <div className='job-img'>
              <div className='ai'>
                <img src={Dallas} alt='' className='dallas' width='40px'/>
              </div>
          </div>
          <h2 className='pnd-text'>Associates in Science</h2>
          <h3 className='pnd-text'>Richland College</h3>
          <h3 className='job-time'>2023</h3>
          <p className='pnd-text'></p>
          </div>  
        </div>
        </div>
    );
}

export default Education;