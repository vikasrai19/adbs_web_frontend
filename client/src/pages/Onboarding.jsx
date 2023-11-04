import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


function Onboarding() {
    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();
    const Sliderimges = [
        {
            image:
                '/illustrations/WELCOME.svg',
            text: "Welcome to Bus Watch",
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis dignissimos iste dolores deserunt voluptatibus autem a quod similique odit, vitae commodi omnis ab. Illum quo dolore, itaque eveniet nam eum!'
        },
        {
            image:
                '/illustrations/locate.svg'
            ,
            text: "Find your bus",
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis dignissimos iste dolores deserunt voluptatibus autem a quod similique odit, vitae commodi omnis ab. Illum quo dolore, itaque eveniet nam eum!'
        },
        {
            image:
                '/illustrations/payment.svg'
            ,
            text: "PAY BILL",
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis dignissimos iste dolores deserunt voluptatibus autem a quod similique odit, vitae commodi omnis ab. Illum quo dolore, itaque eveniet nam eum!'
        },

    ]
    const length = Sliderimges.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? 0 : current - 1)
    }
    if (!Array.isArray(Sliderimges) || Sliderimges.length <= 0) {
        return null;
    }
    const finish = () => {
        navigate('/splash')
    }


    return (
        <div className='primary w-screen h-screen flex flex-col justify-between py-5'>
            {/* <ImageSlider slides={Sliderimges} /> */}
            <div className='flex justify-center items-center h-full'>
                {Sliderimges.map((slide, index) => {
                    return (
                        <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                        >
                            {index === current && (
                                <div key={index} className='flex flex-col items-center justify-center mx-10'>
                                    <img src={slide.image} alt='illustration' className='w-40 md:w-60' />
                                    <h1 className='text-3xl text-black  text-center font-bold md:py-3'>{slide.text}</h1>
                                    <p className='break-words text-center md:w-2/4'>{slide.details}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            <div className='flex justify-between px-6 text-white font-bold'>

                <div onClick={prevSlide} className={`${current == 0 ? 'opacity-0' : 'cursor-pointer'}`}><span><FontAwesomeIcon icon={faChevronLeft} /> PREV</span></div>
                <div className='flex gap-2 md:gap-5'>
                    {Sliderimges.map((index, key) => {
                        console.log(current);
                        console.log(index);

                        return (
                            <div className='flex items-center justify-center'>
                                <div key={index} className={`${current == key ? 'bg-black md:w-4 md:h-4' : "bg-white"} w-2 h-2 md:w-3 md:h-3 rounded-full`}></div>
                            </div>
                        )
                    })}
                </div>
                {current==length-1?<div onClick={finish} className='cursor-pointer'><span>FINISH <FontAwesomeIcon icon={faChevronRight} /></span></div>:<div onClick={nextSlide} className='cursor-pointer'><span>NEXT <FontAwesomeIcon icon={faChevronRight} /></span></div>}
            </div>
        </div>
    )
}

export default Onboarding
