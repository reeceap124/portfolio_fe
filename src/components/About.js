import React from 'react';

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
            <h2>Who I am?</h2>
            <p>Lifelong learner, passionate coder, industrious builder. I'm a full-stack developer with a love for interesting problems, creative solutions, and the painful growing process in between the two!</p>
            <p>When I'm not herding 1s and 0s you'll often find me out in wild places with my wife, learning about something in programming that interests me, or in the workshop building physical projects.</p>
        </section>
        <section>
            <h2>How I got here</h2>
            <p>Well to be entirely honest, it was only with the support of a very loving and patient wife who has been there every step of the way.</p>
            <p>Coding took me completely by storm, when I was in the middle of realizing and thinking about the toll that being a tradesman was physically taking. I started self-studying on the evenings and weekends, and found that this was something that I genuinely enjoy and derive fulfillment from! From there it was a journey of plotting out how to get into tech, and starting that journey.</p>
        </section>
        
        
        
        </div>
    )
}

export default About;