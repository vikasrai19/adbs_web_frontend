import React from 'react'
import SideBar from '../../components/bars/SideBar'

import Header from '../../components/bars/Header'
import StudentList from '../../components/Student/StudentList'

function Students() {
  return (
    <div className='flex bg-secondary'>
      <SideBar/>
      <div>
        <Header/>
        <StudentList/>
      </div>
      </div>
  )
}

export default Students
