import React from 'react'

import {ShoppingBagIcon,DevicePhoneMobileIcon,TvIcon,ComputerDesktopIcon,BuildingStorefrontIcon} from '@heroicons/react/24/outline'
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import MedicationLiquidOutlinedIcon from '@mui/icons-material/MedicationLiquidOutlined';
import FaxOutlinedIcon from '@mui/icons-material/FaxOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import Face2OutlinedIcon from '@mui/icons-material/Face2Outlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import BlurCircularOutlinedIcon from '@mui/icons-material/BlurCircularOutlined';
import Carouselx from './Carouselx';
import Bannerleft from './Bannerleft';
import BannerRight from './BannerRight';

function Banner() {
  return (
    <div className='p-3 flex items-center'>
        {/* left div */}
        <diV className='hidden md:inline md:ml-20'>
        <Bannerleft />
        </diV>
        
        {/* middle carousel */}
       
            <Carouselx/>
        
        {/* right div */}
        <div className='hidden sm:hidden md:inline mr-20'>
          <BannerRight/>
        </div>
    </div>
  )
}

export default Banner