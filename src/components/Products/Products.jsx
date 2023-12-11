import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const url = 'https://6291fd299d159855f0839283.mockapi.io'
export default function Products() {

    const [data, setData] = useState([])
    console.log(data);
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await axios.get(url + '/shoes');
              setData(response.data);
            } catch (error) {
              console.error('Error fetching data:', error.message);
            }
        }
        fetchData()
    },[])

    
  return (
    <div>
        <h1>products</h1>
        {data.map(product => (
           <Link to={`/products/${product.id}`} state={{product}}  key={product.id}> <div>{product.name}</div></Link>
        ))}
        <Link to='/products/new'><button>New</button></Link> 
    </div>
  )
}
