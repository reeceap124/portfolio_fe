import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import {useHistory} from 'react-router-dom'
import ProjectCard from './ProjectsCards';
// import { useOktaAuth } from '@okta/okta-react';
// import ProjectsModal from './ProjectsModal';


const Work = () => {
    // const history = useHistory()
    // const { authState, authService } = useOktaAuth();
    // const login = () => authService.login('/admin_work');
    // const logout = async () => {
    //     await authService.logout('/work')
    // };
    const [projects, setProjects] = useState([])
    // const [admin, setAdmin] = useState(null);
    // const [toEdit, setToEdit] = useState(null)
    // const [modal, setModal] = useState({
    //     open: false,
    //     type: null
    // })
    // const jwt = JSON.parse(localStorage.getItem('okta-token-storage'));
    // let token
    // if (jwt.accessToken) {
    //     token = jwt.accessToken.value;
    // }
    
    
    // useEffect(()=>{
    //     if (!authState.isAuthenticated) { 
    //         setAdmin(false)
    //     } else {
    //         setAdmin(true)
    //         //secure get request to check if user exists in DB
    //         //if not, then secure post to add user
    //     }
    // }, [authState])
    useEffect(()=>{
        axios.get('https://reeces-portfolio.herokuapp.com/api/projects')
        .then(res => {
            setProjects(res.data)
        })
        .catch(err=>{
            console.log('There was an error', err)
        })
    }, []);

    // const handleDelete = (id, index) => {
    //     axios.delete(`https://reeces-portfolio.herokuapp.com/api/projects/${id}`, { headers: {"Authorization" : `Bearer ${token}`} })
    //     .then(res=>{
    //         console.log('deleted', res)
    //     })
    //     .catch(err=>{
    //         console.log('there was an error deleting', err)
    //     })
    //     .finally(()=>{
    //         let arr = projects;
    //         const newarr = arr.splice(index, 1);
    //         setProjects([])
    //         setProjects(arr)
    //     })
        
    // }

    // const handleModal = (type, id) => {
    //     setModal({
    //         open: true,
    //         type: type
    //     })
        
    // }

    

    //makes sure that when logged in path name is '/admin_work'
    // if (admin && history.location.pathname !== '/admin_work') {
    //     history.replace('/admin_work');
    // } 

    return(
        <div className={'contentWrapper '}>
            {/* {modal.open?<ProjectsModal modal={modal} setModal={setModal} toEdit={toEdit} setToEdit={setToEdit} reset={setProjects} set={projects} token={token}/>:null} */}
            <div className='workHeader'>
                <h1>Recent work</h1>
                {(projects.length < 1) ? <p>Loading...</p> : null}
                {/* {authState.isPending?<p>Loading authentication...</p>:(!authState.isAuthenticated?<div><button type='button' onClick={login}>Admin Login</button></div>:<div><button type='button' onClick={logout}>Log Out</button> <button type='button' onClick={()=>handleModal('add')}>Add New Project</button></div>)} */}
            </div>
            
            <div className='projectsWrapper'>
                {projects.map((val, index) => <ProjectCard key={val.id} project={val} />)}
            </div>
            
        </div>
    )
}

export default Work;