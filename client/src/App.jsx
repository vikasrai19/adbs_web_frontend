import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Splash from './pages/Splash'
import Login from './pages/Login'
import Onboarding from './pages/Onboarding'
import Driver from './pages/Driver/Drivers'
import DriverProfile from './pages/Driver/DriverProfile'
import Students from './pages/Student/Student'
import StudentProfile from './pages/Student/StudentProfile'
import Bus from './pages/Buses/Bus'
import Header from './components/bars/Header'
import ConfigPage from './pages/Configuration/ConfigPage'
import AddBusPage from './pages/Buses/AddBusPage'
import AddStudentsPage from './pages/Student/AddStudentsPage'
import UpdateBusPage from './pages/Buses/UpdateBusPage'
import AddDriverPage from './pages/Driver/AddDriverPage'
import MailPage from './pages/mail/MailPage'
import SettingsPage from './pages/admin/SettingsPage'




function App() {
  return (
    <div className='font-poppy'>
    <BrowserRouter>
      <Routes>
      
        <Route path='/' element={<Login/>}/> 
        <Route path='/Home' element={<Home/>} />
        <Route path='/onboarding' element={<Onboarding/>} />
        <Route path='/signup' element={<Signup/>}/> 
        <Route path='/Splash' element={<Splash/>}/> 
        <Route path='/test' element={<Home/>}/> 
        <Route path='/driver' element={<Driver/>}/> 
        <Route path='/adddriver' element={<AddDriverPage/>}/> 
        <Route path='/managedriver' element={<DriverProfile/>}/> 
        <Route path='/Student' element={<Students/>}/> 
        <Route path='/addStudents' element={<AddStudentsPage/>}/> 
        <Route path='/manageStudent' element={<StudentProfile/>}/> 
        <Route path='/Buses' element={<Bus/>}/> 
        <Route path='/addBus' element={<AddBusPage/>}/> 
        <Route path='/updatebus' element={<UpdateBusPage/>}/> 
        <Route path='/test1' element={<Header/>}/> 
        <Route path='/test1' element={<Header/>}/> 
        <Route path='/Config' element={<ConfigPage/>}/> 
        <Route path='/mail' element={<MailPage/>}/> 
        <Route path='/settings' element={<SettingsPage/>}/> 
  

      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
