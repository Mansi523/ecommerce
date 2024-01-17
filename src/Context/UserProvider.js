// Import necessary modules and components
import React, { useState, createContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./MyContext";
import { app, db, auth } from "../Firebase/Firebase";
import {signOut, sendPasswordResetEmail , getAuth,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc,doc,updateDoc,arrayUnion,getDoc, arrayRemove} from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentuser, setCurrentUser] = useState(null);
  const [heading,setheading] = useState("All");
  const [loader,setLoader] = useState(false);
  const [Modal,setModal] = useState(false);
  const[User,setUser]= useState({});
  const [IsProfile,setIsProfile] = useState(false);
  const [IsUpdate,setIsUpdate] = useState(null);
  const [Reset,setReset] = useState("");

  const [Categories, setCategories] = useState([
    {
      type: "Dresses",
      show: false,
    },
    {
      type: "Denim",
      show: false,
    },
    {
      type: "T-shirts",
      show: false,
    },
    {
      type: "Tops",
      show: false,
    },
    {
      type: "Sports&Gym",
      show: false,
    },
  ]);
  const [Address,setAddress] = useState({
    Fullname:"",
    MobileNo:"",
    Email:"",
    Address:"",
    Locality:"",
    Pincode:"",
    City:"",
    State:"",
    });
 const [Myprofile,setMyprofile] = useState({
    Name:"",
    birthday:"",
    gender:"Female",
    categorypreference:[],
 });


  useEffect(() => {
    setLoader(true);
   onAuthStateChanged(auth, (user) => {

      if (user) {
        setCurrentUser(user);
        // setUser(user);
        window.localStorage.setItem("August",JSON.stringify(user));        
        setLoader(false);
      } else {
        setCurrentUser(null);
        // setLoader(false);
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
        address:[],
        phoneNo:"",
        birthday:"",
        gender:"",
        categorypreference:[],
        defaultaddress:{},
      });
      console.log("Document written with ID: ", docRef.id);
      setLoader(false);
      window.localStorage.setItem("UserId",JSON.stringify(docRef._key.path.segments[1]));
      toast('Sign in Successfully!',
      {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }
    );
      window.location.href = '/userprofile'

    } catch (e) {
      console.error("Error adding document: ", e);
      setLoader(false);
      toast.error('Something went wrong!',
      {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }
    );
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
    toast.error('Something went wrong!',
    {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    }
  );
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
        // window.localStorage.setItem("userlogin",JSON.stringify(userCredential));
        window.localStorage.setItem("UserId",JSON.stringify(user.uid));
   
setLoader(false);
toast('Loged in Successfully!',
{
  style: {
    borderRadius: '10px',
    background: '#333',
    color: '#fff',
  },
}
);
        window.location.href = '/userprofile'
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
setLoader(false);
toast.error('Something went wrong!',
{
  style: {
    borderRadius: '10px',
    background: '#333',
    color: '#fff',
  },
}
);
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
          address:[],
          phoneNo:"",
          birthday:"",
          gender:"",
          categorypreference:[],
          defaultaddress:{},
        });
        window.localStorage.setItem("UserId",JSON.stringify(docRef._key.path.segments[1]));
        setLoader(false);
        toast('Sign in Successfully!',
        {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
        window.location.href = '/userprofile'
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ",e);
        setLoader(false);
        toast.error('Something went wrong!',
        {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
      }

      console.log(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    setLoader(false);
    toast.error('Something went wrong!',
    {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    }
  );
    }
    toast('Sign in Successfully!',
    {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    }
  );
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
  // window.localStorage.removeItem("UserId");
  window.localStorage.removeItem("August");
  toast('Log Out Successfully!',
  {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
  window.location.href = '/authenticate'
}).catch((error) => {
  // An error happened.
  // console.log("Something went wrong",error);
  toast.error('Something went wrong!',
  {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
  setLoader(false);
  
});
// window.open("/authenticate","_self");
  // <Navigate to="/authenticate"/>
  }

const handleSaveAddress =async()=>{
  const id = window.localStorage.getItem("UserId");
  
  const washingtonRef = doc(db,"users",JSON.parse(id));

  // Atomically add a new region to the "regions" array field.
  const DATA = {...Address,id:Date.now()}
  await updateDoc(washingtonRef, {
    address: arrayUnion(DATA)
  });
  
  setModal(false);
  setAddress(
  {
  Fullname:"",
  MobileNo:"",
  Email:"",
  Address:"",
  Locality:"",
  Pincode:"",
  City:"",
  State:"",
}
  )
  setIsProfile(!IsProfile);
}

const handleConfirm = async()=>{
  const id = window.localStorage.getItem("UserId");

  const data = Categories.filter((item)=>item.show === true);
  const washingtonRef = doc(db, "users",JSON.parse(id));

// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef,{
  name:Myprofile.Name,
  gender:Myprofile.gender,
  birthday:Myprofile.birthday,
  categorypreference:data,

});
toast('Successfully Modified!',
  {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
setIsProfile(!IsProfile);
}

// get current user
useEffect(()=>{
const getCurrentUser =async()=>{
const id = window.localStorage.getItem("UserId");
if(id){
  const docRef = doc(db, "users",JSON.parse(id));
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    setUser(docSnap.data());
    setMyprofile({...Myprofile,Name:docSnap.data().name})
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}

}
getCurrentUser();
},[currentuser,IsProfile])

const handleAddressDelete = async(address)=>{
  const id = window.localStorage.getItem("UserId");
  
  const washingtonRef = doc(db,"users",JSON.parse(id));

  // Atomically add a new region to the "regions" array field.
  await updateDoc(washingtonRef, {
    address: arrayRemove(address)
  });
  setIsProfile(!IsProfile);
  toast('Address deleted successfully!',
  {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
}

const handleAddressUpdate =(address)=>{
   setModal(true);
   setIsUpdate(address);

}

const handleSaveUpdate =async()=>{
  console.log(Address);
  const id = window.localStorage.getItem("UserId");
  
  const washingtonRef = doc(db,"users",JSON.parse(id));

  // Atomically add a new region to the "regions" array field.
  await updateDoc(washingtonRef, {
    address: arrayRemove(IsUpdate)
  });
  await updateDoc(washingtonRef, {
    address: arrayUnion(Address)
  });
  setModal(false);
  setIsUpdate(null);
  setIsProfile(!IsProfile);
}

const handleDefaultAddress =async(address)=>{
  const id = window.localStorage.getItem("UserId");

  const washingtonRef = doc(db, "users",JSON.parse(id));

// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef,{
  defaultaddress:address,
});
toast('default!',
  {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
setIsProfile(!IsProfile);
}

const handleReset =()=>{

  sendPasswordResetEmail(auth,Reset)
    .then(() => {
      // Password reset email sent!
      // ..
     
      toast('plz check your email!',
  {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);

window.location.href = '/authenticate'


    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorMessage,
      {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }
    );
      // ..
    });
    
}

  return (
    <UserContext.Provider value={{ name, email, password, 
      setName, setPassword, setEmail, handleSubmitSignup, 
      handleSubmitLogin, currentuser,handleGoggleLogin,
      handleClickedItems,heading,handleLogOut
    ,loader,Address,setAddress,handleSaveAddress
    ,Modal,setModal,Myprofile,setMyprofile,handleConfirm,
    Categories,setCategories,User,handleAddressDelete,
    handleAddressUpdate,IsUpdate,handleSaveUpdate,handleDefaultAddress
    ,Reset,setReset,handleReset
    }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

