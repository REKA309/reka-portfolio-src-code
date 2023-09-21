import React from "react";
import projects from "../mediaFolder/pro";
import { Button } from '@mui/material';

export default function Projects()
{
  
    return(
        <div className="project-container row">
            <h1 ><b>Projects 💻 </b></h1>
           {projects.map((project,index)=>(
              <div key={index} className="card col-lg-4  col-md-6 col-sm-12">
                <img src={project.thumbnail} alt={project.altname} width={264} height={300}/>
              <div className="card-body">
                  <h2 style={{color:'white'}}>{project.altname}</h2>
                  <h4 style={{color:'white'}}>{project.description}</h4>
                  <div className="demobtn buttons">
                  <a href={project.demo} target="_blank" rel="noreferrer">
                  <Button variant="contained"  color="secondary">
                   Demo
                </Button>
                  </a>
                  <a href={project.github}target="_blank" rel="noreferrer">
                  <Button variant="contained"  color="secondary">
                    GITHUB
                    </Button>
                  </a>
                  </div>
              </div>
          
          </div>
           ))}
        </div>
    )
}