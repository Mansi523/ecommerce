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
