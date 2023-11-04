import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';



function Splash() {
  
  return (
    <div className='primary min-h-screen'>
      <div className='flex flex-col  h-[95vh] justify-center items-center md:flex-row-reverse md:px-32 lg:px-20'>
        <div className='mt-56 sm:mt-5 md:mt-0'>
          <img src="/images/busimg.png" alt='bus' className='' />
        </div>
        <div className='text-white text-center md:text-left'> 
          <h1 className='hidden md:block text-[2.8rem] md:text-4xl font-bold lg:text-7xl'>BUS WATCH</h1>
          <h2 className='text-[2rem] flex flex-col uppercase'><span className='text-[1.43rem] font-extrabold'>find your</span><span className='text-[2.8rem] font-extrabold md:text-4xl'>bus here!</span></h2>
          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br />Consequatur maiores distinctio.</h3>
          <button className='text-lg font-medium h-[3rem] w-[21rem]  md:w-[20.5rem] md:h-[46px] lg:w-[22.5rem] lg:h-[56px] mt-3 text-tblue bg-btnwhite rounded-[10px]'>Get started</button>
        </div>
        
      </div>
      <div className='h-[5vh] text-white text-sm flex justify-center gap-3 md:gap-6 items-center'>

        <span className=''>About </span>
        <span className=''>/</span>
        <span className=''>Contact us </span>
        <span className=''>/ </span>

        <div className='md:ml-10 flex gap-6'>
          <FontAwesomeIcon icon={faWhatsapp} className='item hover:text-blue-600 hover:scale-125' />
          <FontAwesomeIcon icon={faYoutube} className='item hover:text-blue-600 hover:scale-125' />
          <FontAwesomeIcon icon={faTwitter} className='item hover:text-blue-600 hover:scale-125' />
        </div>
      </div>
    </div>
  )
}

export default Splash
