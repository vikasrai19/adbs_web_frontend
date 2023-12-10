import React from 'react'
import Sidebar from '../../components/bars/SideBar'
import Header from '../../components/bars/Header'
import Mail from '../../components/mail/Mail'

function MailPage() {
  return (
    <div className='flex bg-secondary'>
    <Sidebar/>
    <div>
      <Header/>
      <Mail/>
    </div>
    </div>
  )
}

export default MailPage
