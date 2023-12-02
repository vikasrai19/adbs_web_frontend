import React from 'react'
import Sidebar from '../../components/bars/SideBar'
import Header from '../../components/bars/Header'

import BusList from '../../components/Buses/BusList'

function Bus() {
  return (
    <div className='flex bg-secondary'>
    <Sidebar/>
    <div>
      <Header/>
      <BusList/>
    </div>
    </div>
  )
}

export default Bus

