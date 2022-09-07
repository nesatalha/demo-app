import React, { useState } from "react";
import Card from "../UI/Card";
import PresentationsFilter from "./PresentationsFilter";
import PresentationsList from "./PresentationsList";

import Data from "../data.json";

import "./Presentations.css";

function Presentations(props) {
  const [filteredYear, setFilteredYear] = useState("2019");
  const [searchText, setSearchText] = useState("");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(filteredYear);
  };

  const filterTextChangeHandler = (textInput) => {
    setSearchText(textInput);
    console.log(searchText);
  };

  const filteredPresentations1 = Data.filter((pres) => {
    if (searchText === "") {
      return pres;
    } else {
      return (
        pres.bilimsel_konu.toLowerCase().includes(searchText) +
        pres.konusmaci.toLowerCase().includes(searchText)
      );
    }
  });

  const filteredPresentations = filteredPresentations1.filter((pres) => {
    return pres.tarih.includes(filteredYear);
  });

  return (
    <Card className="presentations">
      <PresentationsFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
        onChangeFilterText={filterTextChangeHandler}
      />
      <PresentationsList items={filteredPresentations} />
    </Card>
  );
}

export default Presentations;
