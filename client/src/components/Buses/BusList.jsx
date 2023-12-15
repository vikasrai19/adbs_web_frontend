import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// Importing toastify module
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BusList() {
    const [busList, setBusList] = useState()
    const [selectedItemIds, setSelectedItemIds] = useState([]);
    const [deleteItem, setDeleteItem] = useState(false)
    const navigate = useNavigate();

    const handleCheckboxChange = (itemId) => {
        if (deleteItem) {
            // Toggle the selected item ID
            setSelectedItemIds((prevSelectedIds) => {
                if (prevSelectedIds.includes(itemId)) {
                    return prevSelectedIds.filter((id) => id !== itemId);

                } else {
                    return [...prevSelectedIds, itemId];
                }
            });
        }
    };

    console.log(selectedItemIds)

    const handleDelete = async (e) => {
        e.preventDefault();
        try {

            const body = selectedItemIds;
            const { data, status } = await axios.post(
                `http://localhost:3000/web/api/deletebus`,
                {
                    ...body,
                    userId: localStorage.getItem('userId')
                }
            )
            toast.success("Deleted sucessfully!", {
                position: toast.POSITION.TOP_CENTER
            });
        } catch (error) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message);

        }
    }



    const busData = async () => {
        try {
            const { data, status } = await axios.get(
                `http://localhost:3000/web/api/colegebus`);

            setBusList(data);
        } catch (error) {
            console.log('error ', error)
        }

    }
  

    useEffect(() => {
      
        busData();
        // Call your function here
        // If you need to perform cleanup when the component unmounts, you can return a function from useEffect
        return () => {
            // Your cleanup logic here
            console.log('Component will unmount. Cleanup logic goes here.');
        };
    }, []);

    return (
        <div className='h-screen overflow-y-scroll relative'>
            <div className='w-[98%] bg-blue-300  mx-auto text-center mt-20'>Buses</div>
            <div className=' md:w-[75vw] lg:w-[85vw]'>
                <div className='w-full flex justify-between mt-10'>
                    <div className=' ml-4 bg-slate-200 px-6 py-2 my-2 rounded-md text-xs'><h1>total buses: <span className='text-[#8FC100] font-bold text-xl '>{(busList) ? (busList.length) : ("")}</span></h1></div>
                    <div>
                        <button className=' mr-5 bg-green-400 px-6 py-2 my-2 rounded-md' onClick={() => { navigate('/addBus') }}><FontAwesomeIcon icon={faPlus} /> Add</button>
                        {/* <button className=' mr-5 bg-blue-400 px-6 py-2 my-2 rounded-md' onClick={()=>{navigate('/addBus')}}><FontAwesomeIcon icon={faPlus} /> Update</button> */}
                        <button className=' mr-5 bg-red-100 px-6 py-2 my-2 rounded-md' onClick={() => { setDeleteItem(!deleteItem) }}><FontAwesomeIcon icon={faTrash} style={{ color: "#d02525", }} /> Delete</button>
                    </div>
                </div>
                <div className='w-full flex flex-col justify-center items-center'>
                    <h1 className={`${deleteItem ? '' : 'hidden'} uppercase font-bold text-red-500`}>select item to delete</h1>
                    <div className='grid grid-cols-3 gap-4 place-items-center place-content-center mt-5'>
                        {busList ? (busList.map((item, key) => (
                            <div>
                                <div key={key} className='w-[20vw] h-[20vw] bg-white flex flex-col justify-center items-center shadow-sm ' onClick={() => { navigate('/updateBus') }}>

                                    <div className='text-center'>
                                        <div className='mb-5 text-2xl font-semi-bold '>
                                            <h1>Bus No: <span className='text-black/70'>{item.busNo}</span></h1>
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <h1>Seats</h1>
                                        <h1>{item.noOfSeats}</h1>
                                    </div>

                                    <div>
                                        <img src={`/images/${item.busImage}`} alt="" className='h-32 w-full' />
                                    </div>
                                    <div className='text-center'>
                                        <p>From: <span>{item.startingPoint}</span></p>
                                        <p>to:<span>{item.endingPoint}</span></p>
                                    </div>
                                </div>
                                <div className={`${deleteItem ? '' : 'hidden'}
                                          flex items-center justify-center space-x-2 bg-white py-3 `}>
                                    <input

                                        type="checkbox"
                                        className='w-5 h-5  text-red-600 bg-red-600 border-red-600 rounded focus:ring-red-500 focus:ring-2'
                                        checked={selectedItemIds.includes(item.collegeBusId)}
                                        onChange={(e) => handleCheckboxChange(item.collegeBusId)}
                                    />
                                    <h1>Delete</h1>
                                </div>
                            </div>
                        ))) : (
                            <tr>
                                <td>No data found</td>
                            </tr>
                        )

                        }
                    </div>
                </div>


            </div>

            {(selectedItemIds.length > 0) ? (<div className='w-full h-28 bg-white shadow-xl sticky bottom-0  flex items-center justify-between px-24'>
                <div className='space-x-2'>
                    <span className='font-semibold'>
                        {(selectedItemIds) ? (selectedItemIds.length) : ('')}
                    </span>
                    <span>
                        item selected!
                    </span>
                </div>
                <div>
                    <button className='py-3 px-8 text-white bg-red-600 rounded-lg' onClick={handleDelete}>Delete</button>
                </div>
            </div>) : ('')}
            <ToastContainer/>
        </div>
    )
}

export default BusList
