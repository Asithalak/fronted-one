import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Loginpage from './pages/login'
import HomePage from './pages/home'
import Registerpage from './pages/register'
import AdminPages from './pages/adminPages'
import TestPages from './pages/testPages'
import { Toaster } from 'react-hot-toast'
import AdminProductPage from './pages/admin/adminProductPage'
function App() {
 
 
  return (
    <BrowserRouter>
    <div >
      <Toaster position = 'top-right'/>
      {/* <Header/> */}
      <Routes path="/*">
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login/" element={<Loginpage/>}/>
        <Route path="/admin/*" element={<AdminPages/>}/>
        <Route path="/signup" element={<Registerpage/>}/>
        <Route path="/test" element={<TestPages/>}/>
        <Route path="/admin/product" element={<AdminProductPage/>}/>
        <Route path="/*" element={<h1>404 Not Found</h1>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )  
}
export default App
   