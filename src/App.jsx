import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Loginpage from './pages/login'
import HomePage from './pages/home'
import SignUp from './pages/signup'
import AdminPages from './pages/adminPages'
import TestPages from './pages/testPages'
function App() {
 
 
  return (
    <BrowserRouter>
    <div >
      {/* <Header/> */}
      <Routes path="/*">
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/admin/*" element={<AdminPages/>}/>
        <Route path="/test" element={<TestPages/>}/>
        <Route path="/*" element={<h1>404 Not Found</h1>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )  
}
export default App
   