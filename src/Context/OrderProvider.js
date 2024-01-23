import React from 'react';
import { useState,useEffect } from 'react';
import { OrderContext } from './MyContext';
import { db } from '../Firebase/Firebase';
import toast from "react-hot-toast";
import {collection,onSnapshot,doc,query,where,getDocs,addDoc,deleteDoc} from "firebase/firestore";
const OrderProvider = ({children}) => {
  const user = JSON.parse(window.localStorage.getItem("August"));
  const[placeOrder,setPlaceOrder] = useState([]);
  const [checkOut,setCheckOut]  =useState(false);
  const [totalPayment,setTotalPayment] = useState(0);
  const [orderCartDel,setOrderCartDel] = useState([]);
  const handleCheckOut =()=>{
    setCheckOut(!checkOut);

  }

  useEffect(() => {
    const fetchData = async () => {
      try {

        if (user) {
          const q = query(collection(db, 'carts'), where('userId', '==', user?.uid));
          const querySnapshot = await getDocs(q);
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            cartid: doc.id,

          }));
          const totalPayment = data.reduce((a,{price,status})=>
          status?a+Number(price):a,0
          )
          setTotalPayment(totalPayment);
          setPlaceOrder(data);
        }
      } catch (e) {
        console.log(e);
      }
    };
  console.log("yugfsdfui");
    fetchData();

  }, [checkOut]); 


  const handleOrders =async(o,defaultAdress)=>{
    const order = placeOrder.filter((p)=>(
        p.status === true
    ))
    const userOrder = {
        order,
        method:o,
        orderCreatedAt:new Date().toLocaleString(
          "en-US",
        {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }
        ),
        orderStatus:"pending",
        totalPayment,
        orderqty:order.length,
        defaultAdress,
    }

    try{
        const docRef = await addDoc(collection(db, "orders"),userOrder);
    }catch(e){
        console.log(e);
    }

  }

const handleOrderOnline = (o,defaultAdress)=>{
  const order = placeOrder.filter((p)=>(
    p.status === true
))
  const userOrder = {
    order,
    method:o,
    orderCreatedAt:new Date().toLocaleString(
      "en-US",
    {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }
    ),
    orderStatus:"pending",
    totalPayment,
    orderqty:order.length,
    defaultAdress,
}

  var options = {
    key:process.env.REACT_APP_ROZARPAY_KEY_ID,
    amount: parseInt(userOrder.totalPayment * 100),
    currency: "INR",
    order_receipt: `order_rcptid_${userOrder.defaultAdress.Fullname}`,
    name: "August",
    image:"https://august-mu.vercel.app/static/media/logo.e6d810c06552b94fc3e6.png",
    description: "for testing purpose",
    handler: async function (response) {
        console.log(response)
        const paymentId = response.razorpay_payment_id;
        toast('payment sucessfull',
        {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
      try{
        userOrder.paymentId=paymentId;
        const docRef = await addDoc(collection(db, "orders"),userOrder);
      }catch(e){
        console.log(e);
      }
    },
    prefill: {
      name: userOrder.defaultAdress.Fullname,
      email: userOrder.defaultAdress.Email,
      contact: userOrder.defaultAdress.MobileNo,
    },
    notes: {
      address: 'Razorpay Corporate Office',
    },
    theme: {
        color: "#000"
    }
};

var pay = new window.Razorpay(options);
pay.open();
console.log(pay)

}

const handleDeleteCartShop=async()=>{
  const result = orderCartDel.filter((d,i)=>(
      d.status === true
  ))
for(let i=0;i<result.length;i++){
  await deleteDoc(doc(db, "carts", result[i]?.cartid));
}
}
  return (
   <OrderContext.Provider value={{placeOrder,setOrderCartDel,handleDeleteCartShop,handleCheckOut,totalPayment,handleOrders,handleOrderOnline}}>
    {children}
   </OrderContext.Provider>
  )
}

export default OrderProvider;