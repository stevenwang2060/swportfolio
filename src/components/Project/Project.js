import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import projectData from '../../data/projectData';
import './Project.css'

function Project(){
    const [data] = useState(projectData);

    return(
        <div className="project">
            <h1>My Projects</h1>
            <div className="project-container">
            {data.map((card, index) => {
                return <ProjectCard 
                            key={index} 
                            url={card.imgsrc} 
                            title={card.title} 
                            stack={card.techStack}
                            desc={card.desc}
                            roles={card.roles}
                            projectURL={card.projectURL}
                            gitHubURL={card.gitHubURL}
                        />
            })}
            </div>
        </div>
        
    );
}

export default Project;