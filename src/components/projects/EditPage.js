import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import ProjectCard from './ProjectsCards';
import { useOktaAuth } from '@okta/okta-react';
import ProjectsModal from './ProjectsModal';

//Thanks for visiting and taking a peak at my code! I'd love to be able to show you this page combined with the regular projectsPage that you see on the deployed site, but unfortunately I'm running into some issues when this get code gets deployed live that I'm still working through.
//If your interested in seeing what I'm so disappointed can't be fully displayed in production yet feel free to send me a message via the contact page or on Linkedin. We could consider it an interview!
const EditPage = () => {
    const history = useHistory()
    const { authState, authService } = useOktaAuth();
    const login = () => authService.login('/admin_work');
    const logout = async () => {
        await authService.logout('/work_edits')
    };
    const [editprojects, seteditprojects] = useState([])
    const [admin, setAdmin] = useState(null);
    const [toEdit, setToEdit] = useState(null)
    const [modal, setModal] = useState({
        open: false,
        type: null
    })
    const jwt = JSON.parse(localStorage.getItem('okta-token-storage'));
    let token
    if (jwt.accessToken) {
        token = jwt.accessToken.value;
    }
    
    
    useEffect(()=>{
        if (!authState.isAuthenticated) { 
            setAdmin(false)
        } else {
            setAdmin(true)
            //secure get request to check if user exists in DB
            //if not, then secure post to add user
        }
    }, [authState])
    useEffect(()=>{
        console.log('getting')
        axios.get('https://reeces-portfolio.herokuapp.com/api/projects')
        .then(res => {
            seteditprojects(res.data)
        })
        .catch(err=>{
            console.log('There was an error', err)
        })
    }, []);

    const handleDelete = (id, index) => {
        axios.delete(`https://reeces-portfolio.herokuapp.com/api/projects/${id}`, { headers: {"Authorization" : `Bearer ${token}`} })
        .then(res=>{
            console.log('deleted', res)
        })
        .catch(err=>{
            console.log('there was an error deleting', err)
        })
        .finally(()=>{
            let arr = editprojects;
            const newarr = arr.splice(index, 1);
            seteditprojects([])
            seteditprojects(arr)
        })
        
    }

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
            {modal.open?<ProjectsModal modal={modal} setModal={setModal} toEdit={toEdit} setToEdit={setToEdit} reset={seteditprojects} set={editprojects} token={token}/>:null}
            <div className='workHeader'>
                <h1>Recent work</h1>
                {authState.isPending?<p>Loading authentication...</p>:(!admin?<div><button type='button' onClick={login}>Admin Login</button></div>:<div><button type='button' onClick={logout}>Log Out</button> <button type='button' onClick={()=>handleModal('add')}>Add New Project</button></div>)}
            </div>
            
            <div className='projectsWrapper'>
                {editprojects.map((val, index) => <ProjectCard key={val.id} project={val} admin={admin} modal={modal} setModal={setModal} handleModal={handleModal} setToEdit={setToEdit} delete={handleDelete} index={index}/>)}
            </div>
            
        </div>
    )
}

export default EditPage;