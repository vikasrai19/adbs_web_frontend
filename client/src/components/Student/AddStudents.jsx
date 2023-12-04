import React, { useState } from 'react'
import axios from "axios"
// Importing toastify module
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddStudents() {
  const [selectedImage, setSelectedImage] = useState(null);
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


  const handleUpdateStudent = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData(e.target)
      const body = Object.fromEntries(formdata);
      const { data, status } = await axios.post(
        `http://localhost:3000/web/api/addstudent`,
        {
          ...body,
          userId: localStorage.getItem('userId')
        }
      )
      console.log(data.message)
      toast.success("updated sucessfully!", {
        position: toast.POSITION.TOP_CENTER
      });
    } catch (error) {
      console.log('error ', error)
      toast(error?.response.data.message)
    }
  }

  return (
    <div className=' h-screen flex items-center justify-evenly md:w-[75vw] lg:w-[85vw]'>
      <form className='w-[50vw] bg-white shadow-md h-[80%]'  onSubmit={handleUpdateStudent}>
        <div className='w-full h-10 border border-b-1 flex justify-center items-center'>
          Add student
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
            name='userImage'
            className="hidden"
          />
        </div>
        <div className='flex flex-col items-center w-full py-5'>

          <div className='flex w-full' >
            <div className='flex flex-col w-1/2 justify-center ml-4'>
              <label htmlFor="usn" className='text-black/60'>usn</label>
              <input type="text" name="usn" id="" className='w-[90%] h-10 border p-4' required />
            </div>
            <div className='flex flex-col w-1/2'>
              <label htmlFor="name" className='text-black/60'>name</label>
              <input type="text" name="name" id="" className='w-[90%]  h-10 border p-4 ' required />
            </div>
          </div>
          <div className='flex w-full' >
            <div className='flex flex-col w-1/2 justify-center ml-4'>
              <label htmlFor="email" className='text-black/60'>Email</label>
              <input type="email" name="email" id="" className='w-[90%] h-10 border p-4' required />
            </div>
            <div className='flex flex-col w-1/2'>
              <label htmlFor="mobileno" className='text-black/60'>mobileno</label>
              <input type="number" name="mobileno" id="" className='w-[90%]  h-10 border p-4 ' required />
            </div>
          </div>
          <div className='flex w-full' >
            <div className='flex flex-col w-1/2 justify-center ml-4'>
              <label htmlFor="busNo " className='text-black/60'>busNo</label>
              <input type="number" name="busNo" id="" className='w-[90%] h-10 border p-4' required />
            </div>
            <div className='flex flex-col w-1/2'>
              <label htmlFor="password" className='text-black/60'>password</label>
              <input type="password" name="password" id="" className='w-[90%]  h-10 border p-4 ' required />
            </div>
          </div>
          <button type='submit' className='bg-tblue w-[189px] h-[52px] rounded-[15px] text-btnwhite cursor-pointer mt-4'>Add</button>

        </div>
        <ToastContainer />
      </form>
    </div>
  )
}

export default AddStudents
