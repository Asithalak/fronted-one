import React, { useState } from "react";
import { sampleProduct } from "../../assets/sampleData";
export default function AdminProductPage(){
    const [products,setProducts]=useState(sampleProduct)
    
    return (
        <div className="w-full h-full bg-white max-h-full overflow-scroll">
            <table className="w-full">
                <thead>/*table header*/
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
                    <tr>
                        <td>PROD2001</td>
                        <td>Product 1</td>
                        <td>Vitamin C Brightening Serum</td>
                        <td><img src="https://example.com/images/serum_vitc_1.jpg" className="w-[50px] h-[50px]"/></td>
                        <td>20</td>
                        <td>30.5</td>
                        <td>60</td>
                    </tr>
                </tbody>
                </table> 
        </div >
    )
}   