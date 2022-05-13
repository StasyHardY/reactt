/* eslint-disable */
export function validator (data, config) {
   const errors ={}
   let statusValidate;
   function validate(validetemethod, data, config){
      switch (validetemethod) {

         case "isRequired":
            statusValidate=data.trim() === ''
            break;

         case "isEmail": {
          
            const emailRegExp = /^\S+@\S+\.\S+$/g
            statusValidate = !emailRegExp.test(data)
            break
         }
            
         case "isCapitalSymbol": {
            
            const capitalRegExp = /[A-Z]+/g
            statusValidate = !capitalRegExp.test(data)
            break
         }
         case "isContainDigit":{
            const digitRegExp = /\d+/g
            statusValidate = !digitRegExp.test(data)
            break
         }
         case "minLength": {
            statusValidate = data.length<config.value 
            break
         }
         default:
            break;
      }
      if(statusValidate) return config.message
   }
   for(const fieldName in data) {
      config[fieldName]
      for(const validetemethod in config[fieldName]) {
         const error = validate(validetemethod, data[fieldName],config[fieldName][validetemethod])
         if(error&&!errors[fieldName]) {
            errors[fieldName] =  error
         }
       
      }
   }
   return errors
}