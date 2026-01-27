import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Themeprovider } from './Context/Theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'

function App() {
  const [theme, setTheme] = useState('light')
  
  const darktheme = () => {
    setTheme('dark')
  }
  const lighttheme = () => {
    setTheme('light')
  }
  
  useEffect(() => {
    const html = document.querySelector('html')
    html.classList.remove('light','dark')
    html.classList.add(theme)
  },[theme])
  

  return (
    <Themeprovider value={{theme,darktheme, lighttheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
           <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </Themeprovider>
  )
}

export default App
