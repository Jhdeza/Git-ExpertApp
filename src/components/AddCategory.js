import React, { useState } from "react";
import PropTypes  from "prop-types";

export const AddCategory = ({setcategories}) => {

  const [inputValue, setinputValue] = useState('');

  const handleinputchange = (e) => {
    setinputValue(e.target.value);
  };

  const handelsubmit = (e) => {
    e.preventDefault();

    if(inputValue.trim().length>2){
    setcategories(catg=> [ inputValue,...catg])
    setinputValue("")
  }
    
  };
  return (
    <form onSubmit={handelsubmit}>
      <input 
          type="text" 
          value={inputValue} 
          onChange={handleinputchange} 
      />
    </form>
  );
};

AddCategory.propTypes= {
     setcategories: PropTypes.func.isRequired
}
