import React from 'react'

function Dashboard() {
  return (
    <div>
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
  )
}

export default Dashboard
