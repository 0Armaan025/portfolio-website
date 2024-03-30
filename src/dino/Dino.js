import React, { useEffect, useRef, useState } from "react";
import "./Dino.css";

function Dino() {
  const dinoRef = useRef();
  const cactusRef = useRef();
  const [score, setScore] = useState(0);
  const [isGameOver, setGameOver] = useState(false);

  const jump = () => {
    if (!isGameOver && dinoRef.current && !dinoRef.current.classList.contains("jump")) {
      dinoRef.current.classList.add("jump");
      setTimeout(() => {
        dinoRef.current.classList.remove("jump");
      }, 500); // Adjusted jump duration
    }
  };

  useEffect(() => {
    const handleCollision = setInterval(() => {
      if (!isGameOver) {
        const dinoTop = parseInt(getComputedStyle(dinoRef.current).getPropertyValue("top"));
        let cactusLeft = parseInt(getComputedStyle(cactusRef.current).getPropertyValue("left"));

        if (cactusLeft < 40 && cactusLeft > 0 && dinoTop >= 140) {
          setGameOver(true);
          alert("Game Over! Your Score: " + score);
          setScore(0);
          setGameOver(false);
        } else {
          setScore((prevScore) => prevScore + 1);
        }
      }
    }, 250); // Adjusted collision detection interval

    return () => clearInterval(handleCollision);
  }, [isGameOver, score]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === " ") {
        jump();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="game">
      <p className="text-white">Score: {score}</p>
      <div id="dino" ref={dinoRef}></div>
      <div id="cactus" ref={cactusRef}></div>
    </div>
  );
}

export default Dino;
