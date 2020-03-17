import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <div className='navWrapper'>
            <NavLink to='/' className='navLink navHome'>Home</NavLink>
            <NavLink to='/about' className='navLink navAbout'>About</NavLink>
            <NavLink to='/work' className='navLink navWork'>Work</NavLink>
            <NavLink to='/contact' className='navLink navContact'>Contact</NavLink>
        </div>
    )
}

export default Nav;