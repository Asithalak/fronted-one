export default function TestPages(){
   let count = 0; //use state for count & span 
    return(

           <div className="w-full h-screen  flex justify-center items-center">
                <div className ="w-[450px] h-[250px] shadow flex justify-center items-center "> 
                    <button className="w-[100px] h-[100px] bg-blue-500 text-white text-center w-[100px] h-[40px]">-</button>

                    <span className="text-[30px] mx-[10px]">{count}</span>
                    <button className="w-[100px] h-[100px] bg-blue-500 text-white text-center w-[100px] h-[40px] text-[20px]">+</button>
                </div>
        </div>
    )
}