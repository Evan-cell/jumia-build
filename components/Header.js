import Image from 'next/image'
import React from 'react'
import BathroomOutlinedIcon from '@mui/icons-material/BathroomOutlined';
import LiquorOutlinedIcon from '@mui/icons-material/LiquorOutlined';
import InvertColorsOutlinedIcon from '@mui/icons-material/InvertColorsOutlined';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {StarIcon,StopIcon,ChevronDownIcon,QuestionMarkCircleIcon} from '@heroicons/react/24/outline'
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
function Header() {
  return (
    <div>
        
        <Image
        src='https://ke.jumia.is/cms/2023/STB/KE_FreeDelivery_1122_STB.gif'
        objectFit='contain'
        width={1800}
        height={40}
        alt=''
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

        </div>
                {/* navbar */}
            <div className='bg-white p-3 flex items-center space-x-2  md:space-x-32 '>
              {/* logo */}
              <div>
                <img src="https://1000logos.net/wp-content/uploads/2022/02/Jumia-Logo.png" alt="" className='h-16 md:ml-32' />
              </div>
              {/* searchbar */}
              <div className='sm:flex items-center h-10 rounded-md  cursor-pointer pr-10 '>
                <input 
                        type="text"
                        className="border w-[100px]  border-gray-400 p-2 md:h-full md:w-[600px] md:flex-grow rounded-md flex-shrink focus:outline-none px-4
                        "
                        placeholder="search products,brands and categories"
                />
                <button className='bg-orange-400 text-white p-2 ml-2 rounded-md font-medium'>SEARCH</button>
              </div>
              {/* right items */}
              <div className='flex space-x-2'>
                {/* phones */}
                <div className=' flex space-x-2 hidden-1'>
                <PersonAddAlt1OutlinedIcon className='h-6 md:hidden lg:hidden xl:hidden 2xl:hidden hover:text-orange-500'/>
                <QuestionMarkCircleIcon className='h-6 md:hidden lg:hidden xl:hidden 2xl:hidden hover:text-orange-500'/>
                <ShoppingCartOutlinedIcon className='h-6 md:hidden lg:hidden xl:hidden 2xl:hidden hover:text-orange-500'/>
                {/* hidden */}
                </div>
     
                <div className='hidden hover:text-orange-500 md:flex items-center space-x-2 cursor-pointer'>
                  <PersonAddAlt1OutlinedIcon className='h-6'/>
                  <h1 className='font-medium'>Hi, Evan</h1>
                  <ChevronDownIcon className='h-6'/>
                </div>
                <div className='hidden hover:text-orange-500 md:flex items-center space-x-2 cursor-pointer'>
                  <QuestionMarkCircleIcon className='h-6'/>
                  <h1 className='font-medium'>Help</h1>
                  <ChevronDownIcon className='h-6'/>
                </div>
                <div className='hidden hover:text-orange-500 md:flex items-center space-x-2 cursor-pointer'>
                  <ShoppingCartOutlinedIcon className='h-6'/>
                  <h1 className='font-medium'>Cart</h1>
                  
                </div>
              </div>
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