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
                        //jsx thula js use kirumata tbody ek thula {} use karanna one
                    }
                </tbody>
                </table> 
        </div >
    )
}   