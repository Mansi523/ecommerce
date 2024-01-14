import React,{useContext,useRef,useEffect,useState} from "react";
import { MdKeyboardArrowDown,MdKeyboardArrowUp } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import { useNavigate,useParams} from "react-router-dom";
import HomeBanner from "../../Components/Home/HomeBanner.jsx";
import { ProductContext } from "../../Context/MyContext.js";

const Product = () => {
  const navigate = useNavigate();
   const {product} = useContext(ProductContext);
   const [catOpen, setCatOpen] = useState(false);
   const [rightFilterOpen, setRightFilterOpen] = useState(false);
  const [leftFilterOpen, setLeftFilterOpen] = useState(false);
  const { id } = useParams();
  console.log(id);
  const rightFilterRef = useRef(null);
  const leftFilterRef = useRef(null);
  const [price, setPrice] = useState(500);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const minPrice = 0;
  const maxPrice = 1000;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        leftFilterRef.current &&
        !leftFilterRef.current.contains(event.target)
      ) {
        // Clicking inside the leftFilter, do nothing
        setLeftFilterOpen(false);
        return;
      }
      if (
        rightFilterRef.current &&
        !rightFilterRef.current.contains(event.target)
      ) {
        setRightFilterOpen(false);
        return;
      }
      // Clicking outside the leftFilter, close it
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [leftFilterRef, rightFilterOpen]);
  return (
    <>
      <div className="product my-5">
        <div className="container-fluid">
          <div className="row">
<div className="filterRow d-flex justify-content-between align-items-center">
              <div
                className="leftFilter"
                onClick={() => setLeftFilterOpen(true)}
                ref={leftFilterRef}
              >
                <span>
                  <CiFilter />
                </span>
                <span> Show Filter</span>
                {leftFilterOpen && (
                  <div className="popupFilterFirst">
                    <div className="underpayment">
                      <div className="price-range-container row p-2">
                        <div className="row m-0 p-0">
                          <h6 className="m-0 p-0">Price</h6>
                        </div>
                        <div className="row">
                          <input
                            type="range"
                            id="price-range"
                            className="price-range-input"
                            min={minPrice}
                            max={maxPrice}
                            step="10"
                            value={price}
                            onChange={handlePriceChange}
                          />
                        </div>
                      </div>
                      <div className="price-display">
                        <span className="min-price">₹{minPrice}</span>
                        <span className="max-price">₹{price}</span>

                      </div>
                      <div
                        className="accordion text-light"
                        id="accordionExample"
                      >
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                              onClick={() => setCatOpen(!catOpen)}
                            >
                              Category
                            </button>
                          </h2>

                          {catOpen && (
                            <div
                              id="collapseOne"
                              className="accordion-collapse collapse show"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <strong>
                                  This is the first item's accordion body.
                                </strong>{" "}
                                It is shown by default, until the collapse
                                plugin adds the appropriate classes that we use
                                to style
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="rightFilter"
                onClick={() => setRightFilterOpen(!rightFilterOpen)}
                ref={rightFilterRef}
              >
                <span>Sort By </span>
                <span>
                  Recommended{" "}
                  {!rightFilterOpen ? (
                    <MdKeyboardArrowDown />
                  ) : (
                    <MdKeyboardArrowUp />
                  )}
                </span>
                {rightFilterOpen && (
                  <div className="popupFilter">
                    <div className="underpayment">
                      <p>Recommended</p>
                      <p>Price: High to Low</p>
                      <p>Price: Low to High</p>
                    </div>
                  </div>
                )}
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