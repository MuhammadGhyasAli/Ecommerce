import React from 'react';
import { Link } from 'react-router-dom';
import '../css/interior.css';
import products from '../data/techProduct';
function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="Intproducts p"
      style={{ textDecoration: 'none', color: 'inherit' }}
      aria-label={`View details of ${product.name}`}
    >
      <div>
        <p className="heading">{product.name}</p>
        <p className="price">From <br /> USD {product.price}</p>
      </div>
      <img className='product-img' src={product.image} alt={product.name} />
    </Link>
  );
}
 export default function InteriorProduct() {
  return (
    <div id="interiorProducts" className="interiorProducts">
      <div id="imgDiv">
        <img src="/Brand/Image/tech/11.svg" className="left-asideimg" alt="Brand" />
      </div>
      <div id="products">
        <div id="row-one">
          {products.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div  id="second-row">
          {products.slice(4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
