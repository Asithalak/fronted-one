import { Link, Routes, Route} from "react-router-dom"
import AdminProductPage from "./admin/adminProductPage"
export default function AdminPages(){
    return (
        <div className="w-full h-screen  flex">
         
           <div className="h-full w-[300px]  flex flex-col">
                <Link to="/admin/product">Products</Link>
                <Link to="/admin/category">Categories</Link>
                <Link to="/admin/user">Users</Link>
           </div>
        
           <div className="h-full w-[calc(100%-300px)] bg-yellow-500">
                <Routes path="/*">
                    <Route path="/product" element={<AdminProductPage />} />
                    <Route path="/category" element={<h1>Category</h1>} />
                    <Route path="/user" element={<h1>User</h1>} />
                </Routes>
           </div>
        </div>
    )
}
