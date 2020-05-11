import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import SubMenu from './SubMenu'

const Nav = () => {
    const [showSub, setShowSub] = useState(false)
    return (
        <nav className='navWrapper'>
            <NavLink to='/' className='navLink navHome'>Reece</NavLink>
            <NavLink to='/about' className='navLink navAbout' onMouseEnter={()=>{setShowSub(true)}} onMouseLeave={()=>{setShowSub(false)}}>
                About
                {/* {showSub ? <SubMenu>
                    <Link to={{
                        pathname: '/about',
                        hash: '#skills'
                    }} className='navLink subSkills'>Skills</Link>
                    <Link to={{
                        pathname: '/about',
                        hash: '#path'
                    }} className='navLink subPath'>How I Got Here</Link>
                    <Link to='/about' className='navLink subMe' goTo='me'>Who I Am</Link>
                </SubMenu> : null} */}
            </NavLink>
            <NavLink to='/work' className='navLink navWork'>Work</NavLink>
            <NavLink to='/contact' className='navLink navContact'>Contact</NavLink>
        </nav>
    )
}

export default Nav;