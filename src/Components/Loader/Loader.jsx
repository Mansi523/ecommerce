import React from 'react'
import style from "../Loader/Loader.module.css";
const Loader = () => {
  return (
    <div className={style.loaderContainer}>
    <div className={style.Loader}></div>
    </div>
  )
}

export default Loader