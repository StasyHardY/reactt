/* eslint-disable */
import React from 'react'
import { useState } from 'react';
import TextFild from './textField';
import { useEffect } from 'react';
import { validator } from '../utils/validator';
const Login = () => {
   const [data,setData] = useState({email: "", password: ""})
   const [errors, setErrors] = useState({})
   const handleChange = ({target}) => {
      setData ((prevState) => ({
         ...prevState,
         [target.name] : target.value
      }))
   }
   useEffect(() => {
      validate() 
   }, [data])
   
   const validatorConfig={
      email:{
         isRequired:{message:"Электронная почта обязательная для заполнения"},
         isEmail:{message:"Email введен не корректно"}
      },
      password:{
         isRequired:{message:"Пароль обязателен для заполнения"},
         isCapitalSymbol:{message:"Пароль должен содержать заглавную букву"},
         isContainDigit:{message:"Пароль должен содержать минимум одну цифру"},
         minLength:{
            message:"Пароль должен состоять минимум из 8 символов",
            value:8
         }

      }
   }
   const validate = () => {
      const errors = validator(data, validatorConfig)
      setErrors(errors)
      return Object.keys(errors).length!==0
   }
   const isValidd = Object.keys(errors).length!==0
   const handleSumbit = (e) => {  
      e.preventDefault()
      const isValid = validate()
      if(isValid) return 
      console.log(data  )
   }
      return (
         <div className="container mt-3" >
            <div class="row">
               <div className="col-md-6 offset-md-3 shadow p-3">
                  <h3 className="mb-4">Login</h3>
         <form onSubmit={handleSumbit}>
         <TextFild label="Почта"  name="email" value={data.email} onChange={handleChange} error={errors.email} /> 
         <TextFild label="Пароль"  name="password" value={data.password} onChange={handleChange} type="password" error={errors.password} />
         <button type='submit' className="btn btn-primary w-100 mx-auto " disabled={isValidd} >Submit </button>
   </form>
   </div>
   </div>
   </div>)
}
 
export default Login;