import React from 'react'
import {ChevronRightIcon} from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
function TopD() {
    const router = useRouter()
  return (
   
    <div className='bg-white mt-5'>
        <div className='flex text-xl bg-orange-400 p-4'>
            <div className=''>
            <h1> <span className='font-bold'>Top Deals | </span>Deals up to 40% off</h1>
            </div>
            
            <div className=' cursor-pointer flex items-center ml-auto'>
            <h1 onClick={()=>router.push('https://www.jumia.co.ke/mlp-top-deals/')} className=' font-semibold'>SEE ALL  </h1>
            <ChevronRightIcon className='h-5'/>
            </div>
            
        </div>
        <div className='grid grid-cols-3 md:grid-cols-6    pl-3 pr-2'>
        <div className='p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300'>
            <img className='rounded-md' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/4881951/1.jpg?4383" alt="" />
            <h1>Samsung Galaxy A14</h1>
            <h1 className='font-bold'>ksh 20,099</h1>
            <h1 className='text-gray-300'>ksh 26,999</h1>
        </div>
        <div className='p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300'>
            <img className='rounded-md' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/34/984339/1.jpg?2855" alt="" />
            <h1>Vitron HTC4388FC</h1>
            <h1 className='font-bold'>ksh 20,099</h1>
            <h1 className='text-gray-300'>ksh 23,999</h1>
        </div>
        <div className='p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300'>
            <img className='rounded-md' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/189399/1.jpg?5506" alt="" />
            <h1>Oppo A17K, 6.56</h1>
            <h1 className='font-bold'>ksh 13,589</h1>
            <h1 className='text-gray-300'>ksh 13,999</h1>
        </div>
        <div className='p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300'>
            <img className='rounded-md' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/799296/1.jpg?2017" alt="" />
            <h1>Skyworth 43e3a,43</h1>
            <h1 className='font-bold'>ksh 26,999</h1>
            <h1 className='text-gray-300'>ksh 44,999</h1>
        </div>
        <div className='p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300'>
            <img className='rounded-md' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/429502/1.jpg?4032" alt="" />
            <h1>VON VART-18DMY.</h1>
            <h1 className='font-bold'>ksh 26,899</h1>
            <h1 className='text-gray-300'>ksh 40,995</h1>
        </div>
        <div className='p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300 '>
            <img className='rounded-md' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/0203941/1.jpg?7790" alt="" />
            <h1>Freeyond F9,4GB + 64GB..</h1>
            <h1 className='font-bold'>ksh 12,616</h1>
            <h1 className='text-gray-300'>ksh 20,950</h1>
        </div>
        </div>
    </div>
  )
}

export default TopD