import React from 'react'
import Header from '../components/Header'
import SignUpGoogle from '../components/SignUpGoogle'

export default function Play() {

  return (
    <div className='flex justify-center min-h-screen w-full items-center bg-slate-300 dark:bg-slate-800'>
        <Header />
        <SignUpGoogle />
    </div>
  )
}
