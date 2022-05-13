/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types';

const TextFild = ({label, name, type, onChange, value, error}) => {
   const getInputClasses = () => { 
      return "form-control" + (error ? " is-invalid" : "")
   }
   return ( 
      <div className="mb-4" >
         <label htmlFor={name}></label>{label}
      <input 
      value={value}
      onChange={onChange}
      name={name}
      id={name}
      type={type}
      className={getInputClasses()}/>
      {error && <div className="invalid-feedback" >{error}</div>}
      </div>
      
    );
    
}

TextFild.defaultProps={
   type:"text"
}

TextFild.PropTypes={
   label:PropTypes.string,
   name:PropTypes.string,
   type:PropTypes.string,
   onChange:PropTypes.function,
   value:PropTypes.string,
   error:PropTypes.string
}

export default TextFild;