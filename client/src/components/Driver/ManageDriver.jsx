import React from 'react'

function ManageDriver() {
    return (

        <div className=' h-screen flex items-center justify-evenly md:w-[75vw] lg:w-[85vw]'>
            <div className='w-[20vw] bg-white shadow-md h-[80%] flex flex-col items-center'>

                <div className='relative w-28 h-28 mt-14'>
                    <img src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg" alt="" className='w-28 h-28 object-cover rounded-full border-blue-500 border-4' />
                    <img src="https://i.pinimg.com/originals/cc/bb/82/ccbb827c12c3578f96637daef1888c22.jpg" alt="" className='w-8 rounded-full object-cover h-8 absolute right-0 bottom-0' />
                </div>
                <div className='text-center'>
                   <h1 className='font-semibold mt-2 uppercase'>sharan</h1>
                   <p>hklfhhfohs</p>
                </div>
                <div className='w-full [&>*:last-child]:border  [&>*:last-child]:border-b-black/50 mt-2'>
                    <div className='w-full border border-t-black/50 py-1 flex items-center justify-center'>Edit profile</div>
                    <div className='w-full border border-t-black/50 py-1 flex items-center justify-center'>notifications</div>
                </div>
            </div>
            <div className='w-[50vw] bg-white shadow-md h-[80%]'>
                <div className='w-full h-14 border border-b-1 flex justify-center items-center'>
                          edit profile
                </div>
                <div className='flex flex-col items-center w-full py-5'>
                    <div className='flex w-full' >
                        <div className='flex flex-col w-1/2 justify-center ml-4'>
                        <label htmlFor="firstname " className='text-black/60'>First name</label>
                        <input type="text" name="firstname" id="" className='w-[90%] h-10 border' />
                         </div> 
                        <div className='flex flex-col w-1/2'>
                        <label htmlFor="firstname" className='text-black/60'>Last name</label>
                        <input type="text" name="firstname" id="" className='w-[90%]  h-10 border '/>
                         </div> 
                    </div>
                    <div className='flex w-full' >
                        <div className='flex flex-col w-1/2 justify-center ml-4'>
                        <label htmlFor="firstname " className='text-black/60'>Email</label>
                        <input type="text" name="firstname" id="" className='w-[90%] h-10 border' />
                         </div> 
                        <div className='flex flex-col w-1/2'>
                        <label htmlFor="firstname" className='text-black/60'>Phone</label>
                        <input type="text" name="firstname" id="" className='w-[90%]  h-10 border '/>
                         </div> 
                    </div>
                    <button className='bg-purple-600 rounded-md px-5 py-2 my-5'>update</button>

                </div>
            </div>
        </div>
    )
}

export default ManageDriver
