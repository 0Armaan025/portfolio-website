import React from 'react';
import './homepage.css';
import { useState } from 'react';
import { fadeIn, fadeInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { ReactTyped } from 'react-typed';


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


    const handleRightArrowButtonClick = () => {
        setonRightArrowButtonClick(true);
        setOnTopButtonClick(false);
        setonUpArrowButtonClick(false);
    }

    const onInternalButtonClick = () => {
        setOnTopButtonClick(true);
        setonUpArrowButtonClick(false);
        setonRightArrowButtonClick(false);
    }

    const handleUpArrowButtonClick = () => {
        setonUpArrowButtonClick(true);
        setOnTopButtonClick(false);
        setonRightArrowButtonClick(false);
    }

    const showProfile = () => {
        if (onTopButtonClick) {
            return (
                <><div className='profileDiv bg-white text-white' style={styles.fadeIn}>


                    <div className="basicDetailsRow">
                        <img src="https://avatars.githubusercontent.com/u/77193760?v=4" alt="Armaan" className="profileImage" />
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

    const showSkillSet = () => {
        if (onUpArrowButtonClick) {
            return (
                <><div className='skillsDiv bg-white text-white' style={styles.fadeIn}>


                    <br />
                    <h3 className='background-none' style={{ fontFamily: "Acme", background: "none", fontSize: "32px" }}>SKILL SET 🚀</h3>
                    <br />
                    <h4 style={{ background: "none", fontSize: "15px", background: "none", fontWeight: "bold", fontFamily: "Poor Story" }}> <ReactTyped style={{ background: "none" }} strings={["🪄 Flutter | 🔥 Flame | 🕸️ HTML | ©️ CSS | 💻 JAVASCRIPT | 🐍 Python | 📖 React.js | 📂 Open Source | 🏆 Hackathon Lover | 🎨 Figma | 🖼️ Adobe XD | ☁️ Firebase | ☁️ Supabase | ☁️ MongoDB"]} typeSpeed={40} loop /></h4>
                    <h4 style={{ background: "none", fontSize: "15px", background: "none", fontWeight: "bold", fontFamily: "Poor story" }}> <ReactTyped style={{ background: "none" }} strings={["Did ©️, ©️➕➕, and ☕ long time ago."]} typeSpeed={100} /></h4>

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


                    <br />
                    
                    
                    <h3 className='slicedText'>Reach me at: </h3>
                    
                    <br/>

                    <a className='contactLink' href="emailto:armaan33000@gmail.com">Email: armaan33000@gmail.com</a>
                    <br/>
                    <a className='contactLink' href="https://github.com/0Armaan025" target='new'>Github: 0Armaan025</a>
                    <br/>
                    <a className='contactLink' href="https://x.com/0Armaan025" target='new'>X(formerly-twitter)</a>
                    
                    
                    <br />

                    <br />
                </div>

                help
                - info
                - location
                - skills
                - contact
                - projects
                - education
                



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
                                    <button className="leftArrowButton">
                                        <img src="https://cdn-icons-png.flaticon.com/128/271/271220.png" height="15px" width="15px" />
                                    </button>
                                    <button className="rightArrowButton" onClick={handleRightArrowButtonClick}>
                                        <img src="https://cdn-icons-png.flaticon.com/128/271/271228.png" height="15px" width="15px" />
                                    </button>
                                </div>

                                <button className="bottomArrowButton">
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