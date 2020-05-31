import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';


const Nav = () => {
    const [showSub, setShowSub] = useState(false)
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