import React from 'react'

function Drivers() {
  return (
    <div className=''>
        <div className='w-[98%] bg-blue-300  mx-auto text-center '>Drivers</div>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg overflow-y-scroll'>
            <table className='w-[98%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto mt-3 '>
                <thead className='text-xs text-gray-700 uppercase bg-primary dark:text-gray-400 '><tr className=''><th className='px-6 py-3'>name</th><th className='px-6 py-3'>Dno</th><th className='px-6 py-3'>mobile</th><th className='px-6 py-3'>Busno</th></tr></thead>
                <tbody>
                <tr className='odd:bg-white even:bg-gray-50  hover:bg-gray-200'><th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg" alt="Jese image"/>
                    <div className="ps-3">
                        <div className="text-base font-semibold text-black">Neil Sims</div>
                        <div className
                        ="font-normal text-gray-500">neil.sims@flowbite.com</div>
                    </div>  
                </th><td className='px-6 py-4'>1000278</td><td className='px-6 py-4'>7247929900</td><td className='px-6 py-4'>035</td></tr>
                <tr className='odd:bg-white even:bg-gray-50  hover:bg-gray-200'><th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg" alt="Jese image"/>
                    <div className="ps-3">
                        <div className="text-base font-semibold text-black">Neil Sims</div>
                        <div className
                        ="font-normal text-gray-500">neil.sims@flowbite.com</div>
                    </div>  
                </th><td className='px-6 py-4'>1000278</td><td className='px-6 py-4'>7247929900</td><td className='px-6 py-4'>035</td></tr>
                <tr className='odd:bg-white even:bg-gray-50  hover:bg-gray-200'><th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg" alt="Jese image"/>
                    <div className="ps-3">
                        <div className="text-base font-semibold text-black">Neil Sims</div>
                        <div className
                        ="font-normal text-gray-500">neil.sims@flowbite.com</div>
                    </div>  
                </th><td className='px-6 py-4'>1000278</td><td className='px-6 py-4'>7247929900</td><td className='px-6 py-4'>035</td></tr>
                
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Drivers
