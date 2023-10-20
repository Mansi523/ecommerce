import { UserContext } from "./MyContext";
import { useState } from "react";
import {app,db,auth} from "../Firebase/Firebase";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; 

const UserProvider = ({children}) => {
 const [name,setname] = useState("");
 const [email,setemail] = useState("");
 const [password,setpassword] = useState("");
 
 const [currentuser,setcurrentuser] = useState({});

 onAuthStateChanged(auth, (user) => {
   if (user) {
     const uid = user.uid;
      setcurrentuser(user);
    } else {
   }
 });


 const handleSubmitLogin=()=>{
  if(email==""||password==""){
     console.log(email,password);
    console.log("email and password should be filled");   
    return;
   }

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
  });
 }



 const handleSubmitSignup=async()=>{
   if(name==""||email==""||password==""){
    console.log("name,email and password should be filled");   
    return;
   }
   try{
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
  const user = userCredential.user;
  // ...
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name,
      email,
     password,
     role:"user"
    });
    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  console.log(user); 
   }catch(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode,errorMessage);
    };
    setname("");
    setpassword("");
    setemail("");
 }

    return (
  <>
  <UserContext.Provider value={{name,email,password,setname,setpassword,setemail,handleSubmitSignup,handleSubmitLogin,currentuser}}>
  {
    children
  }

  </UserContext.Provider>
  </>
    )
}

export default UserProvider