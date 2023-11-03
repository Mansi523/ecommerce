// Import necessary modules and components
import React, { useState, createContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./MyContext";
import { app, db, auth } from "../Firebase/Firebase";
import {signOut, getAuth,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentuser, setCurrentUser] = useState(null);
  const [heading,setheading] = useState("All");
  const [loader,setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    console.log("kuchbhi");
   onAuthStateChanged(auth, (user) => {

      if (user) {
        setCurrentUser(user);
        window.localStorage.setItem("August",JSON.stringify(user));        
        setLoader(false);
      } else {
        setCurrentUser(null);
        setLoader(false);
      }
    });

  }, []);

  const handleGoggleLogin =async()=>{
    setLoader(true);

const provider = new GoogleAuthProvider();
try{
const result = await signInWithPopup(auth, provider)
  // .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;

    // IdP data available using getAdditionalUserInfo(result)
    // ...
    // console.log("user",user);
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name:user.displayName,
        email:user.email,
        password:user.uid,
        profilepic:user.photoURL,
        role: "user",
        userId:user.uid,

      });
      console.log("Document written with ID: ", docRef.id);
      setLoader(false);
      window.location.href = '/userprofile'

    } catch (e) {
      console.error("Error adding document: ", e);
      setLoader(false);
    }

}catch(error) {
    // Handle Errors here.
    console.log(error);
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    setLoader(false);
    // ...
  };

  }


  const handleSubmitLogin = (e) => {
    e.preventDefault();
setLoader(true);
    console.log(email,password);
    if (email === "" || password === "") {
      console.log("Email and password should be filled");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
setLoader(false);
        window.location.href = '/userprofile'
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
setLoader(false);

      });
  };

  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    setLoader(true);
    console.log("from signup",email,password,name);
    if (name === "" || email === "" || password === "") {
      console.log("Name, email, and password should be filled");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      try {
        const docRef = await addDoc(collection(db, "users"), {
          name,
          email,
          password,
          profilepic:"profilepic",
          role: "user",
          userId:user.uid,
        });
    setLoader(false);

        window.location.href = '/userprofile'
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
    setLoader(false);

      }

      console.log(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    setLoader(false);

    }

    setName("");
    setPassword("");
    setEmail("");
  };
  
  const handleClickedItems =(item)=>{
    setheading(item);
  }

const handleLogOut = ()=>{
  setLoader(true);

const auth = getAuth();

signOut(auth).then(() => {
  console.log("signout successfully");
  // Sign-out successful.
  setLoader(false);
  window.localStorage.removeItem("August");
  window.location.href = '/authenticate'
}).catch((error) => {
  // An error happened.
  // console.log("Something went wrong",error);
  setLoader(false);

});
// window.open("/authenticate","_self");
  // <Navigate to="/authenticate"/>
  }

  return (
    <UserContext.Provider value={{ name, email, password, setName, setPassword, setEmail, handleSubmitSignup, handleSubmitLogin, currentuser,handleGoggleLogin,handleClickedItems,heading,handleLogOut,loader}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

