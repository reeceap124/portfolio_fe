import React from 'react';
import {Link} from 'react-router-dom'

const About = (props) => {
    console.log('*** MY about state ***', props.goTo)
    return(
        <div className='contentWrapper aboutWrapper'>
        <h1>A Bit About Me</h1>
        <section>
            <h2>Skills</h2>
            <div className='skillsLists'>
                <ul>
                    <h3>Client-Side</h3>
                    <li>Semantic HTML</li>
                    <li>Responsive CSS/SASS</li>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                    <li>Redux</li>
                </ul>
                <ul>
                    <h3>Server-Side</h3>
                    <li>NodeJS</li>
                    <li>ExpressJS</li>
                    <li>SQL/Postgresql</li>
                    <li>KnexJS</li>
                    <li>Python (Learning in progress)</li>
                </ul>
                <ul>
                    <h3>Team/Project Work Flow</h3>
                    <li>Git/Github</li>
                    <li>Trello</li>
                    <li>Slack</li>
                    <li>Zoom</li>
                </ul>
            </div>
            
        </section>

        <section>
            <h2>Who I Am</h2>
            <p>Lifelong learner, passionate coder, industrious builder.</p>
            <p>I'm a full-stack developer with a love for interesting problems and creative solutions! But when it comes to work that I can produce, words are cheap. I'd recommend the <Link to='/work'>work</Link> page (or even poke around the code for THIS site! It's built from scratch.) to get a good feel for the tech skills.</p>
            <p>I have an avid love for wild places. When we have the chance, my wife and I try to get out hiking and camping as often as possible. There's a simple peace to being able to watch and enjoy nature come alive around you.</p>
            <p>Another joy is blacksmithing. The internet is an amazing place, and being able to scrape together the knowledge to get started doing that and then go and practice has been a point of pride for me for a while.</p>
            <p>I'm terrible at video games, but have a blast playing with friends. Coffee addict. And rock climber!</p>
            <p>If there's anything else you'd like to know about how I could fit with your team culturally, feel free to ask!</p>
        </section>

        <section>
            <h2 id='path'>How I Got Here</h2>
            <p>Adventure.</p>
            <p>Exploration is how I found a love of code and programming. I was working my way up as an electrician's apprentice. Learning as much as I could, and taking on as big of tasks as my boss would let me. But I was also seeing from my co-workers and family the toll that construction would take on the body over time. So I looked into skills I could build up over time that would set me up to gracefully make an eventual shift from construction.</p>
            <p>I found coding, and it absolutely took me by storm! I had found something that I knew I could wake up everyday and love doing. So practice after work and on the weekends became my ritual.</p>
            <p>As I began learning I came across an <a href="https://www.youtube.com/watch?v=gLdXxFS8BV4" target="_blank">advertisement</a> for Lambda School. The idea of a school that invested in me, was tempting, to say the least. But I was skeptical, and kept an eye on the program for over a year while I continued to study independently.</p>
            <p>Then, opportunity! There was a bit of a lull in work, and I had stored up enough money to support my wife and I for the course of the Lambda curriculum.</p>
            <p>It has been fun, challenging, occasionally exhausting, and entirely worth it. Growing to be able to plan out a full site, build from scratch, jump into existing code bases, and lead engineering teams has been an amazing journey. And I can't wait to see where it takes me next.</p>
        </section>
        
        
        
        </div>
    )
}

export default About;