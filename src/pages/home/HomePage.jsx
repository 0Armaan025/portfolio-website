import React from 'react';
import './homepage.css';
import { useState , useEffect } from 'react';
import { fadeIn, fadeInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { ReactTyped } from 'react-typed';
import MovingBalls from '../../components/MovingBalls';


const styles = {

    fadeIn: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    }
}

const HomePage = () => {



    const [onTopButtonClick, setOnTopButtonClick] = useState(false);
    const [onUpArrowButtonClick, setonUpArrowButtonClick] = useState(false);
    const [onRightArrowButtonClick, setonRightArrowButtonClick] = useState(false);
    const [onLeftArrowButtonClick, setonLeftArrowButtonClick] = useState(false);
    const [onBottomArrowButtonClick, setonBottomArrowButtonClick] = useState(false);

    const handleBottomArrowButtonClick = () => {
        setonBottomArrowButtonClick(true);
        setonLeftArrowButtonClick(false);
        setonRightArrowButtonClick(false);
        setOnTopButtonClick(false);
        setonUpArrowButtonClick(false);
        
    }

    const handleLeftArrowButtonClick = () => {
        setonLeftArrowButtonClick(true);
        setonRightArrowButtonClick(false);
        setOnTopButtonClick(false);
        setonUpArrowButtonClick(false);
        setonBottomArrowButtonClick(false);
    }


    const handleRightArrowButtonClick = () => {
        setonRightArrowButtonClick(true);
        setOnTopButtonClick(false);
        setonBottomArrowButtonClick(false);
        setonUpArrowButtonClick(false);
        setonLeftArrowButtonClick(false);
    }

    const onInternalButtonClick = () => {
        setOnTopButtonClick(true);
        setonBottomArrowButtonClick(false);
        setonUpArrowButtonClick(false);
        setonRightArrowButtonClick(false);
        setonLeftArrowButtonClick(false);
    }

    const handleUpArrowButtonClick = () => {
        setonUpArrowButtonClick(true);
        setonBottomArrowButtonClick(false);
        setOnTopButtonClick(false);
        setonRightArrowButtonClick(false);
        setonLeftArrowButtonClick(false);
    }

    const showProfile = () => {
        if (onTopButtonClick) {
            return (
                <><div className='profileDiv bg-white text-white' style={styles.fadeIn}>


                    <div className="basicDetailsRow">
                        <img src="https://avatars.githubusercontent.com/u/104704093?v=4" alt="Armaan" className="profileImage" />
                        <h3 className='profileNameText'>Armaan</h3>
                    </div>




                    <br />
                    <div className="middleRow">
                        <h2 style={{ background: "none", fontFamily: "Cute Font", fontSize: "22px" }}> ☕Tea | ♟️Chess | Ⓜ️M.U.N(s) | 👨🏻‍💻Coding | India 🏆 </h2>
                        <br />

                        {/* <h4 style={{background: "none", fontSize: "14px"}}> 🪄 Flutter | 🔥 Flame | 🕸️ HTML | ©️ CSS | 💻 JAVASCRIPT | ©️ C | ©️➕➕ | ☕ Java | 🐍 Python | 📖 React.js | 📂 Open Source | 🏆 Hackathon Lover </h4> */}
                        <br />

                    </div>
                    <h4 style={{ background: "none", fontFamily: "Poppins" }}>console.log("email: <a style={{ background: "none", fontFamily: "Poppins" }} href="mailto: armaan33000@gmail.com"><ReactTyped style={{ background: "none", color: "lightblue", textDecoration: "underline" }} strings={["armaan33000@gmail.com\");"]} typeSpeed={50} /></a></h4>


                </div>
                </>
            )
        }
    }

    const showProjects = () => {
        if (onBottomArrowButtonClick) {
            return (
                <><div className='projectsDiv text-white' style={styles.fadeIn}>

                        
                    <h4 className='profileNameText' style={{background : "#2b3237",fontSize: "25px"}}>Armaan's Projects</h4>
                        <div className="projects" style={styles.fadeIn  }>
                            <div className="project">
                                <a href="https://devpost.com/software/eduso" target="new" style={{background: "white"}}><img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/352/386/datas/gallery.jpg" className='projectImage'/></a>
                                <h5 style={{background: "none", width: "70px", fontSize: "12px"}}>EyeFit</h5>
                            </div>
                            <div className="project">
                                <a href="https://devpost.com/software/thebookverse" target="new"><img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/566/991/datas/gallery.jpg" className='projectImage'/></a> 
                                <h5 style={{background: "none", width: "70px", fontSize: "12px"}}>TheBookVerse</h5>
                            </div>
                            <div className="project">
                            <a href="https://devpost.com/software/parko-f5nmoi" target="new" style={{background: "white"}}><img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/542/509/datas/gallery.jpg" className='projectImage'/></a>
                                <h5 style={{background: "none", width: "70px", fontSize: "12px"}}>Parko</h5>
                            </div>
                            <div className="project">
                            <a href="https://devpost.com/software/portthefolio" target="new" style={{background: "white"}}><img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/497/256/datas/medium.png" className='projectImage'/></a>
                                <h5 style={{background: "none", width: "70px", fontSize: "12px"}}>PortTheFolio</h5>
                            </div>
                        </div>
                </div>
                </>
            )
        }
    }

    const showSkillSet = () => {
        if (onUpArrowButtonClick) {
            return (
                <><div className='skillsDiv bg-white text-white' style={styles.fadeIn}>


                    <br />
                    <h3 className='background-none' style={{ fontFamily: "Acme", background: "none", fontSize: "32px" }}>SKILL SET 🚀</h3>
                    <br />
                    <h4 style={{ background: "none", fontSize: "18px", background: "none", fontWeight: "bold", fontFamily: "Poor Story" }}> <ReactTyped style={{ background: "none" }} strings={["🪄 Flutter | 🔥 Flame | 🕸️ HTML | ©️ CSS | 💻 JAVASCRIPT | 🐍 Python | 📖 React.js | 📂 Open Source | 🏆 Hackathon Lover | 🎨 Figma | 🖼️ Adobe XD | ☁️ Firebase | ☁️ Supabase | ☁️ MongoDB"]} typeSpeed={40} loop /></h4>
                    <h4 style={{ background: "none", fontSize: "16px", background: "none", fontWeight: "bold", fontFamily: "Poor story" }}> <ReactTyped style={{ background: "none" }} strings={["Did ©️, ©️➕➕, and ☕ long time ago."]} typeSpeed={100} /></h4>

                    <br />
                </div>





                </>
            )
        }
    }

    const showEducation = () => {
        if (onLeftArrowButtonClick) {
            return (
                <><div className='educationDiv bg-white text-white' style={styles.fadeIn}>


                    <br />
                            <h4 className='educationHeadlineText font-semibold text-white text-5xl'>Education and Experience! 📙</h4>
                            <div className="educationBoxes">
                                <div className="educationBox1">
                                    <h3 className='text-2xl font-bold' style={{fontFamily: "Poppins"}}>Education 🏫</h3>
                                    <h4>25/01/2010 = Birth</h4>
                                    <h4>2013-Present = School </h4>
                                    <h4><a href="http://shcsjagraon.com" target="new" style={{fontFamily: "Poppins", color: "skyblue"}}>SHCS, Jagraon 📌</a></h4>
                                </div>

                                {/* <div className="dividerBox"></div> */}

                                <div className="educationBox2">
                                <h3 className='text-2xl font-bold' style={{fontFamily: "Poppins"}}>Experience 💼</h3>
                                <h4>Hackathon Hacker 👨🏻‍💻</h4>
                                    <h4>^ 2022 Nov - Present 🕰️ </h4>
                                    <h4>Appgud hackathon judge - 2024 🧑🏻‍⚖️</h4>
                                    <h4>CodeBeetles Admin - Present 🔥</h4>
                                    
                                </div>
                            </div>
                    <br />
                </div>





                </>
            )
        }
    }

    const showContact = () => {
        if (onRightArrowButtonClick) {
            return (
                <><div className='contactDiv bg-white text-white' style={styles.fadeIn}>





                    <h3 className='slicedText'>Reach me at: </h3>



                    <div className="contactBoxes mt-5 ml-1">
                        <div className="contactBox1">
                            <a className='contactLink' href="emailto:armaan33000@gmail.com">Email: armaan33000@gmail.com</a>

                            <a className='contactLink' href="https://github.com/0Armaan025" target='new'>Github: 0Armaan025</a>

                            <a className='contactLink' href="https://x.com/0Armaan025" target='new'>X(formerly-twitter): 0Armaan025</a>

                            <a className='contactLink' href="https://devpost.com/armaan33000?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target='new'>Devpost: Armaan 25</a>

                        </div>
                        <div className="contactBox2 ml-4 mr-2">
                            <img className="rounded-lg" style={{ background: "none" }} src="https://images.ladbible.com/resize?type=jpeg&quality=70&width=720&fit=contain&gravity=null&url=https://s3-images.ladbible.com/s3/content/bd9f19995fe03288211239f5ac6e093f.png" width="150px" height="300px" />
                        </div>
                    </div>






                </div>

                    {/* help
                - info
                - location
                - skills
                - contact
                - projects
                - education */}




                </>
            )
        }
    }

    return (
        <>
            <center>
                <br /><br /><br />

                <div className="homePage">

                    <div className="nintendoSwitch">

                        <div className="leftSide">

                            <div className="minus_btn">

                            </div>

                            <button className="topButton" onClick={onInternalButtonClick}>
                                <div className="internalButton"></div>
                            </button>


                            <div className="arrowButtons">
                                <button className="topArrowButton" onClick={handleUpArrowButtonClick}>
                                    <img src="https://cdn-icons-png.flaticon.com/128/3838/3838683.png" height="20px" width="20px" />
                                </button>
                                <div className="leftAndRightArrowButtons">
                                    <button className="leftArrowButton" onClick={handleLeftArrowButtonClick}>
                                        <img src="https://cdn-icons-png.flaticon.com/128/271/271220.png" height="15px" width="15px" />
                                    </button>
                                    <button className="rightArrowButton" onClick={handleRightArrowButtonClick}>
                                        <img src="https://cdn-icons-png.flaticon.com/128/271/271228.png" height="15px" width="15px" />
                                    </button>
                                </div>

                                <button className="bottomArrowButton" onClick={handleBottomArrowButtonClick}>
                                    <img src="https://cdn-icons-png.flaticon.com/128/6916/6916826.png" height="20px" width="20px" />
                                </button>
                            </div>

                        </div>
                        <div className="nintendoSwitch__outsideScreen">
                            <div className="nintendoSwitch__screen">

                                <div className="nintendoSwitch__screen__screen">

                                    {onTopButtonClick ? showProfile() : null}
                                    {onUpArrowButtonClick ? showSkillSet() : null}
                                    {onRightArrowButtonClick ? showContact() : null}
                                    {onLeftArrowButtonClick ? showEducation() : null}
                                    {onBottomArrowButtonClick ? showProjects() : null}
                                </div>
                            </div>
                        </div>

                        <div className="rightSide">
                            <button className='plus_btn font-black'>+</button>

                            <div className="letterButtons">
                                <button className="topArrowButton">
                                    <h3 className='arrowLetter'>X</h3>
                                </button>
                                <div className="leftAndRightArrowButtons">
                                    <button className="leftArrowButton">
                                        <h3 className='arrowLetter'>Y</h3>
                                    </button>
                                    <button className="rightArrowButton">
                                        <h3 className='arrowLetter'>A</h3>
                                    </button>
                                </div>

                                <button className="bottomArrowButton">
                                    <h3 className='arrowLetter'>B</h3>
                                </button>
                            </div>

                            <br />
                            <div className="righttopButton">
                                <button className="rightinternalButton">
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </center>
        </>
    )
}

export default HomePage;