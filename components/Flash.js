import React, { useState, useEffect } from 'react'
import {ChevronRightIcon,BoltIcon} from '@heroicons/react/24/outline'
function Flash() {
    const initialTimeInSeconds = 7 * 24 * 60 * 60; // 7 days in seconds
    const [time, setTime] = useState(initialTimeInSeconds);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
  
      // Cleanup the interval on component unmount
      return () => clearInterval(interval);
    }, []); // Empty dependency array ensures that the effect runs only once on component mount
  
    const formatTime = (timeInSeconds) => {
      const days = Math.floor(timeInSeconds / (3600 * 24));
      const hours = Math.floor((timeInSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((timeInSeconds % 3600) / 60);
      const seconds = timeInSeconds % 60;
  
      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };
  return (
    <div className='bg-white text-white mt-5'>
        <div className='flex items-center font-bold  justify-between p-4 bg-red-600 cursor-pointer'>
            <div className='flex items-center'>
                <BoltIcon className='h-5 text-orange-400'/>
                <h1>Flash Sales</h1>
            </div>
            <div>
                <h1>Time Left : {formatTime(time)}</h1>
            </div>
            <div className='flex items-center'>
            <h1 className=' font-semibold'>SEE ALL  </h1>
            <ChevronRightIcon className='h-5'/>
            </div>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-6    pl-3 pr-2'>
        <div className='p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300'>
            <img className='rounded-md' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/491824/1.jpg?7095" alt="" />
            <h1>Menengapi menengai cr..</h1>
            <h1 className='font-bold text-black'>ksh 265</h1>
            <h1 className='text-gray-600'>20 items left</h1>
        </div>
        <div className='p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300'>
            <img className='rounded-md' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/6124221/1.jpg?7630" alt="" />
            <h1>Sunlight 2 in 1</h1>
            <h1 className='font-bold text-black'>ksh 315</h1>
            <h1 className='text-gray-600'>8 items left</h1>
        </div>
        <div className='p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300'>
            <img className='rounded-md' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/3194351/1.jpg?3662" alt="" />
            <h1>L`OREAL Glycolic br..</h1>
            <h1 className='font-bold text-black'>ksh 723</h1>
            <h1 className='text-gray-600'>176 items left</h1>
        </div>
        <div className='p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300'>
            <img className='rounded-md' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/5578201/1.jpg?4138" alt="" />
            <h1>Qwen 64gb usb flash dr..</h1>
            <h1 className='font-bold text-black'>ksh 629</h1>
            <h1 className='text-gray-600'>292 items left</h1>
        </div>
        <div className='p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300'>
            <img className='rounded-md' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/645781/1.jpg?9743" alt="" />
            <h1>Garnier skin active hydr..</h1>
            <h1 className='font-bold text-black'>ksh 350</h1>
            <h1 className='text-gray-600'>363 items left</h1>
        </div>
        <div className='p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300 '>
            <img className='rounded-md' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/42/050033/1.jpg?2726" alt="" />
            <h1>Gamier Even & Matte Dar</h1>
            <h1 className='font-bold text-black'>ksh 849</h1>
            <h1 className='text-gray-600'>920 items left</h1>
        </div>
        </div>
    </div>
  )
}

export default Flash