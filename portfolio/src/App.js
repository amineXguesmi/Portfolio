import './App.css';
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import Skills from './components/Skills';
import Project from './components/Project';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills/>
      <Project/>
    </div>
  );
}

export default App;
