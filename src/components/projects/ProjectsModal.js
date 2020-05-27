import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ProjectsModal = (props) => {
    const [project, setProject] = useState({
        name:'',
        description:'',
        technologies:'',
        deployLink:'',
        githubLink:'',
        imgRef:''
    });
    const [endpoint, setEndpoint] = useState({method: null, uri: null})

    useEffect(()=> {
        if(props.modal.type === 'add') {
            console.log('tis i, in the add')
            setEndpoint({method: 'post', uri: `http://localhost:3300/api/projects`})
        } else if (props.modal.type === 'update') {
            setEndpoint({method: 'put', uri: `http://localhost:3300/api/projects/${props.id}`})
        } else {
            console.log('tis i, in the else')
            console.log('nothing to see here')
        }
    },[])

    const handleChanges = (e) => {
        e.preventDefault();
        setProject({...project, [e.target.name]: e.target.value})
    }

    const handleCancel = (e) => {
        e.preventDefault()
        props.setModal({open:false, type:null})
    }
    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('I am the endpoint your looking for',endpoint)
        axios[endpoint.method](endpoint.uri, project)
        .then(res=> {
            console.log('submitted project data', res)
        })
        .catch(err => {
            console.log('Woops, there was an error')
        })
        .finally(()=>{
            props.setModal({
                open: false,
                type: null
            })
        })
        
    }

    return (
        <div className='projectModal'>
            <form onSubmit={handleSubmit}>
                <div><label htmlFor='name'>Name<input type='text' name='name' onChange={handleChanges} value={project.name}/></label></div>
                <div><label htmlFor='description'>Description<input type='text' name='description' onChange={handleChanges} value={project.description}/></label></div>
                <div><label htmlFor='technologies'>Technologies<input type='text' name='technologies' onChange={handleChanges} value={project.technologies}/></label></div>
                <div><label htmlFor='deployLink'>Deploy Link<input type='text' name='deployLink' onChange={handleChanges} value={project.deployLink}/></label></div>
                <div><label htmlFor='githubLink'>Github Link<input type='text' name='githubLink' onChange={handleChanges} value={project.githubLink}/></label></div>
                <div><label htmlFor='imgRef'>Image<input type='file' name='imgRef' onChange={handleChanges} value={project.imgRef}/></label></div>
                <button type='submit'>Submit</button>
                <button type='button'>Cancel</button>
            </form>
        </div>
    );

}

export default ProjectsModal