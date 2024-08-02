import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import toast from "react-hot-toast";
const SignUp = () => {
 
  //  step first
   const [fileds , setFileds] = useState({
    name: "",
    email: "",
    password: "",
    errors: {}
    });

// second step
const handleChange = (e) =>{
  const {name , value} = e.target;
   setFileds((prev) => ({...prev , [name]:value}));
}

// third step
const validation = () =>{
  const errors = {};

  if(!fileds.name){
    errors.name = "Name is required";
  }

  if(!fileds.email){
    errors.email = "Email is required";
  }

  if(!fileds.password){
    errors.password = "Password is required";
  }

  setFileds((prev) => ({...prev , errors}));

  return true;
};
  // step fourth

  const handleOnSubmit = async (e) =>{
    e.preventDefault();
       validation();
      //  console.log(fileds);

       try {
          const result =  await axios.post("http://localhost:8000/user/signup" , {
            name : fileds.name,
            email :fileds.email,
            password : fileds.password
          });
          console.log(result.data);
         
          
          // redirect home page
          window.location.href = "/";
          localStorage.setItem("users" ,JSON.stringify(result.data.user));
          setFileds({
            name: "",
            email: "",
            password: "",
            errors: {}
          })
          toast.success('Signup Successfuly');
       } catch (error) {
        if(error.response){
          toast.error(error.response.data.message);
        }
        
       }
  
};
  return (
    <>
      <div className=" flex h-screen  items-center justify-center bg-slate-100  ">
        <div className="border md:p-6  rounded-md shadow-md bg-white dark:bg-slate-800 dark:text-white dark:border ">
          <div className="">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>

            <h3 className="font-bold text-lg md:m-0 ml-6 mt-4">Signup</h3>
            {/* name */}
            <div className="mt-4 md:ml-0 ml-6">
              <div>
                <label>Name</label>
                <br />
                <input
                  type="text"
                  name ="name"
                  value={fileds.name}
                  onChange={handleChange}
                  autoComplete="off"
                  className="border  md:w-80 w-60 mt-1 px-2 py-1 mb-4 rounded-md outline-none "
                  placeholder="Enter Email"
                />
                {
                  fileds.errors.name && (
                    <p style={{color: "red"}}>{fileds.errors.name}</p>
                  )
                }
              </div>
              {/* email */}
              <div className="">
                <label>Email</label>
                <br />
                <input
                  type="email"
                  name= "email"
                  value={fileds.email}
                  onChange={handleChange}
                  autoComplete="off"
                  className="border md:w-80 w-60 mt-1 px-2 py-1 rounded-md outline-none"
                  placeholder="Enter Email"
                />
                 {
                  fileds.errors.email && (
                    <p style={{color: "red"}}>{fileds.errors.email}</p>
                  )
                }
              </div>
              {/* password */}
              <div>
                <br /> <label>Password</label>
                <br />
                <input
                  type="password"
                  name = "password"
                  value={fileds.password}
                  onChange={handleChange}
                  autoComplete="off"
                  className="border  md:w-80 w-60 px-2 py-1 rounded-md outline-none"
                  placeholder="Enter Password"
                />
                 {
                  fileds.errors.password && (
                    <p style={{color: "red"}}>{fileds.errors.password}</p>
                  )
                }
              </div>
            </div>
            <div className="flex md:ml-0 ml-6 mb-4">
              <button type="submit" onClick={handleOnSubmit} className=" bg-orange-400 text-white py-1 px-2 rounded-md mt-6 hover:bg-orange-500">
                Sign Up
              </button>
              <p className="mt-7 ml-16  ">
                Not Registered?
                <Link to="/" className="text-orange-400 underline md:m-0 mr-4">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default SignUp;
