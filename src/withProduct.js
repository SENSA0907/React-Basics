import React, { useState, useEffect } from "react";

const withProduct = (propdata) => (Component) => {
  // withAuth HOC, to check whether user is authonticated or not
  // if authenticated, give back the same Component
  // if not authenticated, give fallback component (404 component)

  // getData();

  const NewComponent = (props) => {
    const [product, setProduct] = useState([]);
    console.log(props)
    useEffect(() => {
      fetch(`https://dummyjson.com/${propdata.type}`)
        .then((response) => response.json())
        .then((data) => {
          if (propdata.type === 'products') {
            setProduct(data.products);
          } else {
            setProduct(data.users);
          }
          
        });
    }, [props]);
    return <Component products={product} {...props}></Component>;
  };
  return NewComponent;
};

export default withProduct;
