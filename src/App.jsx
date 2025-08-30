import './App.css'
import Header from './components/header'
import ProductCard from './components/productCard'

function App() {
 
//screen disign 
  return (
    <div className='w-full h-screen bg-red-100 flex flex-col justify-center items-center'> 
      {/* relative for absolute position */}
      <div className='relative w-[600px] h-[600px] bg-red-500 flex flex-col justify-center items-center' >
        {/* absolute positioned elements */}
        <div className='w-[100px] h-[100px] bg-blue-500 absolute  top-[0px] left-[0px]'> </div>
        <div className='w-[100px] h-[100px] bg-green-500'></div>
        <div className='w-[100px] h-[100px] bg-yellow-500'></div>
        <div className='w-[100px] h-[100px] bg-purple-500'></div>
      </div> 
    </div> 
  )  
}
export default App
   