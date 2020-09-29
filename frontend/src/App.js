import React, { useState } from 'react';
import Header from './components/Header';
import api from './services/api';

import './App.css';
import backgroundImage from './assets/background.jpg'

function App(){
    const [projects, setProjects]  = useState(['Desenvolvimento de app', 'Front-end web']);

    function handleAddProject() {
        // projects.push(`novo projeto ${Date.now()}`);
        setProjects([... projects, `novo projeto ${Date.now()}`]);
        console.log(projects);
    }

    return (
        <>
     
        <Header title="Projects"/>

         <ul>
            {projects.map(project => <li key={project}>{project}</li>)}
         </ul>

         <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}

export default App;