import React from 'react'
import Header from '../../components/bars/Header'
import AddDriver from '../../components/Driver/AddDriver'
import Sidebar from '../../components/bars/SideBar'

function AddDriverPage() {
  return (
    <div className='flex bg-secondary'>
      <Sidebar/>
      <div>
        <Header/>
        <AddDriver/>
      </div>
      </div>
  )
}

export default AddDriverPage
