import React from "react";
import { useContext,useEffect,useState} from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import CategoryVideo from "../../Components/Product/CategoryVideo";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../Context/MyContext";
const Category = () => {
  const navigate = useNavigate();
  const [category,setCategory] = useState([]);
  const {product} = useContext(ProductContext);
  const { id } = useParams();
  console.log("id for category",id);
  useEffect(()=>{
    const data = product.filter((c)=>(
       c?.categoriesName?.id === id
    ))
    console.log("data of category",data);
    setCategory(data);
   },[id])
  return (

    <>
      <CategoryVideo />

      <div className="product mt-3">
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
            <div className="row Product mt-4">
              <div className="row">
                {category.map((d, i) => (
                  <div
                    className="col-sm-3 my-2"
                    key={d.id}
                    onClick={() => navigate(`/details/${d.id}`)}
                  >
                    <div className="similarImg">
                      <img
                        src={d.photo.url}
                        alt={d.name}
                      />
                    </div>
                    <div className="productNameOfDetails my-2">
                      <p>{d.name}</p>
                      <p>₹{d.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;