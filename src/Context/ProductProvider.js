import React from 'react';
import { useState,useEffect } from 'react';
import { ProductContext } from './MyContext';
import { db } from '../Firebase/Firebase';
import {collection,onSnapshot,doc} from "firebase/firestore";

const ProductProvider = ({children}) => {
    const [topProduct,setTopProduct] = useState([]);
    const [category,setCategory] = useState({
      categories:[]
    });


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

    useEffect(()=>{
      try{
        onSnapshot(doc(db, "home","jsdfhdsffoidgjdsgoi"), (snapshot) => {
             
              const data= {
               ...snapshot.data(),
               id:snapshot.id,
              }
              setCategory({
                categories: data?.categories?.slice(0,3)
              });
              // console.log("3332222#3333",data?.categories?.slice(0,3));
            });

      }catch(e){
         console.log(e);
      }
          },[])

  return (
   <ProductContext.Provider value={{topProduct,category}}>
    {children}
   </ProductContext.Provider>
  )
}

export default ProductProvider
