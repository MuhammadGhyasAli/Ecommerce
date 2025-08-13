import React from "react";
import { Link } from "react-router-dom";
import "../css/productPage.css";
import products from "../data/products";

function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="Intproducts p"
      style={{ textDecoration: "none", color: "inherit" }}
      aria-label={`View details of ${product.name}`}>
      <div>
      
        <img className="product-img" src={product.image} alt={product.name} />
     
        <p className="pPheading">{product.name}</p>
        <p className="price">
          From <br /> USD {product.price}
        </p>
      </div>
    </Link>
  );
}
export default function productPageItems() {
  return (
    <>
      <h2 className="product-heading">Related products</h2>
    <div className="productPageCard">
    <div className="productPageData">
      <div id="productPageItems" className="product-page-items">
        <div id="productsData">
          <div id="row-one">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div></div></>
  );
}
