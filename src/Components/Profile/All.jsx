import React from 'react'
import style from "../Profile/All.module.css";

const All = () => {
  return (
    <div className={style.container}>
      <div className={style.allheading}>
     <span className={style.ordersts}>Order Status : </span><span className={style.dispatchsts}>Sent to Dispatch Center</span>
      </div>
      <div className={style.allsubheading}>
      <span>Order ID : </span><span className={style.orderiddata}>240123034840014001</span><span>Order date : </span><span>23 Jan, 2024 03:48:40</span>
      </div>
      <div className={style.innercard}>
      <div className={style.allleft}>
        
        <div className={style.allimg}>
        <img src="https://img101.urbanic.com/v1/goods-pic/7723ace1ec79484cb529389404818efdUR_w360_q85.webp" alt="image" />
        </div>
        <div className={style.allimgheading}>
        <span>Printed Bodycon Dress</span>
        </div>
        <div className={style.allimgsubheading}>
        <span>S</span>
        </div>

        </div>

        <div className={style.allright}>
        <div className={style.allitems}>
         <span>x1</span>
        </div>
        <div className={style.btns}>
        <button>Track your order</button>
        <button>View Details</button>
        </div>
      </div>
      

      </div>
    </div>
  )
}

export default All
