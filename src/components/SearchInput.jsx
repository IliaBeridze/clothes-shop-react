import "./SearchInput.scss";
import React from "react";

export default function SearchInput({getInputValue}) {
  return <input type="search" className="search-input" onChange={getInputValue} placeholder="Search" />;
}
