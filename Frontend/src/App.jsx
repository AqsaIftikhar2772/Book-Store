import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Course from "./components/Course"
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Test from "./components/Test";
import  { Toaster } from 'react-hot-toast';
// import Navbar from "./components/Navbar";



function App() {

  return (
    <>
    <div >
    <BrowserRouter>
    <Routes>
    {/* <Route path="/nav" element={<Navbar/>} /> */}
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={<Course/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/log" element={<Test/>} />
      </Routes>
    <Toaster/>
    </BrowserRouter>
    </div>
     </>
  )
}

export default App;
