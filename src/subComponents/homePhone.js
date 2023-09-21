import React from "react";
import GirlWorking from '../mediaFolder/girlwork.png'
export default function HomePhone()
{
    return(
       <div className="home-phone">
        <h1>Hello 👋 I'm</h1>
        <h2>WEB DEVELOPER - FSD MERN STACK | FRONT-END DEVELOPER</h2>
        <div className="about-picture">
            <img src={GirlWorking} alt="homegirl" width={250} height={250}/>
        </div>
       </div>
           
    )
}