import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import About from './components/About'
import ProjectsPage from './components/projects/ProjectsPage'
import Contact from './components/Contact'
import Nav from './components/Nav'


function App() {
  return (
    <div className="App">
      <Nav/>
      <h1>Reece Pierson</h1>
      <h2>Full-Stack developer, crafting code that people want to use.</h2>
      <Route exact path='/home' component={App}/>
      <Route path='/about' component={About}/>
      <Route path='/work' component ={ProjectsPage}/>
      <Route path='/contact' component={Contact}/>
    </div>
  );
}

export default App;
