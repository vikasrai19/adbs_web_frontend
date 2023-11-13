import React, { useState } from 'react'
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dashboard from '../components/Dashboard';
import Payments from '../components/Payments';
import Contact from '../components/Contact';
import Drivers from '../components/Drivers';
import Buses from '../components/Buses';
import Students from '../components/Students';
import Mails from '../components/Mails';


function Home() {
  const [mobiledraw, setMobiledraw] = useState('hidden');  
  const [current,setCurrent]=useState(''); 
  return (
    <div className='min-h-screen flex relative bg-blue-50 text-white'>
     
     {/* mobile menu bar ..................................................................................*/}
      {
        mobiledraw == 'show' ?
          <div className={`absolute z-1 flex flex-col w-full bg-white h-screen  ${mobiledraw == "show" ? 'mobiledrawin' : 'mobildrawout'}`}>

            <div className='flex justify-end px-8 py-4'>
              <button ><FontAwesomeIcon icon={faX} className={`text-black text-2xl font-extrabold ${mobiledraw == "show" ? '' : 'hidden'}`} onClick={() => mobiledraw == 'hidden' ? setMobiledraw('show') : setMobiledraw('hidden')} /></button>
            </div>
            <div className='flex justify-between items-center gap-4 px-5 py-6 border-y-2'>
              <div className='flex justify-center items-center gap-3'>

                <div className='w-14 h-14 rounded-xl object-fill overflow-hidden outline outline-slate-50'> <img src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg" alt="icon" /></div>
                <div>
                  <h1 className=' text-2xl font-semibold'>Sharan</h1>
                  <h1 className='text-md opacity-50 font-semibold'>student</h1>
                </div>

              </div>
              <img src="/icons/editprofile.png" alt="" />
            </div>

            <div className='flex flex-col justify-center text-center place-items-start px-5 py-4 text-[1rem] gap-10 text-black'>
              <div className='flex items-center gap-3'><img src="/icons/home.svg" alt="" className='' /><h1>Home</h1></div>
              <div className='flex items-center gap-3'><img src="/icons/payment.svg" alt="" className='' /><h1>payment</h1></div>
              <div className='flex items-center gap-3'><img src="/icons/contact.svg" alt="" className='' /><h1>contact</h1></div>
              <div className='flex items-center gap-3'><img src="/icons/home.svg" alt="" className='' /><h1>Home</h1></div>

            </div>

          </div> : ''
      }
      <div className='hidden primary h-screen md:w-[25vw] lg:w-[15vw] md:p-5 md:flex flex-col justify-normal gap-10'>
        <div>

          <div className='py-5'>
            Buswatch
          </div>
          <div className='flex items-center gap-4'>
          <img className="w-14 h-14 rounded-full outline" src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg" alt="Jese image"/>
            <div>
              <h1 className='text-black text-md lg:text-sm font-semibold'>Sharan</h1>
              <h1 className='text-black text-md lg:text-xs opacity-50 font-semibold'>Admin</h1>
            </div>
            <img src="/icons/editprofile.png" alt="" />
          </div>
        </div>
        <div className='flex flex-col gap-3 text-sm'>
          <div className='flex items-center gap-5  hover:rounded-e-md hover:bg-blue-300 hover:border-l-8 hover:pl-5 border-blue-800' onClick={()=>setCurrent('Dashboard')}>
            <img src="/icons/home.svg" alt="" width={20}/>
            <h1>Dashboard</h1>
          </div>
          <div className='flex items-center gap-5  hover:rounded-e-md hover:bg-blue-300 hover:border-l-8 hover:pl-5 border-blue-800'  onClick={()=>setCurrent('Drivers')}>
            <img src="/icons/payment.svg" alt="" width={20} />
            <h1>Drivers</h1>
          </div>
          <div className='flex items-center gap-5   hover:rounded-e-md hover:bg-blue-300 hover:border-l-8 hover:pl-5 border-blue-800'  onClick={()=>setCurrent('Students')}>
            <img src="/icons/payment.svg" alt="" width={20} />
            <h1>Students</h1>
          </div>
          <div className='flex items-center gap-5  hover:rounded-e-md hover:bg-blue-300 hover:border-l-8 hover:pl-5 border-blue-800'  onClick={()=>setCurrent('Buses')}>
            <img src="/icons/payment.svg" alt="" width={20} />
            <h1>Buses</h1>
          </div>
          <div className='flex items-center gap-5  hover:rounded-e-md hover:bg-blue-300 hover:border-l-8 hover:pl-5 border-blue-800'  onClick={()=>setCurrent('payments')}>
            <img src="/icons/payment.svg" alt="" width={20} />
            <h1>payments</h1>
          </div>
          <div className='flex items-center gap-5  hover:rounded-e-md hover:bg-blue-300 hover:border-l-8 border-blue-800 hover:pl-5 ' onClick={()=>setCurrent('contact')}>
            <img src="/icons/contact.svg" alt=""  width={20}/>
            <h1>contact</h1>
          </div>
        </div>
      </div>
      <div className='w-full md:w-[75vw] lg:w-full'>
        <div className='w-full  h-10'>
          <div className='flex justify-between md:justify-end  p-3 md:p-5 space-x-2'>
            <div className='float-left md:hidden'>
              <img src="/icons/menu.svg" alt="" onClick={() => { setMobiledraw('show') }} />

            </div>
            <div className='flex gap-2 '>
              <img src="/icons/emai-1.svg" alt="" onClick={()=>setCurrent('mails')}/>
              <img src="/icons/settings.svg" alt="" />

            </div>
          </div>
          <div  >

            {current=='Dashboard'?<Dashboard/>:''}
            {current=='Drivers'?<Drivers/>:''}
            {current=='Buses'?<Buses/>:''}
            {current=='Students'?<Students/>:''}
            {current=='payments'?<Payments/>:''}
            {current=='contact'?<Contact/>:''}
            {current=='mails'?<Mails/>:''}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
