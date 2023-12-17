import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
// Importing toastify module
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ManageStudent() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [boardingPoints, setBoardingPoints] = useState([])
  const [academicYear, setAcademicYear] = useState([])
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const studentid = params.get('student')
  const [studentList, setStudentslist] = useState([])
  const [editableData, setEditableData] = useState(null);
  const getBoardingPoints = async () => {
    const { data } = await axios.get('http://localhost:3000/web/api/busboardingpoints');
    console.log('boarding pointa ', data)
    setBoardingPoints(data)
  }
  const getAcademicyear = async () => {
    const { data } = await axios.get('http://localhost:3000/web/api/academicyear');
    console.log('year pointa ', data)
    setAcademicYear(data)
  }

  const studentData = async (e) => {
    try {

      const { data, status } = await axios.get(
        `http://localhost:3000/web/api/studentdetails?userId=${studentid}`);

      setStudentslist(data)
      setEditableData(data[0]);
      console.log('studentdata', data)
    } catch (error) {
      console.log('error ', error)
    }

  }
  const handleInputChange = (e, key) => {
    setEditableData((prevData) => ({
      ...prevData,
      [key]: e.target.value,
    }));
  };

  useEffect(() => {
    studentData()
    getBoardingPoints()
    getAcademicyear()
  }, [])

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
        `http://localhost:3000/web/api/updatestudent`,
        {
          ...body,
          userImage: body.userImage['name'],
          usertype_id: "4317d1e47f6a45c39dacdad3b8c301f4",
          userId: studentid
        }
      )

      console.log('success')
      toast.success("updated sucessfully!", {
        position: toast.POSITION.TOP_CENTER
      });
    } catch (error) {
      console.log(error);
    }
  }



  return (

    <div className=' h-screen flex items-center justify-evenly md:w-[75vw] lg:w-[85vw]'>
      <div className='w-[50vw] bg-white shadow-md h-[80%]'>
        <div className='w-full font-medium capitalize py-3 text-xl border-b-2 flex justify-center items-center'>
          edit profile
        </div>

        {studentList.map(
          (item, key) => (
            <form className='flex flex-col items-center w-full py-5' onSubmit={handleUpdateStudent}>

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
                  required
                />
              </div>
              <div className='flex flex-col items-center w-full py-8'>

                <div className='flex w-full' >
                  {/* <div className='flex flex-col w-1/2 justify-center ml-4'>
    <label htmlFor="usn" className='text-black/60'>usn</label>
    <input type="text" name="usn" id="" className='w-[90%] h-10 border p-4' required />
  </div> */}
                  <div className='flex flex-col w-1/2 justify-center ml-4'>
                    <label htmlFor="name" className='text-black/60'>name</label>
                    <input type="text" name="name" id="" className='w-[90%]  h-10 border p-4 ' value={editableData.name} onChange={(e) => handleInputChange(e, 'name')} required />
                  </div>
                  <div className='flex flex-col w-1/2 justify-center ml-4'>
                    <label htmlFor="email" className='text-black/60'>Email</label>
                    <input type="email" name="email" id="" className='w-[90%] h-10 border p-4' value={editableData.email} onChange={(e) => handleInputChange(e, 'email')} required />
                  </div>
                </div>
                <div className='flex w-full' >

                  <div className='flex flex-col w-1/2 justify-center ml-4'>
                    <label htmlFor="mobileno" className='text-black/60'>mobileno</label>
                    <input type="text" name="mobileno" id="" className='w-[90%]  h-10 border p-4 ' value={editableData.mobileno} onChange={(e) => handleInputChange(e, 'mobileno')} required />
                  </div>
                  <div className='flex flex-col w-1/2 justify-center ml-4'>
                    <label htmlFor="password" className='text-black/60'>password</label>
                    <input type="password" name="password" id="" className='w-[90%]  h-10 border p-4 ' value={editableData.password} onChange={(e) => handleInputChange(e, 'password')} required />
                  </div>
                </div>
                {/* <div className='flex w-full' > */}
                {/* <div className='flex flex-col w-1/2 justify-center ml-4'>
    <label htmlFor="busNo " className='text-black/60'>busNo</label>
    <input type="number" name="busNo" id="" className='w-[90%] h-10 border p-4' required />
  </div> */}
                {/* <label htmlFor="seatNo" className='text-black/60'>seatNo</label>
    <input type="text" name="seatNo" id="" className='w-[20%]  h-10 border p-4 m-4 ' required />
   */}
                {/* </div> */}
                <div className='flex w-full'>
                  {/* <div className='flex flex-col w-1/2'>
    <label htmlFor="busBoardingPointId" className='text-black/60'>boarding point</label>
    <select name='busBoardingPointId' className='w-[90%] h-10 border'>
      
      {boardingPoints?.map((ele, index) => {
        return (
          < >
            <option className='text-xl text-black' value={ele?.busBoardingPointId}> {ele?.busBoardingPointId}</option>
          </>
        )
      })}
    </select>

  </div> */}
                  {/* <div className='flex flex-col w-1/2'>
    <label htmlFor="password" className='text-black/60'>Academic year</label>
    <select name='academicYearId' className='w-[90%] h-10 border'>
   
      {academicYear?.map((ele, index) => {
        return (
          <>
            <option value={ele?.academicyear_Id}> {ele?.academicyear}</option>
          </>
        )
      })}
    </select>

  </div> */}
                </div>
                <button type='submit' className='bg-tblue w-[189px] h-[52px] rounded-[15px] text-btnwhite cursor-pointer mt-4'>Update</button>
              </div>
            </form>
          ))}
      </div>
      <ToastContainer />
    </div>

  )
}

export default ManageStudent
