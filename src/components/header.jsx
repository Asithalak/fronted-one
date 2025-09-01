import { Link, NavLink } from "react-router-dom"



export default function Header(){
    console.log("Header Loading...")
    return (
        <div className="bg-green-200">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/*"><h1>404-NOT FOUND</h1></Link>
        </div>
    )
}