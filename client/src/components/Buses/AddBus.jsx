import React, { useState } from 'react'
import axios from 'axios'
// Importing toastify module
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

function AddBus() {
    const [selectedImage, setSelectedImage] = useState(null)  
    const [boardingpointsList, setBoardingpointsList] = useState() 
    
    const [boardingPoints, setBoardingPoints] = useState([])
    

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

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };

            reader.readAsDataURL(file);
        }
    }

    const handleAddBus = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData(e.target);
            const body = Object.fromEntries(formData);
            const { data, status } = await axios.post(
                `http://localhost:3000/web/api/addbus`,
                {
                    ...body,
                    busImage: body.busImage['name'],
                    userId: localStorage.getItem('userId')
                }
            )
            console.log('success')
            toast.success("Added sucessfully!", {
                position: toast.POSITION.TOP_CENTER
            });
        } catch (error) {
            console.log('error ', error)
            console.log(error.response.data)
            toast.error(error.response.data.message)
        }
    }


    useEffect(()=>{
        configuredData2()
        // getBUSNo();
        return () => {
            // Your cleanup logic here
            console.log('useEffect');
          };
        },[])
    return (
        <div className=' md:w-[75vw] lg:w-[85vw] mt-20'>
            <div className='w-[98%] bg-blue-300  mx-auto text-center'>Buses</div>
            <form className=' flex items-center justify-center gap-3' onSubmit={handleAddBus}>
  <div className='w-[45%] h-full bg-white'>
    <div className='mx-auto mt-3'>
      <div className='w-[20rem] bg-white h-[16rem] flex flex-col justify-center items-center mx-auto'>
        {selectedImage && (
          <div className='w-full h-full ovlerflow-hidden'>
            <img src={selectedImage} alt="" className='object-fill' />
          </div>
        )}
        <label htmlFor="busImage" className='font-bold border border-black mt-3 cursor-pointer w-full h-full text-center p-5'>
          Select Bus Image
        </label>
        <input type="file" name='busImage' id="busImage" className='hidden' onChange={handleImageChange} required />
      </div>
    </div>
    <div className='p-10'>
      <div className='w-full flex flex-col gap-4'>
        <div className='flex flex-col'>
          <label htmlFor="busNo">Bus Number</label>
          <input type="text" name='busNo' className='h-10 border border-black/50 p-4 rounded' required />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="routeNo">Route Number</label>
          <input type="number" name='routeNo' className='h-10 border border-black/50 p-4 rounded' required />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="regDate">Registration Date</label>
          <input type="date" name='regDate' className='h-10 border border-black/50 p-4 rounded' required />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="purchaseDate">Purchase Date</label>
          <input type="date" name='purchaseDate' className='h-10 border border-black/50 p-4 rounded' required />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="startingPoint">Starting Point</label>
          <select name='startingPoint' className='w-full h-10 border' required>
            {boardingpointsList?.map((ele, index) => (
              <option key={index} className='text-xl text-black' value={ele?.BoardingPointid}>{ele?.BoardingPointName}</option>
            ))}
          </select>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="noOfSeats">Number of Seats</label>
          <input type="number" name='noOfSeats' className='h-10 border border-black/50 p-4 rounded' required />
        </div>
      </div>
      <div className='flex justify-center mt-4'>
        <input type="submit" value="Add" className='bg-tblue w-[189px] h-[52px] rounded-[15px] text-btnwhite cursor-pointer' />
      </div>
    </div>
  </div>
</form>



            <ToastContainer />
        </div>
    )
}

export default AddBus
