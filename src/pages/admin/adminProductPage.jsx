import React, { useState } from "react";
import { sampleProduct } from "../../assets/sampleData";
export default function AdminProductPage(){
    const [products,setProducts]=useState(sampleProduct)
    
    return (
        <div className="w-full h-full bg-white max-h-full overflow-scroll">
            <table className="w-full">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Lablled Price</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead> 
                <tbody>
                  {
                    products.map((items,index)=>{ 
                        return (//use key function and table row and table data
                            <tr key={index}>
                                <td>{items.productId}</td>
                                <td>{items.name}</td>
                                <td>
                                    <img src={items.images[0]} className="w-[100px] h-[100px] object-cover"/>
                                </td>
                                <td>{items.labelledPrice}</td>
                                <td>{items.price}</td>
                                <td>{items.stock}</td> 
                            </tr>
                          )
                    })
                  }
                </tbody>
                </table> 
        </div >
    )
}   