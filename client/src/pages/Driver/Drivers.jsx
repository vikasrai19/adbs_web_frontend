import React from 'react'
import SideBar from '../../components/bars/SideBar'
import DriverList from '../../components/Driver/DriverList'
import Header from '../../components/bars/Header'

function Drivers() {
  return (
    <div className='flex bg-secondary'>
      <SideBar/>
      <div>
        <Header/>
        <DriverList/>
      </div>
      </div>
  )
}

export default Drivers
