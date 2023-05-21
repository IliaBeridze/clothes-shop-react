import React, { useState } from "react";
import "./Filter.scss";
import SearchInput from "./SearchInput";
import FilterSize from "./FilterSize";
import FilterPrice from "./FilterPrice";
import FilterStyle from "./FilterStyle";
import FilterColor from "./FilterColor";
import { logDOM } from "@testing-library/react";

export default function Filter({ Mokdata, filteredData }) {
  const FilterSizeBtn = [36, 38, 40, 42, 44, 46];
  const FilterStyleBtn = ["SLIM", "CLASSIC", "REGULAR", "TAILORED"];
  const FilterColorBtn = [
    "#fff9f2",
    "#efefef",
    "#dfe6e9",
    "#4d8888",
    "#a71a1b",
    "#0461a8",
    "#636e72",
    "#2d3436",
  ];
  const [size, setSize] = useState(null);
  const [style, setStyle] = useState(null);
  const [color, setColor] = useState(null);
  const [price, setPrice] = useState(null);
  const [input, setInput] = useState(null);

  function getInputValue(e) {
    setInput(e.target.value);
  }
  function getSizeValue(e) {
    setSize(e.target.value);
  }
  function getStyleValue(e) {
    setStyle(e.target.value);
  }
  function getColorValue(e) {
    setColor(e.target.value);
  }
  function getPriceValue(e) {
    setPrice(e.target.value);
  }
  console.log(input);

  return (
    <div className="filter">
      <button
        onClick={() => {
          Mokdata.filter((item) => {
            // console.log(item.size , Number(size));
            if (Number(size) === item.size) {
              console.log(item);
              return filteredData(item);
            }
            if (style === item.fit) {
              console.log(item);
              return filteredData(item);
            }
            if (color === item.color) {
              console.log(item);
              return filteredData(item);
            }
            if (price >= item.price) {
              console.log(item);
              return filteredData(item);
            }
            if (input=== item.category) {
              console.log('asa');
              return filteredData(item);
            }
          });
        }}
      >
        go on
      </button>
      <p>Home/ All Products</p>
      <h2 className="filter-label">FILTER BY</h2>
      <SearchInput getInputValue={getInputValue} />
      <h2 className="filter-label">Size </h2>
      <FilterSize
        FilterSizeBtn={FilterSizeBtn}
        getValue={getSizeValue}
        size={size}
      />
      <h2 className="filter-label">Price </h2>
      <FilterPrice Mokdata={Mokdata} getPriceValue={getPriceValue} />
      <h2 className="filter-label">Fit</h2>
      <FilterStyle
        FilterStyleBtn={FilterStyleBtn}
        getStyleValue={getStyleValue}
      />
      <h2 className="filter-label">Color</h2>
      <FilterColor
        FilterColorBtn={FilterColorBtn}
        getColorValue={getColorValue}
      />
    </div>
  );
}
