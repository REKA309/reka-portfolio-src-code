import React from "react";
import HomeButton from "../uiComponents/homeButton";
import ContactPic from '../mediaFolder/Contact.png'
import { Button } from "@mui/material";
import social from "../mediaFolder/social";
export default function Contact()
{
    function handleResume()
    {
        const resumeUrl = 'https://drive.google.com/file/d/1AsznaFgj4KV7gIBrYHKeP8WUdDB20uPf/view';
      
        // create a new anchor element
        const downloadLink = document.createElement('a');
        
        // set the href attribute of the anchor to the URL of your resume PDF file
        downloadLink.href = resumeUrl;
        downloadLink.target='_blank';
        
        // set the download attribute of the anchor to the filename you want to use for the downloaded file
        downloadLink.download = 'resume.pdf';
        
        // simulate a click on the anchor element to trigger the download
        downloadLink.click();
    }
    return(
        <div className="about-container">
           <div className="about-content">
            <HomeButton/>
            <div className="wrapper two">
                <div className="neon">
                    <h1>Passion to Create | Reach Out Today</h1>
                </div>
            </div>
            <div className="demobtn">
                <Button variant="contained" color="secondary" onClick={handleResume}>
                    download resume
                </Button>
            </div>
            <div>
                <h2>Find Me On</h2>
            </div>
           <div className="social-media">
               {social.map((acc)=>(
               <a key={acc.id} href={acc.hyplink}  target="_blank"  rel="noreferrer">
                 <img src={acc.icon}
                alt={acc.altname}
                width={80} height={75}/>
               </a>
               ))} 
           </div>
           </div>
           <div className="about-picture">
            <img src={ContactPic} alt="contact" width={400} height={400}/>
           </div>
        </div>
    )
}