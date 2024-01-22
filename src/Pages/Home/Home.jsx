import React from 'react'
import videoBg from '../../Assets/video.mp4';
import style from '../Home/Home.module.css';
import TopProduct from '../../Components/Home/TopProduct';
import HomeCategory from '../../Components/Home/HomeCategory';
import InFocusDress from '../../Components/Home/InFocusDress';
import HomeBanner from '../../Components/Home/HomeBanner';
import BestSelller from '../../Components/Home/BestSelller';
import EveryMood from '../../Components/Home/EveryMood';
import { useContext } from 'react';
import { ProductContext } from '../../Context/MyContext';
import FotterBanner from '../../Components/Fotter/FotterBanner';
const Home = () => {
  const {video} = useContext(ProductContext);
  return (
   <>
    <div className={style.videocls}>
     <video src={video.url} autoPlay loop muted/>
     <div className={style.content1}>
      <h1>August</h1>
      <p>Eligance is elimination.</p>
     </div>

      </div>
     <TopProduct/>
     <HomeCategory/>
     <InFocusDress/>
     <HomeBanner/>
     <BestSelller/>
     <EveryMood/>
     <FotterBanner/>
      </>
  )
}

export default Home