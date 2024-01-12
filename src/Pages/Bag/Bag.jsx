import React, { useState } from "react";
import { GrCheckbox } from "react-icons/gr";
import { IoIosHeartEmpty } from "react-icons/io";
import Checkout from "../../Components/Checkout/Checkout";
import BasicModal from "../../Components/Product/BasicModal";
import { MdKeyboardArrowDown } from "react-icons/md";
import SimilarProduct from "../../Components/Product/SimilarProduct";
import { useNavigate } from "react-router-dom";
import "../../Style/Cart.css";
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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

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
                {[1, 2, 3, 4].map((x, i) => (
                  <div className="cartShow my-2" key={i}>
                    <div className="cartSelect">
                      <span>
                        <GrCheckbox fontSize={23} />
                      </span>
                    </div>
                    <div className="cartImage px-2 ">
                      <img
                        src="https://img101.urbanic.com/v1/goods-pic/314b993d3033447f9428dbca2cc94548UR_w1440_q90.webp"
                        alt=""
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
                            <p>Ruffle Cocktail Dress</p>
                            <p onClick={handleOpen}>
                              <b>M</b>
                              <MdKeyboardArrowDown
                                color="black"
                                fontSize={25}
                              />
                            </p>
                          </div>
                          <div className="">₹3,690</div>
                          <div className="cartInc ">
                            <div className="text-center noneInitially">
                              <span className="decCart">-</span>
                            </div>
                            <div className="text-center numberCart noneInitially">
                              <span>6</span>
                            </div>
                            <div className="text-center showAllDiv">
                              <span className="incCart">+</span>
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
        style={style}
      />
    </>
  );
};

export default Bag;