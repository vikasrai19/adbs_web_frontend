import React, { useState } from 'react'
import { faBus, faCommentsDollar, faGear, faHouse, faIdCard, faPhone, faUsers, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{ useNavigate } from 'react-router-dom'

function Sidebar() {
  const [mobiledraw, setMobiledraw] = useState('hidden');  
  const [current,setCurrent]=useState(''); 
  const navigate=useNavigate()
  const username=localStorage.getItem('name')
 
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
                  <h1 className=' text-2xl font-semibold'>{username}</h1>
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
        <div className=''>

          <div className='py-5'>
            Buswatch
          </div>
          <div className='flex items-center gap-4'>
          <img className="w-14 h-14 rounded-full outline" src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg" alt="Jese image"/>
            <div>
              <h1 className='text-black text-md lg:text-sm font-semibold'>{username}</h1>
              <h1 className='text-black text-md lg:text-xs opacity-50 font-semibold'>Admin</h1>
            </div>
            <img src="/icons/editprofile.png" alt="" />
          </div>
        </div>
        <div className='flex flex-col gap-3 text-sm'>
          <div className='flex items-center gap-5  hover:rounded-e-md hover:bg-blue-300 hover:border-l-8 hover:pl-5 hover:p-2 hover:w-full border-blue-800' onClick={()=>navigate('/home')}>
          <FontAwesomeIcon icon={faHouse} style={{color: "#000000",}} />
            <h1>Dashboard</h1>
          </div>
          <div className='flex items-center gap-5  hover:rounded-e-md hover:bg-blue-300 hover:border-l-8 hover:pl-5 hover:p-2 hover:w-full border-blue-800' onClick={()=>navigate('/config')}>
          <FontAwesomeIcon icon={faGear} style={{color: "#000000",}} />
            <h1>Configuration</h1>
          </div>
          <div className='flex items-center gap-5  hover:rounded-e-md hover:bg-blue-300 hover:border-l-8 hover:pl-5 hover:p-2 hover:w-full border-blue-800'  onClick={()=>navigate('/driver')}>
          <FontAwesomeIcon icon={faIdCard} style={{color: "#000000",}} />
            <h1>Drivers</h1>
          </div>
          <div className='flex items-center gap-5   hover:rounded-e-md hover:bg-blue-300 hover:border-l-8 hover:pl-5 hover:p-2 hover:w-full border-blue-800'  onClick={()=>navigate('/Student')}>
          <FontAwesomeIcon icon={faUsers}  style={{color: "#000000",}} />
            <h1>Students</h1>
          </div>
          <div className='flex items-center gap-5  hover:rounded-e-md hover:bg-blue-300 hover:border-l-8 hover:pl-5 hover:p-2 hover:w-full border-blue-800'  onClick={()=>navigate('/Buses')}>
          <FontAwesomeIcon icon={faBus} style={{color: "#000000",}}  />
            <h1>Buses</h1>
          </div>
          <div className='flex items-center gap-5  hover:rounded-e-md hover:bg-blue-300 hover:border-l-8 hover:pl-5 hover:p-2 hover:w-full border-blue-800'  onClick={()=>setCurrent('payments')}>
          <FontAwesomeIcon icon={faCommentsDollar} style={{color: "#000000",}} />
            <h1>payments</h1>
          </div>
          <div className='flex items-center gap-5  hover:rounded-e-md hover:bg-blue-300 hover:border-l-8 border-blue-800 hover:pl-5 ' onClick={()=>setCurrent('contact')}>
          <FontAwesomeIcon icon={faPhone} style={{color: "#000000",}}/>
            <h1>contact</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
