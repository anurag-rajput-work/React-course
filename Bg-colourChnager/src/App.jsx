import { useState } from 'react'
function App() {
  let [bgColor, setBgColor] = useState('grey')

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: bgColor }}> 

        <div className="fixed bottom-12 inset-x-0 flex justify-center px-4">
          <div className="flex gap-3 rounded-full bg-white/80 backdrop-blur-md px-4 py-3 shadow-2xl border border-white/30">

            <button onClick={() => setBgColor('red')} 
            className="px-5 py-2 rounded-full text-white font-medium 
      bg-red-500 hover:bg-red-600 
      hover:scale-105 transition-all duration-200 shadow-md">
              Red
            </button>

            <button onClick={() => setBgColor('green')} 
            className="px-5 py-2 rounded-full text-white font-medium 
      bg-green-500 hover:bg-green-600 
      hover:scale-105 transition-all duration-200 shadow-md">
              Green
            </button>

            <button onClick={() => setBgColor('blue')} 
            className="px-5 py-2 rounded-full text-white font-medium 
      bg-blue-500 hover:bg-blue-600 
      hover:scale-105 transition-all duration-200 shadow-md">
              Blue
            </button>

            <button onClick={() => setBgColor('green')} 
            className="px-5 py-2 rounded-full text-white font-medium 
      bg-green-500 hover:bg-green-600 
      hover:scale-105 transition-all duration-200 shadow-md">
              Green
            </button>

            <button onClick={() => setBgColor('yellow')} 
            className="px-5 py-2 rounded-full text-white font-medium 
      bg-yellow-500 hover:bg-yellow-600 
      hover:scale-105 transition-all duration-200 shadow-md">
              Yellow
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
