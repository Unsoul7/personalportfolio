import React, { useState, useEffect } from "react";
import '../styles/rightbar.css'

export const RightBar = () => {

    const talents = ['Web Dev', 'Video Editor', 'Social Media Manager', 'Fullstack Dev']
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

    return (
        <div className="right-panel">

            <div id="profile-full-name">
                <p><span>Aman</span> Prajapati</p>
            </div>

            <div id="profile-professional-role"><p>{Prof}</p></div>

            <div id="profile-user-tagline"><p>We appreciate your trust greatly our clients choose us & our products because they know we are the best.</p></div>

            <div id="action-btns">
                <a href="">View Work</a>
                <a href="">Contact Me</a>
            </div>

            <div id="profile-about-me">
                <div id="aboutme-line">
                    <p>About Me.</p>
                    <div></div>
                </div>

                <p>I’m a multi-skilled professional with expertise in web development and content creation. Proficient in HTML, CSS, JavaScript, Python, Node.js, Express, React, and MongoDB, I build scalable web applications. With Next.js and strong data structure knowledge, I handle both front-end and back-end development efficiently.</p>
            </div>

        </div>
    )
}