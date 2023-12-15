import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate=useNavigate();
  return (
   
    
      <div className='absolute right-0'>
        <div className=''>
          <div className='flex justify-between md:justify-end  p-3 md:p-5 space-x-2'>
            <div className='float-left md:hidden'>
              <img src="/icons/menu.svg" alt="" onClick={() => { setMobiledraw('show') }} />  

            </div>
            <div className='flex gap-2'>
              <img src="/icons/emai-1.svg" alt="" onClick={()=>navigate('/mail')}/>
              <img src="/icons/settings.svg" alt="" onClick={()=>navigate('/settings')} />

            </div>
          </div>
          <div  >
          </div>
        </div>

      </div>
  )
}

export default Header
