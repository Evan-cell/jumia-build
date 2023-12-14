import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Carousel2() {
  return (
    <div className=' mx-auto mt-5  max-w-[1500px] text-center '>
    
    <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
        >
            <div>
                <img loading='lazy' src="https://ke.jumia.is/cms/2023/W42/SIS/_SiS.jpg" alt="" />
            </div>
            <div>
            <img loading='lazy' src="https://ke.jumia.is/cms/2023/W42/SIS/PRK_SIS.jpg" alt="" />
            </div>
            <div>
            <img loading='lazy' src="https://ke.jumia.is/cms/2023/W38/CP/OkoaMwezi/SIS/Defacto_SIS.jpg" alt="" />
            </div>
            <div>
                <img loading='lazy' src="https://ke.jumia.is/cms/2023/W38/CP/OkoaMwezi/SIS/Ecko_SIS.jpg" alt="" />
            </div>
            <div>
                <img loading='lazy' src="https://ke.jumia.is/cms/2023/W38/CP/OkoaMwezi/SIS/Maybelline_SiS.jpg" alt="" />
            </div>

        </Carousel>
</div>
  )
}

export default Carousel2