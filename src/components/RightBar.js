import React, { useState, useEffect } from "react";
import '../styles/rightbar.css'
import { Project } from "./Project";
import project1 from "../assets/project1.jpeg"
import vid1 from "../assets/podcastvid1.png"
import pagebjp from "../assets/pageport.png"
export const RightBar = () => {

    const talents = ['Web Dev', 'Video Editor', 'Social Media Manager', 'Fullstack Dev']
    const [Prof, setProf] = useState(talents[0])

    useEffect(() => {
        let index = 0;

        const updateTalent = () => {
            setProf(talents[index]);
            index = (index + 1) % talents.length;
            setTimeout(updateTalent, 5000);
        };

        const timerId = setTimeout(updateTalent, 5000);
        return () => clearTimeout(timerId);
    }, []);

    return (
        <div className="right-panel">

            <div id="profile-full-name">
                <p><span>Aman</span> Prajapati</p>
            </div>

            <div id="profile-professional-role"><p>{Prof}</p></div>

            <div id="profile-user-tagline"><p>Tech Enthusiast Who Loves to Read Books, Drawing and Learn New Technologies.</p></div>

            <div id="action-btns">
                <a href="#portfolio-section">View Work</a>
                <a href="mailto:amanforsure@gmail.com">Contact Me</a>
            </div>

            <div id="profile-about-me">

                <div id="aboutme-line">
                    <p>About Me.</p>
                    <div></div>
                </div>

                <p>I’m a multi-skilled professional with expertise in web development and content creation. Proficient in HTML, CSS, JavaScript, Python, Node.js, Express, React, and MongoDB, I build scalable web applications. With Next.js and strong data structure knowledge, I handle both front-end and back-end development efficiently.</p>
            </div>

            <table>
                <tr>
                    <td>Name</td><td>:</td><td>Aman Prajapati</td>
                </tr>
                <tr>
                    <td>Nationality</td><td>:</td><td>Indian</td>
                </tr>
                <tr>
                    <td>Phone</td><td>:</td><td>+91 99112 80143</td>
                </tr>
                <tr>
                    <td>Email</td><td>:</td><td>amanforsure@gmail.com</td>
                </tr>
                <tr>
                    <td>Experience</td><td>:</td><td>2+ Years</td>
                </tr>
                <tr>
                    <td>Freelance</td><td>:</td><td>Available</td>
                </tr>
                <tr>
                    <td>Instagram</td><td>:</td><td>amanherexd</td>
                </tr>
                <tr>
                    <td>Language</td><td>:</td><td>English</td>
                </tr>
            </table>


            <div className="edu-exp">
                <div className="edu-exp-container">
                    <div id="aboutme-line">
                        <p>Education</p>
                        <div></div>
                    </div>

                    <div className="exp-edu-inner-container">
                        <div className="edu-exp-badges">
                            <div className="upper-circle">
                                <div></div>
                            </div>
                            <div className="badge-line">
                            </div>
                        </div>

                        <div className="edu-exp-detail">

                            <h2>Completed Education</h2>
                            <h3>Indraprastha Convent School</h3>
                            <p>I completed my schooling in the science stream and dedicated two years to preparing for the JEE Mains exam. During this time, I developed a strong passion for mathematics and chemistry, which fueled my motivation and deepened my understanding of these subjects.</p>
                        </div>    
                    </div>

                    <div className="exp-edu-inner-container">
                        <div className="edu-exp-badges">
                            <div className="upper-circle">
                                <div></div>
                            </div>
                            <div className="badge-line">
                            </div>
                        </div>

                        <div className="edu-exp-detail">

                            <h2>Certification in Graphic Design</h2>
                            <h3>CITE Computer Education</h3>
                            <p>I completed a six-month certification course in graphic design, during which I gained proficiency in PageMaker, CorelDRAW, and Adobe Photoshop. This program equipped me with essential skills in design principles, enabling me to create engaging graphics and layouts effectively.</p>
                        </div>
                    </div>

                </div>


                <div className="edu-exp-container">
                    <div id="aboutme-line">
                        <p>Experience</p>
                        <div></div>
                    </div>
                    <div className="exp-edu-inner-container">
                        <div className="edu-exp-badges">
                            <div className="upper-circle">
                                <div></div>
                            </div>
                            <div className="badge-line">
                            </div>
                        </div>

                        <div className="edu-exp-detail">

                            <h2>Bread Jam Productions</h2>
                            <h3>Social Media Manager <span style={{color : '#dd50a7'}}>(Currently Working)</span></h3>
                            <p>I currently work at Bread Jam Productions, a production house specializing in commercial ads for major brands. My role involves managing the company's social media pages to enhance our online presence and engage with our audience.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="coding-skills">
                <div id="coding-skills-line">
                    <p>Coding Skills.</p>
                    <div></div>
                </div>

                <div id="skills">
                    <div>
                        <h2>94%</h2>
                        <h3>HTML,CSS</h3>
                    </div>
                    <div>
                        <h2>98%</h2>
                        <h3>Photoshop</h3>
                    </div>
                    <div>
                        <h2>88%</h2>
                        <h3>Premiere Pro</h3>
                    </div>
                    <div>
                        <h2>85%</h2>
                        <h3>Python</h3>
                    </div>
                    <div>
                        <h2>89%</h2>
                        <h3>Filmora</h3>
                    </div>
                </div>
            </div>

            <div id="portfolio-section">
                <div className="pline">
                    <p>Portfolio.</p>
                    <div></div>
                </div>

                <div className="projects-section">
                    <Project name='Ecommerce App' link='https://blackfriday-lyart.vercel.app/' img={project1} />
                    <Project name='Podcast Video Shooting and Editing' link='https://drive.google.com/file/d/1OURUR1M-hlU4bikoOQeeZf4n74gC-Zcf/view?usp=sharing' img={vid1} />
                    <Project name='Managing Social Page' link='https://www.instagram.com/breadjamproductions_/' img={pagebjp} />
                    </div>

            </div>

        </div>
    )
}