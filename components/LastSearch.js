import React from 'react'
import {ChevronRightIcon} from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
function LastSearch() {
    const router = useRouter()
  return (
    <div className='bg-white mt-5'>
        <div className='flex p-2'>
            <div className=''>
            <h1> <span className='font-bold'>Last Searched | </span>dish rack</h1>
            </div>
            
            <div className=' text-orange-600 cursor-pointer flex items-center ml-auto'>
            <h1 onClick={()=>router.push('https://www.jumia.co.ke/catalog/?q=dish+rack')} className=' font-semibold'>SEE ALL  </h1>
            <ChevronRightIcon className='h-5'/>
            </div>
            
        </div>
        <div className='grid grid-cols-3 md:grid-cols-6    pl-3 pr-2'>
        <div className='p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300'>
            <img className='rounded-md' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/1701361/1.jpg?6546" alt="" />
            <h1>Rashnik 22"3 layer S.S</h1>
            <h1 className='font-bold'>ksh 1,880</h1>
            <h1 className='text-gray-300'>ksh 2,040</h1>
        </div>
        <div className='p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300'>
            <img className='rounded-md' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/35/202342/1.jpg?4905" alt="" />
            <h1>Rashnik 2 Tier Dish</h1>
            <h1 className='font-bold'>ksh 2,094</h1>
            <h1 className='text-gray-300'>ksh 3000</h1>
        </div>
        <div className='p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300'>
            <img className='rounded-md' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/3416101/1.jpg?0284" alt="" />
            <h1>Generic Heavy Duty 3..</h1>
            <h1 className='font-bold'>ksh 5,995</h1>
            <h1 className='text-gray-300'>ksh 6,040</h1>
        </div>
        <div className='p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300'>
            <img className='rounded-md' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/11/1701361/1.jpg?6571" alt="" />
            <h1>Rashnik 3l Wooden Dish..</h1>
            <h1 className='font-bold'>ksh 1,991</h1>
            <h1 className='text-gray-300'>ksh 2,140</h1>
        </div>
        <div className='p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300'>
            <img className='rounded-md' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/09/338506/1.jpg?2307" alt="" />
            <h1>Generic Silicon Collaps..</h1>
            <h1 className='font-bold'>ksh 887</h1>
            <h1 className='text-gray-300'>ksh 1200</h1>
        </div>
        <div className='p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300 '>
            <img className='rounded-md' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/9125121/1.jpg?7286" alt="" />
            <h1>Nunix 3Tier Stainless stee..</h1>
            <h1 className='font-bold'>ksh 3,043</h1>
            <h1 className='text-gray-300'>ksh 4,999</h1>
        </div>
        </div>

    </div>
  )
}

export default LastSearch