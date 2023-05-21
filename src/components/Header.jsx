import React from 'react'
import "./Header.scss" 
import gentleman from "./assets/gentleman.svg"
import group from "./assets/Group 15.svg"
import pinBlack from "./assets/pin-black.svg"
import userBlack from "./assets/user-black.svg"
import bagBlack from "./assets/bag-black.svg"


export default function Header() {
  return (
    <header className="header">
        <button className="burger-menu">
          <img src={group} alt="#" />
        </button>
        <div className="header-logo">
          <div className="header-logo-wrap">
            <img
              className="header-logo-heat"
              src={gentleman}
              alt="###"
            />
            <span className="header-logo-text">BG</span>
          </div>
          <span className="header-logo-label">BE GENTLEMAN</span>
        </div>

        <ul className="actions-wrapper">
           
          <li className="header-action">
            <a href="#"> <img src={pinBlack} alt="###" /> </a>
          </li>
          <li className="header-action">
            <a href="#"> <img src={userBlack} alt="###" /> </a>
          </li>
          <li className="header-action">
            <a href="#"> <img src={bagBlack} alt="###" /></a>
          </li>
          
        </ul>
      </header>
  )
}
