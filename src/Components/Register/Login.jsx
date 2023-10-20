import React from 'react'
import style from './Login.module.css';
import {FcGoogle} from "react-icons/fc";
import { useContext } from 'react';
import { UserContext } from '../../Context/MyContext';
const Login = () => {
let {email,password,setemail,setpassword,handleSubmitLogin} = useContext(UserContext);


  return (
   <>
   <div className={style.form}>
   <div className={style.input}>
   <div className={style.emailHeader}>
        <span>*Log in using Email</span>
      </div>
    <input value={email} className={style.emailInput} type='text' placeholder='Enter Email' onChange={(e)=>setemail(e.target.value)}/>
   </div>
   <div className="otp">
   <div className={style.password}>
        <span>*Enter Password</span>
      </div>
    <input value={password} className={style.passwordInput} type='password' placeholder='Enter Password' onChange={(e)=>setpassword(e.target.value)}/>
   </div>
   <button className={style.btnlogin} onClick={handleSubmitLogin}>
            Login
          </button>
          <div className={style.fotterlogin}>
        <span className={style.fotterlogins}>or sign up/login with</span>
        <div className={style.fotterloginIcon}>
          <FcGoogle />
        </div>
        <span className={style.fotterloginp}>
          <span className={style.fotterlogins}>I agree to</span> T&C <span className={style.fotterlogins}> and </span> Privacy Policy <br/>
          Return&Refund | Shipping | Contact us
        </span>
      </div>
      </div>
   </>
  )
}

export default Login