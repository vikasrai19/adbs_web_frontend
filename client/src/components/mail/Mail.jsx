import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function Mail() {
  const [deleteItem,setDeleteItem]=useState(false)
  return (
    <div className=' h-screen md:w-[75vw] lg:w-[85vw] pt-20 overflow-y-scroll'>
     <div className='w-[98%] bg-blue-300  mx-auto text-center '>Messages</div>
     <div>
      <div className='flex justify-end'>

     <button className=' mr-5 bg-red-100 px-6 py-2 my-2 rounded-md' onClick={()=>{setDeleteItem(!deleteItem)}}><FontAwesomeIcon icon={faTrash} style={{color: "#d02525",}} /> Delete</button>
      </div>
      <table className='w-[98%] text-sm text-left rtl:text-right  mx-auto mt-3 '>
        <tbody>
          {/* <tr className='odd:bg-white even:bg-gray-50  hover:bg-gray-200 border-collapse border-2 border-black/10'>
          <td className='px-6 py-2 font-bold'>sharan@gmail.com</td>
          <td className='px-6 py-2 '>
            <div className='w-full h-5 overflow-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quia placeat debitis id consectetur quibusdam exercitationem illum vel facilis temporibus, voluptatem delectus dolorum distinctio vitae similique explicabo! Corrupti, illum perferendis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, laudantium ex voluptate officia laborum dolorem maiores alias odio. Repellendus aut sint maxime, recusandae officia obcaecati? Mollitia illo facere corrupti nostrum. </div></td>
          <td className='px-6 py-2'>10:50pm</td>
          <td><input type="checkbox" value="" className= { 
                    `${deleteItem ? '' : 'hidden'}  
                    w-5 h-5 text-red-600 bg-red-600 border-red-600 rounded focus:ring-red-500 focus:ring-2 px-6 py-2` 
                } /></td>
          </tr>
          <tr className='odd:bg-white even:bg-gray-50  hover:bg-gray-200 border-collapse border-2 border-black/10'>
          <td className='px-6 py-2 font-bold'>sharan@gmail.com</td>
          <td className='px-6 py-2 '>
            <div className='w-full h-5 overflow-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quia placeat debitis id consectetur quibusdam exercitationem illum vel facilis temporibus, voluptatem delectus dolorum distinctio vitae similique explicabo! Corrupti, illum perferendis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, laudantium ex voluptate officia laborum dolorem maiores alias odio. Repellendus aut sint maxime, recusandae officia obcaecati? Mollitia illo facere corrupti nostrum. </div></td>
          <td className='px-6 py-2'>10:50pm</td>
          <td><input type="checkbox" value="" className= { 
                    `${deleteItem ? '' : 'hidden'}  
                    w-5 h-5 text-red-600 bg-red-600 border-red-600 rounded focus:ring-red-500 focus:ring-2 px-6 py-2` 
                } /></td>
          </tr>
          <tr className='odd:bg-white even:bg-gray-50  hover:bg-gray-200 border-collapse border-2 border-black/10'>
          <td className='px-6 py-2 font-bold'>sharan@gmail.com</td>
          <td className='px-6 py-2 '>
            <div className='w-full h-5 overflow-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quia placeat debitis id consectetur quibusdam exercitationem illum vel facilis temporibus, voluptatem delectus dolorum distinctio vitae similique explicabo! Corrupti, illum perferendis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, laudantium ex voluptate officia laborum dolorem maiores alias odio. Repellendus aut sint maxime, recusandae officia obcaecati? Mollitia illo facere corrupti nostrum. </div></td>
          <td className='px-6 py-2'>10:50pm</td>
          <td><input type="checkbox" value="" className= { 
                    `${deleteItem ? '' : 'hidden'}  
                    w-5 h-5 text-red-600 bg-red-600 border-red-600 rounded focus:ring-red-500 focus:ring-2 px-6 py-2` 
                } /></td>
          </tr>
          <tr className='odd:bg-white even:bg-gray-50  hover:bg-gray-200 border-collapse border-2 border-black/10'>
          <td className='px-6 py-2 font-bold'>sharan@gmail.com</td>
          <td className='px-6 py-2 '>
            <div className='w-full h-5 overflow-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quia placeat debitis id consectetur quibusdam exercitationem illum vel facilis temporibus, voluptatem delectus dolorum distinctio vitae similique explicabo! Corrupti, illum perferendis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, laudantium ex voluptate officia laborum dolorem maiores alias odio. Repellendus aut sint maxime, recusandae officia obcaecati? Mollitia illo facere corrupti nostrum. </div></td>
          <td className='px-6 py-2'>10:50pm</td>
          <td><input type="checkbox" value="" className= { 
                    `${deleteItem ? '' : 'hidden'}  
                    w-5 h-5 text-red-600 bg-red-600 border-red-600 rounded focus:ring-red-500 focus:ring-2 px-6 py-2` 
                } /></td>
          </tr> */}
          <tr className='text-center'>No messages found</tr>
        </tbody>
      </table>
     </div>
  </div>
  )
}

export default Mail
