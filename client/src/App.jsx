import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Splash from './pages/Splash'
import Login from './pages/Login'
import Onboarding from './pages/Onboarding'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/onboarding' element={<Onboarding/>} />
        <Route path='/signup' element={<Signup/>}/> 
        <Route path='/Splash' element={<Splash/>}/> 
        <Route path='/Login' element={<Login/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
