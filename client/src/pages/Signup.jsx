import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate=useNavigate();
  const handleSIgnup=()=>{
    navigate('/login')
  }
  const moveToLogin=()=>{
     navigate('/login')
  }
   return (
     <div className='min-h-screen flex flex-col justify-between items-center px-3 py-[20px]'>
       <div className='w-full'>
         <FontAwesomeIcon icon={faArrowLeft} size="lg" className='float-left' />
       </div>
       <div className='flex flex-col justify-center items-center space-y-3 w-full'>
         <div className='flex flex-col -space-y-3 items-center justify-center'>
           <h2 className='text-[1rem] font-normal'>create to your</h2>
           <h1 className='text-[3rem] font-bold'>Bus Watch</h1>
           <h2 className='text-[1rem]'>Account</h2>
 
         </div>
         <div className='flex items-center justify-center flex-col w-full space-y-3'>
           <input type="text" className='bg-inputbg w-full h-[57px] md:w-1/4 rounded-[10px] placeholder:text-center px-3' placeholder='student name' />
           <input type="text" className='bg-inputbg w-full h-[57px] md:w-1/4 rounded-[10px] placeholder:text-center px-3' placeholder='usn' />
           <input type="text" className='bg-inputbg w-full h-[57px] md:w-1/4 rounded-[10px] placeholder:text-center px-3' placeholder='registered mobile' />
           <input type="text" className='bg-inputbg w-full h-[57px] md:w-1/4 rounded-[10px] placeholder:text-center px-3' placeholder='bus number' />
           <input type="password" className='bg-inputbg w-full h-[57px] md:w-1/4  rounded-[10px] placeholder:text-center px-3' placeholder='create password' />
           <input type="password" className='bg-inputbg w-full h-[57px] md:w-1/4  rounded-[10px] placeholder:text-center px-3' placeholder=' congirm password' />
           <input type="button" value="Signup" className='text-btnw hite bg-tblue w-[189px] h-[52px] rounded-[15px] text-btnwhite cursor-pointer' onClick={handleSIgnup}/>
         </div>
       </div>
       <div className='cursor-pointer' onClick={moveToLogin} >
         <p>Already have an account <span className='text-tblue'>Login</span></p>
       </div>
     </div>
 
   )
 
}

export default Signup
