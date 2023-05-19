import React, { useEffect, useState } from 'react'
import Game from './Game'
import Header from '../components/Header'
import shoot from '../assets/shoot.png'

export default function Home() {
  const [start,setStart] = useState(false)
  const userShooting = JSON.parse(sessionStorage.getItem("userShooting")).name
  const [count, setCount] = useState(null);

  const handleStart = ()=>{
    setCount(3);
  }

  useEffect(() => {
    let intervalId = null;

    if (count !== null && count > 0) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    } else if (count === 0) {
      clearInterval(intervalId);
      setCount(null);
      setStart(!start)
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [count]);

  return (
    <div className='flex justify-center min-h-screen w-full items-center bg-slate-300 dark:bg-slate-800'>
        <Header />
        <div>
          {!start ?
          <div className='text-center flex flex-col flex-wrap items-center'>
            <p className='text-xl mb-5'>Hello <span className='mx-1 font-bold text-slate-500'>{userShooting}</span>! Let's see how fast you are clicking the</p>
            <img className='w-10' alt='pointer' src={shoot} />
             <p className='text-xl mb-5'>and be part of the leaderboard! <span className='font-bold mx-1 text-red-700'> Are you ready?</span> 👀</p>
            <button className='text-5xl text-slate-800 dark:text-slate-300 font-bold font-serif' onClick={handleStart}>START</button>
            <h2 className='text-5xl font-bold font-serif'>{count !== null ? count : ''}</h2>
          </div>
          :
          <Game />
          }
        </div>

    </div>
  )
}
