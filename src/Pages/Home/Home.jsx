import React from 'react'
// import videoBg from '../../Assets/video.mp4';
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
import Fotter from '../../Components/Fotter/Fotter';
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
const Home = () => {
  const {video,handleSearch,toggleSearch} = useContext(ProductContext);
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
     <Fotter/>
     {toggleSearch &&
    <div className={style.scontainer}>
      <div className={style.scnttop}>
        <div className={style.sbar}>
          <input type="text" placeholder='Search for ID,category and more'/>
          <button><IoIosSearch fontSize={20}/></button>
        </div>
        <span className={style.scancel}><RxCross1 fontSize={16} onClick={handleSearch}/></span>
      </div>
      <hr/>
      <div className={style.sctdown}>
        <div className={style.stopsearch}>
          <span>Top Search</span>
        </div>
      
        <div className={style.stopsearchdown}>
        <span>Fast delivery⚡️</span>  <span>The Sporty Side</span><span>The Valentines Edit</span><span>All Things Festival</span>
        </div>
      </div>
    </div>
   }
      </>
  )
}

export default Home