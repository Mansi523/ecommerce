import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Autenticate from "./Pages/Authentication/Autenticate";
import Profile from "./Pages/UserProfile/Profile";
import Admin from "./Pages/Admin/Admin";
import Error from "./Pages/NotFound/Error";
import ResetPassword from "./Components/Register/ResetPassword";
import { useContext } from "react";
import { UserContext } from "./Context/MyContext";
import UserProvider from "./Context/UserProvider";
import toast, { Toaster } from "react-hot-toast";
import Product from "./Pages/Product/Product";
import "./Style/Category.css";
import "./Style/Product.css";
import "./Style/ProductDetails.css";
import ProductDetails from "./Pages/Product/ProductDetails";
import Category from "./Pages/Category/Category";
import Bag from "./Pages/Bag/Bag";
import Wishlist from "./Pages/Bag/Wishlist";

const UserPrivateRoute = ({children})=>{
 const {currentuser,loader} = useContext(UserContext);
console.log("1",loader);

const token = window.localStorage.getItem("August");
 if(token){
console.log("2");
    return children;
   }else{
console.log("3");
    return <Navigate to="/authenticate" />
   }

}

const UserPrivateAuthenticate = ({children})=>{
  const {currentuser,loader} = useContext(UserContext);
 console.log("1",loader);
 
 const token = window.localStorage.getItem("August");
  if(!token){
 console.log("2");
     return children;
    }else{
 console.log("3");
     return <Navigate to="/userprofile" />
    }
 
 }
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path='/' element={<Home/>} />

        <Route exact path='/authenticate' element={<UserPrivateAuthenticate><Autenticate/></UserPrivateAuthenticate>} />
          <Route exact path='/userprofile' element={<UserPrivateRoute><Profile/></UserPrivateRoute>}/>
        <Route exact path='/admin' element={<Admin/>}/>
        <Route exact path="*" element={<Error/>}/>
        <Route exact path= "/reset" element={<ResetPassword/>}/>
        <Route exact path= "/product" element={<Product/>}/>
        <Route exact path= "/details/:id" element={<ProductDetails/>}/>
        <Route exact path= "/category/:id" element={<Category/>}/>
        <Route exact path= "/cart" element={<Bag/>}/>
        <Route exact path= "/wishlist" element={<Wishlist/>}/>
        
      </Routes>
      <Toaster 
       position="top-center"
       reverseOrder={false}
        />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
