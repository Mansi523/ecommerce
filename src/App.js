import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Autenticate from "./Pages/Authentication/Autenticate";
import Test from "./Pages/Test";
import Profile from "./Pages/UserProfile/Profile";
import Admin from "./Pages/Admin/Admin";
import { useContext } from "react";
import { UserContext } from "./Context/MyContext";
import UserProvider from "./Context/UserProvider";

const UserPrivateRoute = ({children})=>{
 const {currentuser} = useContext(UserContext);
//  const navigate = useNavigate();
   
 if(currentuser){
    return children;
   }else{
    return <Navigate to="/authenticate" />
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
        <Route exact path='/authenticate' element={<Autenticate/>} />
        <Route exact path='/userprofile' element={<UserPrivateRoute><Profile/></UserPrivateRoute>}/>
        <Route exact path='/admin' element={<Admin/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
