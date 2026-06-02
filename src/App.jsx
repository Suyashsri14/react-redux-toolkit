import Header from "./Header";
import "./App.css"
import Product from "./Product";
// import {useDispatch} from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartList from "./CartList";

const App = () => {

  //  const dispatch = useDispatch()

  return (
   <>
    <BrowserRouter>
     <Header/>
     <Routes>
     <Route path="/" element= {<Product/>}></Route>
     <Route path="/cart" element= {<CartList/>}></Route>
     </Routes>
    </BrowserRouter>
   </>
  )
}

export default App