import React from 'react';
import {Route} from 'react-router-dom'
import './App.scss';
import Home from './components/Home'
import About from './components/About'
import ProjectsPage from './components/projects/ProjectsPage'
import Contact from './components/Contact'
import Nav from './components/Nav'


function App() {
  return (
    <div className="App">
      <Nav/>
      
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/work' component ={ProjectsPage}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/login' />
      <Route path='/projects'/>
    </div>
  );
}

export default App;
