import LoginReg from "../../Components/Register/LoginReg";
import React from "react";
import style from '../Authentication/Autenticate.module.css';


const Autenticate = () => {
  return (
    <>
    <div className={style.heading}>
        <h1>My Account</h1>
    </div>
      <LoginReg />
    </>
  );
};

export default Autenticate;
