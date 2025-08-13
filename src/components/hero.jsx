import React from "react";
import "../css/hero.css";
export default function hero() {
  return (
    <div className="heroContainer" id="categoryNlogin">
      <aside className="sideContainer">
        <ul>
          <li>Automobiles</li>
          <li>Clothes and wear</li>
          <li>Home interior</li>
          <li>Computer and tech</li>
          <li>Tools, equipments</li>
          <li>Sports and outdoor</li>
          <li>Animal and pets</li>
          <li>Machinery tools</li>
          <li>More category</li>
        </ul>
      </aside>
      <img src="/Brand/Image/hero.svg" alt="" className="banner" />
      <aside  id="login">
      
          <div id="topUp-1">
            <div>
              <img src="/Brand/icons/login Ico.png" alt="Brand.com"/>
              <p>
                Hi, user <br/>
                let's get started
              </p>
            </div>
            <p className="joinBtn">Join now</p>
            <p className="logBtn">Login</p>
          </div>
          <div id="topUp-2">
            <p>Get US 10$ off with a new supplier</p>
          </div>
          <div id="topUp-3">
            <p>Send quotes with supplier preferences</p>
          </div>
        
      </aside>
    </div>
  );
}
