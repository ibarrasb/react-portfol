import './footer.css'
import React from 'react'
import LinkedSVG from '../../img/linkedin.svg'

const footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='copyright-box'>
                            <a href="https://www.linkedin.com/in/ibarrasb/" target="_blank">
                            <img className='insta-svg' src={LinkedSVG}  alt ="" width="30"/>
                            </a>
                            <p> © Copyright 2022 Eduardo Ibarra SWE</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default footer;