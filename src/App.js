import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Autenticate from "./Pages/Authentication/Autenticate";
import Test from "./Pages/Test";
import Profile from "./Pages/UserProfile/Profile";
import Admin from "./Pages/Admin/Admin";
import Error from "./Pages/NotFound/Error";
import { useContext } from "react";
import { UserContext } from "./Context/MyContext";
import UserProvider from "./Context/UserProvider";

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

      <Route exact path='/test' element={<Test/>} />
      
        <Route exact path='/authenticate' element={<UserPrivateAuthenticate><Autenticate/></UserPrivateAuthenticate>} />
          <Route exact path='/userprofile' element={<UserPrivateRoute><Profile/></UserPrivateRoute>}/>
        <Route exact path='/admin' element={<Admin/>}/>
        <Route exact path="*" element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
