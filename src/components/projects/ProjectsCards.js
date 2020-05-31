import React, {useState, useEffect} from 'react';
import { editProject } from './methods';
import ProjectsModal from './ProjectsModal';

const ProjectCard = (props) => {
    const p = props.project;
    const data = p.imgRef;
    // console.log('DATA', data)
    // console.log('the project', p)
    
    return (
        <div className='projectCard'>
            <h2>{p.name}</h2>
            {(data !== null)?<img src={`data:image/jpeg;base64,${data}`} alt='project'/>:<img src={undefined} alt='project'/>}
            <p>{p.technologies}</p>
            <p>{p.description}</p>
            <div className='projectlinks'>
                {p.githubLink!==''?<a href={p.githubLink}>Github Link </a>:null}
                {p.deployLink!==''?<a href={p.deployLink}>Deployed</a>:null}
            </div>
            {props.admin?<div><button onClick={()=>{props.handleModal('update', p.id); props.setToEdit(p)}}>Edit</button><button>Delete</button></div>:null}
            {console.log('modal state', props.modal)}
            
        </div>
    )
}

export default ProjectCard