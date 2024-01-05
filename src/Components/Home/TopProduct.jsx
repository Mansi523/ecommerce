import React from 'react'
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const TopProduct = () => {
  return (
    <div>
   <div className="container-fluid">
    <div className="row">
         <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        virtual
      >
        {[1,2,3,4,5,6].map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
    

   
        ))}
       <SwiperSlide>
         7
          </SwiperSlide>
      </Swiper>
    </div>
   </div>
    </div>
  )
}

export default TopProduct
