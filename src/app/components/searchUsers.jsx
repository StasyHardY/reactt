/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const SearchUsers = ({value,onChangeUser }) => {
   return ( 
      <input
         type="text"
         className="form-control"
         placeholder="Search..."
         aria-label="Search"
         value={value}
         onChange={onChangeUser} 
      />
   );
}
SearchUsers.propTypes = {
   value: PropTypes.string,
   onChangeUser: PropTypes.func.isRequired
};

export default SearchUsers;