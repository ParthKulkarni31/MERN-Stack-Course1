import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Screens/Login"
import Register from "./Screens/Register"
import Item from "./Screens/Item"
import Dashboard from './Screens/Dashboard';
import AuthNavBar from './Components/AuthNavBar';

const App = () => {
  console.log(import.meta.env.VITE_API_URL_BACKEND , "===>")
  
  return (
    <BrowserRouter>
    <div>
      <AuthNavBar/>
      <Routes>
        <Route path='/' element={ <Login/> } />
        <Route path='/register' element={<Register/>} />
        <Route path='/item' element={<Item/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
      </div>
      </BrowserRouter>
  )
}

export default App