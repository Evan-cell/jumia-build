import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carouselx() {
  return (
    <div className='relative mx-auto  max-w-[800px] text-center'>
    
    <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}
    >
        <div>
            <img loading='lazy' className='' src="https://ke.jumia.is/cms/2023/BrandDays/Defacto/W50/_S1.png" alt="" />
        </div>
        <div>
        <img loading='lazy' src="https://ke.jumia.is/cms/2023/BrandDays/Defacto/W50/GIF_S_.gif" alt="" />
        </div>
        <div>
        <img loading='lazy' src="https://ke.jumia.is/cms/2023/W48/CP/sliders/KE_Jumia_Krisi_Sale_1123_Bundle_Up_S-.gif" alt="" />
        </div>
        <div>
            <img loading='lazy' src="https://ke.jumia.is/cms/2023/W48/CP/sliders/KE_Jumia_Krisi_Sale_1123_Bundle_Up_S.gif" alt="" />
        </div>
        <div>
            <img loading='lazy' src="https://ke.jumia.is/cms/2023/W48/CP/sliders/GIF_S_Phones.gif" alt="" />
        </div>
        <div>
            <img loading='lazy' src="https://ke.jumia.is/cms/2023/W48/CP/sliders/KE_Jumia_Krisi_Sale_Home_1123_S.gif" alt="" />
        </div>
        <div>
            <img loading='lazy' src="https://ke.jumia.is/cms/2023/W49/EcoBank/_S.jpg" alt="" />
        </div>
        <div>
            <img loading='lazy' src="https://ke.jumia.is/cms/2023/W49/Food/_SRSV.jpg" alt="" />
        </div>

    </Carousel>
</div>
  )
}

export default Carouselx