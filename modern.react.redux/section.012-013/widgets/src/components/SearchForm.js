import React, { useEffect, useState } from "react";


const SearchForm = ({ onChange }) => {
  const [ searchTerm, setSearchTerm ] = useState("");

  const onInputChange = event => {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    onChange(searchTerm);
  }, [onChange, searchTerm])

  return (
    <div className="ui form">
      <div className="field">
        <label htmlFor="search-input" >Search</label>
        <input 
          id="search-input" 
          type="text" 
          name="search" 
          placeholder="Search..."
          value={searchTerm}
          onChange={onInputChange} />
      </div>
    </div>
  );
}

export default SearchForm;