import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import techProduct from "../data/techProduct";

import "../css/order.css";
export default function Order() {
  const [viewType, setViewType] = useState("grid");
  const [wishlist, setWishlist] = useState({});

  return (
    <div className="pageContainer">
      <Header />
      <div className="content">
        <p id="navigation-text">
          Home &ensp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#1f1f1f">
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
          &ensp; Order &ensp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#1f1f1f">
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
          &ensp; Product
        </p>
        <div className="main-order-area">
          <aside className="sideContainerOrder">
            <div className="Category">
              <div className="headSide">
                <h3>Category</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#1f1f1f">
                  <path d="M480-525 291-336l-51-51 240-240 240 240-51 51-189-189Z" />
                </svg>
              </div>
              <ul>
                <li>Automobiles</li>
                <li>Clothes and wear</li>
                <li>Home interior</li>
                <li>Computer and tech</li>
                <li className="SeeMore">See All</li>
              </ul>
            </div>
            <div className="Brands">
              <div className="headSide">
                <h3>Brands</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#1f1f1f">
                  <path d="M480-525 291-336l-51-51 240-240 240 240-51 51-189-189Z" />
                </svg>
              </div>
              <ul>
                <li>
                  {" "}
                  <label>

                  <input type="checkbox" className="checkboxInput" /> Automobiles
                  </label>
                </li>
                <li>
                  {" "}
                   <label>
                  <input type="checkbox" className="checkboxInput" /> Clothes and wear
                   </label>
                </li>
                <li>
                  {" "}
                   <label>

                  <input type="checkbox" className="checkboxInput" /> Home interior
                   </label>
                </li>
                <li>
                  {" "}
                   <label>

                  <input type="checkbox" className="checkboxInput" /> Computer and tech
                   </label>
                </li>
                <li className="SeeMore">See All</li>
              </ul>
            </div>
            <div className="Features">
              <div className="headSide">
                <h3>Features</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#1f1f1f">
                  <path d="M480-525 291-336l-51-51 240-240 240 240-51 51-189-189Z" />
                </svg>
              </div>
              <ul>
                <li>
                  {" "}
                   <label>

                  <input type="checkbox" className="checkboxInput" /> Automobiles
                   </label>
                </li>
                <li>
                  {" "}
                   <label>

                  <input type="checkbox" className="checkboxInput" /> Clothes and wear
                   </label>
                </li>
                <li>
                  {" "}
                   <label>

                  <input type="checkbox" className="checkboxInput" /> Home interior
                   </label>
                </li>
                <li>
                  {" "}
                   <label>

                  <input type="checkbox" className="checkboxInput" /> Computer and tech
                   </label>
                </li>
                <li className="SeeMore">See All</li>
              </ul>
            </div>
            <div className="priceRange">
              <div className="headSide">
                <h3>Price Range</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#1f1f1f">
                  <path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z" />
                </svg>
              </div>
            </div>
            <div className="condition">
              <div className="headSide">
                <h3>Condition</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#1f1f1f">
                  <path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z" />
                </svg>
              </div>
            </div>
            <div className="Rating">
              <div className="headSide">
                <h3>Ratings</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#1f1f1f">
                  <path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z" />
                </svg>
              </div>
            </div>
            <div className="Manufacturer">
              <div className="headSide">
                <h3>Manufacturer</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#1f1f1f">
                  <path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z" />
                </svg>
              </div>
            </div>
          </aside>
          <div className="mainContainer">
            <div className="upperBox">
              <p className="para-of-upperBox">
                {Math.ceil(Math.random() * 20000)} items in Mobile accessory
              </p>
              <div className="rightSide">
                <p id="checkBox">
                  {" "}
                   <label>

                  <input type="checkbox" className="checkboxInput" /> Verified Only
                   </label>
                </p>
                <div className="dropdown">
                  <button className="dropdownBtn">
                    <span>Featured</span>
                    &ensp;&ensp;&ensp;&ensp;&ensp;<span>⌵</span>
                  </button>
                  <div className="dropdown-content">
                    <a href="#">United States</a>
                    <a href="#">United Kingdom</a>
                    <a href="#">France</a>
                  </div>
                </div>
                <div className="toggleWrapper">
                  <button
                    className={`toggleBtn ${viewType === "grid" ? "active" : ""}`}
                    onClick={() => setViewType("grid")}>
                    🔲
                  </button>
                  <button
                    className={`toggleBtn ${viewType === "list" ? "active" : ""}`}
                    onClick={() => setViewType("list")}>
                    ☰
                  </button>
                </div>
              </div>
            </div>

            <div className="filterApplied">
              <div id="first-row" className={`productList ${viewType}`}>
                {techProduct.slice(0, 4).map((product) => (
                  <div key={product.id} className="productCardWrapper">
                    <div
                      className="wishAdd"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setWishlist((prev) => ({
                          ...prev,
                          [product.id]: !prev[product.id],
                        }));
                      }}>
                      {wishlist[product.id] ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="40px"
                          viewBox="0 -960 960 960"
                          width="40px"
                          fill="#e60023">
                          <path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="40px"
                          viewBox="0 0 24 24"
                          width="40px"
                          fill="#888">
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                      )}
                    </div>

                    {/* Product Card Link */}
                    <Link
                      to={`/products/${product.id}`}
                      className="Intproducts p"
                      style={{ textDecoration: "none", color: "inherit" }}>
                      <div className="productCard">
                        <img src={product.image} alt={product.name} className="productImage" />
                        <hr id="cardSeperator" />
                        <div className="priceHead">
                          <div className="priceAmount">
                            <p>$ {(parseFloat(product.price) + 10).toFixed(2)}</p>&ensp;
                            <p className="cancalPrice">
                              $ {(parseFloat(product.price) + 30).toFixed(2)}
                            </p>
                          </div>
                        </div>

                        <div className="priceContent">
                          <p className="contentOfPrice">GoPro HERO6 4K Action</p>
                          <p className="contentOfPrice">Camera - Black</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div id="second-row" className={`productList ${viewType}`}>
                {techProduct.slice(4).map((product) => (
                  <div key={product.id} className="productCardWrapper">
                    <div
                      className="wishAdd"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setWishlist((prev) => ({
                          ...prev,
                          [product.id]: !prev[product.id],
                        }));
                      }}>
                      {wishlist[product.id] ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="40px"
                          viewBox="0 -960 960 960"
                          width="40px"
                          fill="#e60023">
                          <path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="40px"
                          viewBox="0 0 24 24"
                          width="40px"
                          fill="#888">
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                      )}
                    </div>

                    {/* Product Card Link */}
                    <Link
                      to={`/products/${product.id}`}
                      className="Intproducts p"
                      style={{ textDecoration: "none", color: "inherit" }}>
                      <div className="productCard">
                        <img src={product.image} alt={product.name} className="productImage" />
                        <hr id="cardSeperator" />
                        <div className="priceHead">
                          <div className="priceAmount">
                            <p>$ {(parseFloat(product.price) + 10).toFixed(2)}</p> &ensp;
                            <p className="cancalPrice">
                              $ {(parseFloat(product.price) + 30).toFixed(2)}
                            </p>
                          </div>
                        </div>

                        <div className="priceContent">
                          <p className="contentOfPrice">GoPro HERO6 4K Action</p>
                          <p className="contentOfPrice">Camera - Black</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className=" upperBox pagination-container ">
                <div className="dropdown">
                  <button className="dropdownBtn">
                    <span>Show 10</span>
                    &ensp;&ensp;&ensp;&ensp;&ensp;<span>⌵</span>
                  </button>
                  <div className="dropdown-content">
                    <a href="#">Show 20</a>
                    <a href="#">Show 50</a>
                    <a href="#">Show 100</a>
                  </div>
                </div>

                <div className="pagination">
                  <button className="page-btn">&lt;</button>
                  <button className="page-btn active">1</button>
                  <button className="page-btn">2</button>
                  <button className="page-btn">3</button>
                  <button className="page-btn">&gt;</button>
                </div>
              </div>
          </div>
        </div>
        <div className="emptyContainer">

        </div>
      </div>
        <Footer/>
    </div>
  );
}
