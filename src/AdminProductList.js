import React, { useState, useEffect } from 'react'
import withProduct from './withProduct';

// This component will show Products in a Table View
function AdminProductList() {
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
    <div>
        <table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Product Description</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {product && product.length > 0 && product.map((p)=>{
                    return (
                        <tr>
                            <td>{p.title}</td>
                            <td>{p.description}</td>
                            <td>{p.price}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default withProduct(AdminProductList);
