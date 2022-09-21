import React, { useState, useEffect } from "react";
import withAuth from "./withAuth";
import withProduct from "./withProduct";
import Counter from "./Counter";
import { Audio } from "react-loader-spinner";
import {SyncLoader} from "react-spinners";

// This component will show list of Products in Tile View
function ProductList(props) {
  const { products, incrementValue } = props;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (products.length > 0) {
      setIsLoading(false);
    }
  }, [products]);
  return (
    <>
      <Counter incrementDecrementValue={incrementValue} />
      {isLoading === true ? (
        <SyncLoader color="#36d7b7" />
      ) : (
        <div className="product-container">
          {products &&
            products.length > 0 &&
            products.map((p) => {
              return (
                <div
                  className="product-wrapper"
                  key={p.title}
                  title="Product Title"
                >
                  <img
                    className="product-image"
                    src={p.images[0]}
                    alt={p.description}
                  />
                  <h4>{p.title}</h4>
                  <p>{p.description}</p>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
}

export default React.memo(withProduct({ type: "products" })(ProductList));
