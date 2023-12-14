import React from 'react'

function Toprated() {
  return (
    <div className='bg-white mt-5'>
        <div className='mx-auto font-semibold p-4 bg-orange-400 flex items-center justify-center'>
            <h1 className='text-center text-2xl'>Top Rated</h1>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-6    pl-3 pr-2'>
        <div className='p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300'>
            <img className='rounded-md' src="https://ke.jumia.is/cms/2023/JA23/Live/Day03/Freelinks/Appliances/Microwaves.png" alt="" />

        </div>
        <div className='p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300'>
            <img className='rounded-md' src="https://ke.jumia.is/cms/2023/JA23/Live/Day03/Freelinks/Appliances/Washers_Dryers.png" alt="" />

        </div>
        <div className='p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300'>
            <img className='rounded-md' src="https://ke.jumia.is/cms/2023/JA23/Live/Day03/Freelinks/Appliances/Fridges.png" alt="" />

        </div>
        <div className='p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300'>
            <img className='rounded-md' src="https://ke.jumia.is/cms/2023/JA23/Live/Day03/Freelinks/Appliances/Blenders.png" alt="" />

        </div>
        <div className='p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300'>
            <img className='rounded-md' src="https://ke.jumia.is/cms/2023/JA23/Live/Day03/Freelinks/Appliances/Dispensers.png" alt="" />

        </div>
        <div className='p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300 '>
            <img className='rounded-md' src="https://ke.jumia.is/cms/2023/JA23/Live/Day03/Freelinks/Appliances/Cooktops_Under_2K.png" alt="" />

        </div>
    </div>    
    </div>
  )
}

export default Toprated