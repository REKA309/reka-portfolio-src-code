import React from "react";
import HomeButton from "../uiComponents/homeButton";
import GirlLaptop from '../mediaFolder/girl_laptop.png'
export default function About()
{
    return(
        <div className="about-container">
            <div className="about-content">
            <HomeButton/>
            <div className="wrapper one">
            <div className="drop-main">
                <div className="d">A</div>
                <div className="r">B</div>
                <div className="o">O</div>
                <div className="p">U</div>
                <div className="s">T</div>
                <div>&nbsp;</div>
                <div className="lasts">M</div>
                <div className="puns">E</div>
            </div>
            </div>
            <h4 className="h4abt">Hi, This is N.Reka.I have completed my Bachelor's degree in Information Technology from Panimalar Engineering College, Chennai.I'm a web developer fresher with expertise in HTML, CSS, JavaScript,React JS. With basic knowledge of MySQL and MongodB and Node JS. In addition,I have done projects to showcase my skills.</h4>

            </div>
            <div className="about-picture">
                <img src={GirlLaptop}
                alt="sample"
               className="imgabt"/>
            </div>
        </div>
    )
}