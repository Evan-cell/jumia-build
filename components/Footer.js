import React from 'react'
import Image from 'next/image'
function Footer() {
  return (
<div className='bg-gray-800  md:flex md:justify-between'>
  {/* logo */}
  <div className='p-3 flex items-center justify-center md:justify-start md:ml-22'>
    <img src="https://companieslogo.com/img/orig/JMIA_BIG.D-e6100485.png?t=1659936321" alt="" className='h-16 p-4' />
  </div>

  {/* middle */}
  <div className='flex flex-col text-white p-4 items-center mx-auto md:w-full md:flex md:flex-col md:items-center'>
    <h1 className='font-bold p-2'>NEW TO JUMIA?</h1>
    <h1 className='text-sm p-2'>Subscribe to our newsletter to get updated on our latest offers!</h1>
    <div className='p-2 mx-auto'>
      <input className='p-2 rounded-md' type="text" placeholder='your email' />
      <button className='text-white font-bold ml-3 py-2 px-4 border border-white rounded '>Male</button>
      <button className='text-white font-bold ml-3 py-2 px-4 border border-white rounded '>Female</button>
    </div>
  </div>

  {/* right */}
  <div className='flex items-center flex-col p-4 md:mr-40'>
    <div className='flex'>
      <img src="https://companieslogo.com/img/orig/JMIA-356fb835.png?t=1659936321" className='h-16' alt="" />
      <div className='flex flex-col md:flex-row text-white p-2'>
        <h1>DOWNLOAD JUMIA FREE APP</h1>
        <p>Get access to exclusive offers!</p>
      </div>
    </div>
    <div className='flex items-center'>
      <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" className='h-16' alt="" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/800px-Download_on_the_App_Store_Badge.svg.png" alt="" className='h-10' />
    </div>
  </div>
</div>

  )
}

export default Footer