
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Login = () => {

  const [fields, setFields] = useState({
    email: "",
    password: "",
    errors: {}
  });
  
  

  const handleChange = (e) => {
    const {name , value} = e.target;
    setFields((pre) => ({ ...pre, [name]: value }));
  };

  const validation = () => {
       const errors = {};

      //  check if username empty
      if(!fields.email){
        errors.email = "Email is required";
      }

      // check if  password empty
      if(!fields.password){
        errors.password = "password is required"
      }
      setFields((prevState) => ({...prevState , errors}))

      return true ;
  };

  const handleOnSubmit = async (e) => {
       e.preventDefault();
       validation();
       try {
        const res = await axios.post("http://localhost:8000/user/login" , {
          email : fields.email,
          password : fields.password
         
        })
        console.log(res.data);
        toast.success("login successfully");
        localStorage.setItem("users" ,JSON.stringify(res.data.user));
       // redirect home page
         window.location.href = "/";
       } catch (error) {
        if(error.response){
          toast.error(error.response.data.message);
        }
       }
       
  };

  

  return (
    <>
      <dialog id="my_modal_3" className="md:modal w-80 rounded-md  ">
        <div className="md:modal-box dark:bg-slate-800 dark:text-white dark:border">
          <form   method="dialog"  >
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <h3 className="font-bold text-lg md:m-0 mt-6 ml-8 mb-3">Login</h3>
            {/* email */}
            <div className="md:mt-2 space-y-2 md:ml-0 ml-8">
              <span>Email</span> <br />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="md:w-80 w-50 px-3 py-1 border outline-none rounded-md"
                autoComplete="off"
                value={fields.email}
                onChange={handleChange}
              />
              {
                fields.errors.email && (
                <p style = {{color:"red"}}>{fields.errors.email}</p>
                )

              } 
              </div>
            
            {/* password */}
            <div className="mt-2 space-y-2 md:ml-0 ml-8">
              <span>Password</span> <br />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="md:w-80 w-50 px-3 py-1 border outline-none rounded-md"
                autoComplete="off"
                value={fields.password}
                onChange={handleChange}
              />
              {
                fields.errors.password && (
                <p style={{color : "red"}}>{fields.errors.password}</p>
                )
              }
            </div>
            {/* button */}
            <div className="flex mt-4 md:ml-0 ml-8 md:mb-0 mb-8">
              <button
                type="submit"
                onClick={handleOnSubmit}
                className="bg-orange-400 md:px-2 px-1 py-1 text-white rounded-md hover:bg-orange-500"
                 >
                Login
              </button>
              <p className="mt-1 md:ml-10 ml-6">
                Not Registered?{" "}
                <span className="text-orange-400 underline">
                  <Link to="/signup">Signup</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
