import React, { useEffect, useState } from 'react'
import Header from '../bars/Header'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'

function StudentList() {
    const [studentList,setStudentList]=useState()
    const [deleteItem,setDeleteItem]=useState(false);
    const navigate=useNavigate();

    const studentData=async()=>{
        try {
            const { data, status } = await axios.get(
                `http://localhost:3000/web/api/student`);
                setStudentList(data)
                console.log(studentList)
        } catch (error) {
            console.log('error ', error)
        }
    }

    useEffect(()=>{
        studentData();
        return () => {
            // Your cleanup logic here
            console.log('Component will unmount. Cleanup logic goes here.');
          };
    },[])
  return (
    <div className=' h-screen md:w-[75vw] lg:w-[85vw] pt-20 overflow-y-scroll'>
    <div className='w-[98%] bg-blue-300  mx-auto text-center '>Students</div>
    <div className='w-full flex justify-between'>
                <div className=' ml-4 bg-slate-200 px-6 py-2 my-2 rounded-md text-xs'><h1>total buses: <span className='text-[#8FC100] font-bold text-xl '>30</span></h1></div>
                <div>

                <button className=' mr-5 bg-green-400 px-6 py-2 my-2 rounded-md' onClick={()=>{navigate('/addStudents')}}><FontAwesomeIcon icon={faPlus} /> Add</button>
               
                <button className=' mr-5 bg-red-100 px-6 py-2 my-2 rounded-md' onClick={()=>{setDeleteItem(!deleteItem)}}><FontAwesomeIcon icon={faTrash} style={{color: "#d02525",}} /> Delete</button>
                </div>
                
                </div>
   
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg overflow-y-scroll text-center'>
    <h1 className={`${deleteItem ? '' :'hidden' } uppercase font-bold text-red-500`}>select item to delete</h1>
        <table className='w-[98%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto mt-3 '>
            <thead className='text-xs text-gray-700 uppercase bg-primary dark:text-gray-400 '><tr className=''><th className='px-6 py-3'>name</th><th className='px-6 py-3'>Usn</th><th className='px-6 py-3'>mobile</th><th className='px-6 py-3'>Busno</th></tr></thead>
            <tbody>
                {studentList?(studentList.map(item=>(
                     
                <tr className='odd:bg-white even:bg-gray-50  hover:bg-gray-200' onClick={()=>{navigate('/manageStudent')}}><th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src={item.userImage} alt="Jese image" />
                    <div className="ps-3">
                        <div className="text-base font-semibold text-black">{item.name}</div>
                        <div className
                            ="font-normal text-gray-500">{item.email}</div>
                    </div>
                </th><td className='px-6 py-4'>{item.userId}</td><td className='px-6 py-4'>{item.mobileno}</td><td className='px-6 py-4'>{item.busNo}</td><td><input type="checkbox" value="" className= { 
                    `${deleteItem ? '' : 'hidden'}  
                    w-5 h-5 text-red-600 bg-red-600 border-red-600 rounded focus:ring-red-500 focus:ring-2` 
                } /></td></tr>

                ))):(
                    <tr>
                    <td>No data found</td>
                  </tr>
                )
              }
                

            </tbody>
        </table>
    </div>
</div>
  )
}

export default StudentList
