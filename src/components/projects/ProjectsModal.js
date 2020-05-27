import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ProjectsModal = (props) => {
    const e = props.editing;
    console.log("here is E", e)
    const [project, setProject] = useState({
        name: '',
        description:'',
        technologies:'',
        deployLink:'',
        githubLink:'',
        imgRef:''
    });
    const [endpoint, setEndpoint] = useState({method: null, uri: null})

    useEffect(()=> {
        if(props.modal.type === 'add') {
            setEndpoint({method: 'post', uri: `http://localhost:3300/api/projects`})
        } else if (props.modal.type === 'update') {
            setEndpoint({method: 'put', uri: `http://localhost:3300/api/projects/${props.id}`})
            
            console.log('updated project',project)
        } else {
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
        <>
        <div className='modalBack' onClick={handleCancel}></div>
        <div className='projectModal'>
            <form onSubmit={handleSubmit}>
                <div className='modalInput'><label htmlFor='name'>Name</label><input type='text' name='name' onChange={handleChanges} value={project.name}/></div>
                <div className='modalInput'><label htmlFor='description'>Description</label><input type='text' name='description' onChange={handleChanges} value={project.description}/></div>
                <div className='modalInput'><label htmlFor='technologies'>Technologies</label><input type='text' name='technologies' onChange={handleChanges} value={project.technologies}/></div>
                <div className='modalInput'><label htmlFor='deployLink'>Deploy Link</label><input type='text' name='deployLink' onChange={handleChanges} value={project.deployLink}/></div>
                <div className='modalInput'><label htmlFor='githubLink'>Github Link</label><input type='text' name='githubLink' onChange={handleChanges} value={project.githubLink}/></div>
                <div className="modalInput"><label htmlFor='imgRef'>Image</label><input className='fileSelect' type='file' name='imgRef' onChange={handleChanges} value={project.imgRef}/></div>
                <div>
                    <button type='submit'>Submit</button>
                    <button type='button' onClick={handleCancel}>Cancel</button>
                </div>
                
            </form>
        </div>
        </>
    );

}

export default ProjectsModal