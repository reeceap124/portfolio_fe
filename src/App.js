
import React from 'react';
import {Route} from 'react-router-dom'
import './App.scss';
import Home from './components/Home'
import About from './components/About'
import ProjectsPage from './components/projects/ProjectsPage'
import Contact from './components/Contact'
import Nav from './components/Nav';
import {Security, SecureRoute, LoginCallback} from '@okta/okta-react'
import config from './components/projects/oktaConfig'
import EditPage from './components/projects/EditPage'

function App() {
  return (
    <div className="App">
      <Nav/>
      
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/work' component ={ProjectsPage}/>
      <Security {...config}>
        <Route path='/work_edits' component={EditPage}/>
        <Route path='/implicit/callback' component={LoginCallback}/>
        <SecureRoute path='/admin_work' component={EditPage}/>
      </Security>
      
      
    </div>
  );
}

export default App;
