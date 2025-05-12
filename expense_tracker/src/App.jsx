import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Container,Button,Typography} from '@mui/material'
import Login from './Components/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Components/Signup'
import Dashboard from './Components/Dashboard'
import Statistics from './Components/Statistics'
import { TransactionProvider } from './Context/TransactionContext';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
          <TransactionProvider>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/statistics" element={<Statistics/>}/>
        {/* Add other routes here */}
      </Routes>
            </TransactionProvider>

    </BrowserRouter>
  );
}

export default App
