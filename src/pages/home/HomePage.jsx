import React, { useSyncExternalStore } from "react";
import "./homepage.css";
import { useState, useEffect } from "react";
import { fadeIn, fadeInDown } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { ReactTyped } from "react-typed";
import MovingBalls from "../../components/MovingBalls";
import axios from "axios";
import Dino from "../../dino/Dino";
import { supabase } from "../../components/supabaseClient";

const styles = {
  fadeIn: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInDown, "fadeInDown"),
  },
};

const HomePage = () => {
  const [onTopButtonClick, setOnTopButtonClick] = useState(false);
  const [onUpArrowButtonClick, setonUpArrowButtonClick] = useState(false);
  const [onRightArrowButtonClick, setonRightArrowButtonClick] = useState(false);
  const [onLeftArrowButtonClick, setonLeftArrowButtonClick] = useState(false);
  const [onBottomArrowButtonClick, setonBottomArrowButtonClick] =
    useState(false);
  const [showTerminalButton, setshowTerminalButton] = useState(false);
  const [showRickRollButton, setShowRickRollButton] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [showAdvancement, setshowAdvacement] = useState(false);
  const [loadingFriends, setLoadingFriends] = useState(true);

  const [friendName, setFriendName] = useState("");
  const [showFriends, setshowFriends] = useState(false);
  const [friendsList, setFriendsList] = useState();
  const [userName, setuserName] = useState("Armaan");
  const [imageSrc, setImageSrc] = useState("");

  const generateImage = async () => {
    const apiUrl = "http://127.0.0.1:5000/generate_image";
    const apiKey = "armaanLovesCoding";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Api-Key": apiKey,
        },
        body: JSON.stringify({ name: userName }), // Make sure to use 'name' here
      });

      if (response.ok) {
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setImageSrc(imageUrl);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleAdvancement = () => {
    setshowAdvacement(true);
    setShowRickRollButton(false);
    setshowTerminalButton(false);
    setonBottomArrowButtonClick(false);
    setonLeftArrowButtonClick(false);
    setonRightArrowButtonClick(false);
    setOnTopButtonClick(false);
    setonUpArrowButtonClick(false);
    setshowFriends(false);
  };

  const showTheAdvancement = () => {
    if (showAdvancement) {
      return (
        <>
          {/* <div className="advancementDiv" style={{background: "none"}}>
                        
                        <h4 className='avatarCreatorText text-white font-bold'>Name Card Generator 😎</h4>
                        
                        <input type="text" placeholder='Enter your name' className='p-1 w-64 mr-32 mb-2 mt-2 rounded-md text-white'/>
                        <button onClick={generateImage} className='generateBtnForImage'>Generate</button>

                        {imageSrc && <img src={imageSrc} alt="Generated Image"  height="150px" width="150px" style={{marginTop: "4px"}}/>}
                        <img src="https://i.postimg.cc/Hx12wS3H/achievement.png" className='advancementPng' />
                    </div> */}
          <center>
            <h2 style={{ color: "white" }}>Coming soon!</h2>
          </center>
        </>
      );
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const getFriendsData = async () => {
      try {
        const { data, error } = await supabase
          .from("friends")
          .select("friendName");

        console.log("the data is", data);

        if (error) {
          console.error("Error fetching friends data:", error.message);
        } else {
          setFriendsList(data);
        }
      } catch (error) {
        console.error("Error fetching friends data:", error.message);
      } finally {
        setLoadingFriends(false);
      }
    };

    getFriendsData();
  }, []);

  const handleFriendsName = (e) => {
    setFriendName(e.target.value);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  const handleDinoGameButton = () => {
    setOnTopButtonClick(false);
    setshowAdvacement(false);
    setonUpArrowButtonClick(false);
    setonRightArrowButtonClick(false);
    setonLeftArrowButtonClick(false);
    setonBottomArrowButtonClick(false);
    setshowTerminalButton(false);
    setShowRickRollButton(false);
    setshowFriends(true);
  };

  const addFriendsToStorage = async () => {
    try {
      const { data, error } = await supabase.from("friends").upsert([
        {
          friendName: friendName,
        },
      ]);

      if (error) {
        console.error("Error adding friend:", error.message);
        window.location.reload(true);
      } else {
        localStorage.setItem("isFriend", true);
        setshowFriends(true);
        window.location.reload(true);
      }
    } catch (error) {
      console.error("Error adding friend:", error.message);
    }
  };

  const renderFriendsScreen = () => {
    if (loadingFriends) {
      return <p>Loading friends...</p>;
    }

    if (!localStorage.getItem("isFriend")) {
      return (
        <div className="friendsDiv" style={{ background: "none" }}>
          <h4
            style={{
              color: "white",
              fontSize: "18px",
              fontFamily: "Poppins",
              width: "320px",
              marginTop: "18px",
            }}
          >
            Add your name to be Armaan's friend and view friends! 😉
          </h4>
          <input
            type="text"
            placeholder="Enter your name hereeee."
            onChange={handleFriendsName}
            style={{
              padding: "4px",
              borderRadius: "6px",
              marginTop: "18px",
              width: "280px",
              color: "white",
              textAlign: "center",
            }}
          />
          <br />
          <input
            type="button"
            onClick={addFriendsToStorage}
            className="submitBtnForFriendName"
            value="Submit"
            style={{
              border: "none",
              marginTop: "18px",
              paddingRight: "8px",
              paddingLeft: "8px",
              paddingTop: "4px",
              paddingBottom: "4px",
              background: "#2d0042",
              color: "white",
              width: "80px",
              borderRadius: "8px",
              transition: "0.3s ease-in-out",
            }}
          />
        </div>
      );
    } else {
      return (
        <>
          <br />
          <h4
            style={{ fontFamily: "Poppins", color: "#fff", fontSize: "16px" }}
          >
            Friends List, let's see if you made it there :D🔥
          </h4>
          <br />
          <div
            style={{
              overflow: "auto",
              maxHeight: "130px", // Adjust according to your layout, leaving space for header and padding
              background: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              marginRight: "18px",
              marginLeft: "18px",
            }}
          >
            <table
              style={{
                background: "none",
                color: "#fff",
                border: "2px solid #fff",
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr style={{ border: "2px solid #fff" }}>
                  <th
                    style={{
                      border: "2px solid #fff",
                      padding: "10px",
                      background: "none",
                    }}
                  >
                    S. No
                  </th>
                  <th
                    style={{
                      border: "2px solid #fff",
                      padding: "10px",
                      background: "none",
                    }}
                  >
                    Friends
                  </th>
                </tr>
              </thead>
              <tbody>
                {friendsList.map((friend, index) => (
                  <tr
                    key={index}
                    style={{ border: "2px solid #fff", background: "none" }}
                  >
                    <td
                      style={{
                        border: "2px solid #fff",
                        padding: "10px",
                        background: "none",
                      }}
                    >
                      {index + 1}
                    </td>
                    <td
                      style={{
                        border: "2px solid #fff",
                        padding: "10px",
                        background: "none",
                      }}
                    >
                      {friend.friendName}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      );
    }
  };

  const handleRickRollButton = () => {
    setShowRickRollButton(true);
    setshowTerminalButton(false);
    setonBottomArrowButtonClick(false);
    setonLeftArrowButtonClick(false);
    setonRightArrowButtonClick(false);
    setshowAdvacement(false);
    setOnTopButtonClick(false);
    setonUpArrowButtonClick(false);
    setshowFriends(false);
  };

  const showRickRoll = () => {
    if (showRickRollButton) {
      return (
        <>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/xvFZjo5PgG0?si=mVEg-0lr0pP5Q34w&amp;controls=0&amp;start=2?autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </>
      );
    }
  };

  const handleCommand = (command) => {
    let result;

    // https://www.youtube.com/watch?v=xvFZjo5PgG0

    switch (command.toLowerCase()) {
      case "info":
        result =
          "Information: Armaan | 14 | Tea | Flutter | Flame | Web and Android Dev | Chess | M.U.N(s) | Firebase | Supabase | MongoDB | React.js | HTML | CSS | JAVASCRIPT";
        break;
      case "projects":
        result =
          "Projects: <a href='https://devpost.com/software/eyefit-5sjamy'>EyeFit <a/> | <a href='https://devpost.com/software/thebookverse'> TheBookVerse <a/> | <a href='https://devpost.com/software/parko-f5nmoi'>Parko<a/> |<a href='https://devpost.com/software/portthefolio'> PortTheFolio </a>| <a href='https://devpost.com/armaan33000?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav'>More on Devpost</a>";
        break;
      case "experience":
        result =
          "Experience: Hackathon Hacker (2022 Nov-Present), CodeBeetles Admin - Present, Appgud hackathon hacks Judge - Present, HackUnited offer - present, streamlit ambassador - present, MLH Mentor (Previous)";
        break;
      case "clear":
        result = "";
        setOutput("");
        break;
      case "contact":
        result =
          'Contact: <a href="mailto:armaan33000@gmail.com" target="new">Email</a> | <a href="https://github.com/0Armaan025/" target="new">Github</a> | <a href="https://twitter.com/0Armaan025/" target="new">X(formerly-twitter)</a> | <a href="https://devpost.com/armaan33000?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="new">Devpost</a>';
        setOutput("");
        break;
      case "npm start":
        result = "";
        setshowTerminalButton(false);
        setonBottomArrowButtonClick(false);
        setonLeftArrowButtonClick(false);
        setonRightArrowButtonClick(false);
        setOnTopButtonClick(true);
        setshowAdvacement(false);
        setonUpArrowButtonClick(false);
        setOutput("");
        break;
      case "education":
        result =
          'Education: 25/01/2010 = Birth | 2013-Present = School | <a href="http://shcsjagraon.com" target="new">SHCS, Jagraon</a>';
        break;
      case "experience":
        result = "";
        break;
      case "ls":
        result =
          "Info<br/>Projects<br/>Clear<br/>Echo<br/>Help<br/>Contact<br/>npm start<br/>Education<br/>Experience";
        break;
      case "dir":
        result =
          "Info<br/>Projects<br/>Clear<br/>Echo<br/>Help<br/>Contact<br/>npm start<br/>Education<br/>Experience";
        break;
      case "echo":
        result = input.slice(5); // Assuming "echo" is the first 4 characters of the input
        break;
      case "help":
        result =
          "Available commands: info, projects, clear, echo, help, contact, npm start, education, experience";
        break;
      default:
        if (command.toLowerCase().includes("echo")) {
          result = command.slice(5);
          break;
        } else if (command.toLowerCase().includes("cd")) {
          result = command.slice(3);

          if (result.toLowerCase() == "info") {
            result =
              "Information: Armaan | 14 | Tea | Flutter | Flame | Web and Android Dev | Chess | M.U.N(s) | Firebase | Supabase | MongoDB | React.js | HTML | CSS | JAVASCRIPT";
            break;
          } else if (result.toLowerCase() == "projects") {
            result =
              "Projects: <a href='https://devpost.com/software/eyefit-5sjamy'>EyeFit <a/> | <a href='https://devpost.com/software/thebookverse'> TheBookVerse <a/> | <a href='https://devpost.com/software/parko-f5nmoi'>Parko<a/> |<a href='https://devpost.com/software/portthefolio'> PortTheFolio </a>| <a href='https://devpost.com/armaan33000?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav'>More on Devpost</a>";
            break;
          } else if (result.toLowerCase() == "contact") {
            result =
              'Contact: <a href="mailto:armaan33000@gmail.com" target="new">Email</a> | <a href="https://github.com/0Armaan025/" target="new">Github</a> | <a href="https://twitter.com/0Armaan025/" target="new">X(formerly-twitter)</a> | <a href="https://devpost.com/armaan33000?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="new">Devpost</a>';
            setOutput("");
            break;
          } else if (result.toLowerCase() == "education") {
            result =
              'Education: 25/01/2010 = Birth | 2013-Present = School | <a href="http://shcsjagraon.com" target="new">SHCS, Jagraon</a>';
            break;
          } else if (result.toLowerCase() == "experience") {
            break;
          } else if (result.toLowerCase() == "clear") {
            result = "";
            setOutput("");
            break;
          } else if (result.toLowerCase() == "help") {
            result =
              "Available commands: info, projects, clear, echo, help, contact, npm start, education, experience";
            break;
          } else {
            result = "Command not recognized";
            break;
          }

          break;
        }

        result = "Command not recognized";
    }

    if (result !== "") {
      result = "C:Admin>>>" + result;
    }

    setOutput(
      (prevOutput) => prevOutput + (prevOutput ? "<hr/>" : "") + result
    );

    setInput("");
  };

  const showTerminal = () => {
    return (
      <>
        <div
          className="terminalDiv text-left p-2"
          style={{ overflowY: "auto   ", fontFamily: "Poppins" }}
        >
          <h3 className="text-white font-bold">
            Nintendo Console Armaan Portfolio ©️ 2024
          </h3>
          <div className="commandText flex-row justify-start">
            <p
              style={{
                color: "white",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              C:\Admin&gt;&gt;&gt;
            </p>
            <input
              style={{
                background: "none",
                color: "white",
                outline: "none",
                width: "100%",
                marginLeft: "7px",
                fontSize: "14px",
                fontFamily: "arial",
              }}
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyPress={handleEnterKey}
            />
          </div>

          <div
            className="output"
            style={{ color: "white", fontSize: "12px", fontFamily: "Prompt" }}
            dangerouslySetInnerHTML={{ __html: output }}
          />
        </div>
      </>
    );
  };

  const handleShowTerminalButtonClick = () => {
    setshowTerminalButton(true);
    setonBottomArrowButtonClick(false);
    setonLeftArrowButtonClick(false);
    setonRightArrowButtonClick(false);
    setShowRickRollButton(false);
    setOnTopButtonClick(false);
    setshowAdvacement(false);
    setshowFriends(false);
    setonUpArrowButtonClick(false);
  };

  const handleBottomArrowButtonClick = () => {
    setonBottomArrowButtonClick(true);
    setonLeftArrowButtonClick(false);
    setonRightArrowButtonClick(false);
    setShowRickRollButton(false);
    setshowAdvacement(false);
    setOnTopButtonClick(false);
    setshowFriends(false);
    setonUpArrowButtonClick(false);
    setshowTerminalButton(false);
  };

  const handleLeftArrowButtonClick = () => {
    setonLeftArrowButtonClick(true);
    setonRightArrowButtonClick(false);
    setOnTopButtonClick(false);
    setshowTerminalButton(false);
    setshowAdvacement(false);
    setonUpArrowButtonClick(false);
    setShowRickRollButton(false);
    setonBottomArrowButtonClick(false);
    setshowFriends(false);
  };

  const handleRightArrowButtonClick = () => {
    setonRightArrowButtonClick(true);
    setshowTerminalButton(false);
    setOnTopButtonClick(false);
    setonBottomArrowButtonClick(false);
    setShowRickRollButton(false);
    setshowAdvacement(false);
    setonUpArrowButtonClick(false);
    setshowFriends(false);
    setonLeftArrowButtonClick(false);
  };

  const onInternalButtonClick = () => {
    setOnTopButtonClick(true);
    setonBottomArrowButtonClick(false);
    setonUpArrowButtonClick(false);
    setshowAdvacement(false);
    setshowFriends(false);
    setShowRickRollButton(false);
    setshowTerminalButton(false);
    setonRightArrowButtonClick(false);
    setonLeftArrowButtonClick(false);
  };

  const handleUpArrowButtonClick = () => {
    setonUpArrowButtonClick(true);
    setShowRickRollButton(false);
    setonBottomArrowButtonClick(false);
    setshowFriends(false);
    setOnTopButtonClick(false);
    setshowTerminalButton(false);
    setonRightArrowButtonClick(false);
    setshowAdvacement(false);
    setonLeftArrowButtonClick(false);
  };

  const showProfile = () => {
    if (onTopButtonClick) {
      return (
        <>
          <div className="profileDiv text-white" style={styles.fadeIn}>
            <div className="basicDetailsRow">
              <img
                src="https://avatars.githubusercontent.com/u/104704093?v=4"
                alt="Armaan"
                className="profileImage"
              />
              <h3 className="profileNameText">Armaan</h3>
            </div>

            <br />
            <div className="middleRow">
              <h2
                style={{
                  background: "none",
                  fontFamily: "Cute Font",
                  fontSize: "22px",
                }}
              >
                {" "}
                ☕Tea | ♟️Chess | Ⓜ️M.U.N(s) | 👨🏻‍💻Coding | India 🏆{" "}
              </h2>
              <br />

              {/* <h4 style={{background: "none", fontSize: "14px"}}> 🪄 Flutter | 🔥 Flame | 🕸️ HTML | ©️ CSS | 💻 JAVASCRIPT | ©️ C | ©️➕➕ | ☕ Java | 🐍 Python | 📖 React.js | 📂 Open Source | 🏆 Hackathon Lover </h4> */}
              <br />
            </div>
            <h4 style={{ background: "none", fontFamily: "Poppins" }}>
              console.log("email:{" "}
              <a
                style={{ background: "none", fontFamily: "Poppins" }}
                href="mailto: armaan33000@gmail.com"
              >
                <ReactTyped
                  style={{
                    background: "none",
                    color: "lightblue",
                    textDecoration: "underline",
                  }}
                  strings={['armaan33000@gmail.com");']}
                  typeSpeed={50}
                />
              </a>
            </h4>
          </div>
        </>
      );
    }
  };

  const showProjects = () => {
    if (onBottomArrowButtonClick) {
      return (
        <>
          <div className="projectsDiv text-white" style={styles.fadeIn}>
            <h4
              className="profileNameText"
              style={{ background: "#2b3237", fontSize: "25px" }}
            >
              Armaan's Projects
            </h4>
            <div className="projects" style={styles.fadeIn}>
              <div className="project">
                <a
                  href="https://devpost.com/software/eduso"
                  target="new"
                  style={{ background: "white" }}
                >
                  <img
                    src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/352/386/datas/gallery.jpg"
                    className="projectImage"
                  />
                </a>
                <h5
                  style={{
                    background: "none",
                    width: "70px",
                    fontSize: "12px",
                  }}
                >
                  EyeFit
                </h5>
              </div>
              <div className="project">
                <a
                  href="https://devpost.com/software/thebookverse"
                  target="new"
                >
                  <img
                    src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/566/991/datas/gallery.jpg"
                    className="projectImage"
                  />
                </a>
                <h5
                  style={{
                    background: "none",
                    width: "70px",
                    fontSize: "12px",
                  }}
                >
                  TheBookVerse
                </h5>
              </div>
              <div className="project">
                <a
                  href="https://devpost.com/software/parko-f5nmoi"
                  target="new"
                  style={{ background: "white" }}
                >
                  <img
                    src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/542/509/datas/gallery.jpg"
                    className="projectImage"
                  />
                </a>
                <h5
                  style={{
                    background: "none",
                    width: "70px",
                    fontSize: "12px",
                  }}
                >
                  Parko
                </h5>
              </div>
              <div className="project">
                <a
                  href="https://devpost.com/software/portthefolio"
                  target="new"
                  style={{ background: "white" }}
                >
                  <img
                    src="https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/497/256/datas/medium.png"
                    className="projectImage"
                  />
                </a>
                <h5
                  style={{
                    background: "none",
                    width: "70px",
                    fontSize: "12px",
                  }}
                >
                  PortTheFolio
                </h5>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  const showSkillSet = () => {
    if (onUpArrowButtonClick) {
      return (
        <>
          <div className="skillsDiv text-white" style={styles.fadeIn}>
            <br />
            <h3
              className="background-none"
              style={{
                fontFamily: "Acme",
                background: "none",
                fontSize: "32px",
              }}
            >
              SKILL SET 🚀
            </h3>
            <br />
            <h4
              style={{
                background: "none",
                fontSize: "16px",
                background: "none",
                fontWeight: "bold",
                fontFamily: "Poor Story",
              }}
            >
              {" "}
              <ReactTyped
                style={{ background: "none" }}
                strings={[
                  "🪄 Flutter | 🔥 Flame | 🕸️ HTML | ©️ CSS | 💻 JAVASCRIPT | 🐍 Python | 📖 React.js | 📂 Open Source | 🏆 Hackathon Lover | 🎨 Figma | 🖼️ Adobe XD | ☁️ Firebase | ☁️ Supabase | ☁️ MongoDB",
                ]}
                typeSpeed={40}
                loop
              />
            </h4>
            <h4
              style={{
                background: "none",
                fontSize: "16px",
                background: "none",
                fontWeight: "bold",
                fontFamily: "Poor story",
              }}
            >
              {" "}
              <ReactTyped
                style={{ background: "none" }}
                strings={["Did ©️, ©️➕➕, and ☕ long time ago."]}
                typeSpeed={100}
              />
            </h4>

            <br />
          </div>
        </>
      );
    }
  };

  const showEducation = () => {
    if (onLeftArrowButtonClick) {
      return (
        <>
          <div className="educationDiv  text-white" style={styles.fadeIn}>
            <br />
            <h4 className="educationHeadlineText font-semibold text-white text-2xl">
              Education and Experience! 📙
            </h4>
            <div className="educationBoxes">
              <div className="educationBox1">
                <h3
                  className="text-2xl font-bold"
                  style={{ fontFamily: "Poppins" }}
                >
                  Education 🏫
                </h3>
                <h4>25/01/2010 = Birth</h4>
                <h4>2013-Present = School </h4>
                <h4>
                  <a
                    href="http://shcsjagraon.com"
                    target="new"
                    style={{ fontFamily: "Poppins", color: "skyblue" }}
                  >
                    SHCS, Jagraon 📌
                  </a>
                </h4>
              </div>

              {/* <div className="dividerBox"></div> */}

              <div className="educationBox2">
                <h3
                  className="text-2xl font-bold"
                  style={{ fontFamily: "Poppins" }}
                >
                  Experience 💼
                </h3>
                <h4>Hackathon Hacker 👨🏻‍💻</h4>
                <h4>^ 2022 Nov - Present 🕰️ </h4>
                <h4>Appgud hackathon judge - 2024 🧑🏻‍⚖️</h4>
                <h4>CodeBeetles Admin - Present 🔥</h4>
              </div>
            </div>
            <br />
          </div>
        </>
      );
    }
  };

  const showContact = () => {
    if (onRightArrowButtonClick) {
      return (
        <>
          <div className="contactDiv  text-white" style={styles.fadeIn}>
            <h3 className="slicedText">Reach me at: </h3>

            <div className="contactBoxes mt-5 ml-1">
              <div className="contactBox1">
                <a className="contactLink" href="emailto:armaan33000@gmail.com">
                  Email: armaan33000@gmail.com
                </a>

                <a
                  className="contactLink"
                  href="https://github.com/0Armaan025"
                  target="new"
                >
                  Github: 0Armaan025
                </a>

                <a
                  className="contactLink"
                  href="https://x.com/0Armaan025"
                  target="new"
                >
                  X(formerly-twitter): 0Armaan025
                </a>

                <a
                  className="contactLink"
                  href="https://devpost.com/armaan33000?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
                  target="new"
                >
                  Devpost: Armaan 25
                </a>
              </div>
              <div className="contactBox2 ml-4 mr-2">
                <img
                  className="rounded-lg"
                  style={{ background: "none" }}
                  src="https://images.ladbible.com/resize?type=jpeg&quality=70&width=720&fit=contain&gravity=null&url=https://s3-images.ladbible.com/s3/content/bd9f19995fe03288211239f5ac6e093f.png"
                  width="150px"
                  height="300px"
                />
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
      );
    }
  };

  return (
    <>
      <center>
        <br />
        <br />
        <br />

        <div className="homePage">
          <div className="nintendoSwitch">
            <div className="leftSide">
              <div className="minus_btn"></div>

              <button className="topButton" onClick={onInternalButtonClick}>
                <div className="internalButton"></div>
              </button>

              <div className="arrowButtons">
                <button
                  className="topArrowButton"
                  onClick={handleUpArrowButtonClick}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3838/3838683.png"
                    height="20px"
                    width="20px"
                  />
                </button>
                <div className="leftAndRightArrowButtons">
                  <button
                    className="leftArrowButton"
                    onClick={handleLeftArrowButtonClick}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/271/271220.png"
                      height="15px"
                      width="15px"
                    />
                  </button>
                  <button
                    className="rightArrowButton"
                    onClick={handleRightArrowButtonClick}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
                      height="15px"
                      width="15px"
                    />
                  </button>
                </div>

                <button
                  className="bottomArrowButton"
                  onClick={handleBottomArrowButtonClick}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/6916/6916826.png"
                    height="20px"
                    width="20px"
                  />
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
                  {showTerminalButton ? showTerminal() : null}
                  {showRickRollButton ? showRickRoll() : null}
                  {showFriends ? renderFriendsScreen() : null}
                  {showAdvancement ? showTheAdvancement() : null}
                </div>
              </div>
            </div>

            <div className="rightSide">
              <button className="plus_btn font-black">+</button>

              <div className="letterButtons">
                <button
                  className="topArrowButton"
                  onClick={handleRickRollButton}
                >
                  <h3 className="arrowLetter">X</h3>
                </button>
                <div className="leftAndRightArrowButtons">
                  <button
                    className="leftArrowButton"
                    onClick={handleDinoGameButton}
                  >
                    <h3 className="arrowLetter">Y</h3>
                  </button>
                  <button
                    className="rightArrowButton"
                    onClick={handleAdvancement}
                  >
                    <h3 className="arrowLetter">A</h3>
                  </button>
                </div>

                <button className="bottomArrowButton">
                  <h3 className="arrowLetter">B</h3>
                </button>
              </div>

              <br />
              <div className="righttopButton">
                <button
                  className="rightinternalButton"
                  onClick={handleShowTerminalButtonClick}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default HomePage;
