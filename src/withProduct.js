import React, { useState, useEffect } from "react";

const withProduct = (Component) => {
  // withAuth HOC, to check whether user is authonticated or not
  // if authenticated, give back the same Component
  // if not authenticated, give fallback component (404 component)

  // getData();

  const NewComponent = (props) => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
      fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setProduct(data.products);
        });
    }, []);
    return <Component products={product} {...props}></Component>;
  };
  return NewComponent;
};

export default withProduct;
