import Image from 'next/image'
import React from 'react'
import BathroomOutlinedIcon from '@mui/icons-material/BathroomOutlined';
import LiquorOutlinedIcon from '@mui/icons-material/LiquorOutlined';
import InvertColorsOutlinedIcon from '@mui/icons-material/InvertColorsOutlined';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import {StarIcon,StopIcon} from '@heroicons/react/24/outline'
function Header() {
  return (
    <div>
        
        <Image
        src='https://ke.jumia.is/cms/2023/STB/KE_FreeDelivery_1122_STB.gif'
        objectFit='contain'
        width={1800}
        height={40}
        />
        {/* topbar */}
        <div className='flex items-center bg-gray-100 p-4'>
            <div className='flex font-medium space-x-2 md:ml-32'>
                <StarsOutlinedIcon className='text-orange-500 h-6 bg-transparent cursor-pointer outline-none'/
                >
                  <h1 className='text-orange-500 hover:underline cursor-pointer'>Sell on jumia</h1>
            </div>
            {/* middle */}
            <div className='mx-auto flex space-x-2 font-medium cursor-pointer'>
              <h1 className='text-orange-500'><BathroomOutlinedIcon className='text-orange-500 h-4 bg-transparent cursor-pointer '/
                >Food</h1>
              <h1 className='text-gray-400 hover:text-orange-300'><LiquorOutlinedIcon className='text-gray-400 hover:text-black h-4 bg-transparent cursor-pointer '/
                >Party </h1>
              <h1 className='text-gray-400 hover:text-blue-600'><InvertColorsOutlinedIcon className='hover:text-blue-600 h-4 bg-transparent cursor-pointer '/
                >Pay</h1>
              <h1 className='text-gray-400 hover:text-black'>Jumia                 <StarsOutlinedIcon className='hover:text-orange-500 h-4 bg-transparent cursor-pointer '/
                ></h1>
            </div>
            {/* navbar */}
        </div>
        <main className='main'>
          <h1>mainpage</h1>
          <h1>mainpage</h1>
          <h1>mainpage</h1>
          <h1>mainpage</h1>
          <h1>mainpage</h1>
          <h1>mainpage</h1>
          <var><var><var><h1>mainpage</h1></var></var></var>
        </main>
    </div>
  )
}

export default Header