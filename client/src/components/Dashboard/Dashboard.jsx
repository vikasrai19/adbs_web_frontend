import React, { useEffect, useState } from 'react'
import Header from '../bars/Header'
import axios from 'axios'

function Dashboard() {
  const [date, setDate] = useState(new Date());
  const[busCount,setBuscount]=useState();
  const[driverCount,setDrivercount]=useState();
  const[studentCount,setStudentCount]=useState();
  const[pointsCount,setPointsCount]=useState();
  const[dashboardBusDetails,setDashboardBusDetails]=useState([]);
  useState(new Date());

const busData=async (e)=>{
  try {
    const { data, status } = await axios.get(
      `http://localhost:3000/web/api/busescount`);

      setBuscount(data[0].buses)
    console.log(busCount)
    
  } catch (error) {
    console.log('error ', error)
  }
}
const driverData=async (e)=>{
  try {
    const { data, status } = await axios.get(
      `http://localhost:3000/web/api/drivercount`);

      setDrivercount(data[0].drivers)
    console.log(driverCount)
    
  } catch (error) {
    console.log('error ', error)
  }
}
const studentData=async (e)=>{
  try {
    const { data, status } = await axios.get(
      `http://localhost:3000/web/api/studentscount`);

      setStudentCount(data[0].students)
    console.log(studentCount)
    
  } catch (error) {
    console.log('error ', error)
  }
}
const pointsData=async (e)=>{
  try {
    const { data, status } = await axios.get(
      `http://localhost:3000/web/api/boardingpointcount`);

      setPointsCount(data[0].points)
    console.log(pointsCount)
    
  } catch (error) {
    console.log('error ', error)
  }
}


const displayData=async ()=>{
  
    try {

        const { data, status } = await axios.get(
            `http://localhost:3000/web/api/dashboardBusData`);

        setDashboardBusDetails(data)
        console.log(boardingpointsList)
    } catch (error) {
        console.log('error ', error)
    }
  }

useEffect(()=>{
  displayData()
  busData();
  driverData();
  studentData();
  pointsData()
},[])

  return (
    <div className='bg-secondary md:w-[75vw] lg:w-[85vw] mt-20'>
    <div className='w-full' id='homeground'>
        {/* <div className='w-[90vw] md:w-[40vw] h-[8rem] bg-white rounded-xl mx-auto flex flex-col justify-center p-4'>
          <div className='flex  justify-center items-start gap-3' id='notifications' >
            <img src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg" alt="icon" className='w-8 rounded-full my-2' />
            <div>
              <h1 className='font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h1>
              <h2 className='break-words text-xs md:text-sm text-black/40'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus neque nam similique provident beatae praesentium ducimus vel earum aut omnis,.........</h2>
            </div>
          </div>
        </div> */}
         <div>
         <div className='w-full flex justify-end p-4'> <h1 className='text-lg font-bold'>{date. toDateString()}</h1> </div>
         </div>
        <div className='flex'>
          <div className='w-[90vw] md:w-[15vw] h-[8rem] bg-white rounded-xl mx-auto flex flex-col justify-center p-4 text-center'>
            <h1 className='font-esmibold '>Total Buses</h1>
            {busCount?(<span className='font-bold text-3xl'>{busCount}</span>):(<span className='font-bold text-3xl'>--</span>)}
          </div>
          <div className='w-[90vw] md:w-[15vw] h-[8rem] bg-white rounded-xl mx-auto flex flex-col justify-center p-4 text-center'>
            <h1 className='font-esmibold '>Total Drivers</h1>
            {driverCount?(<span className='font-bold text-3xl'>{driverCount}</span>):(<span className='font-bold text-3xl'>--</span>)}
          </div>
          <div className='w-[90vw] md:w-[15vw] h-[8rem] bg-white rounded-xl mx-auto flex flex-col justify-center p-4 text-center'>
            <h1 className='font-esmibold '>Total Students</h1>
            {studentCount?(<span className='font-bold text-3xl'>{studentCount}</span>):(<span className='font-bold text-3xl'>--</span>)}
          </div>
          <div className='w-[90vw] md:w-[15vw] h-[8rem] bg-white rounded-xl mx-auto flex flex-col justify-center p-4 text-center'>
            <h1 className='font-esmibold '>Total Boarding points</h1>
            {pointsCount?(<span className='font-bold text-3xl'>{pointsCount}</span>):(<span className='font-bold text-3xl'>--</span>)}
          </div>
          
        </div>
        <div>
           
           <div>
           <div className='w-[90vw] md:w-[80vw] h-full bg-white rounded-xl mx-auto flex flex-col justify-center p-4 text-center m-5'>
           <table>
            <thead>
              <tr>
                <td>Bus no</td>
                <td>routeNo</td>
                <td>BoardingPointName</td>
                <td>boarding Time</td>
                <td>noOfSeats</td>
              </tr>
            </thead>
            <tbody>
              {dashboardBusDetails?dashboardBusDetails.map((item,key)=>(
                  <tr key={key}>
                     <td>{item.busNo}</td>
                     <td>{item.routeNo}</td>
                     <td>{item.BoardingPointName}</td>
                     <td>{item.boardingTime}</td>
                     <td>{item.noOfSeats}</td>
                  </tr>
              )

              ):(<tr>
                <td>no data found</td>
              </tr>)}
             
            </tbody>
           </table>
           
          </div>
           </div>
        </div>
      </div>
  
</div>
  )
}

export default Dashboard
