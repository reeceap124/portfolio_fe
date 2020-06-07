import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProjectCard from './ProjectsCards';



const Work = () => {
    const [projects, setProjects] = useState([])
    useEffect(()=>{
        axios.get('https://reeces-portfolio.herokuapp.com/api/projects')
        .then(res => {
            setProjects(res.data)
        })
        .catch(err=>{
            console.log('There was an error', err)
        })
    }, []);

    return(
        <div className={'contentWrapper '}>
            <div className='workHeader'>
                <h1>Recent work</h1>
                {(projects.length < 1) ? <p>Loading...</p> : null}
            </div>
            <div className='projectsWrapper'>
                {projects.map((val, index) => <ProjectCard key={val.id} project={val} />)}
            </div>
            
        </div>
    )
}

export default Work;