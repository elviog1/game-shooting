import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Play from './page/Play'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Play />} />
        <Route path='/play' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
