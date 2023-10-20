
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Autenticate from "./Pages/Authentication/Autenticate";
import Test from "./Pages/Test";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path='/' element={<Home/>} />

      <Route exact path='/test' element={<Test/>} />
        <Route exact path='/authenticate' element={<Autenticate/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
