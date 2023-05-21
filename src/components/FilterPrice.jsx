import React from "react";
import "./FilterPrice.scss";
export default function FilterPrice({ Mokdata, getPriceValue }) {
  // {Mokdata.filter((item)=>{
  //   console.log(item.price);
  //   console.log(Math.min(item.price));
  // })}

  return (
    <div>
      <div class="price-range">
        <span class="min-price"></span>

        <span class="max-price"></span>
      </div>
      <input
        class="input-range"
        onChange={getPriceValue}
        min="100"
        max="200"
        type="range"
      />
    </div>
  );
}
