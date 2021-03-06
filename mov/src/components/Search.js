import React, { useState } from "react";
import "../styles/search.css";

function Search() {
  const [searchValue, setSearchValue] = useState("");

  function handleChange(event) {
    setSearchValue(event.target.value);
  }

  return (
    <div>
      <div className="searchbar">
        <input type="text" value={searchValue} onChange={handleChange} />
      </div>
    </div>
  );
}

export default Search;
