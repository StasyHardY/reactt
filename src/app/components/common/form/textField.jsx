/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types';

const TextFild = ({label, name, type, onChange, value, error}) => {

   const handleChange = ({target}) => { 
      onChange({ name: target.name, value: target.value });
      }
   const getInputClasses = () => { 
      return "form-control" + (error ? " is-invalid" : "")
   }
   return ( 
      <div className="mb-4" >
         <label htmlFor={name}></label>{label}
      <input 
      value={value}
      onChange={handleChange}
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

TextFild.propTypes={
   label:PropTypes.string,
   name:PropTypes.string,
   type:PropTypes.string,
   onChange:PropTypes.func,
   value:PropTypes.string,
   error:PropTypes.string
}

export default TextFild;