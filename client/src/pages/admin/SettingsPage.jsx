import React from 'react'
import Sidebar from '../../components/bars/SideBar'
import Header from '../../components/bars/Header'
import Settings from '../../components/Admin/Settings'

function SettingsPage() {
  return (
    <div className='flex bg-secondary'>
    <Sidebar/>
    <div>
      <Header/>
      <Settings/>
    </div>
    </div>
  )
}

export default SettingsPage
