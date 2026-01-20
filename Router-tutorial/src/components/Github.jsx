import React from 'react'
import { useEffect, useState } from 'react'

function Github() {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/anurag-rajput-work')
        .then(response => response.json())
        .then(data => setData(data))
    }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center text-white">
        
        {/* Avatar */}
        <img
          src={data.avatar_url}
          alt="git pic"
          className="w-32 h-32 rounded-full mx-auto border-4 border-orange-500 shadow-lg"
        />

        {/* Username */}
        <h2 className="mt-4 text-2xl font-bold tracking-wide">
          {data.login}
        </h2>

        {/* Info */}
        <div className="mt-6 space-y-3 text-gray-300 text-sm">
          <p>
            <span className="font-semibold text-white">GitHub ID:</span>{" "}
            {data.id}
          </p>

          <p>
            <span className="font-semibold text-white">Followers:</span>{" "}
            {data.followers}
          </p>
        </div>

        {/* Profile Button */}
        <a
          href={data.html_url}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 px-6 py-3 rounded-full bg-orange-600 hover:bg-orange-700 transition font-semibold"
        >
          View GitHub Profile
        </a>

      </div>
    </div>
  )
}

export default Github
