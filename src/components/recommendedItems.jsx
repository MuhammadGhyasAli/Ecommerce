import React from 'react';
import { Link } from "react-router-dom";
import "../css/recommendedItems.css";
import recommendedData from '../data/recomendedData';
export default function RecommendedItems() {
  return (
    <div id="recommendedItems">
      <div>Recommended items</div>
      <div id="products">
        <div id="first-row">
          {recommendedData.slice(0, 5).map((product, index) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="recomdProd p"
              id={`product-${index + 1}`}
              data-set={product.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img src={product.image} alt="Recommendation" />
              <p className="priceRecomended">${product.price}</p>
              <p className="description">
                {product.description.split(', ').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </Link>
          ))}
        </div>

        <div id="second-row">
          {recommendedData.slice(5).map((product, index) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="recomdProd p"
              id={`product-${index + 6}`}
              data-set={product.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img src={product.image} alt="Recommendation" />
              <p className="priceRecomended">$ {product.price}</p>
              <p className="description">
                {product.description.split(', ').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
