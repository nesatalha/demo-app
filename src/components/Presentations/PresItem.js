import React from "react";
import Card from "../UI/Card";

import "./PresItem.css";

function PresItem(props) {
  return (
    <li>
      <Card className="pres-item">
        <span className="pres-item__description">{props.title}</span>
        <span>{props.speaker}</span>
        <span className="pres-item__date">{props.date}</span>
      </Card>
    </li>
  );
}

export default PresItem;
