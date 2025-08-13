import React from "react";
import { Link } from "react-router-dom";

import "../css/header.css";
export default function header() {
  const languages = ["English, UK", "English, US", "English, AUS", "Urdu, PAK", "Turkish, TU"];
 

  return (
    <div className="header">
      <nav className="navTop">
        <div className="logo">
          <Link to="/">
            <img src="/Brand/logo-colored.png" alt="Logo" className="logoImg" />
          </Link>
        </div>
        <div className="searchBar">
          <input type="text" placeholder="Search" className="searchInput" />
          <select className="categorySelect">
            <option>All category</option>
            <option>Books</option>
            <option>Electronics</option>
            <option>Clothing</option>
          </select>

          <button className="searchButton">Search</button>
        </div>
        <div className="iconSide">
          <div className="login">
            <img src="/Brand/icons/Vector.png" alt="Login" className="icon" />
            <div className="textBelowIcon">Login</div>
          </div>
          <div className="message">
            <img src="/Brand/icons/message.png" alt="message" className="icon" />
            <div className="textBelowIcon">Message</div>
          </div>
          <div className="order">
            <Link className="linkIcoActive" to="/order">
            <img src="/Brand/icons/orders.png" alt="order" className="icon" />
            <div className="textBelowIcon">Order</div>
            </Link>
          </div>
          <div className="Cart">
             <Link className="linkIcoActive" to="/cart">
            <img src="/Brand/icons/cart.png" alt="Cart" className="icon" />
            <div className="textBelowIcon">My Cart</div>
            </Link>
          </div>
        </div>
      </nav>
      <nav className="navDown">
        <div className="left">
          
            <li className="listItems" id="hamBurgerList">
              ☰  All category
            </li>
            <li className="listItems">Hot offers</li>
            <li className="listItems">Gift boxes</li>
            <li className="listItems">Projects</li>
            <li className="listItems">Menu item</li>
            <div className="dropdown listItems">
              <li className="dropbtn">
                Help <img className="icon" src="/Brand/icons/expand.png" alt="Expand more" />{" "}
              </li>
              <div className="dropdown-content">
                <Link to="/about">Go to About </Link>
              </div>
            </div>
        </div>
        <div className="right">
          <div className="lang">
            <div className="listLang dropdown">
              <li className="dropbtn">
                English, USD&ensp;
                <img className="icon" src="/Brand/icons/expand.png" alt="Expand more" />
              </li>
              <div className="dropdown-content">
                {languages.map((lang, index) => (
                  <div key={index} className="dropdown-item">
                    <a href="#">{lang}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="country">
          <div className="dropdown">
          <a href="#" className="navItem">
            <span>Ship to</span>
            &ensp; <img className="flagIco" src="/Brand/flags/CN.png" alt="China"/> &ensp;⌵
          </a>
          <div className="dropdown-content">
            <a href="#">United States</a>
            <a href="#">United Kingdom</a>
            <a href="#">France</a>
          </div>
        </div>
            
          </div>
        </div>
      </nav>
    </div>
  );
}
