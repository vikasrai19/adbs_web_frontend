import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function BusList() {
    const [busList,setBusList]=useState()
    const [deleteItem,setDeleteItem]=useState(false)
    const navigate = useNavigate();

    const busData= async ()=>{
        try {
            const { data, status } = await axios.get(
                `http://localhost:3000/web/api/colegebus`);
        
                setBusList(data)
              console.log(busList)
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
        <div className=' h-screen overflow-y-scroll'>
        <div className='w-[98%] bg-blue-300  mx-auto text-center mt-20'>Buses</div>
        <div className=' md:w-[75vw] lg:w-[85vw]'>
            
            <div className='w-full flex justify-between mt-10'>
                <div className=' ml-4 bg-slate-200 px-6 py-2 my-2 rounded-md text-xs'><h1>total buses: <span className='text-[#8FC100] font-bold text-xl '>30</span></h1></div>
                <div>

                <button className=' mr-5 bg-green-400 px-6 py-2 my-2 rounded-md' onClick={()=>{navigate('/addBus')}}><FontAwesomeIcon icon={faPlus} /> Add</button>
                {/* <button className=' mr-5 bg-blue-400 px-6 py-2 my-2 rounded-md' onClick={()=>{navigate('/addBus')}}><FontAwesomeIcon icon={faPlus} /> Update</button> */}
                <button className=' mr-5 bg-red-100 px-6 py-2 my-2 rounded-md' onClick={()=>{setDeleteItem(!deleteItem)}}><FontAwesomeIcon icon={faTrash} style={{color: "#d02525",}} /> Delete</button>
                </div>
                </div>
            <div className='w-full flex flex-col justify-center items-center'>
            <h1 className={`${deleteItem ? '' :'hidden' } uppercase font-bold text-red-500`}>select item to delete</h1>
                <div className='grid grid-cols-3 gap-4 place-items-center place-content-center mt-5'>
                   
                {busList?(busList.map(item=>(
                            <div className='w-[20vw] h-[20vw] bg-white flex flex-col justify-center items-center shadow-sm ' onClick={()=>{navigate('/updateBus')}}>
                                <div className='w-full flex justify-end'>
                                    <input className= { 
                    `${deleteItem ? '' : 'hidden'}  
                    w-5 h-5 text-red-600 bg-red-600 border-red-600 rounded focus:ring-red-500 focus:ring-2 ` 
                }  type="checkbox" name="" id="" />
                                   
                                </div>
                                <div className='text-center'>
                                    <div className='mb-5 text-2xl font-semi-bold '>
                                        <h1>Bus No: <span className='text-black/70'>{item.busNo}</span></h1>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <h1>students</h1>
                                    <h1>50</h1>
                                </div>

                                <div>
                                    <img src="/images/bus1.svg" alt="" className='h-32 w-full' />
                                </div>
                                <div className='text-center'>
                                    <p>Driver: <span>kiran kumar</span></p>
                                    <p>984618478</p>
                                </div>
                            </div>
                            
                            ))): (
                                <tr>
                      <td>No data found</td>
                    </tr>
                  )
                  
                }
                </div>
                    </div>
               

        </div>
        </div>
    )
}

export default BusList
