import React, { useState, useEffect } from 'react'
import withProduct from './withProduct';

// This component will show Products in a Table View
function AdminProductList({products}) {
    
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
                {products && products.length > 0 && products.map((p)=>{
                    return (
                        <tr key={p.title}>
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
