import React from 'react';
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
                <a href='/contact'><button>Contact Me</button></a>
            </section>
         </div>
    )
}

export default Home;