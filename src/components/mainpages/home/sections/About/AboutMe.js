import React from 'react';
import UserMe from '../../../../../img/user-solid.svg'

function AboutMe() {
    return (
        <div>
             <div className='about-sec'id='detailed-sec'>
          <img src={UserMe} alt='' className='home-svg' width='40px'/>
          <h2 className='pnd'>About Me</h2>
          <p className='pnd-text'>As a passionate and skilled software engineer, I thrive on creating innovative solutions to complex problems. With a solid foundation in computer science and extensive experience in software development, I bring a versatile skillset to the table.
          I am a team player and believe in effective collaboration. I have a proven track record of working seamlessly with cross-functional teams, including product managers, designers, and quality assurance teams, to deliver high-quality software solutions within tight deadlines.

Apart from technical skills, I also possess excellent communication skills, both written and verbal, which enable me to effectively communicate complex technical concepts to diverse audiences. I am dedicated, detail-oriented, and committed to delivering top-notch results in a timely manner.
          </p>
          </div>
        </div>
    );
}

export default AboutMe;