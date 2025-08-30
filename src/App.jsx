import './App.css'
import Header from './components/header'
import ProductCard from './components/productCard'

function App() {
 

  return (
    <div className='w-full h-screen bg-red-100 flex flex-col justify-center items-center'> 
    <div className='w-[100px] h-[100px] bg-blue-500'> </div>
    <div className='w-[100px] h-[100px] bg-green-500'></div>
    <div className='w-[100px] h-[100px] bg-yellow-500'></div>
    <div className='w-[100px] h-[100px] bg-purple-500'></div>
    </div>
  )  
}
export default App
   