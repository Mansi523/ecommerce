import React from 'react'
import style from "./InitialAdress.module.css";
import map from "../../Assets/map.png";
import { useState } from 'react';
import {TfiClose} from "react-icons/tfi";
import { UserContext } from '../../Context/MyContext';
import { useContext } from 'react';
import FinalAddress from './FinalAddress';

const InitialAdress = () => {

const{Address,setAddress,handleSaveAddress,Modal,setModal,User} = useContext(UserContext);
console.log("data to be displayed",User.address);

const toggleModal = () =>{
    setModal(!Modal)
}
    return (
    
    <>
     <FinalAddress/>
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
       <>
      <div className={style.modal}>
      <div className={style.overlay} onClick={toggleModal}></div>
      <div className={style.modalContent}>
          <h2 className={style.heading}>Add new Address</h2>
           <div className={style.contact}>
           <span className={style.contactspan}>Contact</span>
           <div className={style.contactinfo}>
            <form className={style.formdata}>
              <div>
              <input
  placeholder=" "
  type="text"
  id="firstname"
  name="firstname"
  autoComplete="off"
  onChange={(e) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      Fullname: e.target.value,
    }));
  }}
/>
            <label for="firstname">*Full Name</label>
            </div>
            </form>
            <div className={style.num}><span>+91</span></div>
            <form className={style.formdata}>
              <div className="div">
              <input
  placeholder=" "
  type="text"
  id="firstname"
  name="firstname"
  autoComplete="off"
  onChange={(e) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      MobileNo: e.target.value,
    }));
  }}
/>
            <label for="firstname">*Mobile Number</label>
            </div>
            </form>
            <form className={style.formdata}>
              <div className="div">
              <input
  placeholder=" "
  type="text"
  id="firstname"
  name="firstname"
  autoComplete="off"
  onChange={(e) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      Email: e.target.value,
    }));
  }}
/>
            <label for="firstname">*Email</label>
            </div>
            </form>
            </div>
           
          
            <span className={style.addresspan}>Address</span>
            <div className={style.addressinfo1}>
            <form className={style.formdata}>
              <div className="div">
              <input
  placeholder=" "
  type="text"
  id="firstname"
  name="firstname"
  autoComplete="off"
  onChange={(e) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      Address: e.target.value,
    }));
  }}
/>
            <label for="firstname">*Address(House No,Building,Street)</label>
            </div>
            </form>
            <form className={style.formdata}>
              <div className="div">
              <input
  placeholder=" "
  type="text"
  id="firstname"
  name="firstname"
  autoComplete="off"
  onChange={(e) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      Locality: e.target.value,
    }));
  }}
/>
            <label for="firstname">*Locality</label>
            </div>
            </form>
            </div>
            <div className={style.addressinfo2}>
            <form className={style.formdata}>
              <div className="div">
              <input
  placeholder=" "
  type="text"
  id="firstname"
  name="firstname"
  autoComplete="off"
  onChange={(e) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      Pincode: e.target.value,
    }));
  }}
/>
            <label for="firstname">*Pincode</label>
            </div>
            </form>
            <form className={style.formdata}>
              <div className="div">
              <input
  placeholder=" "
  type="text"
  id="firstname"
  name="firstname"
  autoComplete="off"
  onChange={(e) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      City:e.target.value,
    }));
  }}
/>
            <label for="firstname">*City</label>
            </div>
            </form>
            <form className={style.formdata}>
              <div className="div">
              <input
  placeholder=" "
  type="text"
  id="firstname"
  name="firstname"
  autoComplete="off"
  onChange={(e) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      State: e.target.value,
    }));
  }}
/>
            <label for="firstname">*State</label>
            </div>
            </form>
            </div>
          
           </div>
          <button className={style.btnsave} onClick={handleSaveAddress}>Save</button>
            

          <div className={style.closeModal} onClick={toggleModal}>
          <TfiClose/>
          </div>
      </div>
    </div>
    </>
}



     </section>
    </>
  )
}

export default InitialAdress;