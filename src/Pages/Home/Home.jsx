import React from 'react'
import videoBg from '../../Assets/video.mp4';
import style from '../Home/Home.module.css';
import TopProduct from '../../Components/Home/TopProduct';
import HomeCategory from '../../Components/Home/HomeCategory';
const Home = () => {
  return (
   <>
    <div className={style.videocls}>
     <video src={videoBg} autoPlay loop muted/>
     <div className={style.content1}>
      <h1>August</h1>
      <p>Eligance is elimination.</p>
     </div>

      </div>
     <TopProduct/>
     <HomeCategory/>
      </>
  )
}

export default Home