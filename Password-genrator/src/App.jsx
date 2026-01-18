import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  let [length, setLength] = useState(8)
  let [number, setNumberallowed] = useState(false)
  let [symbol, setSymbolallowed] = useState(false)
  let [password, setPassword] = useState('')


  let passwordGenerator = useCallback(function () {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (number) chars += '0123456789'
    if (symbol) chars += '!@#$%^&*()_+~`|}{[]:;?><,./-='
    let password = ''
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * chars.length + 1)
      password += chars.charAt(randomIndex)
    }
    setPassword(password)
  }, [length, number, symbol])

  let passwordRef = useRef(null)
  let copy = useCallback(function () {
    passwordRef.current.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(() => {
    passwordGenerator()
  }, [length, number, symbol, passwordGenerator])

  return (
  <>
    {/* Background */}
    <div className="min-h-screen flex items-center justify-center bg-gradient from-indigo-900 via-gray-900 to-black px-4">

      {/* Card */}
      <div className="w-full max-w-lg rounded-3xl bg-gray-900/80 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-8 border border-white/10">

        {/* Title */}
        <h1 className="text-3xl font-extrabold text-center text-white mb-8 tracking-wide">
          Password Generator
        </h1>

        {/* Password Box */}
        <div className="relative mb-8">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="w-full rounded-xl bg-black/60 text-green-400 px-5 py-4 text-xl tracking-widest outline-none border border-white/10"
          />
          <button
            onClick={copy}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition px-4 py-2 rounded-lg text-white text-sm font-semibold"
          >
            COPY
          </button>
        </div>

        {/* Length */}
        <div className="mb-6">
          <div className="flex justify-between text-white mb-2">
            <span className="font-medium">Password Length</span>
            <span className="text-indigo-400 font-bold">{length}</span>
          </div>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full accent-indigo-500 cursor-pointer"
          />
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-4 text-white">

          <label className="flex items-center gap-3 bg-black/40 p-4 rounded-xl cursor-pointer hover:bg-black/60 transition">
            <input
              type="checkbox"
              defaultChecked={number}
              onChange={() => setNumberallowed((prev) => !prev)}
              className="accent-indigo-500 scale-125"
            />
            <span className="font-medium">Include Numbers</span>
          </label>

          <label className="flex items-center gap-3 bg-black/40 p-4 rounded-xl cursor-pointer hover:bg-black/60 transition">
            <input
              type="checkbox"
              defaultChecked={symbol}
              onChange={() => setSymbolallowed((prev) => !prev)}
              className="accent-pink-500 scale-125"
            />
            <span className="font-medium">Include Symbols</span>
          </label>

        </div>
      </div>
    </div>
  </>
)

}

export default App
