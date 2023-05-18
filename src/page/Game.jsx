import React, { useState, useEffect } from 'react';
import shoot from '../assets/shoot.png'
import PostScore from '../components/PostScore';
const getRandomPosition = () => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const size = Math.floor(Math.random() * 21) + 5;
  const x = Math.floor(Math.random() * (windowWidth - size));
  const y = Math.floor(Math.random() * (windowHeight - size));

  return { x, y, size };
};

const Game = () => {
  const [circle, setCircle] = useState(getRandomPosition());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(2);

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 0.01), 10);
      return () => clearTimeout(timer);
    } else if (timeLeft <= 0) {
      setGameOver(true);
    }
  }, [timeLeft, gameOver]);

  useEffect(()=>{
    if(score %2 == 1){
      document.documentElement.classList.toggle('dark')
    }
  },[score])

  const handleClick = () => {
    if (!gameOver) {
      setScore(score + 1);
      setCircle(getRandomPosition());
      setTimeLeft(2); // Reinicia el temporizador al hacer clic en el círculo
    }
  };

  const handleRestart = () => {
    setScore(0);
    setGameOver(false);
    setCircle(getRandomPosition());
    setTimeLeft(2);
  };

  

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-slate-300 dark:bg-slate-800 dark:duration-500 duration-500">

      <div className="text-4xl mb-4 dark:text-slate-300 text-slate-800">
        {gameOver ? 'Game Over' : `Time Left: ${timeLeft.toFixed(2)}`}
      </div>
      <div className="text-2xl mb-4 dark:text-slate-300 text-slate-800">Score: {score}</div>
      {!gameOver && (

        <img alt='img shoot' src={shoot} className=" absolute"
        style={{
          width: `${circle.size}px`,
          height: `${circle.size}px`,
          left: `${circle.x}px`,
          top: `${circle.y}px`,
          borderRadius: '50%',
        }}
        onClick={handleClick} />
      )}
      {gameOver && (
        <div className='flex flex-col items-center'>
          <div className='dark:text-slate-300 text-slate-800'>Final Score: {score}</div>
          <button className="mt-4 dark:bg-slate-300 bg-slate-800 px-8 font-bold text-slate-300 dark:text-slate-800 rounded-xl py-2" onClick={handleRestart}>
            Restart
          </button>
          <PostScore score={score} />
        </div>
      )}
    </div>
  );
};

export default Game;