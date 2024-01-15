import React, { useState,useEffect } from "react";
import { GrCheckbox } from "react-icons/gr";
import { IoIosHeartEmpty } from "react-icons/io";
import Checkout from "../../Components/Checkout/Checkout";
import BasicModal from "../../Components/Product/BasicModal";
import { MdKeyboardArrowDown } from "react-icons/md";
import SimilarProduct from "../../Components/Product/SimilarProduct";
import { useNavigate } from "react-router-dom";
import "../../Style/Cart.css";
import { useContext } from "react";
import { UserContext,ProductContext } from "../../Context/MyContext";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 300,
  borderRadius: "10px",
  bgcolor: "white",
  border: "none",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const Bag = () => {
  const [open, setOpen] = useState(false);
  const [cart,setCart] = useState([]);
  const [sizeUpdate,setSizeUpdate] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const {currentuser} = useContext(UserContext);
  const {size} = useContext(ProductContext);

  useEffect(()=>{
    if(currentuser){
      // its for login user
    }else{
      const cartdata = JSON.parse(window.localStorage.getItem("goodies"));
      setCart(cartdata);


    }
  },[])

  const priceIn = (p,i)=>{
  if(currentuser){
    // for login user
  }else{
     const cartdata = cart.map((c)=>{
      if(c.id === i){
        if(c.quantity <=0){
          return;
        }
        return {...c,quantity:p === "+" ? c.quantity+1 : c.quantity-1}
      }
      return c;
     })
     window.localStorage.setItem("goodies",JSON.stringify(cartdata));
     setCart(cartdata);
  }

  }

  const handleUpdateSize = (x)=>{
    setSizeUpdate(x);
    handleOpen();
  }

 const handleUdpateCartSize =()=>{
    if(currentuser){
      // for handle the login user
    }
    else{
      const cartdata = cart.map((c)=>{
        if(c.id === sizeUpdate.id){
          if(c.quantity <=0){
            return;
          }
          return {...c,size}
        }
        return c;
       })
       window.localStorage.setItem("goodies",JSON.stringify(cartdata));
       setCart(cartdata);
       handleClose();
    }
    }

  return (
    <>
      <div className="bag">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-7 ">
              <div className="row cartHeading p-3 mx-3">
                <h4>
                  Congratulations! Your order qualifies for our free shipping.
                </h4>
              </div>
              <div className="row cartIcon py-4 mx-3">
                <div className="col-6">
                  <div className="row">
                    <div
                      className="col fontFamilyCart"
                      onClick={() => navigate("/cart")}
                    >
                      <span>
                        <GrCheckbox fontSize={23} />
                      </span>
                      <span className="mx-3">My Bag (7)</span>
                    </div>

                    <div
                      className="col fontFamilyCart"
                      onClick={() => navigate("/wishlist")}
                    >
                      <span>
                        <IoIosHeartEmpty fontSize={25} />
                      </span>
                      <span className="mx-3">Wishlist</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                {cart.map((x, i) => (
                  <div className="cartShow my-2" key={i}>
                    <div className="cartSelect">
                      <span>
                        <GrCheckbox fontSize={23} />
                      </span>
                    </div>
                    <div className="cartImage px-2 ">
                      <img
                        src={x?.photo?.url}
                        alt={x?.name}
                        className="bg-dark"
                      />
                    </div>
                    <div className="hearIcon">
                      <IoIosHeartEmpty fontSize={25} />
                    </div>
                    <div className="CartSize">
                      <div className="row ">
                        <div className="cartPrice">
                          <div className="cartProductName">
                            <p>{x.name}</p>
                            <p onClick={()=>handleUpdateSize(x)}>
                              <b>{x.size}</b>
                              <MdKeyboardArrowDown
                                color="black"
                                fontSize={25}
                              />
                            </p>
                          </div>
                          <div className="">₹{x.price}</div>
                          <div className="cartInc ">
                            <div className="text-center noneInitially">
                              <span className="decCart" onClick={()=>priceIn("-",x.id)}>-</span>
                            </div>
                            <div className="text-center numberCart noneInitially">
                              <span>{x.quantity}</span>
                            </div>
                            <div className="text-center showAllDiv">
                              <span className="incCart" onClick={()=>priceIn("+",x.id)}>+</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-5">
              <Checkout />
            </div>
          </div>
          <div className="row">
            <SimilarProduct />
          </div>
        </div>
      </div>
      <BasicModal
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        handleOpen={handleClose}
        setSizeUpdate = {setSizeUpdate}
        sizeUpdate = {sizeUpdate}
        handleUdpateCartSize={handleUdpateCartSize}
        style={style}
      />
    </>
  );
};

export default Bag;