/* eslint-disable */
import React from 'react'
import  Select from 'react-select';
import PropTypes from 'prop-types';


const MultiSelectField = ({options, onChange, name, label, defaultValue}) => {
   const handleChange = (value) => { 
      onChange({name:name, value})
    }
   const optionsArray = !Array.isArray(options)&&typeof(options) === "object" ? 
   Object.keys(options).map(optionName=>({label:options[optionName].name, value:options[optionName]._id})): options 

   return ( 
      <div className="mb-4">
          <label 
        
        className="form-label">
        {label}
     </label>
      <Select 
      isMulti 
      
          options={optionsArray}
          closeMenuOnSelect={false }
          className="basic-multi-select" 
          classNamePrefix="select" 
          onChange={handleChange}
          defaultValue={defaultValue} 
          />
          </div>
    );
}


MultiSelectField.propTypes={
   onChange:PropTypes.func,
   options:PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
   name:PropTypes.string, 
   label:PropTypes.string,
   defaultValue:PropTypes.array
}

 
export default MultiSelectField;