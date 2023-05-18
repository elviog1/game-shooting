import React, { useState } from 'react'
import Game from './Game'
import Header from '../components/Header'


export default function Home() {
  const [start,setStart] = useState(false)

  const handleStart = ()=>{
    setStart(!start)
  }
  return (
    <div className='flex justify-center min-h-screen w-full items-center bg-slate-300 dark:bg-slate-800'>
        <Header />
        <div>
          {!start ?
          <button className='text-5xl text-slate-800 dark:text-slate-300 font-bold font-serif' onClick={handleStart}>START</button>
          :
          <Game />
          }
        </div>

    </div>
  )
}
