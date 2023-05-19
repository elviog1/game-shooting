import axios from 'axios';
import React, { useState } from 'react'
import Rank from './Rank';
export default function PostScore(score) {
  const [clickPost,setClickPost] = useState(false)
  const [loading,setLoading] = useState(false)
    const scoreUser = score
    const user = JSON.parse(sessionStorage.getItem('userShooting'));
    
    const handlePost = ()=>{
      setLoading(!loading)
      const data = {
        name: user.name,
        picture: user.picture,
        score: scoreUser.score
      }
      axios.post("https://game-shooting-back.onrender.com/score",data)
      .then(res => {
        console.log(res)
        setClickPost(!clickPost)
      })
      .catch(e => console.log(e))
    }
  return (
    <div className='mt-10'>
      {!clickPost ?
      
      <div>
        {loading ?
          <span className='font-bold text-xl'>LOADING...</span>
        :
        <button className='mt-4 dark:bg-slate-300 bg-slate-800 px-8 font-bold text-slate-300 dark:text-slate-800 rounded-xl py-2' onClick={handlePost}>POST</button>
        }
      </div>
      :
      <Rank />
      }

    </div>
  )
}
