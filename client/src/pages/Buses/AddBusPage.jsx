import React from 'react'
import Sidebar from '../../components/bars/SideBar'
import Header from '../../components/bars/Header'
import AddBus from '../../components/Buses/AddBus'

function AddBusPage() {
  return (
    <div className='flex bg-secondary h-screen'>
    <Sidebar/>
    <div>
      <Header/>
      <AddBus/>
    </div>
    </div>
  )
}

export default AddBusPage
