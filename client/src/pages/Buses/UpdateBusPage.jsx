import React from 'react'
import Sidebar from '../../components/bars/SideBar'
import Header from '../../components/bars/Header'
import UpdateBus from '../../components/Buses/UpdateBus'

function UpdateBusPage() {
  return (
    <div className='flex bg-secondary h-screen'>
    <Sidebar/>
    <div>
      <Header/>
      <UpdateBus/>
    </div>
    </div>
  )
}

export default UpdateBusPage
