import React from 'react'
import {ShoppingBagIcon,DevicePhoneMobileIcon,TvIcon,ComputerDesktopIcon,BuildingStorefrontIcon,QuestionMarkCircleIcon,BanknotesIcon,InboxArrowDownIcon} from '@heroicons/react/24/outline'
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import MedicationLiquidOutlinedIcon from '@mui/icons-material/MedicationLiquidOutlined';
import FaxOutlinedIcon from '@mui/icons-material/FaxOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import Face2OutlinedIcon from '@mui/icons-material/Face2Outlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import BlurCircularOutlinedIcon from '@mui/icons-material/BlurCircularOutlined';
function BannerRight() {
  return ( 
    <div className=''>
    <div className=' p-5 mb-3  space-y-8 bg-white rounded  shadow-lg '>
    <div className='flex space-x-2 items-center '>
        <QuestionMarkCircleIcon className='h-10 text-orange-500'/>
        <h1 className='font-semibold'>Help Center</h1>
        
    </div>
    <div className='flex space-x-2 items-center '>
        <InboxArrowDownIcon className='h-10 text-orange-500'/>
        <h1 className='font-semibold'>Earn Return</h1>
        
    </div>
    <div className='flex space-x-2 items-center '>
        <BanknotesIcon className='h-10 text-orange-500'/>
        <h1 className='font-semibold'>Sell on Jumia</h1>
        
    </div>
</div>
<div className='   space-y-3 bg-white rounded-md  shadow-lg '>
<img className='rounded-md' src="https://ke.jumia.is/cms/2021/Personalization/PrimeCustomer/BF/KE_Cross_PrimeCustomer_Generic_1221_BF-under-5K.gif" alt="" />

</div>

</div>
  )
}

export default BannerRight