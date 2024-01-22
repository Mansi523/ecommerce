import React from 'react'
import "../../Style/FotterBanner.css"
import fotterimg from "../../Assets/fotter.webp";
import userlogo from "../../Assets/userlogo.png";

const FotterBanner = () => {
  return (
    <div className="container row mt-5">
      <div className=" leftfotter col-6">
              <span>We are because</span><br/>
            <span>the planet is</span><br/>
            <span>"With conscious efforts and unwavering commitment to our core values, 
                we seek to create a lasting positive impact by using our resources wisely, following best practices that benefit society and the planet"</span>
      <h4>KNOW MORE</h4>
      </div>
      <div className="rightfotter col-6">
    <img src={fotterimg} alt="fotterbanner" />
      </div>
      <div className="row">
        <div className="col-12">
          <img src={userlogo} alt="userlogo" />
          <span>you are invited</span>
          <span>not a part of this?</span>
          <input
           type="text" 
           placeholder='Enter your e-mail'   

          />
        </div>
      </div>
    </div>
  )
}

export default FotterBanner
