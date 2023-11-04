import React from 'react'
import { } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
  return (
    <div className='min-h-screen flex'>
      <div className='hidden primary h-screen w-[15vw] md:p-5 md:flex flex-col justify-normal gap-10'>
        <div>

          <div className=' py-5'>
            Buswatch
          </div>
          <div className='flex items-center gap-4'>
            <div className='w-14 h-14 rounded-xl object-fill overflow-hidden outline outline-slate-50'> <img src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg" alt="icon" /></div>
            <div>
              <h1 className='text-black text-2xl font-semibold'>Sharan</h1>
              <h1 className='text-black text-md opacity-50 font-semibold'>student</h1>
            </div>
            <img src="/icons/editprofile.png" alt="" />
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-5'>
            <img src="/icons/home.svg" alt="" />
            <h1>home</h1>
          </div>
          <div className='flex items-center gap-5'>
            <img src="/icons/payment.svg" alt="" />
            <h1>home</h1>
          </div>
          <div className='flex items-center gap-5'>
            <img src="/icons/contact.svg" alt="" />
            <h1>home</h1>
          </div>
        </div>
      </div>
      <div className='w-full md:w-[85vw]'>
        <div className='w-full bg-white h-10'>
          <div className='flex justify-between md:justify-end  p-3 md:p-5 space-x-2'>
            <div className='float-left md:hidden'>
            <img src="/icons/menu.svg" alt="" />

            </div>
            <div className='flex gap-2'>
            <img src="/icons/emai-1.svg" alt="" />
            <img src="/icons/settings.svg" alt="" />

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
