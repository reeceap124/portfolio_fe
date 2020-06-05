import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';


const Nav = () => {
    return (
        <nav className='navWrapper'>
            <NavLink to='/' className='navLink navHome'>Reece</NavLink>
            <NavLink to='/about' className='navLink navAbout'>About</NavLink>
            <NavLink to='/work' className='navLink navWork'>Work</NavLink>
            <NavLink to='/contact' className='navLink navContact'>Contact</NavLink>
        </nav>
    )
}

export default Nav;