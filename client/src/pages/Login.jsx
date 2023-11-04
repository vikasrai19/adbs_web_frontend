import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate=useNavigate();
 const movetosignup =()=>{
     navigate('/signup')
  }
  const handleLogin=()=>{
    navigate('/')
  }
  return (
    <div className='min-h-screen flex flex-col justify-between items-center px-3 py-[20px]'>
      <div className='w-full'>
        <FontAwesomeIcon icon={faArrowLeft} size="lg" className='float-left' />
      </div>
      <div className='flex flex-col justify-center items-center space-y-3 w-full'>
        <div className='flex flex-col -space-y-3 items-center justify-center'>
          <h2 className='text-[1rem] font-normal'>Login to your</h2>
          <h1 className='text-[3rem] font-bold'>Bus Watch</h1>
          <h2 className='text-[1rem]'>Account</h2>

        </div>
        <div className='flex items-center justify-center flex-col w-full space-y-3'>
          <input type="text" className='bg-inputbg w-full h-[57px] md:w-1/4 rounded-[10px] placeholder:text-center px-3' placeholder='username' />
          <input type="password" className='bg-inputbg w-full h-[57px] md:w-1/4  rounded-[10px] placeholder:text-center px-3' placeholder='password' />
          <input type="button" value="Login" className='text-btnw hite bg-tblue w-[189px] h-[52px] rounded-[15px] text-btnwhite cursor-pointer'onClick={handleLogin} />
        </div>
      </div>
      <div className='cursor-pointer' onClick={movetosignup}>
        <p>Dont have an account <span className='text-tblue'>Signup</span></p>
      </div>
    </div>

  )
}

export default Login
