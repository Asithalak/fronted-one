import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import ProductCard from './components/productCard'
import Loginpage from './pages/login'
import HomePage from './pages/home'
import SignUp from './pages/signup'

function App() {
 
 
  return (
    <BrowserRouter>
    <div >
      <Routes path="/*">
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )  
}
export default App
   