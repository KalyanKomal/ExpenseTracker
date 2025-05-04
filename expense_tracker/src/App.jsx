import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Container,Button,Typography} from '@mui/material'
import Login from './Components/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Components/Signup'
import Dashboard from './Components/Dashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
