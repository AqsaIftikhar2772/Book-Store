import { useState } from "react";
import "./Test2.css";
const Test = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    errors: {},
     });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  
  const validation = () => {
    const errors = {};

    // Check if username is empty
    if(!formData.username){
      errors.username  = "username is required"
    }
    // check if password is empty
    
    if(!formData.password){
      errors.password = "password is required"
    }

    setFormData((prevState) => ({...prevState , errors}))
 
    //  return true if there are no error
    return true;
  
  }
   
    const handleOnSubmit = (e) => {
      e.preventDefault();
      if(validation()){
        console.log(formData);
      }else{
        // form is vaild do nothing
      }
      
    }

  return (
    <div id="main">
      <h1>SignUp Form</h1>
      <form onSubmit={handleOnSubmit}>
        {/* username */}
        <label id="lab"> Username </label>
        <br />
        <input
          type="text"
          id="in"
          value={formData.username}
          onChange={handleChange}
          name="username"
        /> <br />
        
        {
           formData.errors.password && (
            <p style = {{color:"red"}}>{formData.errors.username}</p>
           )
        }
        {/* password */}
        <label id="lab">Password</label>
        <br />
        <input
          type="text"
          id="in"
          value={formData.password}
          onChange={handleChange}
          name="password"
        />
        <br />
        {
          formData.errors.password && (
            <p style={{color:"red"}}> {formData.errors.password}</p>
          )
        }
        {/* button */}
        <input type="submit" value="Signup" id="btn" />
      </form>
    </div>
  );
};

export default Test;
