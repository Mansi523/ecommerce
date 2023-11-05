import React from 'react'
import style from "./FinalAddress.module.css";
import {AiOutlineDelete,AiOutlineEdit} from "react-icons/ai";

const FinalAddress = () => {
  return (
    <div className={style.containerwhole}>
     <div className={style.containeraddress}>
        <div className={style.left}>
        <div className={style.address}>
        <span>Ashokh Nagar</span>
        <span>Upaipur</span>
        <span>Patna</span>
        <span>Bihar</span>
        <span>801105</span>
        </div>
        <div className={style.details}>
         <span>Mansi</span>
         <span>999999999</span>
        </div>
        </div>
        <div className={style.right}>
          <div className={style.radiobtn}>
         <input type="radio" /> Set as Default Address
         </div>
         
         <div className={style.icon}>
         <AiOutlineEdit fontSize={15}/>
         </div>
         <div className={style.icon}>
         <AiOutlineDelete fontSize={15}/>
         </div>

        </div>
     </div>
     </div>
    )
}

export default FinalAddress