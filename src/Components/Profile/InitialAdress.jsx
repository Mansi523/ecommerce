import React from 'react'
import style from "./InitialAdress.module.css";
import map from "../../Assets/map.png";
import { useState } from 'react';
import {TfiClose} from "react-icons/tfi";
const InitialAdress = () => {
const [Modal,setModal] = useState(false);

const toggleModal = () =>{
    setModal(!Modal)
}
    return (
    <>
     <section className={style.Container}>
        <div className={style.emptyContainer}>
          <div className={style.emptyIcon}>
            <img src={map} alt="map" />
          </div>
          <div className={style.emptyText}>
           <span className={style.above}>Add your address </span>
           <br/>
           <span className={style.below}>and enjoy faster checkout</span>
          </div>
          <button className={style.btn} onClick={toggleModal}>Add New Address</button>
        </div>
{Modal && 
      <div className={style.modal}>
      <div className={style.overlay} onClick={toggleModal}></div>
      <div className={style.modalContent}>
          <h2 className={style.heading}>Add new Address</h2>
           <div className="contact">
           <h4>Contact</h4>
           
           </div>
          
            

          <div className={style.closeModal} onClick={toggleModal}>
          <TfiClose/>
          </div>
      </div>
    </div>

}



     </section>
    </>
  )
}

export default InitialAdress;