import React from 'react'
import style from './MyProfile.module.css';
const MyProfile = () => {
  return (
     <>
      <div className={style.namefield}>
        <span>*Name</span>
        <input type="text" required />
      </div>
       <div className={style.birthday}>
        <span>Birthday</span>
        <input type="text" />
       </div>
       <div className={style.gender}>
        <p>Gender</p><br/>
        <input className={style.inputgender} type="radio" name="gender" value=""/>Female
        <input className={style.inputgender} type="radio" name="gender"/>Male
        <input className={style.inputgender} type="radio" name="gender"/>Other
       </div>
       <div className={style.categoryPreferences}>
       <span>Category Preferences</span>
       <div className={style.categories}>
        <div className={style.partiularcat}>Dresses</div>
        <div className={style.partiularcat}>Denim</div>
        <div className={style.partiularcat}>T-shirts</div>
        <div className={style.partiularcat}>Tops</div>
        <div className={style.partiularcat}>Sports&Gym</div>
        </div>
         <button className={style.confirm}>Confirm</button>
       </div>
       <div className={style.verify}>

        <div className={style.phone}>
          <div className="phoneleft">
           <h3>Phone Number</h3>
           <span>After verifying your phone number, you can directly log in with it.</span>
          </div>
          <div className="phoneright">
           <h3>Add</h3>
          </div>
        </div>
        <hr/>
        <div className="email">
          <div className="emailleft">
            <h3>Email</h3>
            <span>btech15234.18@bitmesra.ac.in</span>
            </div>
          <div className="emailright">
            <h3>verify</h3>
            <h3>Change</h3>
          </div>
        </div>
        
       </div>
     </>
    )
}

export default MyProfile