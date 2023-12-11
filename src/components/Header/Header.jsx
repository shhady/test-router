import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='Header'>
        <div>
         <Link to="/"> <button>Home</button></Link>  
           <Link to="/products" state={{product:"new Product"}}><button>Products</button></Link> 
           <Link to="/about"><button>About</button></Link> 
        </div>
    </div>
  )
}
