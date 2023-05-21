import "./Card.scss";
import React from "react";

export default function Card({ Mokdata }) {
 
  return (
    <div className="cards">
      {Mokdata.map((item) => {
        return (
          <div className="card">
            <img className="card-img" src={item.img} alt="img" />
            <div class="card-info">
              <div class="card-category">${item.category}</div>
              <div class="card-title">${item.title}</div>
              <div class="card-description">${item.description}</div>
              <div class="card-price">${item.price}$</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
