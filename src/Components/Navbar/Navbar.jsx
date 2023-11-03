import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {useContext} from 'react'
import { UserContext } from '../../Context/MyContext';
import style from '../Navbar/Navbar.module.css';
import {CiSearch} from 'react-icons/ci';

import {CiUser} from 'react-icons/ci';
import {PiBagLight} from 'react-icons/pi';
import {TfiHelpAlt} from 'react-icons/tfi';
import logo from '../../Assets/logo.png';


const Navbar = () => {
  let {currentuser} = useContext(UserContext);
  console.log("CURRENTUSER",currentuser);
  let navigate = useNavigate();
  return (
    <>
     <div className={style.nav}>
     <div className={style.navLeft}>
      <div className={style.logo}>
          <img src={logo} alt="logo" onClick={()=>navigate("/")}/>
        </div>
        <div className={style.menuLink}>
        <div className={style.menu}>NEW IN</div>
        <div className={style.menu}>CLOTHINGS</div>
        <div className={style.menu}>DRESSES</div>
        <div className={style.menu}>DENIM</div>
        <div className={style.menu}>SPORTS</div>
     </div>
     </div>
     <div className={style.navRight}>
     <div className={style.icons}><CiSearch fontSize={20}/></div>
    { !currentuser?<Link to='/authenticate'><div className={style.icons}><CiUser fontSize={20}/></div></Link>
     :<Link to='/userprofile'><div className={style.icons}><CiUser fontSize={20}/></div></Link>
    }
     <div className={style.icons}><PiBagLight fontSize={20}/></div>
     <div className={style.icons}><TfiHelpAlt fontSize={17}/></div>    
    </div>   
     </div>     
    </>
  )
}

export default Navbar


// echo "# ecommerce" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Mansi523/ecommerce.git
// git push -u origin main