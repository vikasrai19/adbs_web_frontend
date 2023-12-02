import React from 'react'
import Sidebar from '../../components/bars/SideBar'
import Header from '../../components/bars/Header'
import ManageStudent from '../../components/Student/ManageStudent'



function StudentProfile() {
  return (
    <div className='flex bg-secondary'>
      <Sidebar/>
      <div>
        <Header/>
        <ManageStudent/>
      </div>
      </div>
  )
}

export default StudentProfile
