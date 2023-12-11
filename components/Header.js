import Image from 'next/image'
import React from 'react'

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
        <div>
            <div>
                
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Header