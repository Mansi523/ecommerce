import { useState } from "react";
import { CiHeart, CiSaveUp2 } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuShirt } from "react-icons/lu";
import SimilarProduct from "../../Components/Product/SimilarProduct";
import BasicModal from "../../Components/Product/BasicModal";
import { useParams } from "react-router-dom";
import { useContext,useEffect } from "react";
import { ProductContext } from "../../Context/MyContext";
import {collection,onSnapshot,doc} from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
const style = {
  position: "absolute",
  top: "40%",
  left: "75%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 300,
  borderRadius: "10px",
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

const ProductDetails = () => {
  const [productDetails,setProductDetails] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {product} = useContext(ProductContext);
  const { id } = useParams();
  console.log(id);
  useEffect(()=>{
    try{
      onSnapshot(doc(db, "product",id), (snapshot) => {
           
            const data= {
             ...snapshot.data(),
             id:snapshot.id,
            }
            setProductDetails(data);
            console.log("#######",data);
          });

    }catch(e){
       console.log(e);
    }
        },[id])

  return (
    <>
      <div className="detailsProject">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="imageProductDetails">
                  <img
                    src={productDetails?.photo?.url}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6  py-1">
              <div className="row mt-5 px-5">
                <div className="row productHeading">
                  <h1>
                  {productDetails?.name}
                  </h1>
                </div>
                <div className="row mt-4 productPrice">
                  <div className="d-flex justify-content-between">
                    <div className="price">
                      <h4>MRP ₹ {productDetails?.price}</h4>
                      <p>Inclusive of all taxes</p>
                    </div>
                    <div className="fav">
                      <span>
                        <CiHeart fontSize={30} />
                      </span>
                      <span>
                        <CiSaveUp2 fontSize={30} />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row DetailsBtn">
                  <button className="btn  py-2 sizeBtn" onClick={handleOpen}>
                    SELECT SIZE{" "}
                    <MdKeyboardArrowDown color="black" fontSize={25} />
                  </button>
                </div>
                <div className="row DetailsBtn my-2">
                  <button className="btn btn-dark py-2" onClick={handleOpen}>
                    ADD TO BAG
                  </button>
                </div>
                <div className="row p-0 aboutProductDetails mt-4">
                  <p>
                    <LuShirt /> ABOUT THIS PROJECT
                  </p>
                  <p className="detailsDescrption">
                  {productDetails?.description}
                  </p>
                </div>
              </div>
            </div>
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
      <SimilarProduct 
        id={productDetails?.categoriesName?.id}
      />

    </>
  );
};

export default ProductDetails;