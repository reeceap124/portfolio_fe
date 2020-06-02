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
            <p>I'm a full-stack developer with a love for interesting problems and creative solutions! But when it comes to work that I can produce, words are cheap. I'd recommend the <Link to='/work'>work</Link> page (or even poke around the code for THIS site! It's built from scratch) to get a good feel for the tech skills.</p>
            <p>When I'm not at my desk writing code or analyzing a problem I'm usually outdoors. I love camping with my Wife, rock climbing, and blacksmithing.</p>
        </section>

        <section>
            <h2 id='path'>How I Got Here</h2>
            <p>Adventure.</p>
            <p>Exploring is how I found a love of code and programming. I was working my way up as an electrician's apprentice. Learning as much as I could, and taking on as big of tasks as my boss would let me. But I was also seeing from my co-workers and family the toll that construction would take on the body over time. So I looked into skills I could build up over time that would set me up to gracefully make an eventual shift from construction.</p>
            <p>I found coding, and it absolutely took me by storm! I had found something that I knew I could wake up everyday and love doing. So practice after work and on the weekends became my ritual.</p>
            <p>As I began learning I came across and <a href="https://www.youtube.com/watch?v=gLdXxFS8BV4" target="_blank">advertisement</a> for Lambda School. The idea of a school that invested in me, and didn't ask for a cent until their teaching got me a decent paying job was interesting, to say the least. But I was skeptical, and kept an eye on the program for over a year while I continued to study independently.</p>
            <p>Opportunity! There was a bit of a lull in work, and I had stored up enough money to support my wife and I for the course of the Lambda curriculum. And I couldn't be happier with my time here, and the vast wealth of knowledge gained! Studying and even workign with Lambda</p>
        </section>
        
        
        
        </div>
    )
}

export default About;