import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Rank() {
    const[scoreUsers,setScoreUsers] = useState([])

    useEffect(()=>{
        axios.get("https://game-shooting-back.onrender.com/score")
      .then(res => setScoreUsers(res.data.response))
      .catch(e => console.log(e))
    },[setScoreUsers])

    function scoreSort(a,b){
        return b.score - a.score
    }
  return (
    <div className='mt-5 text-xl font-semibold h-96 overflow-y-auto'>
  <div className="w-full">
    <table className="min-w-full border-collapse table-auto">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-2 px-4">Rank</th>
          <th className="py-2 px-4">Picture</th>
          <th className="py-2 px-4">Name</th>
          <th className="py-2 px-4">Score</th>
        </tr>
      </thead>
      <tbody>
        {scoreUsers.sort(scoreSort).map((user, index) => (
          <tr key={index} className="{{index%2 === 0 ? 'bg-gray-100' : 'bg-white'}}">
            <td className="py-2 px-4 text-center">{index + 1}</td>
            <td className="py-2 px-4 text-center">
              <img src={user.picture} className="w-16 rounded-full" />
            </td>
            <td className="py-2 px-4 text-center">{user.name}</td>
            <td className="py-2 px-4 text-center">{user.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  )
}
