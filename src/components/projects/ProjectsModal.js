import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ProjectsModal = (props) => {
    
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
            setEndpoint({method: 'put', uri: `http://localhost:3300/api/projects/${props.toEdit.id}`})
            console.log('toEdit', props.toEdit)
            setProject(props.toEdit)
        } else {
            console.log('nothing to see here')
        }
    },[])

    
    const img2Base64 = (img) => {
        const reader = new FileReader();
        reader.onload = function () {
            const dataURL = reader.result.split(',')[1];
            setProject({...project, imgRef: dataURL})
        }
        reader.readAsDataURL(img)
    }
    

    
    const handleChanges = (e) => {
        e.preventDefault();
        if (e.target.name === 'imgRef') {
            img2Base64(e.target.files[0]) 
        } else {
            setProject({...project, [e.target.name]: e.target.value})
        }
        
    }

    const handleCancel = (e) => {
        e.preventDefault()
        props.setModal({open:false, type:null})
    }

    

    const handleSubmit = (e) => {
        e.preventDefault()
        axios[endpoint.method](endpoint.uri, project)
        .then(res=> {
            console.log('submitted project data', res)
        })
        .catch(err => {
            console.log('Woops, there was an error')
        })
        .finally(()=>{
            setProject({
                name: '',
                description:'',
                technologies:'',
                deployLink:'',
                githubLink:'',
                imgRef:''
            });
            props.setToEdit(null)
            props.setModal({
                open: false,
                type: null
            });
        })
        
    }

    return (
        <div className='fullModal'>
        <div className='modalBack' onClick={handleCancel}></div>
        <div className='projectModal'>
            <form onSubmit={handleSubmit}>
                <div className='modalInput'><label htmlFor='name'>Name</label><input type='text' name='name' onChange={handleChanges} value={project.name}/></div>
                <div className='modalInput'><label htmlFor='description'>Description</label><input type='text' name='description' onChange={handleChanges} value={project.description}/></div>
                <div className='modalInput'><label htmlFor='technologies'>Technologies</label><input type='text' name='technologies' onChange={handleChanges} value={project.technologies}/></div>
                <div className='modalInput'><label htmlFor='deployLink'>Deploy Link</label><input type='text' name='deployLink' onChange={handleChanges} value={project.deployLink}/></div>
                <div className='modalInput'><label htmlFor='githubLink'>Github Link</label><input type='text' name='githubLink' onChange={handleChanges} value={project.githubLink}/></div>
                <div className="modalInput"><label htmlFor='imgRef'>Image</label><input className='fileSelect' type='file' name='imgRef' onChange={handleChanges}/></div>
                <div>{project.imgRef !== ''?<img className='imgSelectDisplay' src={`data:image/jpeg;base64,${project.imgRef}`} alt={`${project.name} display`}/>: null}</div>
                <div>
                    <button type='submit'>Submit</button>
                    <button type='button' onClick={handleCancel}>Cancel</button>
                </div>
                
            </form>
        </div>
        </div>
    );

}

export default ProjectsModal