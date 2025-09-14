import { useState } from "react"

export default function Loginpage(){

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    function handleLogin(){
        console.log(email)
        console.log(password)
    }
    return (
        
        <div className="w-full h-screen bg-[url('/Login.jpg')] bg-ceter bg-cover flex flex-col justify-center items-center">
           <div className="w-[50%] h-full ">

           </div>
           <div className="w-[50%] h-full flex justify-center items-center">
                <div className="w-[500px] h-[600px] backdrop-blur-md rounded-[20px] shadow-xl flex flex-col justify-center items-center">
                    <input 
                    onChange={
                        (e)=>{
                            setEmail(e.target.value)
                        } 
                    }
                    className="w-[300px] h-[50px]  border border-[#c3efe9] rounded-[20px] mb-[20px]"></input>
                    <input 
                    onChange={
                        (e)=>{
                            setPassword(e.target.value)
                        }
                    }
                    type="password" className="w-[300px] h-[50px]  border border-[#c3efe9] rounded-[20px] mb-[10px]"></input>
                    <button onClick={handleLogin} className="w-[300px] cursor-pointer h-[50px] bg-[#c3efe9] rounded-[20px] mt-10">Login</button>
                </div>
           </div>
        </div>
    )
}


