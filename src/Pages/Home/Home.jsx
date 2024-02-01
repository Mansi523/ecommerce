import React, { useEffect, useState } from 'react'
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
  const {video,handleSearch,toggleSearch,product,category} = useContext(ProductContext);
  const [searchData,setSearchData] = useState("");
  const [checkSearch,setCheckSearch] = useState(true);
  const [dataSearchToBeFetched,setSearchToBeFetched] = useState([]);

  console.log("Product",product);

    useEffect(()=>{
      if(searchData.length !== 0){
         setCheckSearch(false);
         return;
      }   
      setCheckSearch(true); 
     },[searchData])

  const handleSearchByName=(e)=>{

   setSearchData(e.target.value);
   const searchName = e.target.value;
   const data = product?.filter((p,i)=>(
      p?.name.toLowerCase().includes(searchName.toLowerCase()) || 
      p?.categoriesName?.category.toLowerCase().includes(searchName.toLowerCase())
    )) 
console.log("searched data",data);
setSearchToBeFetched(data);
  }
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
          <input type="text" placeholder='Search for ID,category and more' onChange={handleSearchByName}/>
          <button><IoIosSearch fontSize={20}/></button>
        </div>
        <span className={style.scancel}><RxCross1 fontSize={16} onClick={handleSearch}/></span>
      </div>
      <hr/>
    
      <div className={style.sctdownsearch}>
 {dataSearchToBeFetched?.slice(1,7).map((s,i)=>(
  <div className={style.sctdowncont}>
  <div className={style.sctboxleft}>
   <div className={style.sctimg}>
 <img height={100} src={s?.photo?.url} alt="image" />
   </div>
   </div>
   <div className={style.sctright}>
  <div className={style.scttext}>
   <span className={style.sctprname}>{s.name}</span>
<span className={style.sctprice}>₹{s.price}</span>
  </div>
  </div>

</div>
 ))}

<div className={style.sctv}>
<button>View more products</button>
</div>

      </div>
{
  checkSearch && 
   <div className={style.sctdown}>
  <div className={style.stopsearch}>
    <span>Top Search</span>
  </div>

  <div className={style.stopsearchdown}>
  <span>Fast delivery⚡️</span>  <span>The Sporty Side</span><span>The Valentines Edit</span><span>All Things Festival</span>
  </div>
</div>
}


    </div>
   }
      </>
  )
}

export default Home