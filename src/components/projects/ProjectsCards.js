import React from 'react'
import { editProject } from './methods';

const ProjectCard = (props) => {
    const p = props.project;
    const data = p.imgRef;
    console.log('DATA', data)
    console.log('the project', p)
    
    return (
        <div className='projectCard'>
            <h2>{p.name}</h2>
            {(data !== null)?<img src={`data:image/jpeg;base64,${data}`} alt='project'/>:<img src={undefined} alt='project'/>}
            <p>{p.technologies}</p>
            <p>{p.description}</p>
            <div>
                <a href={p.githubLink}>Github Link</a>
                <a href={p.deployLink}>Deployed</a>
            </div>
            {props.admin?<div><button onClick={editProject(p.id)}>Edit</button><button>Delete</button></div>:null}
        </div>
    )
}

export default ProjectCard