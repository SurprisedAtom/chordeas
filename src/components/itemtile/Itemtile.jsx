import React from "react";

function itemtile({ prop, onClick }) {
  return (
    <li
      onClick={onClick}
      style={{ cursor: "Pointer", listStyleType: "none", marginLeft: "20px" }}
    >
      {prop}
    </li>
  );
}

export default itemtile;
