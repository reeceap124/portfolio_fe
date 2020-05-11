import React from 'react'

const ProjectCard = (props) => {
    console.log('props', props)
    const p = props.project
    console.log('p log', p)
    return (
        <div>
            <h2>{p.name}</h2>
            <img src={p.imgRef} alt='project'/>
            <p>{p.technologies}</p>
            <p>{p.description}</p>
            <div>
                <a href={p.githubLink}>Github Link</a>
                <a href={p.deployLink}>Deployed</a>
            </div>
        </div>
    )
}

export default ProjectCard