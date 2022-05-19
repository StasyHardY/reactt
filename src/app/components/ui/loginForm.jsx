/* eslint-disable */
import React,{useState} from 'react'
import { validator } from '../../utils/validator'
import { useEffect} from 'react';
import TextFild from '../common/form/textField';
import CheckboxField from '../common/form/checkboxField';


const LoginForm = () => {
   const [data,setData] = useState({email: "", password: "", stayOn:false})
   const [errors, setErrors] = useState({})
   const handleChange = (target) => {
     
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
         <form onSubmit={handleSumbit}>
         <TextFild label="Почта"  name="email" value={data.email} onChange={handleChange} error={errors.email} /> 
         <TextFild label="Пароль"  name="password" value={data.password} onChange={handleChange} type="password" error={errors.password} />
         <CheckboxField value={data.stayOn} onChange={handleChange} name="stayOn"><a>Оставаться в системе</a></CheckboxField>

         <button type='submit' className="btn btn-primary w-100 mx-auto " disabled={isValidd} >Submit </button>
   </form>
      )
}
 
export default LoginForm;