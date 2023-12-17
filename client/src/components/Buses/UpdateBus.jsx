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
            <form className='h-[85vh] flex items-center justify-center gap-3' onSubmit={handleUpdateBus}>
            {busDetails.map((item, key) => (

                    <div  key={key} className='w-[45%] h-[80vh] bg-white'>
                        <div className=''>
                            <div className='w-[20rem] bg-white h-[16rem] mt-3 mx-auto flex flex-col justify-center items-center'>
                                {selectedImage ? (
                                    <div className='w-full h-full overflow-hidden '>
                                        <img src={selectedImage} alt="" className='object-fill' />
                                    </div>
                                ) : (
                                    <div className='w-full h-full overflow-hidden '>
                                        <img src={`/images/${item.busImage}`} alt="" className='object-fill' />
                                    </div>
                                )


                                }
                                <label htmlFor="busImage" className='font-bold border border-black'>select bus image</label>
                                <input type="file" name='busImage' id="busImage" className='hidden' onChange={handleImageChange} />
                            </div>
                        </div>
                        <div className=' p-10'>
                            <div className='w-full flex items-center justify-between gap-3'>
                                {busDetails ? (<h1></h1>) : (<h1>no data</h1>)}
                                <div className='flex flex-col'>

                                    <label htmlFor="busNo">Busnumber</label>
                                    <input type="text" name='busNo' className=' h-10 border border-black/50 p-4 rounded' value={editableData.busNo} onChange={(e) => handleInputChange(e, 'busNo')} required />
                                </div>
                                <div className='flex flex-col'>

                                    <label htmlFor="routeNo">routeNo</label>
                                    <input type="number" name='routeNo' className=' h-10 border border-black/50 p-4 rounded'  value={editableData.routeNo} onChange={(e) => handleInputChange(e, 'routeNo')}  required />
                                </div>
                            </div>
                            <div className='w-full flex items-center justify-between gap-3'>

                                <div className='flex flex-col'>

                                    <label htmlFor="regDate">regDate</label>
                                    <input type="date" name='regDate' className=' h-10 border border-black/50 p-4 rounded' value={editableData.regDate} onChange={(e) => handleInputChange(e, 'regDate')} required />
                                </div>
                                <div className='flex flex-col'>

                                    <label htmlFor="purchaseDate">purchaseDate</label>
                                    <input type="date" name='purchaseDate' className=' h-10 border border-black/50 p-4 rounded' value={editableData.purchaseDate} onChange={(e) => handleInputChange(e, 'purchaseDate')} required />
                                </div>
                            </div>
                            <div className='w-full flex items-center justify-between gap-3'>

                                <div className='flex flex-col'>

                                    <label htmlFor="startingPoint">startingPoint</label>
                                    <select name='startingPoint' className='w-[100%] h-10 border' required>
                                    <option className='text-xl text-black' value={editableData.startingPoint}> {editableData.BoardingPointName}</option>
                                        {boardingpointsList?.map((ele,key) => {
                                            return (
                                                < >
                                                    <option key={key} className='text-xl text-black' value={ele?.BoardingPointid}> {ele?.BoardingPointName}</option>
                                                </>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className='w-full flex items-center justify-between gap-3'>

                                <div className='flex flex-col'>

                                    <label htmlFor="noOfSeats">noOfSeats</label>
                                    <input type="number" name='noOfSeats' className=' h-10 border border-black/50 p-4 rounded' value={editableData.noOfSeats} onChange={(e) => handleInputChange(e, 'noOfSeats')} />
                                </div>
                            </div>
                            <div className='w-full flex justify-center'>
                                <input type="submit" value="Update" className='bg-tblue  w-[189px] h-[52px] rounded-[15px] text-btnwhite cursor-pointer my-2' />
                            </div>
                        </div>
                    </div>
            ))}
            </form>
            <ToastContainer/>
        </div>
    )
}

export default UpdateBus
