
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

function App() {
  return (
    <div className="App">
      <Nav/>
      
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
      <Security {...config}>
        <Route path='/work' component ={ProjectsPage}/>
        <Route path='/implicit/callback' component={LoginCallback}/>
        <SecureRoute path='/admin_work' component={ProjectsPage}/>
      </Security>
      
      
    </div>
  );
}

export default App;
