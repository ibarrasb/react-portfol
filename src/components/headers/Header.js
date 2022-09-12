import React from 'react';
import {Link} from 'react-router-dom'
import CodeSolid from './icon/code-solid.svg'
import './header.css'

function Header() {
    return (
    <header>
        <div className='logo'>
            <h1>
               
                <Link className="title-name" to="/">
                    <img className='svg-pic' src={CodeSolid} ></img>
                    Eduardo Ibarra
                </Link>
                
            </h1>
        </div> 
    </header>
    );
}

export default Header;