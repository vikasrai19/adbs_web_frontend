import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
// Importing toastify module
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpdateBus() {
    const [selectedImage, setSelectedImage] = useState(null)
    const [busDetails, setBusDetails] = useState([])
    const [boardingpointsList, setBoardingpointsList] = useState()
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const busid = params.get('bus')
    const [editableData, setEditableData] = useState(null);

    const handleInputChange = (e, key) => {
        setEditableData((prevData) => ({
          ...prevData,
          [key]: e.target.value,
        }));
      };


    console.log('busid', busid);
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


    const BusData = async (e) => {
        try {

            console.log('inside busid', busid)
            const { data, status } = await axios.get(
                `http://localhost:3000/web/api/buseview?collegeBusId=${busid}`);

            setBusDetails(data)
            setEditableData(data[0]); 
            console.log('busdetails', data)
        } catch (error) {
            console.log('error ', error)
        }

    }

    useEffect(() => {
        BusData()
        configuredData2()
        return () => {
            // Your cleanup logic here
            console.log('Component will unmount. Cleanup logic goes here.');
        };
    }, [])
    const handleUpdateBus=async(e)=>{
        e.preventDefault();
        try {
          console.log('user',localStorage.getItem('userId'))
          const formdata = new FormData(e.target)
          const body = Object.fromEntries(formdata);
          const { data, status } = await axios.post(
            `http://localhost:3000/web/api/updateBus`,
            {
              ...body,
              busImage: body.busImage['name'],
              collegeBusId:busid,
              userId: localStorage.getItem('userId')
              
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
        <div className=' md:w-[75vw] lg:w-[85vw] mt-20'>
            <div className='w-[98%] h-full bg-blue-300  mx-auto text-center'>Buses</div>
            <form className='h-screen flex items-center justify-center gap-3 ' onSubmit={handleUpdateBus}>
  {busDetails.map((item, key) => (
    <div key={key} className='w-[45%] bg-white p-8'>
      <div className='w-[20rem] bg-white mx-auto flex flex-col justify-center items-center'>
        {selectedImage ? (
          <div className='w-full h-48 overflow-hidden'>
            <img src={selectedImage} alt="" className='object-cover w-full h-full' />
          </div>
        ) : (
          <div className='w-full h-48 overflow-hidden'>
            <img src={`/images/${item.busImage}`} alt="" className='object-cover w-full h-full' />
          </div>
        )}
        <label htmlFor="busImage" className='font-bold border border-black mt-3 cursor-pointer'>Select Bus Image</label>
        <input type="file" name='busImage' id="busImage" className='hidden' onChange={handleImageChange} />
      </div>
      <div className='mt-8'>
        <div className='flex flex-col mb-4'>
          <label htmlFor="busNo">Bus Number</label>
          <input type="text" name='busNo' className='h-10 border border-black/50 p-4 rounded' value={editableData.busNo} onChange={(e) => handleInputChange(e, 'busNo')} required />
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor="routeNo">Route Number</label>
          <input type="number" name='routeNo' className='h-10 border border-black/50 p-4 rounded' value={editableData.routeNo} onChange={(e) => handleInputChange(e, 'routeNo')} required />
        </div>
        <div className='flex justify-between mb-4'>
          <div className='flex flex-col w-1/2 mr-4'>
            <label htmlFor="regDate">Registration Date</label>
            <input type="date" name='regDate' className='h-10 border border-black/50 p-4 rounded' value={editableData.regDate} onChange={(e) => handleInputChange(e, 'regDate')} required />
          </div>
          <div className='flex flex-col w-1/2'>
            <label htmlFor="purchaseDate">Purchase Date</label>
            <input type="date" name='purchaseDate' className='h-10 border border-black/50 p-4 rounded' value={editableData.purchaseDate} onChange={(e) => handleInputChange(e, 'purchaseDate')} required />
          </div>
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor="startingPoint">Starting Point</label>
          <select name='startingPoint' className='w-full h-10 border' required>
            <option className='text-xl text-black' value={editableData.startingPoint}>{editableData.BoardingPointName}</option>
            {boardingpointsList?.map((ele, key) => (
              <option key={key} className='text-xl text-black' value={ele?.BoardingPointid}>{ele?.BoardingPointName}</option>
            ))}
          </select>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="noOfSeats">Number of Seats</label>
          <input type="number" name='noOfSeats' className='h-10 border border-black/50 p-4 rounded' value={editableData.noOfSeats} onChange={(e) => handleInputChange(e, 'noOfSeats')} />
        </div>
      </div>
      <div className='mt-8 flex justify-center'>
        <input type="submit" value="Update" className='bg-tblue w-[189px] h-[52px] rounded-[15px] text-btnwhite cursor-pointer' />
      </div>
    </div>
  ))}
</form>


            <ToastContainer/>
        </div>
    )
}

export default UpdateBus
