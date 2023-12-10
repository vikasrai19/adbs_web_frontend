import React, { useEffect, useState } from 'react'
import axios from "axios"
// Importing toastify module
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Config() {
  const [academicyearList, setAcademicyearList] = useState()
  const [designationList, setDesignationList] = useState()
  const [boardingpointsList, setBoardingpointsList] = useState()
  const configuredData = async (e) => {
    try {

      const { data, status } = await axios.get(
        `http://localhost:3000/web/api/academicyear`);

      setAcademicyearList(data)
      console.log(academicyearList)
    } catch (error) {
      console.log('error ', error)
    }

  }
  const configuredData1 = async (e) => {
    try {

      const { data, status } = await axios.get(
        `http://localhost:3000/web/api/designation`);

      setDesignationList(data)
      console.log(designationList)
    } catch (error) {
      console.log('error ', error)
    }

  }
  const configuredData2 = async (e) => {
    try {

      const { data, status } = await axios.get(
        `http://localhost:3000/web/api/boardingpoints`);

      setBoardingpointsList(data)
      console.log(boardingpointsList)
    } catch (error) {
      console.log('error ', error)
    }

  }





  useEffect(() => {
    configuredData()
    configuredData1()
    configuredData2()
    // Call your function here
    // If you need to perform cleanup when the component unmounts, you can return a function from useEffect
    return () => {
      // Your cleanup logic here
      console.log('Component will unmount. Cleanup logic goes here.');
    };
  }, []);

  const handleCreateAcademicYear = async (e) => {
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
      toast.success(data.message)
    } catch (error) {
      // show error message
      console.log('error ', error)
      toast(error?.response.data.message)
    }
  }


  const handleCreateDesignation = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData(e.target)
      const body = Object.fromEntries(formdata);
      const { data, status } = await axios.post(
        `http://localhost:3000/web/api/adddesignation`,
        {
          ...body,
          userId: localStorage.getItem('userId')
        }
      )
      toast.success("Added sucessfully!", {
        position: toast.POSITION.TOP_CENTER
      });
    } catch (error) {
      console.log(error.response.data.message)
      toast.error(error.response.data.message);

    }
  }


  const handleCreateBoarding = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData(e.target)
      const body = Object.fromEntries(formdata);
      const { data, status } = await axios.post(
        `http://localhost:3000/web/api/addboarding`,
        {
          ...body,
          userId: localStorage.getItem('userId')
        }
      )
      console.log('success')
      toast.success("Added sucessfully!", {
        position: toast.POSITION.TOP_CENTER
      });

    } catch (error) {
      console.log('error ', error)
      toast.error(error?.response.data.message)
    }
  }
  return (
    <div className=' h-screen  md:w-[75vw] lg:w-[85vw] overflow-y-scroll overflow-x-hidden'>
      <div className='py-8 flex items-center justify-evenly md:w-[75vw] lg:w-[85vw] m-5'>
        <form onSubmit={handleCreateAcademicYear} className='mt-1 py-6 w-[20vw] bg-white shadow-md h-[50%] flex flex-col items-center'>
          <div className='w-full h-full flex flex-col items-center justify-evenly  space-y-4'>
            <h1>Academic year</h1>
            <input type="text" name="academicYear" id="" className='w-[90%] h-10 border border-black/50 p-4 ' placeholder='Enter Academic Year' required />
            <input type="number" name="orderNo" id="" className='w-[90%] h-10 border border-black/50 p-4' placeholder='Enter Order No' required />
            <button type='submit' className='bg-tblue text-btnw hite w-[189px] h-[52px] rounded-[15px] text-btnwhite cursor-pointer'>
              create</button>
          </div>
        </form>
        <form onSubmit={handleCreateDesignation} className='mt-1 w-[20vw] py-6 bg-white shadow-md h-[50%] flex flex-col items-center'>
          <div className='w-full h-full flex flex-col items-center justify-evenly space-y-4'>  
            <h1>Designation</h1>
            <input type="text" name="designation" id="" className='w-[90%] h-10 border border-black/50 p-4' placeholder='Enter Designation' required />
            <input type="number" name="orderNo" id="" className='w-[90%] h-10 border border-black/50 p-4' placeholder='Enter order no' required />
            <button type='submit' className='bg-tblue text-btnw hite w-[189px] h-[52px] rounded-[15px] text-btnwhite cursor-pointer'>
              create</button>
          </div>
        </form>
        <form onSubmit={handleCreateBoarding} className='mt-1 w-[20vw] py-6 bg-white shadow-md h-[50%] flex flex-col items-center'>
          <div className='w-full h-full flex flex-col items-center justify-evenly space-y-4'>  
            <h1>Bus stop</h1>
            <input type="text" name="BoardingPointName" id="" className='w-[90%] h-10 border border-black/50 p-4' placeholder='Enter Boarding point name' required />
            <input type="number" name="BoardingPointNo" id="" className='w-[90%] h-10 border border-black/50 p-4' placeholder='Enter boarding point no' required />
            <button className='bg-tblue text-btnw hite w-[189px] h-[52px] rounded-[15px] text-btnwhite cursor-pointer'>
              create</button>
          </div>
        </form>
        <ToastContainer />



      </div>
      <div class="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
          <h2 class="text-2xl font-semibold mb-4">Bus Booking Form</h2>
          <form>

            <div class="mb-4">
              <label for="boardingTime" class="block text-sm font-medium text-gray-600">Boarding Time</label>
              <input type="text" id="boardingTime" name="boardingTime" class="mt-1 p-2 w-full border rounded-md" />
            </div>


            <div class="mb-4">
              <label for="dropTime" class="block text-sm font-medium text-gray-600">Drop Time</label>
              <input type="text" id="dropTime" name="dropTime" class="mt-1 p-2 w-full border rounded-md" />
            </div>


            <div class="mb-4">
              <label for="userId" class="block text-sm font-medium text-gray-600">User ID</label>
              <input type="text" id="userId" name="userId" class="mt-1 p-2 w-full border rounded-md" />
            </div>


            <div class="mb-4">
              <label for="boardingPointId" class="block text-sm font-medium text-gray-600">Boarding Point ID</label>
              <input type="text" id="boardingPointId" name="boardingPointId" class="mt-1 p-2 w-full border rounded-md" />
            </div>

            <div class="mb-4">
              <label for="collegeBusId" class="block text-sm font-medium text-gray-600">College Bus ID</label>
              <input type="text" id="collegeBusId" name="collegeBusId" class="mt-1 p-2 w-full border rounded-md" />
            </div>

            <div class="mb-4">
              <label for="academicYearId" class="block text-sm font-medium text-gray-600">Academic Year ID</label>
              <input type="text" id="academicYearId" name="academicYearId" class="mt-1 p-2 w-full border rounded-md" />
            </div>
             <div className='w-full flex items-center'>

            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mx-auto">Submit</button>
             </div>

          </form>
        </div>
      {/* <div className='flex items-center justify-center'>
         <form action="">
          <input type="text" />
         </form>
      </div> */}
      <div className=' h-full w-full'>
        <div className='w-full text-center mt-12'>
          <h1>Academic year</h1>
          <table className='mx-auto w-[98%] text-sm text-left rtl:text-right text-black  mt-3 border border-black'>
            <thead className='text-xs text-btnwhite uppercase bg-tblue  '>

              <tr>
                <th className='px-6 py-3'>academic year</th>
                <th className='px-6 py-3'>order NO</th>
              </tr>
            </thead>
            {academicyearList ? (academicyearList.map(item => (
              <tr className='odd:bg-white even:bg-gray-100  hover:bg-gray-200'>
                <td className='px-6 py-4'>{item.academicyear}</td>
                <td className='px-6 py-4'>{item.orderNo}</td>
              </tr>
            ))
            ) : (
              <tr>
                <td>No data found</td>
              </tr>
            )}

          </table>
        </div>
        <div className='w-full text-center mt-5'>
          <h1>Designation</h1>
          <table className='mx-auto w-[98%] text-sm text-left rtl:text-right text-black  mt-3 border border-black'>
            <thead className='text-xs text-btnwhite uppercase bg-tblue dark:text-btnwhite '>

              <tr>
                <th className='px-6 py-3'>academic year</th>
                <th className='px-6 py-3'>order NO</th>
              </tr>
            </thead>
            {designationList ? (designationList.map(item => (
              <tr className='odd:bg-white even:bg-gray-100  hover:bg-gray-200'>
                <td className='px-6 py-4'>{item.designation}</td>
                <td className='px-6 py-4'>{item.orderNo}</td>
              </tr>
            ))
            ) : (
              <tr>
                <td>No data found</td>
              </tr>
            )}

          </table>
        </div>
       
        <div className='w-full text-center mt-5'>
          <h1>Bus stops</h1>
          <table className='mx-auto w-[98%] text-sm text-left rtl:text-right text-black  mt-3 border border-black'>
            <thead className='text-xs text-btnwhite uppercase bg-tblue dark:text-btnwhite '>

              <tr>
                <th className='px-6 py-3'>Name</th>
                <th className='px-6 py-3'>order No</th>
              </tr>
            </thead>
            {boardingpointsList ? (boardingpointsList.map(item => (
              <tr className='odd:bg-white even:bg-gray-100  hover:bg-gray-200'>
                <td className='px-6 py-4'>{item.BoardingPointName}</td>
                <td className='px-6 py-4'>{item.BoardingPointNO}</td>
              </tr>
            ))
            ) : (
              <tr>
                <td>No data found</td>
              </tr>
            )}

          </table>
        </div>
      </div>
    </div>
  )
}

export default Config
