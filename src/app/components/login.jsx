/* eslint-disable */
import React from 'react'
import LoginForm from './ui/loginForm';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import RegisterFo from './ui/registerForm';
import RegisterForm from './ui/registerForm';

const Login = () => { 
   const {type} = useParams()
   const [formType, setFormType] = useState(type==="register"?type:"login")
   const toggleFormType = () => { 
      setFormType(prevState=>prevState==="register"?"login":"register")
    }
  return <div className="container mt-3" >
  <div class="row">
     <div className="col-md-6 offset-md-3 shadow p-3">
      
        {formType==="register"?<>
        <h3 className="mb-4">Register</h3>
        <RegisterForm/>
         <p>Already have account? <a role="button" onClick={toggleFormType} >Sign In</a></p>  
      </>:<>
      <h3 className="mb-4">Login</h3>
      <LoginForm/>
         <p>dont  have account? <a role="button" onClick={toggleFormType} >Sign Up</a></p>  
      </>}
       </div>
       </div>
       </div>
  
}
 
export default Login;