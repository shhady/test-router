
import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './components/Home/Home'
import About from './components/About/About'
import Products from './components/Products/Products'
import Header from './components/Header/Header'
import Product from './components/product/Product'
import NotFound from './components/NotFound'
import NewProduct from './components/NewProduct'
function App() {
  
  const counter = 5;
  const name = 'Jameel'
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<Product />}/>
        <Route path="/products/new" element={<NewProduct />}/>
        <Route path="*" element={<NotFound counter={counter} name={name}/>}/>
      </Routes>
    </>
  )
}

export default App
