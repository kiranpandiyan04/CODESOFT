import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h1>My Projects</h1>
      <div className="projects-content">
        <div className="project-card-1">
          <div className='text'>
          <h2>Landing Page</h2>
          <p>it includes a navbar and color changing function that makes the webpage more responsive</p>
          </div>
            
         
        </div>
        <div className="project-card-2">
          <div className='text'>
          <h2>Stopwatch</h2>
          <p>It is a stopwatch that has start and stop functions with recording laps </p>
          </div>
          
        </div>
        <div className="project-card-3">
    
          <div className='text'>
          <h2>Tic-Tac-Toe</h2>
          <p>A game that has perfect outcomes for every move decided by any two players </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
