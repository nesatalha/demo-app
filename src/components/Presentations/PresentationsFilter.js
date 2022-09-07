import React, { useState } from "react";

import "./PresentationsFilter.css";

function PresentationsFilter(props) {
  const [inputValue, setInputValue] = useState("");

  const dropdownChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };

  const searchHandler = (e) => {
    setInputValue(e.target.value);
    props.onChangeFilterText(e.target.value);
  };

  return (
    <div className="presentations-filter">
      <div className="presentations-filter__control">
        <label>Filter by Year</label>
        <select onChange={dropdownChangeHandler} value={props.selected}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
        <input onChange={searchHandler} value={inputValue}></input>
      </div>
    </div>
  );
}

export default PresentationsFilter;
