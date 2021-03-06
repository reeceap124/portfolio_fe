import React from 'react';

const ProjectCard = (props) => {
    const p = props.project;
    const data = p.imgRef;
    // console.log('DATA', data)
    // console.log('the project', p)
    
    return (
        <div className='projectCard'>
            <h2>{p.name}</h2>
            {(data !== null)?<img src={`data:image/jpeg;base64,${data}`} alt='project'/>:<img src={undefined} alt='project'/>}
            <h4>Technologies Used:</h4> <p id='technologies'>{p.technologies}</p>
            <h4>Project Description:</h4><p>{p.description}</p>
            <div className='projectlinks'>
                {p.githubLink!==''?<a href={p.githubLink}>Github Repo</a>:null}
                {p.deployLink!==''?<a href={p.deployLink}>Deployed Site</a>:null}
            </div>
            {props.admin?<div><button onClick={()=>{props.handleModal('update', p.id); props.setToEdit({...p, index:props.index})}}>Edit</button><button onClick={()=>props.delete(p.id, props.index)}>Delete</button></div>:null}
            {console.log('modal state', props.modal)}
            
        </div>
    )
}

export default ProjectCard