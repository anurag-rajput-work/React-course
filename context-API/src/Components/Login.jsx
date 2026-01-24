import React, { useContext, useState } from 'react'
import Context from '../context/Context'

function Login() {
  const [Username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { setUser } = useContext(Context)

  const submit = (e) => {
    e.preventDefault()
    setUser({ Username, password })
  }

  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">

      {/* Card */}
      <div className="w-full max-w-sm backdrop-blur-xl bg-white/20 
                      border border-white/30 rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-white mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-white/80 mb-8">
          Login to your account
        </p>

        <form onSubmit={submit} className="space-y-5">
          
          {/* Username */}
          <div>
            <input
              type="text"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full px-4 py-3 rounded-lg bg-white/80 text-gray-800
                         placeholder-gray-500 outline-none
                         focus:ring-2 focus:ring-purple-400 transition"
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-white/80 text-gray-800
                         placeholder-gray-500 outline-none
                         focus:ring-2 focus:ring-purple-400 transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white
                       bg-gradient-to-r from-purple-600 to-pink-600
                       hover:from-purple-700 hover:to-pink-700
                       shadow-lg hover:shadow-xl
                       transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  )
}

export default Login
