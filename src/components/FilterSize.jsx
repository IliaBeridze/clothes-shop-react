import React, { useState } from "react";

import "./FilterSize.scss";
export default function FilterSize({ FilterSizeBtn, getValue, size }) {
  let checkActive = size === null ? "" : "active";

  return (
    <div className="size-btns">
      {FilterSizeBtn.map((item) => {
        // console.log(size, item);
        return (
          <button
            onClick={getValue}
            value={item}
            className={`size-btn ${checkActive}`}
            // style={{ background: size === item ? "red" : "blue" }}
            // style={{ background: checkActive  ? "red" : "blue" }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
