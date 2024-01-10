import React from 'react';
import { useState,useEffect } from 'react';
import { ProductContext } from './MyContext';
import { db } from '../Firebase/Firebase';
import {collection,onSnapshot,doc} from "firebase/firestore";

const ProductProvider = ({children}) => {
    const [topProduct,setTopProduct] = useState([]);
    const [category,setCategory] = useState({
      categories:[],
      inFocusPhoto:{},
      inFocusVideo:{},
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
                categories:data?.categories?.slice(0,3),
                inFocusPhoto:data?.inFocusPhoto,
                inFocusVideo:data?.inFocusVideo,
              });
              // console.log("3332222#3333",data?.inFocusVideo);
            });

      }catch(e){
         console.log(e);
      }
          },[])
const inFocusPhoto = category.inFocusPhoto;
const inFocusVideo = category.inFocusVideo;
  return (
   <ProductContext.Provider value={{topProduct,category,inFocusPhoto,inFocusVideo}}>
    {children}
   </ProductContext.Provider>
  )
}

export default ProductProvider
