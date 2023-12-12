import React, { useEffect, useState } from 'react'
import axios from 'axios'
// Importing toastify module
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddDriver() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [busNumber, setBusNumber] = useState(null)
  const [designationdetails, setDesignationdetails] = useState(null)


  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };




  const handleCameraClick = () => {
    // Trigger the file input click when the camera is clicked
    document.getElementById('imageInput').click();
  };


  const getBUSNo = async () => {
    const { data } = await axios.get('http://localhost:3000/web/api/colegebus');
    console.log('boarding pointa ', data)
    setBusNumber(data);

  }
  const getDesignation = async () => {
    const { data } = await axios.get('http://localhost:3000/web/api/designation');
    console.log('desgnation ', data)
    setDesignationdetails(data);

  }

  useEffect(() => {
    getBUSNo();
    getDesignation();
  }, []);


  const handleAddDriver = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData(e.target)
      const body = Object.fromEntries(formdata);

      const { data, status } = await axios.post(
        `http://localhost:3000/web/api/addbusemployee`,
        {
          ...body,
          empimg: body.empimg['name'],
          userId: localStorage.getItem('userId')
        }
      )
      toast.success("Added sucessfully!", {
        position: toast.POSITION.TOP_CENTER
      });
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message);

    }
  }

  return (
    <div className=' h-screen flex items-center justify-evenly md:w-[75vw] lg:w-[85vw]'>
      <form className='w-[50vw] bg-white shadow-md h-[80%]' onSubmit={handleAddDriver}>
        <div className='w-full h-10 border border-b-1 flex justify-center items-center'>
          Add Driver
        </div>
        <div className='w-28 h-28 mx-auto'>

          <label htmlFor="imageInput">
            <div className="w-28 h-28 bg-gray-300 rounded-full relative mx-auto mt-4">
              {selectedImage &&
                <img
                  src={selectedImage}
                  alt="Profile"
                  className="w-28 h-28 object-cover rounded-full border-blue-500 border-4"
                />
              }
              <div className="w-8 h-8 flex items-center justify-center">
                <img
                  src="https://i.pinimg.com/originals/cc/bb/82/ccbb827c12c3578f96637daef1888c22.jpg"
                  alt="Camera"
                  className="w-8 rounded-full object-cover h-8 absolute right-0 bottom-0"
                  onClick={handleCameraClick}
                />
              </div>
            </div>
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            id="imageInput"
            name='empimg'
            className="hidden"
            required
          />
        </div>
        <div className='flex flex-col items-center w-full py-5'>

          <div className='flex w-full' >
            {/* <div className='flex flex-col w-1/2 justify-center ml-4'>
              <label htmlFor="usn" className='text-black/60'>usn</label>
              <input type="text" name="usn" id="" className='w-[90%] h-10 border p-4' required />
            </div> */}
            <div className='flex flex-col w-1/2'>
              <label htmlFor="name" className='text-black/60'>name</label>
              <input type="text" name="name" id="" className='w-[90%]  h-10 border p-4 ' required />
            </div>
          </div>
          <div className='flex w-full' >
            <div className='flex flex-col w-1/2 justify-center ml-4'>
              <label htmlFor="startDate" className='text-black/60'>Joined date</label>
              <input type="date" name="startDate" id="" className='w-[90%] h-10 border p-4' required />
            </div>
            <div className='flex flex-col w-1/2'>
              <label htmlFor="endDate" className='text-black/60'>end date</label>
              <input type="date" name="endDate" id="" className='w-[90%]  h-10 border p-4 ' required />
            </div>
          </div>
          <div className='flex w-full' >
            <div className='flex flex-col w-1/2 justify-center ml-4'>
              <label htmlFor="currentStatus" className='text-black/60'>Status</label>
              <select name='currentStatus' required className='w-[90%] h-10 border'>
                {/* <option className='' value={''}> ----------- </option> */}
                <option className='' value={'true'}> available </option>
                <option className='' value={'false'} selected> not available </option>
              </select>
            </div>
            <div className='flex flex-col w-1/2'>
              <label htmlFor="phono" className='text-black/60'>mobileno</label>
              <input type="number" name="phono" id="" className='w-[90%]  h-10 border p-4 ' required />
            </div>
          </div>
          <div className='flex w-full' >
            <div className='flex flex-col w-1/2'>
              <label htmlFor="collegeBusId" className='text-black/60'>bus No</label>
              <select name='collegeBusId' className='w-[90%] h-10 border'>
                <option className='' value={''}> ----------- </option>
                {busNumber?.map((ele, index) => {
                  return (
                    < >
                      <option className='text-xl text-black' value={ele.collegeBusId}> {ele.busNo}</option>
                    </>
                  )
                })}
              </select>

            </div>
            {/* <div className='flex flex-col w-1/2'>
              <label htmlFor="routeNo" className='text-black/60'>Route</label>
              <select name='routeNo' className='w-[90%] h-10 border'>
                <option className='' value={''}> ----------- </option>
                {designationdetails?.map((ele, index) => {
                  return (
                    < >
                      <option className='text-xl text-black' value={ele.routeNo}> {ele.startingPoint} to {ele.endingPoint}</option>
                    </>
                  )
                })}
              </select>

            </div> */}
            <div className='flex flex-col w-1/2'>
              <label htmlFor="designationId" className='text-black/60'>Designation</label>
              <select name='designationId' className='w-[90%] h-10 border'>
                <option className='' value={''}> ----------- </option>
                {designationdetails?.map((ele, index) => {
                  return (
                    < >
                      <option className='text-xl text-black' value={ele.designation_id}> {ele.designation}</option>
                    </>
                  )
                })}
              </select>

            </div>
          </div>
          <button type='submit' className='bg-tblue w-[189px] h-[52px] rounded-[15px] text-btnwhite cursor-pointer mt-4'>Add</button>

        </div>
        <ToastContainer />
      </form>
    </div>
  )
}

export default AddDriver
