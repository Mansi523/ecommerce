import React from "react";
import { FcGoogle } from "react-icons/fc";
import style from "../Register/SignUp.module.css";
import { useContext } from "react";
import { UserContext } from "../../Context/MyContext";
const SignUp = () => {
  let {name,email,password,setemail,setname,setpassword,handleSubmitSignup} = useContext(UserContext);
  return (
    <>
    <div className={style.form}>
    <div className={style.input}>
        <div className={style.emailHeader}>
          <span>*Enter your name</span>
        </div>
        <input required value={name} className={style.emailInput} type="text" placeholder="Enter Name" onChange={(e)=>setname(e.target.value)}/>
      </div>
      <div className={style.input}>
        <div className={style.emailHeader}>
          <span>*Sign up using Email</span>
        </div>
        <input required value={email} className={style.emailInput} type="email" placeholder="Enter Email"  onChange={(e)=>setemail(e.target.value)}/>
      </div>
      <div className="otp">
        <div className={style.password}>
          <span>*Enter Password</span>
        </div>
        <input required value={password} className={style.passwordInput} type="password" placeholder="Enter Password"  onChange={(e)=>setpassword(e.target.value)} />
      </div>
      
      <button className={style.btnSignup} onClick={handleSubmitSignup}>SIGNUP</button>

      <div className={style.fotterSignup}>
        <span className={style.fotterSignups}>or sign up/login with</span>
        <div className={style.fotterSignupIcon}>
          <FcGoogle />
        </div>
        <span className={style.fotterSignUpp}>
          <span className={style.fotterSignups}>I agree to</span> T&C <span className={style.fotterSignups}> and </span> Privacy Policy <br/>
          Return&Refund | Shipping | Contact us
        </span>
      </div>
      </div>
    </>
  );
};

export default SignUp;
