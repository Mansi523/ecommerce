import React,{useContext} from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import HomeBanner from "../../Components/Home/HomeBanner.jsx";
import { ProductContext } from "../../Context/MyContext.js";
const Product = () => {
  const navigate = useNavigate();
   const {product} = useContext(ProductContext);
  return (
    <>
      <div className="product my-5">
        <div className="container-fluid">
          <div className="row">
            <div className="filterRow d-flex justify-content-between align-items-center">
              <div className="leftFilter">
                <span>
                  <CiFilter />
                </span>
                <span> Show Filter</span>
              </div>
              <div className="rightFilter">
                <span>Sort By </span>
                <span>
                  Recommended <MdKeyboardArrowDown />{" "}
                </span>
              </div>
            </div>

            <div className="row m-auto mt-4 ">
              {/* <div className="w100Set ">
                <div className="left" style={{ display: "none" }}>
                  hello
                </div>
                <div className="right" style={{ left: "0" }}>
                  <div className="r">
                    <div className="row">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4].map((d, i) => (
                        <div
                          className="col-sm-3 my-2"
                          key={i}
                          onClick={() => navigate(`/details/${i}`)}
                        >
                          <div className="similarImg">
                            <img
                              src="https://img101.urbanic.com/v1/goods-pic/366dd2ea9e73474bae9a0e06da7410bbUR_w1440_q90.webp"
                              alt=""
                            />
                          </div>
                          <div className="productNameOfDetails my-2">
                            <p>Bodycon Dresses</p>
                            <p>₹3,690</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div> */}
                                  <div className="row m-auto">
                      {product.map((d, i) => (
                        <div
                          className="col-sm-3 my-2"
                          key={d.id}
                          onClick={() => navigate(`/details/${d.id}`)}
                        >
                          <div className="similarImg text-center">
                            <img className="m-auto"
                              src={d.photo.url}
                              alt={d.name}
                            />
                          </div>
                          <div className="productNameOfDetails my-2">
                            <p>{d.name}</p>
                            <p>{d.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
            </div>
          </div>
        </div>
 
      </div>
      <HomeBanner/>
    </>
  );
};

export default Product;