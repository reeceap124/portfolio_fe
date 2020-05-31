import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import ProjectCard from './ProjectsCards';
import { useOktaAuth } from '@okta/okta-react';
import ProjectsModal from './ProjectsModal';


const Work = () => {
    const history = useHistory()
    const { authState, authService } = useOktaAuth();
    const login = () => authService.login('/admin_work');
    const logout = async () => {
        await authService.logout('/work')
    };
    const [projects, setProjects] = useState([])
    const [admin, setAdmin] = useState(null);
    const [toEdit, setToEdit] = useState(null)
    const [modal, setModal] = useState({
        open: false,
        type: null
    })
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
            setProjects(res.data)
        })
        .catch(err=>{
            console.log('There was an error', err)
        })
    }, []);

    const handleModal = (type, id) => {
        setModal({
            open: true,
            type: type
        })
    }

    console.log('editing state', toEdit)

    //makes sure that when logged in path name is '/admin_work'
    if (admin && history.location.pathname !== '/admin_work') {
        history.replace('/admin_work');
    } 

    return(
        <div className={'contentWrapper ' + (modal.open?'modalOpen':null)}>
            <h1>Recent work</h1>
            {authState.isPending?<p>Loading authentication...</p>:(!authState.isAuthenticated?<div><button type='button' onClick={login}>Admin Login</button></div>:<div><button type='button' onClick={logout}>Log Out</button> <button type='button' onClick={()=>handleModal('add')}>Add New Project</button></div>)}
            <div className='projectsWrapper'>
                {projects.map(val => <ProjectCard key={val.id} project={val} admin={admin} modal={modal} setModal={setModal} handleModal={handleModal} setToEdit={setToEdit}/>)}
            </div>
            {modal.open?<ProjectsModal modal={modal} setModal={setModal} toEdit={toEdit} setToEdit={setToEdit}/>:null}
        </div>
    )
}

export default Work;