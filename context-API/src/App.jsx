import { useState } from 'react'
import Contextprovider from './context/Contextprovider'
import Login from './Components/Login';
import Profile from './Components/Profile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Contextprovider>
          <Login />
          <Profile />
    </Contextprovider>
  )
}

export default App
