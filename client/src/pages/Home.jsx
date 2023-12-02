import React from 'react'
import Sidebar from '../components/bars/SideBar'

import Dashboard from '../components/Dashboard/Dashboard'
import Header from '../components/bars/Header'

function Home() {
  return (
    <div className='flex bg-secondary'>
      <Sidebar/>
      <div className=''>
        <Header/>
       <Dashboard/>
      </div>
      </div>
  )
}

export default Home
