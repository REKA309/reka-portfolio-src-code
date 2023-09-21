import React from "react";
export default function Achievements()
{
    return(
        <div className="achievements" >
            <div style={{padding:10, boxSizing:'border-box'}}>
                <h1> Academic Achievements 🏆</h1>
            </div>
            <div className="achi-con">
            <div className="card">
                <div className="card-body">
                    <h6 style={{color:'white'}}>School First Rank -<br/> Secured  School First rank with (476/500) 95.2% in SSLC Examination -2015</h6>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h6 style={{color:'white'}}>Department Rank Holder - Secured
                    second rank with 9.04 GPA in third
                    semester of Anna University
                    NOV/DEC 2018 EXAM</h6>
                 </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h6 style={{color:'white'}}>Anna University Rank Holder -
                    Secured 27th rank among 3821
                    candidates in B.Tech IT 2017-2021
                    with 8.91 CGPA</h6>
                </div>
            </div>
            </div>
           
        </div>
    )
}