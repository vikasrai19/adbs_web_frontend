import React from 'react'
import Sidebar from '../../components/bars/SideBar'
import Header from '../../components/bars/Header'
import AddStudents from '../../components/Student/AddStudents'

function AddStudentsPage() {
  return (
    <div className='flex bg-secondary h-screen'>
    <Sidebar/>
    <div>
      <Header/>
      <AddStudents/>
    </div>
    </div>
  )
}

export default AddStudentsPage
