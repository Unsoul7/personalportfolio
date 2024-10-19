import React,{useEffect, useState} from "react";
import '../styles/leftbar.css'
import maillogo from '../assets/mail.png'
import githublogo from '../assets/github.png'
import instagramlogo from '../assets/instagram.png'
import downloadlogo from '../assets/download.png'
import home from '../assets/home.png'
import about from '../assets/profile.png'
import resume from '../assets/resume.png'
import services from '../assets/services.png'
import portfolio from '../assets/portfolio.png'
import blog from '../assets/blog.png'
import contact from '../assets/contact.png'

export const LeftBar = (props) => {

    const talents = ['Web Dev','Video Editor','Social Media Manager','Fullstack Dev']
    const [Prof, setProf] = useState(talents[0])
    const [sideshowclasses, setsideshowclasses] = useState('left-panel show')

    useEffect(() => {

        if(props.sidebar == true){
            setsideshowclasses('left-panel')
        }else{
            setsideshowclasses('left-panel hidden')
        }

        let index = 0;

        const updateTalent = () => {
            setProf(talents[index]);
            index = (index + 1) % talents.length; // Reset index after reaching the end
            setTimeout(updateTalent, 5000); // Call the function again after 5 seconds
        };

        const timerId = setTimeout(updateTalent, 5000); // Start the loop

        return () => clearTimeout(timerId); // Cleanup on unmount
        
       

    }, [props.sidebar, Prof]);


    return(
        <div className={sideshowclasses}>
            <div id="profile-picture"></div>
            <div id="profile-name"><p><span style={{"fontWeight" : "bold"}}>Aman</span> Prajapati</p></div>
            <div id="profile-professional-role"><p>{Prof}</p></div>
            
            <div id="profile-social-handles" >

                <div><img src={maillogo} alt="" /></div>
                <div><img src={githublogo} alt="" /></div>
                <div><img src={instagramlogo} alt="" /></div>

            </div>

            <div className="profile-options-btns">
                <div> <img src={home} alt="" /> <a href="#">Home</a></div>
                <div><img src={about} alt="" /><a href="#">About</a></div>
                <div><img src={resume} alt="" /><a href="#">Resume</a></div>
                <div><img src={services} alt="" /><a href="#">Services</a></div>
                <div><img src={portfolio} alt="" /><a href="#">Portfolio</a></div>
                <div><img src={blog} alt="" /><a href="#">Blog</a></div>
                <div><img src={contact} alt="" /><a href="#">Contact</a></div>
            </div>

            

            {/* <div id="download-cv-btn">
                <img src={downloadlogo} alt="" />
                <a href="">Download CV</a>
            </div> */}
        </div>
    )
}