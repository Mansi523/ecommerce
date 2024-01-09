import React from 'react'
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from "../Home/HomeCategory.module.css";
import { useContext } from 'react';
import { ProductContext } from '../../Context/MyContext';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const HomeCategory = () => {
    const {category} = useContext(ProductContext);

  return (
    <div>
         <div className="container-fluid" id={style.categoryouter}>
    <div className="row">
    <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={2}
        centeredSlides={false}
        spaceBetween={0}
        // pagination={{
        //   type: 'fraction',
        // }}
        navigation={true}
        virtual
      >
        {category.categories?.map((c,index) => (
          <SwiperSlide id={style.categorySlider} key={c.id} virtualIndex={index}>
            {/* <div className={style.card}>
                <div className={style.producting}> */}
                    <img alt={c.category} src={c.url}/>
                    {/* </div>
                </div>             */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
   </div>
    </div>
  )
}

export default HomeCategory
