import React from 'react'
import {ShoppingBagIcon,DevicePhoneMobileIcon,TvIcon,ComputerDesktopIcon,BuildingStorefrontIcon} from '@heroicons/react/24/outline'
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import MedicationLiquidOutlinedIcon from '@mui/icons-material/MedicationLiquidOutlined';
import FaxOutlinedIcon from '@mui/icons-material/FaxOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import Face2OutlinedIcon from '@mui/icons-material/Face2Outlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import BlurCircularOutlinedIcon from '@mui/icons-material/BlurCircularOutlined';
function Bannerleft() {
  return (
    <div className=' p-5  space-y-3 bg-white rounded  shadow-lg cursor-pointer '>
    <div className='flex space-x-2 hover:text-orange-500 '>
        <ShoppingBagIcon className='h-6'/>
        <h1 className=''>Official Stores</h1>
    </div>
    <div className='flex space-x-2 hover:text-orange-500 '>
        <DevicePhoneMobileIcon className='h-6'/>
        <h1>OPhones & Tablets</h1>
    </div>
    <div className='flex space-x-2 hover:text-orange-500 '>
        <TvIcon className='h-6'/>
        <h1>Tv & Audio</h1>
    </div>
    <div className='flex space-x-2 hover:text-orange-500 '>
        <KitchenOutlinedIcon className='h-6'/>
        <h1>Appliances</h1>
    </div>
    <div className='flex space-x-2 hover:text-orange-500 '>
        <MedicationLiquidOutlinedIcon className='h-6'/>
        <h1>Health & Beauty</h1>
    </div>
    <div className='flex space-x-2 hover:text-orange-500 '>
        <FaxOutlinedIcon className='h-6'/>
        <h1>Home & Office</h1>
    </div>
    <div className='flex space-x-2 hover:text-orange-500 '>
        <CardGiftcardOutlinedIcon className='h-6'/>
        <h1>Fashion</h1>
    </div>
    <div className='flex space-x-2 hover:text-orange-500 '>
        <ComputerDesktopIcon className='h-6'/>
        <h1>Computing</h1>
    </div>
    <div className='flex space-x-2 hover:text-orange-500 '>
        <Face2OutlinedIcon className='h-6'/>
        <h1>Baby Products</h1>
    </div>
    <div className='flex space-x-2 hover:text-orange-500 '>
        <BuildingStorefrontIcon className='h-6'/>
        <h1>Supermarket</h1>
    </div>
    <div className='flex space-x-2 hover:text-orange-500 '>
        <FitnessCenterOutlinedIcon className='h-6'/>
        <h1>Sporting Goods</h1>
    </div>

</div>
  )
}

export default Bannerleft