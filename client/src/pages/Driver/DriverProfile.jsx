import React from 'react'
import ManageDriver from '../../components/Driver/ManageDriver'
import Sidebar from '../../components/bars/SideBar'
import Header from '../../components/bars/Header'



function DriverProfile() {
  return (
    <div className='flex bg-secondary'>
      <Sidebar/>
      <div>
        <Header/>
        <ManageDriver/>
      </div>
      </div>
  )
}

export default DriverProfile
