/* eslint-disable */
import React,{useState} from 'react'
import { validator } from '../../utils/validator'
import { useEffect} from 'react';
import TextFild from '../common/form/textField';
import api from "../../../api"
import SelectField from '../common/form/selectField';
import RadioField from '../common/form/radioField';
import MultiSelectField from '../common/form/multiSelectField';
import CheckboxField from '../common/form/checkboxField';


const RegisterForm = () => {
   
   const [data,setData] = useState({email: "", password: "", profession:"",license:false, sex:"male", qualities:[]})
   const [professions, setProfessions] = useState();
   const [qualities, setQualities] = useState({})
   const [errors, setErrors] = useState({})
   useEffect(() => {
      api.professions.fetchAll().then((data) => setProfessions(data));
      api.qualities.fetchAll().then((data) => setQualities(data));
  }, []);
  
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

      },
      profession:{
         isRequired:{
            message:"Обязательно выберите вашу профессию"
         }
      },
      license:{
         isRequired:{
            message:"Вы не можете использовать наш сервис без подтверждения лицензионного соглашения"
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
      
   }
      return (
         <form onSubmit={handleSumbit}>
         <TextFild 
            label="Почта"  
            name="email" 
            value={data.email} 
            onChange={handleChange} 
            error={errors.email} /> 
         <TextFild 
            label="Пароль"  
            name="password" 
            value={data.password} 
            onChange={handleChange} 
            type="password" 
            error={errors.password} />
         <SelectField 
            name="professions"  
            error={errors.profession} 
            label="Выберите вашу профессию" 
            value={data.profession} 
            onChange={handleChange} 
            options={professions} 
            defaultOptions="Choose..." />
         <RadioField
            label="Выберите ваш пол" 
            options={[
            {name:"Male", value:"male"},
            {name:"Female", value:"Female"},
            {name:"Other", value:"Other"}
            ]}
            value={data.sex}
            name="sex"
            onChange={handleChange}
          />
         <MultiSelectField 
            defaultValue={data.qualities} 
            label="Выберите ваши качества"  
            options={qualities} 
            onChange={handleChange} 
            name="qualities"  
         />
         <CheckboxField 
            error={errors.license} 
            value={data.license} 
            onChange={handleChange} 
            name="license"><a>Подтвердить лицензионное соглашение</a>
         </CheckboxField>
         <button 
            type='submit' 
            classNameName="btn btn-primary w-100 mx-auto " 
            disabled={isValidd} >Submit 
         </button>
   </form>
      ) 
}
 
export default RegisterForm
