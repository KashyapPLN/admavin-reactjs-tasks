import React, { useState, useEffect } from "react";
import './boxgame.css'
import { Button } from "react-bootstrap";


const BoxGame = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(""));
  const [keyword, setKeyword] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);

  function handleReset(){
    setTimeLeft(60);
    setScore(0);
    setGameOver(false);
    window.location.reload();

      }

  useEffect(() => {
    if (timeLeft === 0) {
      setGameOver(true);
    } else {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (!gameOver) {
      const randomIndex = Math.floor(Math.random() * 9);
      const newBoxes = [...boxes];
      newBoxes[randomIndex] = keyword;
      setBoxes(newBoxes);
      setTimeout(() => {
        newBoxes[randomIndex] = "";
        setBoxes(newBoxes);
        setKeyword("Hit"+Math.random().toString(36).substring(7));
        }, 1000);
    }
  }, [keyword, gameOver]);

  const handleClick = (index) => {
    if (boxes[index] === keyword) {
      setScore(score + 5);
    } else {
      setScore(score - 2.5);
    }
  };

  return (
    <div>
      {!gameOver ? (
        <div className="game-div">
          <div className="time-left">Time Left: {timeLeft}</div>
          <div className="boxes-container">
            {boxes.map((box, index) => (
              <div
                key={index}
                className="box"
                onClick={() => handleClick(index)}
              >
               {box.startsWith("Hit") ? "Hit" : ""}
              </div>
            ))}
          </div>
          <Button style={{width:'100px'}}variant='danger' onClick={handleReset}>Reset</Button>
        </div>
      
      ) : (
        <div className="final-score"><p>Final Score: {score}</p>
          <Button onClick={handleReset} variant='danger'>Reset</Button></div>
        
      )}
    </div>
  );
};

export default BoxGame;
