import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"
// Importing toastify module
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ManageDriver() {
  const [driverList, setDriverList] = useState([])
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const useriddetails = params.get('user')
  const useriddetails2 = params.get('id')
  console.log('userid', useriddetails);
  const [selectedImage, setSelectedImage] = useState(null);
  const [designationdetails, setDesignationdetails] = useState(null)
  const [editableData, setEditableData] = useState(null);

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

  const driverData = async (e) => {
    try {
      const { data, status } = await axios.get(
        `http://localhost:3000/web/api/empdetails?collegeBusEmpId=${useriddetails}`);

      setDriverList(data)
      setEditableData(data[0]);
      console.log(data)
    } catch (error) {
      console.log('error ', error)
    }

  }
  const getDesignation = async () => {
    const { data } = await axios.get('http://localhost:3000/web/api/designation');
    console.log('desgnation ', data)
    setDesignationdetails(data);

  }
  const handleInputChange = (e, key) => {
    setEditableData((prevData) => ({
      ...prevData,
      [key]: e.target.value,
    }));
  };
  useEffect(() => {
    getDesignation()
    driverData();
    return () => {
      // Your cleanup logic here
      console.log('Component will unmount. Cleanup logic goes here.');
    };
  }, [])

  const handleUpdateDriver = async (e) => {
    e.preventDefault();
    try {
      console.log('image:', selectedImage)
      const formdata = new FormData(e.target)
      const body = Object.fromEntries(formdata);
      const { data, status } = await axios.post(
        `http://localhost:3000/web/api/updateemployee`,
        {
          ...body,
          empimg: body.empimg['name'],
          collegeBusEmpId: useriddetails,
          userId: useriddetails2

        }
      )
      toast.success("updated sucessfully!", {
        position: toast.POSITION.TOP_CENTER
      });
    } catch (error) {
      console.log(error)
      toast.error(error.response.data);
    }
  }
  return (

    <div className=' h-screen flex items-center justify-evenly md:w-[75vw] lg:w-[85vw]'>
      <form className='w-[50vw] bg-white shadow-md h-[80%]' onSubmit={handleUpdateDriver} >
        <div className='w-full font-medium capitalize py-3 text-xl border-b-2 flex justify-center items-center'>
          edit driver
        </div>
        {driverList.map(
          (item, key) => (
            <>
              <div key={key} className='flex items-center justify-center'>

                <label htmlFor="imageInput">
                  <div className="w-28 h-28 bg-gray-300 rounded-full relative mx-auto mt-4">
                    {selectedImage ?
                      (<img
                        src={selectedImage}
                        alt="Profile"
                        className="w-28 h-28 object-cover rounded-full border-blue-500 border-4"
                      />) : (
                        <></>
                        //   <img
                        //   src={`/images/${editableData.userImage}`}
                        //   alt="Profile"
                        //   className="w-28 h-28 object-cover rounded-full border-blue-500 border-4"
                        // />
                      )
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
                />
              </div>
              <div className='flex items-center justify-center flex-col py-6 space-y-5'>

                <div className='flex w-full' >
                  <div className='flex flex-col w-1/2 justify-center ml-4'>
                    <label htmlFor="name" className='text-black/60'>name</label>
                    <input type="text" name="name" id="" className='w-[90%] h-10 border p-4' value={editableData.name} onChange={(e) => handleInputChange(e, 'name')} required />
                  </div>
                  <div className='flex flex-col w-1/2'>
                    <label htmlFor="mobileno" className='text-black/60'>mobileno</label>
                    <input type="text" name="mobileno" id="" className='w-[90%]  h-10 border p-4 ' value={editableData.mobileno} onChange={(e) => handleInputChange(e, 'mobileno')} required />
                  </div>
                </div>

                <div className='flex w-full' >
                  <div className='flex flex-col w-1/2 justify-center ml-4'>
                    <label htmlFor="email" className='text-black/60'>Email</label>
                    <input type="email" name="email" id="" className='w-[90%] h-10 border p-4' value={editableData.email} onChange={(e) => handleInputChange(e, 'email')} required />
                  </div>
                  <div className='flex flex-col w-1/2'>
                    <label htmlFor="password" className='text-black/60'>password</label>
                    <input type="password" name="password" id="" className='w-[90%]  h-10 border p-4 ' value={editableData.password} onChange={(e) => handleInputChange(e, 'password')} required />
                  </div>
                </div>


                <div className='flex flex-col w-[90%] px-4'>
                  <label htmlFor="designationId" className='text-black/60'>Designation</label>
                  <select name='designation_id' className='h-10 border'>
                    {designationdetails?.map((ele, index) => {
                      return (
                        < >
                          <option className='text-xl text-black' value={ele.designation_id}> {ele.designation}</option>
                        </>
                      )
                    })}
                  </select>
                </div>
                <button type='submit' className='bg-tblue w-[189px] h-[52px] rounded-[15px] text-btnwhite cursor-pointer mt-4'>Update</button>

              </div>

            </>
          ))

        }
        <ToastContainer />
      </form>
    </div>
  )
}

export default ManageDriver
