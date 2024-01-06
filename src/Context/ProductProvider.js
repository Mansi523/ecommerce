import React from 'react';
import { useState,useEffect } from 'react';
import { ProductContext } from './MyContext';
import { db } from '../Firebase/Firebase';
import {collection,onSnapshot} from "firebase/firestore";

const ProductProvider = ({children}) => {
    const [topProduct,setTopProduct] = useState([]);
    useEffect(()=>{
try{
  onSnapshot(collection(db, "product"), (snapshot) => {
        const data = snapshot.docs.map((doc)=>{
          return {
            ...doc.data(),
            id:doc.id,
          }
        })
    
        setTopProduct(data.slice(0,6));

      });
}catch(e){
   console.log(e);
}
    },[])
  return (
   <ProductContext.Provider value={{topProduct}}>
    {children}
   </ProductContext.Provider>
  )
}

export default ProductProvider
