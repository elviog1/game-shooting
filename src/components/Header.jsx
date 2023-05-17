import React, { useState } from 'react'
import shotting from '../assets/favicon.png'
export default function Header() {
    const [dark,setDark] = useState(false)

    const handleDarkMode = ()=>{
        document.documentElement.classList.toggle('dark')
        setDark(!dark)
    }
  return (
    <header className='flex justify-between w-full absolute top-0 px-5 pt-3'>
        <img alt='logo Shooting' className='w-16' src={shotting} />
        <button className='font-bold' onClick={handleDarkMode}>
            {dark ?
            <span className={` text-2xl ${!dark ? "text-white" : "text-slate-300"}`}>☀</span>
            :
            <span className={` text-2xl ${dark ? "text-white" : "text-slate-800"}`}>🌑</span>
            }
            </button>
    </header>
  )
}
