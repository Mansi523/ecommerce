import React from 'react'
import User from '../../Components/Profile/User';
import NoOrder from '../../Components/Profile/NoOrder';
import Loader from '../../Components/Loader/Loader';
import Empty from '../../Components/Profile/Empty';
import InitialAdress from '../../Components/Profile/InitialAdress';
import MyProfile from '../../Components/Profile/MyProfile';
import PageCommonHeading from '../../Components/Profile/PageCommonHeading';
import Error from '../NotFound/Error';
import style from '../UserProfile/Profile.module.css';
import { useContext } from 'react';
import { UserContext } from '../../Context/MyContext';
import FinalAddress from '../../Components/Profile/FinalAddress';
import All from '../../Components/Profile/All';
const Profile = () => {
  const {heading} = useContext(UserContext);
  return (
   
    <>
         <div className={style.Up}>
          <div className={style.upLeft}>

          </div>
          <div className={style.upRight}>
          <PageCommonHeading/>
         
          </div>
          
        </div>
     <div className={style.userProfile}>
      <div className={style.left}>
          <User/>
      </div>
      <div className={style.right}>

        <div className={style.Down}>
          <div className={style.divinside}>
            {
            heading === "All" ? <All/>  : null
            }
              {
           
           heading === "My Profile" ? <MyProfile/> : null
           }
              {
           
           heading === "My Address" ? <InitialAdress/> : null
           }
           </div>
        </div>
      </div>
     </div>

    {/* <MyProfile/> */}
    
    
    {/* <NoOrder/> */}
    {/* <Empty/> */}
    {/* <Loader/> */}
    {/* <NoOrder/> */}
    </>
  )
}

export default Profile