export default function Loginpage(){
    return (
        
        <div className="w-full h-screen bg-[url('/login.jpg')] bg-ceter bg-cover flex flex-col justify-center items-center">
           <div className="w-[50%] h-full ">

           </div>
           <div className="w-[50%] h-full flex justify-center items-center">
                <div className="w-[500px] h-[600px] backdrop-blur-md rounded-[20px] shadow-xl flex flex-col justify-center items-center">
                    // Login Form
                    <input className="w-[300px] h-[50px]  border border-[#c3efe9] rounded-[20px] mb-[20px]"></input>
                    // Password Form
                    <input type="password" className="w-[300px] h-[50px]  border border-[#c3efe9] rounded-[20px] mb-[10px]"></input>
                    // Remember Me Checkbox
                    <button className="w-[300px] h-[50px] bg-[#c3efe9] rounded-[20px] mt-10">Login</button>
                </div>
           </div>
        </div>
    )
}

