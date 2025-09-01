import { Link } from "react-router-dom"
export default function AdminPages(){
    return (
        <div className="w-full h-screen bg-red-700 flex">
           {/* Sidebar */}
           <div className="h-full w-[300px] bg-blue-500 flex flex-col">
                <Link to="/admin/product">Products</Link>
                <Link to="/admin/category">Categories</Link>
                <Link to="/admin/user">Users</Link>
           </div>
           <div className="h-full w-[calc(100%-300px)] bg-yellow-500">

           </div>
        </div>
    )
}
