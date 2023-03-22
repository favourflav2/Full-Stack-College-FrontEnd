
import NavBar from "./components/Navbar/NavBar";
import {  Routes, Route,useLocation} from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import Footer from "./components/Footer/Footer";
import Itemdetails from "./pages/Details/Itemdetails";
import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/features/authSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Auth/Dashboard";
import PrivateRoute from "./components/Private Routes/PrivateRoute";


const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {

  const [state,setState] = React.useState(false)
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem("profile"))

  React.useEffect(()=>{
    dispatch(setUser(user))
  },[dispatch,user])

  const {pathname} = useLocation()
  React.useEffect(()=>{
    if(pathname === "/login"){
        setState(true)
    }else if(pathname === "/signup"){
      setState(true)
    }else{
      setState(false)
    }
  },[pathname])

  
   
  return (
    <div className="App">
      <ToastContainer />
      <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/school/:id" element={<Itemdetails />}></Route>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
        </Routes>
        {!state && <Footer />}
        
        
        
      
    </div>
  );
}

export default App;
