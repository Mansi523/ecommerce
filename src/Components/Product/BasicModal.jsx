import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useContext} from "react";
import { ProductContext } from "../../Context/MyContext";
import { useNavigate } from "react-router-dom";
export default function BasicModal({ open, setOpen, productDetails,handleClose,style,sizeUpdate,setSizeUpdate,handleUdpateCartSize}) {
  
  const{size,setSize} = useContext(ProductContext);

  const navigate = useNavigate();

  const handleSizeSelect =(s)=>{
    setSize(s);
  }

  const HandleModalBag =()=>{
  if(size){
    if(false){
  //for login user
    }else{
      const cart = window.localStorage.getItem("goodies")?JSON.parse(window.localStorage.getItem("goodies")):[];
      const check = cart?.find((c,i)=>(
      c?.id === productDetails?.id
      ));
      if(check){
        const cartUpdate = cart?.map((c,i)=>{
        if(c?.id === productDetails?.id){
        return {...c,quantity:c?.quantity+1,size}
        }else{
        return c;
        }
        })
      window.localStorage.setItem("goodies",JSON.stringify(cartUpdate));
  
      }
      else{
          const notLoginUser = {...productDetails,quantity:1,size};
      cart.push(notLoginUser);
      window.localStorage.setItem("goodies",JSON.stringify(cart));
      }
    }
    return navigate('/cart');
    
  }
  


  }



  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Size
            <hr />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="d-flex flex-wrap">
              {
                ["XS","S","M","L","XL"].map((s,i)=>(
                  <div className="box-1" onClick={()=>handleSizeSelect(s)}
                    style={{backgroundColor:size===s?"grey":"white",color:size === s?"white":"black"}}
                  >{s}</div>
                ))
              }


            </div>
          </Typography>
          <hr />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <button className="btn btn-dark py-2" onClick={()=>{sizeUpdate?handleUdpateCartSize():HandleModalBag()}}>{sizeUpdate?"UPDATE SIZE":"ADD TO BAG"}</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}