import React from 'react'

function Header() {
  return (
    
      <div className='absolute right-0'>
        <div className=''>
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
          </div>
        </div>

      </div>
  )
}

export default Header