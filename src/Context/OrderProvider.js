import React from 'react';
import { useState,useEffect } from 'react';
import { OrderContext } from './MyContext';
import { db } from '../Firebase/Firebase';
import {collection,onSnapshot,doc,query,where,getDocs,addDoc} from "firebase/firestore";

const OrderProvider = ({children}) => {
  const user = JSON.parse(window.localStorage.getItem("August"));
  const[placeOrder,setPlaceOrder] = useState([]);
  const [checkOut,setCheckOut]  =useState(false);
  const [totalPayment,setTotalPayment] = useState(0);

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


  const handleOrders =async(o)=>{
    const order = placeOrder.filter((p)=>(
        p.status === true
    ))
    const userOrder = {
        order,
        method:o,
        orderCreatedAt:new Date().toISOString(),
        orderStatus:"pending",
        totalPayment,
        orderqty:order.length,

    }
    try{
        const docRef = await addDoc(collection(db, "orders"),userOrder);
    }catch(e){
        console.log(e);
    }

  }

  return (
   <OrderContext.Provider value={{placeOrder,handleCheckOut,totalPayment,handleOrders}}>
    {children}
   </OrderContext.Provider>
  )
}

export default OrderProvider;
