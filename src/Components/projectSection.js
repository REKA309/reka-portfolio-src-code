import React from "react";
import projects from "../mediaFolder/pro";
import { Button } from '@mui/material';

export default function Projects()
{
  function handleDocs()
  {
     // replace this URL with the URL of your resume PDF file
     const manualUrl = 'https://docs.google.com/document/d/1OlDbaqv_6UBaKcczPeVdhdLrzFKBGFCeWKzyWFM0IAA/edit?usp=sharing';
        
     // create a new anchor element
     const downloadLink = document.createElement('a');
     
     // set the href attribute of the anchor to the URL of your resume PDF file
     downloadLink.href = manualUrl;
     downloadLink.target='_blank';
     
     // set the download attribute of the anchor to the filename you want to use for the downloaded file
     downloadLink.download = 'manual.doc';
     
     // simulate a click on the anchor element to trigger the download
     downloadLink.click();
  }
    return(
        <div className="project-container row">
            <h1><b>Projects 💻</b><Button color="inherit" onClick={handleDocs}>DOCS CLICK HERE</Button></h1>
           {projects.map((project,index)=>(
              <div key={index} className="card card1 col-lg-4  col-md-6 col-sm-12">
                <img src={project.thumbnail} alt={project.altname} width={264} height={300}/>
              <div className="card-body">
                  <h3 style={{color:'white'}}>{project.altname}</h3>
                  <h5 style={{color:'white'}}>{project.description}</h5>
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