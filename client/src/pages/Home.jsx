import React, { useState } from 'react'
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
  const [mobiledraw, setMobiledraw] = useState('hidden');
  return (
    <div className='min-h-screen flex relativ bg-blue-50'>
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
                  <h1 className='text-black text-2xl font-semibold'>Sharan</h1>
                  <h1 className='text-black text-md opacity-50 font-semibold'>student</h1>
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
      <div className='hidden primary h-screen md:w-[25vw] lg:w-[19vw] md:p-5 md:flex flex-col justify-normal gap-10'>
        <div>

          <div className=' py-5'>
            Buswatch
          </div>
          <div className='flex items-center gap-4'>
            <div className=' md:w-14 md:h-14 rounded-xl object-fill overflow-hidden lg:outline  lg:outline-slate-50'> <img src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg" alt="icon" /></div>
            <div>
              <h1 className='text-black text-md lg:text-2xl font-semibold'>Sharan</h1>
              <h1 className='text-black text-md opacity-50 font-semibold'>student</h1>
            </div>
            <img src="/icons/editprofile.png" alt="" />
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-5 hover:border-l-8 hover:pl-5 border-blue-800'>
            <img src="/icons/home.svg" alt="" />
            <h1>home</h1>
          </div>
          <div className='flex items-center gap-5  hover:border-l-8 hover:pl-5 border-blue-800'>
            <img src="/icons/payment.svg" alt="" />
            <h1>home</h1>
          </div>
          <div className='flex items-center gap-5  hover:border-l-8 border-blue-800 hover:pl-5 '>
            <img src="/icons/contact.svg" alt="" />
            <h1>home</h1>
          </div>
        </div>
      </div>
      <div className='w-full md:w-[75vw] lg:w-[81vw]'>
        <div className='w-full  h-10'>
          <div className='flex justify-between md:justify-end  p-3 md:p-5 space-x-2'>
            <div className='float-left md:hidden'>
              <img src="/icons/menu.svg" alt="" onClick={() => { setMobiledraw('show') }} />

            </div>
            <div className='flex gap-2 '>
              <img src="/icons/emai-1.svg" alt="" />
              <img src="/icons/settings.svg" alt="" />

            </div>
          </div>
          <div className='w-full' id='homeground'>
            <div className='w-[90vw] md:w-[40vw] h-[8rem] bg-white rounded-xl mx-auto mt-10 flex flex-col justify-center p-4'>
              <div className='flex  justify-center items-start gap-3' id='notifications' >
                <img src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg" alt="icon" className='w-8 rounded-full my-2' />
                <div>
                  <h1 className='font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h1>
                  <h2 className='break-words text-xs md:text-sm text-black/40'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus neque nam similique provident beatae praesentium ducimus vel earum aut omnis,.........</h2>
                </div>
              </div>
            </div>
            <div>
               <h1>My bus</h1>
               <div>

               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
