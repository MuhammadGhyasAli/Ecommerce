import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/header";
import Deals from "../components/deal";
import Footer from "../components/footer";
import PageData from "../components/productPageItems";
import { useCart } from "../context/CartContext";

// Data
import products from "../data/products";
import deals from "../data/dealProducts";
import recommendedData from "../data/recomendedData";
import techProducts from "../data/techProduct";


// CSS
import "../css/productdetails.css";

const ProductDetails = () => {
  const { id } = useParams();
   const { addToCart } = useCart();
  const navigate = useNavigate(); 

  const allProducts = [...products, ...techProducts, ...deals, ...recommendedData];
  const product = allProducts.find((p) => p.id === id);

  if (!product) return <h2>404! Page Not Found</h2>;

  const handleShopNow = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="productDetail">
      <Header />

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
        &ensp; Product &ensp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#1f1f1f">
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
        </svg>
        &ensp; {product.name}
      </p>

      <section id="content-area">
        <section id="content-area-first-section">
          {/* Product Image */}
          <div id="product-img">
            <img src={product.image} alt={product.name} />
          </div>

          {/* Product About */}
          <div id="productAbout">
            <p className="stock">{product.stock ? "In stock" : "Out of stock"}</p>
            <h2 id="name">{product.name}</h2>

            {/* Rating, Reviews, Sold */}
            <div id="ratingNetc">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={`fa fa-star ${index < (product.rating || 0) ? "checked" : ""}`}></span>
              ))}
              <p className="checked">{(product.rating || 0) * 2}/10</p>
              <p>
                •{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16px"
                  viewBox="0 -960 960 960"
                  width="16px"
                  fill="#1f1f1f">
                  <path d="m363-390 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
                </svg>{" "}
                {product.reviews || 0} reviews
              </p>
              <p>
                •{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16px"
                  viewBox="0 -960 960 960"
                  width="16px"
                  fill="#1f1f1f">
                  <path d="m40-240 20-80h220l-20 80H40Zm80-160 20-80h260l-20 80H120Zm623 240 20-160 29-240 10-79-59 479ZM240-80q-33 0-56.5-23.5T160-160h583l59-479H692l-11 85q-2 17-15 26.5t-30 7.5q-17-2-26.5-14.5T602-564l9-75H452l-11 84q-2 17-15 27t-30 8q-17-2-27-15t-8-30l9-74H220q4-34 26-57.5t54-23.5h80q8-75 51.5-117.5T550-880q64 0 106.5 47.5T698-720h102q36 1 60 28t19 63l-60 480q-4 30-26.5 49.5T740-80H240Zm220-640h159q1-33-22.5-56.5T540-800q-35 0-55.5 21.5T460-720Z" />
                </svg>{" "}
                {product.sold || 0} sold
              </p>
            </div>

            {/*  New Pricing Tiers Block */}
            <div id="piecesContainer">
              <div>
                <p className="active">
                  <strong>USD $ {Math.ceil((product.price * 4) / 10) * 10}</strong>
                </p>
                <p>50 - 100 pcs</p>
              </div>
              <div className="centerDiv">
                <p className="active">
                  <strong>USD $ {Math.round((product.price * 5) / 10) * 10}</strong>
                </p>
                <p>100 - 700 pcs</p>
              </div>
              <div>
                <p className="active">
                  <strong>USD $ {Math.floor((product.price * 8) / 10) * 10}</strong>
                </p>
                <p>700+ pcs</p>
              </div>
            </div>

            <table className="tableClass">
              <tbody>
                <tr>
                  <td>
                    <span className="value">Price:</span>
                  </td>
                  <td className="price">Negotiable</td>
                </tr>
              </tbody>
            </table>

            <hr />
            <table className="tableClass">
              <tbody>
                <tr>
                  <td>
                    <span className="value">Type:</span>
                  </td>
                  <td className="price">Classic shoes</td>
                </tr>

                <tr>
                  <td>
                    <span className="value">Design:</span>
                  </td>
                  <td className="price">Modern nice</td>
                </tr>
                <tr>
                  <td>
                    <span className="value">Type:</span>
                  </td>
                  <td className="price">Classic shoes</td>
                </tr>
              </tbody>
            </table>
            <hr />
            <table className="tableClass">
              <tbody>
                <tr>
                  <td>
                    <span className="value">Customization:</span>
                  </td>
                  <td className="price">Customized logo and custom packages</td>
                </tr>
                <tr>
                  <td>
                    <span className="value">Protection:</span>
                  </td>
                  <td className="price">Refund Policy</td>
                </tr>
                <tr>
                  <td>
                    <span className="value">Warrenty:</span>
                  </td>
                  <td className="price">2 years full warrenty</td>
                </tr>
              </tbody>
            </table>
            <hr />
          </div>

          {/* Dealer Info */}
          <div id="dealerInfo">
            <div id="name">
              <img src="/Brand/icons/login Ico.png" alt="dealer" />
              <h2>{product.seller}</h2>
            </div>
            <p>
              <img src="/Brand//flags/GE.png" alt="flag" /> {product.country}
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#1f1f1f">
                <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" />
              </svg>
              &nbsp; Verified Seller
            </p>
            <button id="inquiry" type="button">
              Send Inquiry
            </button>
            <button type="button">Seller's profile</button>
          </div>
        </section>

        {/* Deals Below */}
        <div className="dealInProducts">
          <Deals />
        </div>
        <section id="content-area-second-section">
          <div id="productcompleteInfo">
            <div id="headings">
              <h3 className="active">Description</h3>
              <h3>Reviews</h3>
              <h3>Shipping</h3>
              <h3>About Seller</h3>
            </div>
            <p className="des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat justo eget
              porttitor pulvinar. Nam ante sapien, accumsan non egestas a, interdum eget nisl. Donec
              maximus nec justo a consectetur. Nulla a semper ex. Duis viverra lacinia magna. Mauris
              interdum porttitor massa at rhoncus. In rutrum nisl dolor, ac ornare diam luctus non.
              Mauris sed elementum sapien, quis posuere ligula. Etiam arcu purus, ultricies eu enim
              vitae, semper scelerisque ipsum.
              <br />
              Phasellus pulvinar orci ut lobortis aliquam. Cras a purus lorem. Cras sagittis
              molestie purus, vel dictum neque sodales vel. Nullam nec placerat tortor. Nam varius
              turpis ac fermentum fringilla. Maecenas suscipit sem nec dignissim porta.
            </p>
            <table>
              <tbody>
                <tr>
                  <td className="key">Model</td>
                  <td>#87876867</td>
                </tr>
                <tr>
                  <td className="key">Style</td>
                  <td>Classic style</td>
                </tr>
                <tr>
                  <td className="key">Certificate</td>
                  <td>ISO-898921212</td>
                </tr>
                <tr>
                  <td className="key">Size</td>
                  <td>34mm x 450mm x 19mm</td>
                </tr>
                <tr>
                  <td className="key">Memory</td>
                  <td>36GB RAM</td>
                </tr>
              </tbody>
            </table>
            <p>✓ Some great feature name here</p>
            <p>✓ Lorem ipsum dolor sit amet, consectetur</p>
            <p>✓ Duis aute irure dolor in reprehenderit</p>
            <p>✓ Some great feature name here</p>
          </div>
          <div id="suggestions">
            <h3 id="title">You may like</h3>
            <article>
              <img alt= "none" src="/Brand/Image/cloth/7.jpg" />
              <div>
                <h4>
                  Men Blazer Sets Elegent
                  <br />
                  Formal
                </h4>
                <p>$7.00 - $99.50</p>
              </div>
            </article>
            <article>
              <img alt= "none" src="/Brand/Image/cloth/1.jpg" />
              <div>
                <h4>
                  Men Blazer Sets Elegent
                  <br />
                  Formal
                </h4>
                <p>$7.00 - $99.50</p>
              </div>
            </article>
            <article>
              <img alt= "none" src="/Brand/Image/cloth/3.jpg" />
              <div>
                <h4>
                  Men Blazer Sets Elegent
                  <br />
                  Formal
                </h4>
                <p>$7.00 - $99.50</p>
              </div>
            </article>
            <article>
              <img alt= "none" src="/Brand/Image/cloth/2.jpg" />
              <div>
                <h4>
                  Men Blazer Sets Elegent
                  <br />
                  Formal
                </h4>
                <p>$7.00 - $99.50</p>
              </div>
            </article>
            <article>
              <img alt= "none" src="/Brand/Image/cloth/5.jpg" />
              <div>
                <h4>
                  Men Blazer Sets Elegent
                  <br />
                  Formal
                </h4>
                <p>$7.00 - $99.50</p>
              </div>
            </article>
          </div>
        </section>
      </section>
      <PageData />
      <section className="orderBtn">
        <div
          className="containerImg"
          >
            <div className="leftArea">
              <h2 className="contentHead">Super discount on more than 100 USD</h2>
            <p className="contentPara">Have you ever finally just write dummy info</p>
            </div>
            <div className="buttonArea">
             <button className="shopBtn" onClick={handleShopNow}>
                Shop now</button>
            </div>
          </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductDetails;
