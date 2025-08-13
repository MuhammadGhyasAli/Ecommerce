import React from "react";
import { Link } from "react-router-dom";
import "../css/interior.css";
import products from "../data/products";
function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="Intproducts p"
      style={{ textDecoration: "none", color: "inherit" }}
      aria-label={`View details of ${product.name}`}>
      <div>
        <p className="heading">{product.name}</p>
        <p className="price">
          From <br /> USD {product.price}
        </p>
      </div>
      <img className="product-img" src={product.image} alt={product.name} />
    </Link>
  );
}
export default function InteriorProduct() {
  return (
    <div id="interiorProducts" className="interiorProducts">
      <div id="imgDiv" className="leftInterior">
        <img src="/Brand/Image/interior/background.jpg" className="left-asideimg" alt="Brand" />
        <h2>Home and Outdoor</h2>
        <button>
          <a href="page1.html"> Source now</a>
        </button>
      </div>
      <div id="products" className="productArea">
        <div id="row-one">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div id="second-row">
          {products.slice(4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
