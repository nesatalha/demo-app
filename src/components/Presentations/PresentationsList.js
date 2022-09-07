import React from "react";
import PresItem from "./PresItem";

import "./PresentationsList.css";

function PresentationsList(props) {
  if (props.items.length === 0) {
    return <h2 className="presentations-list__fallback">Bulunamadı...</h2>;
  }
  return (
    <ul className="presentations-list">
      {props.items.map((pre) => (
        <PresItem
          title={pre.bilimsel_konu}
          speaker={pre.konusmaci}
          date={pre.tarih}
        />
      ))}
    </ul>
  );
}

export default PresentationsList;
