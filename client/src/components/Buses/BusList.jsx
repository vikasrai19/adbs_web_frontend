import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function BusList() {
    const navigate = useNavigate();
    return (
        <div className=' h-full md:w-[75vw] lg:w-[85vw] mt-20'>
            <div className='w-[98%] bg-blue-300  mx-auto text-center '>Buses</div>
            <div className='w-full flex justify-end'><button className=' mr-5 bg-slate-200 p-3 rounded-md '><FontAwesomeIcon icon={faPlus} /></button></div>
            <div className='w-full flex justify-center items-center'>
                <div className='w-full bg-[#e2e8f0] mx-4 h-screen rounded-xl border border-black'>
                    <div className='w-full h-11 bg-white rounded-t-xl flex justify-between px-9 pt-3 border-b-2 border-black'>
                        <p>NO:30</p>
                        <p>16/07/23</p>

                    </div>
                    {/* <div className='w-full flex items-center justify-between p-5 text-xl bg-white'>
                        <div>
                            <img src="/images/bus1.svg" alt="" className='h-40' />
                        </div>
                        <div className='text-center'>
                            <div className='mb-5 text-2xl font-semi-bold'>
                                <h1>Bus No: <span className='text-black/70'>KA21M2023</span></h1>
                                </div>
                             <div>
                                <p>Driver: <span>kiran kumar</span></p>
                                <p>984618478</p>
                            </div>
                        </div>
                        <div className='text-center'>
                            <h1>students</h1>
                            <h1>34</h1>
                        </div>

                    </div> */}
                    <div>
                        <div className='grid grid-cols-3 gap-4 place-items-center mt-5'>
                            <div className='w-[20vw] h-[20vw] bg-white flex flex-col justify-center items-center shadow-sm'>
                                <div className='text-center'>
                                    <div className='mb-5 text-2xl font-semi-bold '>
                                        <h1>Bus No: <span className='text-black/70'>KA21M2023</span></h1>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <h1>students</h1>
                                    <h1>34</h1>
                                </div>

                                <div>
                                    <img src="/images/bus1.svg" alt="" className='h-32 w-full' />
                                </div>
                                <div className='text-center'>
                                    <p>Driver: <span>kiran kumar</span></p>
                                    <p>984618478</p>
                                </div>
                            </div>
                            <div className='w-[20vw] h-[20vw] bg-white flex flex-col justify-center items-center shadow-sm'>
                                <div className='text-center'>
                                    <div className='mb-5 text-2xl font-semi-bold'>
                                        <h1>Bus No: <span className='text-black/70'>KA21M2023</span></h1>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <h1>students</h1>
                                    <h1>34</h1>
                                </div>

                                <div>
                                    <img src="/images/bus1.svg" alt="" className='h-32 w-full' />
                                </div>
                                <div className='text-center'>
                                    <p>Driver: <span>kiran kumar</span></p>
                                    <p>984618478</p>
                                </div>
                            </div>
                            <div className='w-[20vw] h-[20vw] bg-white flex flex-col justify-center items-center shadow-sm'>
                                <div className='text-center'>
                                    <div className='mb-5 text-2xl font-semi-bold'>
                                        <h1>Bus No: <span className='text-black/70'>KA21M2023</span></h1>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <h1>students</h1>
                                    <h1>34</h1>
                                </div>

                                <div>
                                    <img src="/images/bus1.svg" alt="" className='h-32 w-full' />
                                </div>
                                <div className='text-center'>
                                    <p>Driver: <span>kiran kumar</span></p>
                                    <p>984618478</p>
                                </div>
                            </div>
                            <div className='w-[20vw] h-[20vw] bg-white flex flex-col justify-center items-center shadow-sm'>
                                <div className='text-center'>
                                    <div className='mb-5 text-2xl font-semi-bold'>
                                        <h1>Bus No: <span className='text-black/70'>KA21M2023</span></h1>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <h1>students</h1>
                                    <h1>34</h1>
                                </div>

                                <div>
                                    <img src="/images/bus1.svg" alt="" className='h-32 w-full' />
                                </div>
                                <div className='text-center'>
                                    <p>Driver: <span>kiran kumar</span></p>
                                    <p>984618478</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusList
