import React,{useEffect, useState} from "react";
import '../styles/leftbar.css'
import maillogo from '../assets/mail.png'
import githublogo from '../assets/github.png'
import instagramlogo from '../assets/instagram.png'
import downloadlogo from '../assets/download.png'



export const LeftBar = () => {

    const talents = ['Web Dev','Video Editor','Social Media Manager','Fullstack Dev']
    const [Prof, setProf] = useState(talents[0])

    useEffect(() => {
        let index = 0;

        const updateTalent = () => {
            setProf(talents[index]);
            index = (index + 1) % talents.length; // Reset index after reaching the end
            setTimeout(updateTalent, 5000); // Call the function again after 5 seconds
        };

        const timerId = setTimeout(updateTalent, 5000); // Start the loop

        return () => clearTimeout(timerId); // Cleanup on unmount
    }, []);


    return(
        <div className="left-panel">
            <div id="profile-picture"></div>
            <div id="profile-name"><p><span style={{"fontWeight" : "bold"}}>Aman</span> Prajapati</p></div>
            <div id="profile-professional-role"><p>{Prof}</p></div>
            
            <div id="profile-social-handles" >

                <div><img src={maillogo} alt="" /></div>
                <div><img src={githublogo} alt="" /></div>
                <div><img src={instagramlogo} alt="" /></div>

            </div>

            <div className="profile-options-btns">
                <div><a href="#">Home</a></div>
                <div><a href="#">About</a></div>
                <div><a href="#">Resume</a></div>
                <div><a href="#">Services</a></div>
                <div><a href="#">Portfolio</a></div>
                <div><a href="#">Blog</a></div>
                <div><a href="#">Contact</a></div>
            </div>

            <div id="download-cv-btn">
                <img src={downloadlogo} alt="" />
                <a href="">Download CV</a>
            </div>
        </div>
    )
}