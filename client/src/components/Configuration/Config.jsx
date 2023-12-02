import React from 'react'
import axios from "axios"

function Config() {

  const handleCreateAcademicYear = async(e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target)
      const body = Object.fromEntries(formData)
      const { data, status } = await axios.post(
        `http://localhost:3000/web/api/addAcademicYear`,
        {
          ...body,
          userId: localStorage.getItem('userId')
        }
      )
      console.log('data ', data)
    } catch (error) {
      // show error message
      console.log('error ', error)
      console.log('error message ', error?.response.data.message)
    }
  }

  
  
  
  const handleCreateDesignation = async(e) => {
    e.preventDefault();
  try {
    const formdata=new FormData(e.target)
    const body=Object.fromEntries(formdata);
    const {data,status}= await axios.post(
      `http://localhost:3000/web/api/adddesignation`,
      {
        ...body,
        userId: localStorage.getItem('userId')
      }
    )
    console.log('success')
  } catch (error) {
    console.log('error ', error)
    console.log('error message ', error?.response.data)
  }
  }


const handleCreateBoarding= async(e)=>{
e.preventDefault();
try {
  const formdata=new FormData(e.target)
    const body=Object.fromEntries(formdata);
    const {data,status}= await axios.post(
      `http://localhost:3000/web/api/addboarding`,
      {
        ...body,
        userId: localStorage.getItem('userId')
      }
    )
    console.log('success')
} catch (error) {
  console.log('error ', error)
  console.log('error message ', error?.response.data)
}
}
  return (
    <div className='h-screen flex items-center justify-evenly md:w-[75vw] lg:w-[85vw]'>
        <form onSubmit={handleCreateAcademicYear} className='mt-1 w-[20vw] bg-white shadow-md h-[50%] flex flex-col items-center'>
         <div className='w-full h-full flex flex-col items-center justify-evenly'>
          <h1>Academic year</h1>
          <input type="text" name="academicYear" id="" className='w-[90%] h-10 border border-black/50 ' placeholder='Enter Academic Year' />
          <input type="number" name="orderNo" id="" className='w-[90%] h-10 border border-black/50'  placeholder='Enter Order No'/>
          <button type='submit' className='bg-tblue text-btnw hite w-[189px] h-[52px] rounded-[15px] text-btnwhite cursor-pointer'>
           create</button>
          </div>  
        </form>
        <form onSubmit={handleCreateDesignation} className='mt-1 w-[20vw] bg-white shadow-md h-[50%] flex flex-col items-center'>
         <div className='w-full h-full flex flex-col items-center justify-evenly'>
          <h1>Designation</h1>
          <input type="text" name="designation" id="" className='w-[90%] h-10 border border-black/50 '/>
          <input type="number" name="orderNo" id="" className='w-[90%] h-10 border border-black/50'/>
          <button type='submit' className='bg-tblue text-btnw hite w-[189px] h-[52px] rounded-[15px] text-btnwhite cursor-pointer'>
           create</button>
          </div>  
        </form>
        <form  onSubmit={handleCreateBoarding} className='mt-1 w-[20vw] bg-white shadow-md h-[50%] flex flex-col items-center'>
         <div className='w-full h-full flex flex-col items-center justify-evenly'>
          <h1>Bus stop</h1>
          <input type="text" name="BoardingPointName" id="" className='w-[90%] h-10 border border-black/50 '/>
          <input type="number" name="BoardingPointNo" id="" className='w-[90%] h-10 border border-black/50'/>
          <button className='bg-tblue text-btnw hite w-[189px] h-[52px] rounded-[15px] text-btnwhite cursor-pointer'>
           create</button>
          </div>  
        </form>
        
    </div>
  )
}

export default Config
