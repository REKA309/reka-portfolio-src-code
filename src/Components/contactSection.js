import React from "react";
import Contact from '../mediaFolder/Contact.png'
import social from "../mediaFolder/social";
export default function ContactSection()
{
    const currentYear = new Date().getFullYear();
  const yourNameOrCompany = 'REKA NAGARAJ';
//   const contactEmail = 'reka3092@gmail.com'
    return(
        <div className="contact-whole">
        <div className="contact-container">
        <div className="wrapper two">
                <div className="neon">
                    <h1>Passionate about growth and learning 🚀<br/> #JobSeeker</h1>
                </div>
            </div>
        <div>
                <h2 >Find Me On</h2>
            </div>
           <div className="social-media">
               {social.map((acc)=>(
               <a key={acc.id} href={acc.hyplink}  target="_blank"  rel="noreferrer">
                 <img src={acc.icon}
                alt={acc.altname}
               className="socialicon"/>
               </a>
               ))} 
           </div>
        <div className="copyright-section">
      <p >&copy; {currentYear} {yourNameOrCompany}</p>
      <p>
     
All content on this website is copyrighted and owned by {yourNameOrCompany}. Unauthorized reproduction or use in any form is prohibited. Third-party images and resources are subject to their respective licenses. For inquiries,reach out to mail given above.
   
      </p>
     
    </div>
        </div>
    <div className="about-picture1">
            <img src={Contact} alt="contact" width={400} height={400}/>
           </div>
        </div>
    )
}