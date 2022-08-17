import React, { useState, useEffect } from "react";
import withProduct from "./withProduct";

// This component will show list of Products in Tile View
function ProductList() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data.products);
      });
  }, []);
  return (
    <div className="product-container">
      {product &&
        product.length > 0 &&
        product.map((p) => {
          return (
            <div className="product-wrapper">
              <img className="product-image" src={p.images[0]} alt={p.description} />
              <h4>{p.title}</h4>
              <p>{p.description}</p>
            </div>
          );
        })}
    </div>
  );
}


export default withProduct(ProductList);