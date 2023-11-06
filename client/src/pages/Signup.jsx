import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [type, setType] = useState(null);
  const [draw, setDraw] = useState(0);
  const navigate = useNavigate();
  const handleSIgnup = () => {
    if (type == null) {
      setDraw(1)
    }
    else {
      navigate('/login')
    }
  }
  const moveToLogin = () => {
    navigate('/login')
  }
  const studentClick = () => {
    setType('student')
    setDraw(0)
  }
  const driverClick = () => {
    setType('driver')
    setDraw(0)
  }
  const collegClick = () => {
    setType('college')
    setDraw(0)
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
          {type != null ? <input type="text" className='bg-inputbg w-full h-[57px] md:w-1/4 rounded-[10px] placeholder:text-center px-3' placeholder={type} /> : ''}
          <input type="text" className='bg-inputbg w-full h-[57px] md:w-1/4 rounded-[10px] placeholder:text-center px-3' placeholder='student name' />
          <input type="text" className='bg-inputbg w-full h-[57px] md:w-1/4 rounded-[10px] placeholder:text-center px-3' placeholder='usn' />
          <input type="text" className='bg-inputbg w-full h-[57px] md:w-1/4 rounded-[10px] placeholder:text-center px-3' placeholder='registered mobile' />
          <input type="text" className='bg-inputbg w-full h-[57px] md:w-1/4 rounded-[10px] placeholder:text-center px-3' placeholder='bus number' />
          <input type="password" className='bg-inputbg w-full h-[57px] md:w-1/4  rounded-[10px] placeholder:text-center px-3' placeholder='create password' />
          <input type="password" className='bg-inputbg w-full h-[57px] md:w-1/4  rounded-[10px] placeholder:text-center px-3' placeholder=' congirm password' />
          <input type="button" value="Signup" className=' bg-tblue w-[189px] h-[52px] rounded-[15px] text-btnwhite cursor-pointer' onClick={handleSIgnup} />
        </div>
      </div>
      <div className='cursor-pointer' onClick={moveToLogin} >
        <p>Already have an account <span className='text-tblue'>Login</span></p>
      </div>
      <div className={`${draw == 0 ? 'hidden' : 'flex w-full absolute  flex-col justify-end bottom-0 items-center animation'}`}>

        <div className='min-h-[50vh]  w-full flex items-center justify-center flex-col bg-white rounded-3xl border border-black'>

          <div className=''>
            <h1>Select account type</h1>
          </div>
          <div className='flex flex-col'>
            <button className='text-lg font-medium h-[3rem] w-[21rem]  md:w-[20.5rem] md:h-[46px] lg:w-[22.5rem] lg:h-[56px] mt-3 text-btnwhite bg-tblue rounded-[10px]' onClick={studentClick}>Student</button>
            <button className='text-lg font-medium h-[3rem] w-[21rem]  md:w-[20.5rem] md:h-[46px] lg:w-[22.5rem] lg:h-[56px] mt-3 text-btnwhite bg-tblue rounded-[10px]' onClick={driverClick}>Driver</button>
            <button className='text-lg font-medium h-[3rem] w-[21rem]  md:w-[20.5rem] md:h-[46px] lg:w-[22.5rem] lg:h-[56px] mt-3 text-btnwhite bg-tblue rounded-[10px]' onclick={collegClick} >College</button>
          </div>
        </div>
      </div>
    </div>

  )

}

export default Signup
