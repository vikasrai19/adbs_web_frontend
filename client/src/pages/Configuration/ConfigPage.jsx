import React from 'react'
import SideBar from '../../components/bars/SideBar'
import Header from '../../components/bars/Header'
import Config from '../../components/Configuration/Config'
function ConfigPage() {
  return (
    <div className='flex bg-secondary'>
    <SideBar/>
    <div>
      <Header/>
      <Config/>
    </div>
    </div>
  )
}

export default ConfigPage
