import React from 'react';
import {Link} from 'react-router-dom';
import trimlogo from '../assets/trimlogo.png'

const Home = () => {
    return(
        <div className='contentWrapper'>
            <section>
                <h1>Reece Pierson</h1>
                <h2>Crafting code that people want to use.</h2>
            </section>
            <section className='cta'>
                <img className='rpLogo' src={trimlogo} alt='logo'/>
                <h3>Let's Work Together</h3>
                <Link to='/contact'><button className="button">Contact Me</button></Link>
            </section>
         </div>
    )
}

export default Home;