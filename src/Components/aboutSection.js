import React from "react";
import GirlLaptop from '../mediaFolder/girl_laptop.png'
export default function About()
{
    return(
        <div className="about-container">
            <div className="about-content">
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
            <h4 className="h4abt">Hi, This is N.Reka.Aspiring IT professional and recent B.Tech IT graduate from Panimalar Engineering College (2021) with an impressive CGPA of 8.91. Equipped with comprehensive skills from Guvi's FSD MERN Stack program (2023). I have done projects based on FSD to showcase my skills</h4>

            </div>
            <div className="about-picture">
                <img src={GirlLaptop}
                alt="sample"
               className="imgabt"/>
            </div>
        </div>
    )
}