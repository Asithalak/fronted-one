import { useState } from "react"

export default function TestPages(){
   
   const[count,setcount]=useState(0) 
   const[status,setStatus]=useState("Passed") 

    return(

           <div className="w-full h-screen  flex justify-center items-center flex-col">
                <div className ="w-[450px] h-[250px] shadow flex justify-center items-center "> 
                    <button onClick={() =>{
                       setcount(count - 1)
                    }
                }  className="w-[100px] h-[100px] bg-blue-500 text-white text-center w-[100px] h-[40px] cursor-pointer">-</button>

                    <span className="text-[30px] mx-[10px] w-[100px] h-[40px] flex justify-center items-center">{count}</span>
                    <button onClick={() =>{
                        setcount(count + 1)
                    }} className="w-[100px] h-[100px] bg-blue-500 text-white text-center w-[100px] h-[40px] text-[20px] cursor-pointer">+</button>
                </div>

                <div className ="w-[450px] h-[250px] shadow flex flex-col justify-center items-center "> 
                        <span className="text-[30px] mx-[10px] text-center w-[100px] h-[40px] flex justify-center items-center">
                            {status}
                        </span>
                    <div>   
                    <button className="w-[100px] h-[100px] bg-blue-500 text-white text-center w-[100px] h-[40px] cursor-pointer m-[10px]" 
                    onClick={() =>{
                        setStatus("Passed")
                    }  }
                    >Passed</button>

                   
                    <button  className="w-[100px] h-[100px] bg-blue-500 text-white text-center w-[100px] h-[40px] text-[20px] cursor-pointer m-[10px]" 
                    onClick={() =>{
                        setStatus("Failed")
                    }}>Failed</button>

                    </div> 
                    </div>

            </div>
    )
}