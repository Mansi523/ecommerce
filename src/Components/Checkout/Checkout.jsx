import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { PiKeyReturnBold } from "react-icons/pi";
const Checkout = () => {
  return (
    <div className="container-fluid  ">
      <div className="row checkout p-4">
        <div className="row CheckoutHeading">
          <h5>Price Details</h5>
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
                <span>Total Amount</span>
              </div>
              <div>
                <span>₹36,900</span>
              </div>
            </div>
          </div>
          <div className="row m-auto py-4">
            <button className="btn btn-dark">CHECKOUT(10)</button>
            <p className="pt-3">
              Do you have a discount coupon? Add in the next step.
            </p>
          </div>
          <hr />
          <div className="row">
            <p>
              <span className="mx-1">
                <LiaShippingFastSolid fontSize={20} />
              </span>
              Free Shipping for orders ₹990
            </p>
            <p>
              <span className="mx-1">
                <HiOutlineCreditCard fontSize={20} />
              </span>
              Secured Payment & Checkout
            </p>
            <p>
              <span className="mx-1">
                <PiKeyReturnBold fontSize={20} />
              </span>
              Easy Returns, Free Pick Up
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;