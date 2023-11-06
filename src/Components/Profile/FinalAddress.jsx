import React from 'react'
import style from "./FinalAddress.module.css";
import {AiOutlineDelete,AiOutlineEdit} from "react-icons/ai";
import { useContext } from 'react';
import { UserContext } from '../../Context/MyContext';

const FinalAddress = () => {
  const {User} = useContext(UserContext);
  // Fullname:"",
  // MobileNo:"",
  // Email:"",
  // Address:"",
  // Locality:"",
  // Pincode:"",
  // City:"",
  // State:"",
  return (
    <>
    {User.address.map((address,i)=>(
 <div className={style.containerwhole} key={i}>
 <div className={style.containeraddress}>
    <div className={style.left}>
    <div className={style.address}>
    <span>{address.Address}</span>
    <span>{address.Locality}</span>
    <span>{address.City}</span>
    <span>{address.State}</span>
    <span>{address.Pincode}</span>
    </div>
    <div className={style.details}>
     <span>{address.Fullname}</span>
     <span>{address.MobileNo}</span>
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

    ))
   
}
     </>
    )
}

export default FinalAddress