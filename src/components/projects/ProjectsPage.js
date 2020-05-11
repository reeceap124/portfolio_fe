import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProjectCard from './ProjectsCards';

const Work = () => {
    const [projects, setProjects] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3300/api/projects')
        .then(res => {
            console.log('get request res', res.data)
            setProjects(res.data)
        })
        .catch(err=>{
            console.log('There was an error', err)
        })
    }, [])
    
    return(
        <div className='contentWrapper'>
            <h1>Recent work</h1>
            <div className='projectsWrapper'>
                {console.log('projects', projects)}
                {projects.map(val => <ProjectCard project={val}/>)}
            </div>
            
        </div>
    )
}

export default Work;