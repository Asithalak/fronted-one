import { useState } from "react"

export default function TestPages(){
    //hooks function
   const[a,b]=useState(0) 
    //a is variable
    //b is function
    return(

           <div className="w-full h-screen  flex justify-center items-center">
                <div className ="w-[450px] h-[250px] shadow flex justify-center items-center "> 
                    <button onClick={() =>{
                       count = count - 1
                    }
                }  className="w-[100px] h-[100px] bg-blue-500 text-white text-center w-[100px] h-[40px] cursor-pointer">-</button>

                    <span className="text-[30px] mx-[10px] w-[100px] h-[40px] flex justify-center items-center">{count}</span>
                    <button onClick={() =>{
                        count = count + 1
                    }} className="w-[100px] h-[100px] bg-blue-500 text-white text-center w-[100px] h-[40px] text-[20px] cursor-pointer">+</button>
                </div>
        </div>
    )
}