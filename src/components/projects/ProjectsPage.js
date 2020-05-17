import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProjectCard from './ProjectsCards';
import { useOktaAuth } from '@okta/okta-react';


const Work = () => {
    const { authState, authService } = useOktaAuth();
    const login = () =>authService.login('/admin_work');
    const [projects, setProjects] = useState([])
    const [admin, setAdmin] = useState(null)
    useEffect(()=>{
        if (!authState.isAuthenticated) { 
            setAdmin(false)
        } else {
            setAdmin(true)
        }
    }, [authState])
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
            {authState.isPending?<p>Loading authentication...</p>:(!authState.isAuthenticated?<div><button type='button' onClick={login}>Login</button></div>:null)}
            <div className='projectsWrapper'>
                {console.log('projects', projects)}
                {projects.map(val => <ProjectCard project={val} admin={admin}/>)}
            </div>
            
        </div>
    )
}

export default Work;