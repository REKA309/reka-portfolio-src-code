import React, { useState, useEffect } from "react";
import HomeDesktop from "../subComponents/homeDesktop";
import HomePhone from "../subComponents/homePhone";
import { Button } from "@mui/material";
export default function Home()
{
    const [isDesktop, setIsDesktop] = useState(false);

    // Update the isDesktop state based on the screen size
    const updateScreenSize = () => {
      setIsDesktop(window.innerWidth > 768); // Adjust the breakpoint as needed
    };
  
    // Add an event listener to update the screen size on resize
    useEffect(() => {
      updateScreenSize();
      window.addEventListener('resize', updateScreenSize);
      return () => {
        window.removeEventListener('resize', updateScreenSize);
      };
    }, []);
    function handleDownload() {
      // replace this URL with the URL of your resume PDF file
      const certificateUrl = 'https://drive.google.com/file/d/1AsznaFgj4KV7gIBrYHKeP8WUdDB20uPf/view';
      
      // create a new anchor element
      const downloadLink = document.createElement('a');
      
      // set the href attribute of the anchor to the URL of your resume PDF file
      downloadLink.href = certificateUrl;
      downloadLink.target='_blank';
      
      // set the download attribute of the anchor to the filename you want to use for the downloaded file
      downloadLink.download = 'certificate.pdf';
      
      // simulate a click on the anchor element to trigger the download
      downloadLink.click();
    }
    function handleResume()
    {
        const resumeUrl = 'https://drive.google.com/file/d/1kzy6xIkiPp9S0RzQ6-5hWpLhUwILo0W4/view';
      
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
       <div className="home-container">
        <div className="home-content">
        {isDesktop ?<HomeDesktop/> :<HomePhone/>}
        
        <div className="demobtn buttons">
       
          <Button variant="contained" color="secondary" onClick={handleDownload}>
            VIEW CERTIFICATIONS
          </Button>
          <Button variant="contained" color="secondary" onClick={handleResume}>
            DOWNLOAD RESUME
          </Button>
        </div>
        </div>
       </div>
    )
}