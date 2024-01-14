import React, { useState } from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { PiKeyReturnBold } from "react-icons/pi";
import { Radio } from "antd";
const Checkout = () => {
    const [value, setValue] = useState(1);
    const onChange = (e) => {
      console.log("radio checked", e.target.value);
      setValue(e.target.value);
    };
  return (
    <div className="paymentCheckout">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7">
            <div className="row addressCheckoutTime"></div>
            <div className="deliveryDate row">
              <p>Standard Delivery</p>
              <p>Delivery by Thu, 25 Jan - Mon, 29 Jan</p>
            </div>
            <div className="row mt-4">
              {[1, 2, 3, 4].map((x, i) => (
                <div className="cartShow " key={i}>
                  <div className="cartImage px-2 checkoutImag">
                    <img
                      src="https://img101.urbanic.com/v1/goods-pic/314b993d3033447f9428dbca2cc94548UR_w1440_q90.webp"
                      alt=""
                      className="bg-dark"
                    />
                  </div>
                  <div className="hearIcon"></div>
                  <div className="CartSize">
                    <div className="row ">
                      <div className="cartPrice">
                        <div className="cartProductName">
                          <p>Ruffle Cocktail Dress</p>
                          <p>
                            <b>M</b>
                          </p>
                        </div>
                        <div className="">₹3,690</div>
                        <div className="cartInc ">
                          <div className="text-center numberCart noneInitially">
                            <span>6</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>cash on delivery</Radio>
                <Radio value={2}>online</Radio>
              </Radio.Group>
            </div>
          </div>
          <div className="col-md-5 ">
            <div className="px-3">
              <div className="row CheckoutHeading">
                <h5>Price Details 3(items)</h5>
                <div className="row">
                  <div className=" d-flex justify-content-between align-items-center">
                    <div>
                      <span>Total MRP</span>
                    </div>
                    <div>
                      <span>₹36,900</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className=" d-flex justify-content-between align-items-center">
                    <div>
                      <span>Discount on MRP:</span>
                    </div>
                    <div>
                      <span>-₹36,90</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className=" d-flex justify-content-between align-items-center">
                    <div>
                      <span>Shipping charges: ₹0</span>
                    </div>
                    <div>
                      <span>Free</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className=" d-flex justify-content-between align-items-center">
                    <div>
                      <span>Total Amount:</span>
                    </div>
                    <div>
                      <span>₹75,276</span>
                    </div>
                  </div>
                </div>
                <div className="row m-auto py-4">
                  <button className="btn btn-dark">CHECKOUT(10)</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;