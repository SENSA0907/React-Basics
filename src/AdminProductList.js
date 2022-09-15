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
                        <tr key={p.id}>
                            <td>{p.firstName}</td>
                            <td>{p.lastName}</td>
                            <td>{p.age}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default withProduct({type: 'users'})(AdminProductList);
